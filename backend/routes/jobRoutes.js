import express from "express";
import {
  createJobs,
  deleteJobs,
  getJobs,
  getJobsById,
  updateJobs,
} from "../controllers/jobController.js";
import { verifyUser, adminOnly, companyOnly } from "../middleware/authUser.js";

const router = express.Router();

router.get("/Jobs", verifyUser, getJobs);
router.get("/Jobs/:id", verifyUser, getJobsById);
router.post("/Jobs", verifyUser, createJobs);
router.patch("/Jobs/:id", verifyUser, deleteJobs);
router.delete("/Jobs/:id", verifyUser, updateJobs);

export default router;
