import Partido from "../models/Partido.js";

const registrar = async (req, res) => {
  //evitar registros duplicados
  const { jornada, nombre_eq1, nombre_eq2 } = req.body;
  const existePartido = await Partido.findOne({ jornada,nombre_eq1,nombre_eq2 });
  if (existePartido) {
    const error = new Error("Partido ya registrado");
    return res.status(400).json({ msg: error.message });
  }  
  try {
    const partido = new Partido(req.body);
    const partidoAlmacenado = await partido.save();
    res.json(partidoAlmacenado);
  } catch (error) {
    console.log(error);
  }
};

const updatePartido = async (req, res) => {
  try {
    const {id} = req.params;
    console.log(req.params)
    const partidoEncontrado = await Partido.findById(id);
    if(!partidoEncontrado){
        const error = new Error("Partido No encontrado");
        return res.status(400).json({ msg: error.message });
    }
    await partidoEncontrado.updateOne(req.body)
    return res.status(201).json({msg:"Guardado con Exito"})   
  } catch (error) {
    
  }
};

export { registrar, updatePartido };
