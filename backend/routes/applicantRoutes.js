import express from "express";
import {
  getApplicant,
  getApplicantById,
  createApplicant,
  updateApplicant,
  deleteApplicant,
} from "../controllers/applicantController.js";

const router = express.Router();

router.get("/Applicants", getApplicant);
router.get("/Applicants/:id", getApplicantById);
router.post("/Applicants", createApplicant);
router.patch("/Applicants/:id", deleteApplicant);
router.delete("/Applicants/:id", updateApplicant);

export default router;
