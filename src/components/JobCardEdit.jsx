import propTypes from "prop-types";
import locationLightIcon from "../assets/location-light.svg";
import timeLightIcon from "../assets/time-circle-light.svg";
import DeleteButton from "./DeleteButon";
import PrimaryButton from "./PrimaryButton";
import editIcon from "../assets/edit-icon.svg";
import deleteIcon from "../assets/delete-icon.svg";
import { Link } from "react-router-dom";
import { deleteJob } from "../service";
import { toast } from "react-hot-toast";
import { toast_styles } from "../utils/constants";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const JobCardEdit = ({ jobData, setJobList, jobList }) => {
  const {
    jobDescription,
    jobTitle,
    jobType,
    minQualification,
    shiftTiming,
    urgentlyHiring,
    yrsOfExp,
    location,
    _id,
    createdAt,
  } = jobData;

  const deleteJobHandler = async (id) => {
    try {
      const confirm = window.confirm(
        "Are you sure you want to delete this job?",
      );
      if (confirm) {
        const res = await deleteJob(id);
        if (res.status === 200) {
          toast.success(res.data.message, {
            duration: 3000,
            style: toast_styles,
          });
          setJobList(jobList.filter((job) => job._id !== _id));
        } else {
          toast.error("There was an error deleting the job", {
            style: toast_styles,
          });
        }
      } else {
        return;
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="w-full bg-[#21222F]">
      <div className="space-y-6 px-[14px] py-5 md:space-y-4 md:p-8">
        <div className="flex flex-col flex-wrap gap-x-10 gap-y-4 md:flex-row md:items-center">
          <h3 className="min-w-fit text-lg font-bold md:text-[28px]">
            {jobTitle}
          </h3>
          <div className="flex gap-4 text-sm text-black ">
            <div className="bg-lightPurple px-4 py-[6px] ">{jobType}</div>
            {urgentlyHiring && (
              <div className="bg-lightPurple px-4 py-[6px]">Urgent hiring</div>
            )}
          </div>
        </div>

        <div className="w-full space-y-5 font-body text-sm md:pb-5 md:text-lg ">
          <p className="whitespace-pre-line font-normal">{jobDescription}</p>

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
        <div className="flex flex-col items-center justify-between gap-4 pb-4 md:flex-row md:pb-0">
          <div className="mr-auto flex gap-8">
            <div className="flex items-center gap-1">
              <img src={locationLightIcon} alt="Worldwide icon" />
              <p>{location}</p>
            </div>
            <div className="flex items-center gap-1.5 md:gap-1">
              <img src={timeLightIcon} alt="Time icon" />
              <p>{dayjs(createdAt).fromNow()}</p>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-4 pt-2 md:w-fit md:grid-cols-2">
            <Link to={`/dashboard/edit/${_id}`} aria-label={"Edit Job"}>
              <PrimaryButton full>
                <div className="flex w-full items-center justify-center gap-2">
                  <img src={editIcon} alt="Edit Job" title="Edit Job" /> Edit
                  Job
                </div>
              </PrimaryButton>
            </Link>
            <DeleteButton onClick={() => deleteJobHandler(_id)}>
              <div className="flex items-center justify-center gap-2">
                <img src={deleteIcon} alt="Delete Job" /> Delete Job
              </div>
            </DeleteButton>
          </div>
        </div>
      </div>
    </div>
  );
};

JobCardEdit.propTypes = {
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
  setJobList: propTypes.func,
  jobList: propTypes.array,
};

export default JobCardEdit;
