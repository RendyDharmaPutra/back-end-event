import express, { Request, Response } from "express";
import dummyController from "../controllers/dummy.controllers";
import authController from "../controllers/auth.controller";

const router = express.Router();

// Dummy
router.get("/dummy", dummyController.dummy);

// Auth Group
router.post("/auth/register", authController.register);

export default router;
