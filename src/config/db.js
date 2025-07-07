import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/?authSource=blogApp')
        console.log('base de datos conectada con exito')
    } catch (error) {
        console.error("error al contectar con la base de datos", error)
    }
}