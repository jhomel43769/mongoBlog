import { Author } from "../models/author.model.js";

export const createAuthor = async (req, res) => {
    try {
        const {name, email} = req.body;
        
        const existingAuthor = await Author.findOne({email: email})

        if (existingAuthor) {
            return res.status(409).json({error: "El autor que intenta registrar ya existe"})
        }
        
        const newAuthor = await Author.create({
            name,
            email
        })
        
        return res.status(201).json({
            message: "Autor registrado con exito",
            author: newAuthor
        })
    } catch (error) {
        console.error("error al crear un autor\n", error)
        res.status(500).json({error: "internal server error"})
    }
}

export const getAuthors = async (req, res) => {
    try {
        const authors = await Author.find({})

        if (authors.length === 0) {
            return res.status(404).json({error: "No se encuentran autores"})
        }
        
        res.status(200).json({
            message: "Autores obtenidos exitosamente",
            authors: authors
        })
    } catch (error) {
        console.error("Error al obtener los autores", error)
        res.status(500).json({error: "Internal server error"})
    }
}