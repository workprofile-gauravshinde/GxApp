import JobForm from "./JobForm";

const JobCreation = () => {
  return (
    <div className="mx-auto w-11/12 max-w-3xl pt-14 ">
      <h1 className="mb-14 text-center text-[42px] font-bold">
        Job Creation Portal
      </h1>
      <div className="pb-20">
        <JobForm />
      </div>
    </div>
  );
};

export default JobCreation;
