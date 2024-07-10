import express from "express";
import {
  createJobs,
  deleteJobs,
  getJobs,
  getJobsById,
  updateJobs,
} from "../controllers/jobController.js";
import { verifyUser, companyOnly } from "../middleware/authUser.js";

const router = express.Router();

router.get("/Jobs", verifyUser,companyOnly, getJobs);
router.get("/Jobs/:id", verifyUser, companyOnly,getJobsById);
router.post("/Jobs", verifyUser, companyOnly,createJobs);
router.delete("/Jobs/:id", verifyUser, companyOnly,deleteJobs);
router.patch("/Jobs/:id", verifyUser, companyOnly,updateJobs);

export default router;
