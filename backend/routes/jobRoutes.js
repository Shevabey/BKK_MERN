import express from "express";
import {
  createJobs,
  deleteJobs,
  getJobs,
  getJobsById,
  updateJobs,
} from "../controllers/jobController.js";
import { verifyUser, companyOnly, adminOnly } from "../middleware/authUser.js";

const router = express.Router();

router.get("/Jobs", verifyUser, getJobs);
router.get("/Jobs/:id", verifyUser, getJobsById);
router.post("/Jobs", verifyUser, createJobs);
router.delete("/Jobs/:id", verifyUser, deleteJobs);
router.patch("/Jobs/:id", verifyUser, updateJobs);

export default router;
