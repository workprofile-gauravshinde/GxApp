import axios from "axios";
import { API_URL } from "./utils/constants";

export const userEmailService = async (userEmail) => {
  try {
    await axios.post(API_URL + "/api/user-email", {
      email: userEmail,
    });
  } catch (err) {
    throw new Error(err.message);
  }
};

export const jobCreationService = async (formData) => {
  try {
    return await axios.post(API_URL + "/api/job", formData);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getAllJobs = async () => {
  try {
    return await axios.get(API_URL + "/api/job");
  } catch (err) {
    throw new Error(err.message);
  }
};

export const getJobData = async (jobId) => {
  try {
    return await axios.get(API_URL + "/api/job/" + jobId);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const updateJob = async (formData, jobId) => {
  try {
    return await axios.put(API_URL + "/api/job/" + jobId, formData);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const deleteJob = async (jobId) => {
  try {
    return await axios.delete(API_URL + "/api/job/" + jobId);
  } catch (err) {
    throw new Error(err.message);
  }
};

export const sendOTP = async (email) => {
  try {
    return await axios.post(API_URL + "/api/otp/send", { email });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const verifyOTP = async (email, otp) => {
  try {
    return await axios.post(API_URL + "/api/otp/verify", { email, otp });
  } catch (error) {
    throw new Error(error.response.data);
  }
};

// const temp = {
//   jobTitle: "Test title",
//   jobType: "Full time",
//   location: "Noida",
//   yrsOfExp: "1",
//   shiftTiming: "US Shift (Mon- Friday) - 9 AM - 6 PM EST",
//   minQualification: "btech",
//   jobDescription: "random desc",
//   urgentlyHiring: "true",
// };
