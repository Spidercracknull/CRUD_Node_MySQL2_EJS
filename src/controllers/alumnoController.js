import { pool } from "../db.js";

export const renderAlumnos = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM alumnos");
  res.render("alumnos", { alumnos: rows });
};

export const createAlumno = async (req, res) => {
  const newAlumno = req.body;
  await pool.query("INSERT INTO alumnos set ?", [newAlumno]);
  res.redirect("/");
};

export const editAlumno = async (req, res) => {
  const { boleta } = req.params;
  const [result] = await pool.query("SELECT * FROM alumnos WHERE boleta = ?", [
    boleta,
  ]);
  res.render("alumnos_edit", { alumno: result[0] });
};

export const updateAlumno = async (req, res) => {
  const { boleta } = req.params;
  const newAlumno = req.body;
  await pool.query("UPDATE alumnos set ? WHERE boleta = ?", [newAlumno, boleta]);
  res.redirect("/");
};

export const deleteAlumno = async (req, res) => {
  const { boleta } = req.params;
  const result = await pool.query("DELETE FROM alumnos WHERE boleta = ?", [boleta]);
  if (result.affectedRows === 1) {
    res.json({ message: "Alumno deleted" });
  }
  res.redirect("/");
};
