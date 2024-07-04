import Job from "../models/job.js";
import User from "../models/user.js";

export const getJobs = async (req, res) => {
  try {
    let response;
    if (req.role == "admin") {
      response = await Job.findAll({
        include: [
          {
            model: User,
          },
        ],
      });
    } else {
      response = await Job.findAll({
        where: {
          userId: req.userId,
        },
        include: [
          {
            model: User,
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const createJobs = async (req, res) => {
  const { title, description, requirements, contactInfo } = req.body;
  try {
    await Job.create({
      title: title,
      description: description,
      requirements: requirements,
      contactInfo: contactInfo,
      userId: req.userId,
    });
    res.status(201).json({ msg: "Vacancy Created Succesfuly" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getJobsById = async (req, res) => {};
export const updateJobs = async (req, res) => {};
export const deleteJobs = async (req, res) => {};
