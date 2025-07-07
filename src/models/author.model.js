import mongoose from "mongoose";

const authorSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true
    }
})

export const Author = mongoose.model('Autor', authorSchema)