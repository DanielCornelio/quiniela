import mongoose from "mongoose";

const partidoSchema = mongoose.Schema({
    fecha:{
        type:String,
        required:true
    },
    hora:{
        type:String,
        required:true
    },
    jornada:{
        type:String,
        required:true
    },
    nombre_eq1:{
        type:String,
        required:true
    },
    marcador_eq1:{
        type:Number
    },
    nombre_eq2:{
        type:String,
        required:true
    },
    marcador_eq2:{
        type:Number
    },
    pronosticos:{
        type:[mongoose.Schema.ObjectId],
        ref:"Pronostico"
    }
},{
    timestamps:true
})

const Partido = mongoose.model("Partido", partidoSchema);

export default Partido;