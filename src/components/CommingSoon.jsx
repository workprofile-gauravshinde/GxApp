import iphoneDark from "../assets/phone-dark.png";
import iphoneLight from "../assets/phone-light.png";
import phoneSmall from "../assets/phone-small.png";
import { useState } from "react";
import { userEmailService } from "../service";
import { toast } from "react-hot-toast";
import { toast_styles } from "../utils/constants";
import twitterIcon from "../assets/twitter-icon.svg";
import fbIcon from "../assets/fb-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";

const Home = () => {
  const [userEmail, setUserEmail] = useState("");

  const emailSubmitHandler = (e) => {
    e.preventDefault();
    if (userEmail == "") return;
    userEmailService(userEmail);
    toast.success("Email saved successfully!", {
      duration: 2500,
      style: toast_styles,
    });
    setUserEmail("");
  };

  return (
    <>
      <div className="mx-auto w-11/12 max-w-screen-3xl pt-4 md:pt-10">
        <div className="flex flex-col-reverse items-center justify-between md:flex-row">
          <div className="w-full space-y-8 text-white md:w-[40%]">
            <h1 className="text-center font-display text-[32px] uppercase leading-relaxed md:text-left md:text-[64px] md:leading-none">
              We&apos;re <span className="text-purple-400">coming soon!</span>
            </h1>
            <p className="mx-auto w-[80%] text-center font-body text-sm leading-6 text-[#FFFFFF] opacity-80 md:w-full md:text-left md:text-xl">
              GX is a real-time sports trading app that allows users to buy and
              sell shares in athletes.
            </p>
            <form
              onSubmit={emailSubmitHandler}
              className="relative flex w-full flex-col items-center md:flex-row xl:w-[80%]"
            >
              <input
                className="w-full flex-grow rounded-none bg-white px-4 py-2 text-black lg:rounded-bl-sm lg:rounded-tl-sm"
                type="email"
                value={userEmail}
                required
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Your email address"
              />
              <button className="w-full whitespace-nowrap bg-neonYellow px-10 py-2 text-base font-semibold text-black md:w-fit md:flex-grow-0 lg:rounded-br-sm lg:rounded-tr-sm">
                Alert Me
              </button>
            </form>
          </div>
          <div className="hidden w-full pb-8 md:relative md:flex md:w-[50%] md:pb-0">
            <div className="w-fit">
              <img
                width={320}
                height={650}
                className="max-w-full"
                src={iphoneDark}
                alt="GX App"
              />
            </div>
            <div className="absolute right-0 top-0 max-w-full md:top-[195px] ">
              <img
                width={320}
                height={650}
                src={iphoneLight}
                className="max-w-full"
                alt="GX App"
              />
            </div>
          </div>
          <div className="block min-h-[300px] w-full max-w-sm pb-8 md:hidden">
            <img src={phoneSmall} alt="GX Mobile app" />
          </div>
        </div>
      </div>
      <div className="mx-auto w-fit max-w-screen-3xl pb-8 pt-20 md:w-11/12">
        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/SportsGamex?mibextid=LQQJ4d"
            rel="noopener noreferrer"
            target="_blank"
            className="mx-auto w-fit cursor-pointer md:mx-0"
          >
            <img src={fbIcon} alt="facebook icon" />
          </a>
          <a
            href="https://twitter.com/SportsGameX"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto w-fit cursor-pointer md:mx-0"
          >
            <img src={twitterIcon} alt="twitter icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/94191108"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto w-fit cursor-pointer md:mx-0"
          >
            <img src={linkedinIcon} alt="linkedin icon" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
