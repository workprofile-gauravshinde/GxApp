import { useEffect, useState } from "react";
import downArrowIcon from "../assets/down-arrow.svg";
import Footer from "./../components/Footer";
import JobCard from "./../components/JobCard";
import { getAllJobs } from "./../service";
import Loader from "./../components/Loader";

const Careers = () => {
  const [jobList, setJobList] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await getAllJobs();
      if (res.status === 200) {
        setJobList(res.data);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="mx-auto w-11/12 max-w-6xl font-body text-white md:pt-20">
      <div className="flex items-center gap-4">
        <div className="h-px w-6 border border-white bg-white"></div>
        <p className="text-sm md:text-base ">We&apos;re hiring!</p>
      </div>
      <div className="pt-5">
        <h2 className="text-xl font-bold md:text-[42px]">
          Current Job Openings
        </h2>
      </div>
      <div className="min-h-[500px] space-y-8 py-8 md:py-10">
        {!jobList ? (
          <div className="mx-auto w-fit py-20">
            <Loader />
          </div>
        ) : jobList?.length === 0 ? (
          <div>
            <h2 className="text-center text-2xl text-white">
              No active jobs right now
            </h2>{" "}
          </div>
        ) : (
          jobList?.map((job) => <JobCard key={job._id} jobData={job} />)
        )}
      </div>
      <div className="pb-8 md:py-16 ">
        <div className="ml-auto flex w-fit cursor-pointer items-center gap-3 font-spaceGrotesk text-white">
          <p className="whitespace-nowrap text-sm font-bold md:text-base">
            View More
          </p>
          <div className="w-16 md:w-full">
            <img
              // className="max-w-full"
              src={downArrowIcon}
              alt="View more"
              width={"94"}
              height={"92"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
