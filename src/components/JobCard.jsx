import { useState } from "react";
import propTypes from "prop-types";
import locationLightIcon from "../assets/location-light.svg";
import timeLightIcon from "../assets/time-circle-light.svg";
import PrimaryButton from "./PrimaryButton";
import Modal from "./Modal";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const JobCard = ({ jobData }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    setShowModal(false);
    // Unsets Background Scrolling to use when SideDrawer/Modal is closed
    document.body.style.overflow = "unset";
  };

  const {
    jobDescription,
    jobTitle,
    jobType,
    minQualification,
    shiftTiming,
    urgentlyHiring,
    yrsOfExp,
    location,
    createdAt,
  } = jobData;

  return (
    <>
      <div className="w-full bg-[#21222F]">
        <div className="space-y-6  py-5 md:space-y-4 md:p-8">
          <div className="flex  w-full items-center justify-between gap-4 px-[14px]">
            <div className="flex flex-col flex-wrap gap-x-10 gap-y-4 md:flex-row md:items-center">
              <p className="min-w-fit text-lg font-bold md:text-[28px]">
                {jobTitle}
              </p>
              <div className="flex gap-4 text-sm text-black ">
                <div className="whitespace-nowrap bg-lightPurple px-4 py-[6px]">
                  {jobType}
                </div>
                {urgentlyHiring && (
                  <div className="whitespace-nowrap bg-lightPurple px-4 py-[6px]">
                    Urgent hiring
                  </div>
                )}
              </div>
            </div>
            <div className="hidden justify-self-end md:block">
              <PrimaryButton onClick={openModal}>Apply Now</PrimaryButton>
            </div>
          </div>

          <div className="w-full space-y-5 px-[14px] text-sm  md:w-4/5 md:pb-5 md:text-lg">
            <div className="whitespace-pre-line font-body font-normal md:text-lg">
              {jobDescription}
            </div>

            <p className="font-bold">
              Minimum years of Exp:{" "}
              <span className="font-normal">{yrsOfExp} years</span>
            </p>

            <p className="font-bold">
              Shift timing: <span className="font-normal">{shiftTiming}</span>
            </p>

            <p className="font-bold">
              Minimum Qualification:{" "}
              <span className="font-normal">{minQualification}</span>
            </p>
          </div>

          <div className="h-px w-full rounded-sm bg-[#C7C7D7]"></div>
          <div className="flex gap-3 px-[14px] text-sm md:gap-8 md:pt-4 md:text-base">
            <div className="flex items-center gap-1.5 md:gap-1 ">
              <img src={locationLightIcon} alt="Worldwide icon" />
              <p>{location}</p>
            </div>
            <div className="flex items-center gap-1.5 md:gap-1">
              <img src={timeLightIcon} alt="Time icon" />
              <p>{dayjs(createdAt).fromNow()}</p>
            </div>
          </div>
          <div className="block w-full px-[14px] md:hidden">
            <PrimaryButton full onClick={() => setShowModal(true)}>
              Apply Now
            </PrimaryButton>
          </div>
        </div>
      </div>
      <Modal show={showModal} onClose={closeModal} />
    </>
  );
};

JobCard.propTypes = {
  jobData: propTypes.shape({
    jobDescription: propTypes.string,
    jobTitle: propTypes.string,
    jobType: propTypes.string,
    minQualification: propTypes.string,
    shiftTiming: propTypes.string,
    urgentlyHiring: propTypes.bool,
    yrsOfExp: propTypes.string,
    location: propTypes.string,
    _id: propTypes.string,
    createdAt: propTypes.string,
  }),
};

export default JobCard;
