import JobFormEdit from "./JobFormEdit";

const EditJob = () => {
  return (
    <div className="mx-auto w-11/12 max-w-3xl pt-14 ">
      <h1 className="mb-14 text-center text-[42px] font-bold">Edit Job</h1>
      <div className="pb-20">
        <JobFormEdit />
      </div>
    </div>
  );
};

export default EditJob;
