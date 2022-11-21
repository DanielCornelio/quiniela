import mongoose from "mongoose";

const pronosticoSchema = mongoose.Schema({
    nombre:{
        type: String,
        required:true
    },
    quiniela_no:{
        type:Number,
        required:true
    },
    pronostico_eq1:{
        type:Number,
        required:true
    },
    pronostico_eq2:{
        type:Number,
        required:true
    },
    partido:{
        type:mongoose.Schema.ObjectId,
        ref:"Partido"
    }
})

const Pronostico = mongoose.model("Pronostico", pronosticoSchema);

export default Pronostico;