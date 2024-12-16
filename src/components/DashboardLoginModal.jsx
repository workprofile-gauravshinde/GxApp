import { createPortal } from "react-dom";
import propTypes from "prop-types";
import PrimaryButton from "./PrimaryButton";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { toast_styles, validEmails } from "../utils/constants";
import { sendOTP, verifyOTP } from "../service";
import { setWithExpiry } from "../utils/localStorageWithExpiry";

const DashboardLoginModal = ({ show, onVerify }) => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const submitEmail = async (e) => {
    e.preventDefault();
    const trimmedEmail = email.trim().toLowerCase();

    if (!(trimmedEmail === null || trimmedEmail === "")) {
      if (validEmails.findIndex((val) => val == trimmedEmail) === -1) {
        toast.error("Your email is not authorised", { style: toast_styles });
        setEmail("");
        return;
      }

      toast.promise(
        sendOTP(trimmedEmail),
        {
          loading: "Sending OTP...",
          success: () => {
            setIsOtpSent(true);
            return "OTP sent successfully";
          },
          error: () => {
            setEmail("");
            return "There was an issue in sending OTP, please try again.";
          },
        },
        {
          style: toast_styles,
        },
      );
    } else {
      toast.error("Email can't be empty", { style: toast_styles });
    }
  };

  const submitOtp = async (e) => {
    e.preventDefault();

    if (otp === null || otp === "" || otp.length !== 4) {
      return toast.error("Invalid OTP", { style: toast_styles });
    }

    // otp is valid
    toast.promise(
      verifyOTP(email, otp),
      {
        loading: "Please wait...",
        success: () => {
          setWithExpiry("user", email);
          setOtp("");
          setEmail("");
          onVerify();
          return "OTP verified successfully";
        },
        error: (err) => {
          setOtp("");
          return `${err.toString()}`;
        },
      },
      {
        style: toast_styles,
      },
    );
  };

  if (!show) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black/90">
      <div className="relative m-4 w-full max-w-lg bg-secondaryBg font-body text-white md:w-4/5">
        <div className="w-full space-y-8 p-4 font-body  text-white md:p-8">
          <h2 className="text-center text-3xl font-bold">Login to Dashboard</h2>
          {!isOtpSent ? (
            <form
              onSubmit={submitEmail}
              className="flex flex-wrap items-center  gap-6"
            >
              <p className="text-xl">Enter your Email:</p>
              <input
                className="max-w-xs flex-grow rounded px-4 py-2 font-semibold text-black"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="w-full text-center">
                <PrimaryButton submit>Send OTP</PrimaryButton>
              </div>
            </form>
          ) : (
            <form
              onSubmit={submitOtp}
              className="flex flex-wrap items-center  gap-6"
            >
              <p className="text-xl">Enter OTP:</p>
              <input
                className="max-w-xs flex-grow rounded px-4 py-2 font-semibold text-black"
                type="number"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <div className="w-full text-center">
                <PrimaryButton submit>Verify OTP</PrimaryButton>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
};

DashboardLoginModal.propTypes = {
  show: propTypes.bool,
  onVerify: propTypes.func,
};

export default DashboardLoginModal;
