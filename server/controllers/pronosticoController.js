import Pronostico from "../models/Pronostico.js";
import Partido from "../models/Partido.js";

const registrarPronostico = async(req, res) => {
    console.log("pronostico")

    try {
        const pronostico = new Pronostico(req.body);
        console.log(pronostico)
        const pronosticoAlmacenado = await pronostico.save();
        const partidoEncontrado = await Partido.findById(pronosticoAlmacenado.partido);
        console.log(partidoEncontrado , 'd')
        await partidoEncontrado.updateOne({$push:{pronosticos:pronosticoAlmacenado._id}})
        
        res.json(pronosticoAlmacenado);
      } catch (error) {
        console.log(error);
      }
}

const listarPronosticos = async(req, res)=>{
    try {
        const pronostico = await Pronostico.find().populate('partido')
        res.json(pronostico);
        console.log(pronostico)
    } catch (error) {
        console.log(error)
    }
}

export {
    registrarPronostico,
    listarPronosticos
}