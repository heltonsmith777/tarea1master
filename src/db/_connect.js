const mongoose = require('mongoose');

function _connect(){
    //const MONGO_HOST = "localhost";
    const MONGO_HOST = "mongo";
    const MONGO_DB = "todo_db";
    const URI = `mongodb://${MONGO_HOST}/${MONGO_DB}`;
    mongoose.set('strictQuery', true);
    mongoose.connect(URI, { useUnifiedTopology: true, family: 4}).
    then(
        () => {
            console.log('Conexión a la BD lista para usar');
        },
        (err) => {
            console.log(`Error de conexión ${err}`);
        }
    )
}

module.exports = _connect; 
