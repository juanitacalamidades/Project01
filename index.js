const express = require("express");
const mongodb = require("mongodb");
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const MongoClient = mongodb.MongoClient;
let db;
MongoClient.connect('mongodb+srv://juanita:rodionova23@cluster0.3ahgo.mongodb.net/satanistak?retryWrites=true&w=majority', function (err, client) {
  if (err !== null) {
    console.log(err);
  } else {
    console.log('YUHUUUU')
    db = client.db("satanistak");
  }
});

app.post("/reservas", function(req, res){
    const reserva = req.body;
    console.log(reserva);
/*-find cliente*/
    db.collection("clientes").insertOne(reserva, function (err, datos){
        if(err!==null){
            res.send(err)
        }else{
            res.send(datos);
        }
    });
});

app.put("/cambiardireccion", function(req, res){
  const nombre = req.body.nombre;
  const direccion = {
    direccion: req.body.direccion,
    municipio: req.body.municipio,
  };
  db.collection("clientes").updateOne(
    {nombre: nombre},
    {$set: {direccion: direccion}},
    function(err, datos){
      if(err!==null){
        res.send(err)
      }else{
        res.send(datos);
      }
    }
  )
})

/*
app.put("/cambiartalla", function(req, res){
  const talla = req.body.talla;
  const cliente = { 
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
};
db.collection("reservas").updateOne(
  {nombre: nombre},
  {$set: {talla: talla} },
  function (err, datos){
    if(err!==null){
      res.send(err);
    }else{
      res.send(datos);
    }
  }
);
});*/


app.listen(3000);


