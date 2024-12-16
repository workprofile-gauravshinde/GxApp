import { useEffect, useState } from "react";
import JobCardEdit from "./JobCardEdit";
import { getAllJobs } from "../service";
import Loader from "./Loader";

const EditJobList = () => {
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
    <div className="mx-auto w-11/12 max-w-6xl pb-40 pt-14 font-body text-white ">
      <div className="text-center">
        <h1 className="text-[42px] font-bold leading-[52px]">Edit Job</h1>
      </div>
      <div className="min-h-[500px] space-y-8 py-10">
        {!jobList ? (
          <div className="mx-auto w-fit py-20">
            <Loader />
          </div>
        ) : jobList?.length === 0 ? (
          <div>
            <h2 className="text-center text-2xl text-white">
              No active jobs found
            </h2>{" "}
          </div>
        ) : (
          jobList?.map((job) => (
            <JobCardEdit
              key={job._id}
              setJobList={setJobList}
              jobList={jobList}
              jobData={job}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default EditJobList;
