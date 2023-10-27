import { Router } from "express";
import {
  createAlumno,
  deleteAlumno,
  editAlumno,
  renderAlumnos,
  updateAlumno,
} from "../controllers/alumnoController.js";
const router = Router();

router.get("/", renderAlumnos);
router.post("/add", createAlumno);
router.get("/update/:boleta", editAlumno);
router.post("/update/:boleta", updateAlumno);
router.get("/delete/:boleta", deleteAlumno);

export default router;
