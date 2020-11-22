let talla = "";
let nombre= "";
let apellidos="";
let direccion="";
let email="";

let tallas = {
    "xs": "xs",
    "s": "s",
    "m": "m",
    "l": "l",
    "xl": "xl",
}

function registrarReserva(){
    console.log("ESTO ES UNA PUÑETERA RESERVA");
    talla = document.getElementById("talla").value;
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    direccion = document.getElementById("direccion").value;
    email = document.getElementById("email").value;

    const reserva = {
        "nombre": nombre,
        "apellidos": apellidos,
        "direccion": direccion,
        "email": email,
        "talla": talla
    };

    fetch('/reservas', {
        method:  "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(reserva),
    }).then(function(res){
        return res.json();
    }).then(function(data){
        console.log(data)
    });

};
