import { createAuthor, getAuthors } from "../controllers/author.controller.js";
import express from "express";

export const authorRoute = express.Router();

// Crear un nuevo autor
authorRoute.post('/authors', createAuthor);

// Obtener todos los autores
authorRoute.get('/authors', getAuthors);