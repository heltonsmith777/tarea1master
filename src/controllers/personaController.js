const persona = require("../models/persona");

module.exports.crearPersona = function(req, res){
   if(!req.body.dni) return res.status(200).send({ success: false, error: 'Falta indicar DNI' });

   try {
      persona.create(req.body).then(() => {
          res.status(200).send({ success: true, error: 'Persona creada correctamente' });
      }).catch(error => res.status(200).send({ success: true, error: error.message }));
      
   } catch (error) {
      res.status(500).send({ success: false, error: error.message})
   }
}

module.exports.obtenerPersonas = function(req, res){ 
   try {

      persona.find({}).then((data) => {
          res.status(200).send({ success: true, data: data });
      }).catch(error => res.status(200).send({ success: true, error: error.message }));
     
   } catch (error) {
      res.status(500).send({ success: false, error: error.message})
   }
}

module.exports.actualizarPersona = function(req, res){
   if(!req.body.dni) return res.status(200).send({ success: false, error: 'Falta indicar DNI' });

   try {
      persona.findOneAndUpdate(req.body).then(() => {
          res.status(200).send({ success: true, error: 'Persona actualizada correctamente' });
      }).catch(error => res.status(200).send({ success: true, error: error.message }));
      
   } catch (error) {
      res.status(500).send({ success: false, error: error.message})
   }
}

module.exports.borrarPersona = function(req, res){
   if(!req.body.dni) return res.status(200).send({ success: false, error: 'Falta indicar DNI' });

   try {
      persona.remove(req.body).then(() => {
          res.status(200).send({ success: true, error: 'Persona borrada correctamente' });
      }).catch(error => res.status(200).send({ success: true, error: error.message }));
      
   } catch (error) {
      res.status(500).send({ success: false, error: error.message})
   }
}

 
 
