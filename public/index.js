let talla = "";

let tallas = {
    xs: xs,
    s: s,
    m: m,
    l: l,
    xl: xl,
}

function registrarReserva(){
    talla = document.getElementById("select").value
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const direccion = document.getElementById("direccion").value;
    const email = document.getElementById("email").value;



    const reserva = {
        nombre,
        apellidos,
        direccion,
        email,
        tallas,
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


