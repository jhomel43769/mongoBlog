import mongoose from "mongoose";

const articlesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Autor',
        required
    }
})

export const Articles = mongoose.model('Aricles', articlesSchema)

