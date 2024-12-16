import { useForm } from "react-hook-form";
import { getJobData, updateJob } from "../service";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { formDefaultValues, toast_styles } from "../utils/constants";
import PrimaryButton from "./PrimaryButton";

export default function JobFormEdit() {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: formDefaultValues,
  });
  const onSubmit = async (data) => {
    const res = await updateJob(data, jobId);

    if (res.status == 204 || res.status === 200) {
      toast.success(res.data.message || "Updated successfully", {
        duration: 3000,
        style: toast_styles,
      });
      setTimeout(() => {
        navigate("/dashboard/edit");
      }, 700);
    } else {
      toast.error("There seems to be an issue. Try again later");
    }
  };

  useEffect(() => {
    const fetchJobData = async (jobId) => {
      const res = await getJobData(jobId);

      if (res.status === 200) {
        const jobData = res.data;
        let updatedJobData;
        if (jobData.urgentlyHiring) {
          updatedJobData = { ...jobData, urgentlyHiring: "true" };
        } else {
          updatedJobData = { ...jobData, urgentlyHiring: "false" };
        }
        reset(updatedJobData);
      }
    };

    fetchJobData(jobId);
  }, [reset, jobId]);

  return (
    <form
      className="w-full space-y-8 bg-transparent text-base"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label className="mb-3 block text-base">Job Title*</label>
        <input
          className="w-full rounded-lg border border-white bg-transparent px-8 py-4 text-sm placeholder:text-[#696F79]"
          type="text"
          placeholder="Enter Job Title"
          {...register("jobTitle", { required: true })}
        />
        {errors.jobTitle && (
          <p className="pt-2 text-red-600">⚠ Job Title can&apos;t be empty</p>
        )}
      </div>
      <div>
        <label className="mb-3 block text-base">Job Type*</label>

        <select
          {...register("jobType", { required: true })}
          className="w-full appearance-none rounded-lg border border-white bg-transparent bg-[url('/down-arrow.svg')] bg-right bg-no-repeat px-8 py-4 text-sm placeholder:text-[#696F79]"
        >
          <option
            defaultChecked
            className="bg-black active:bg-darkPurple"
            value=""
          >
            Select job type
          </option>
          <option className="bg-black" value="Full time">
            Full time
          </option>
          <option className="bg-black" value="Part time">
            Part time
          </option>
          <option className="bg-black" value="Internship">
            Internship
          </option>
        </select>
        {errors.jobType && (
          <p className="pt-2 text-red-600">⚠ Please select Job type</p>
        )}
      </div>
      <div>
        <label className="mb-3 block text-base">Location*</label>

        <select
          className="w-full appearance-none rounded-lg border border-white bg-transparent bg-[url('/down-arrow.svg')] bg-right bg-no-repeat px-8 py-4 text-sm placeholder:text-[#696F79]"
          {...register("location", { required: true })}
        >
          <option defaultChecked className="bg-black" value="">
            Select location
          </option>
          <option className="bg-black" value="Remote">
            Remote
          </option>
          <option className="bg-black" value="On-site">
            On-site
          </option>
        </select>
        {errors.location && (
          <p className="pt-2 text-red-600">⚠ Please select location</p>
        )}
      </div>

      <div>
        <label className="mb-3 block text-base">
          Years of experience required*
        </label>

        <select
          className="w-full appearance-none rounded-lg border border-white bg-transparent bg-[url('/down-arrow.svg')] bg-right bg-no-repeat px-8 py-4 text-sm placeholder:text-[#696F79]"
          {...register("yrsOfExp", { required: true })}
        >
          <option defaultChecked className="bg-black" value="">
            Select years of experience
          </option>
          <option className="bg-black" value="1-2">
            1-2
          </option>
          <option className="bg-black" value="2-3">
            2-3
          </option>
          <option className="bg-black" value="3-4">
            3-4
          </option>
          <option className="bg-black" value="4-5">
            4-5
          </option>
          <option className="bg-black" value="5-6">
            5-6
          </option>
          <option className="bg-black" value="6-7">
            6-7
          </option>
          <option className="bg-black" value="7-8">
            7-8
          </option>
          <option className="bg-black" value="8-9">
            8-9
          </option>
          <option className="bg-black" value="9+">
            9+
          </option>
        </select>
        {errors.yrsOfExp && (
          <p className="pt-2 text-red-600">
            ⚠ Please select years of experience
          </p>
        )}
      </div>
      <div>
        <label className="mb-3 block text-base">Shift Timing*</label>

        <select
          className="w-full appearance-none rounded-lg border border-white bg-transparent bg-[url('/down-arrow.svg')] bg-right bg-no-repeat px-8 py-4 text-sm placeholder:text-[#696F79]"
          {...register("shiftTiming", { required: true })}
        >
          <option defaultChecked className="bg-black" value="">
            Select shift timing
          </option>
          <option
            className="bg-black"
            value="US Shift (Mon- Friday) - 9 AM - 6 PM EST"
          >
            US Shift (Mon- Friday) - 9 AM - 6 PM EST
          </option>
        </select>
        {errors.shiftTiming && (
          <p className="pt-2 text-red-600">⚠ Please select shift timing</p>
        )}
      </div>
      <div>
        <label className="mb-3 block text-base">Minimum Qualifications*</label>

        <input
          className="w-full rounded-lg border border-white bg-transparent px-8 py-4 text-sm placeholder:text-[#696F79]"
          type="text"
          placeholder="Enter Minimum Qualification"
          {...register("minQualification", { required: true })}
        />
        {errors.minQualification && (
          <p className="pt-2 text-red-600">
            ⚠ Mininum qualification can&apos;t be empty
          </p>
        )}
      </div>
      <div>
        <label className="mb-3 block text-base">Job Description*</label>
        <textarea
          placeholder="Enter job description"
          className="h-32 w-full rounded-lg border border-white bg-transparent px-8 py-4 text-sm placeholder:text-[#696F79]"
          {...register("jobDescription", { required: true })}
        />
        {errors.jobDescription && (
          <p className="pt-2 text-red-600">
            ⚠ Job description can&apos;t be empty
          </p>
        )}
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label className="mb-3 block text-base">Urgently Hiring?</label>
          <div className="flex gap-8">
            <div className="space-x-2">
              <input
                {...register("urgentlyHiring", { required: true })}
                type="radio"
                value={true}
              />
              <label>Yes</label>
            </div>
            <div className="space-x-2">
              <input
                {...register("urgentlyHiring", { required: true })}
                type="radio"
                value={false}
              />
              <label>No</label>
            </div>
          </div>
        </div>
        {errors.urgentlyHiring && (
          <p className=" text-red-600">⚠ Please select at least one option</p>
        )}
      </div>

      <PrimaryButton submit full>
        Update Job
      </PrimaryButton>
    </form>
  );
}
