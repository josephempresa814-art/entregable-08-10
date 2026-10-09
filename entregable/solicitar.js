const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const dni = document.querySelector("#dni");
const celular = document.querySelector("#celular");
const correo = document.querySelector("#correo");

formulario.addEventListener("submit", enviarSolicitud);

function enviarSolicitud(event) {
	event.preventDefault(); 

	const carreraElegida = document.querySelector('input[name="programa"]:checked');
	const turnoElegido = document.querySelector('input[name="turno"]:checked');
	
	document.querySelector("#avisoFormulario").textContent = "";


	const carrera = carreraElegida.value;                 
	const turno = turnoElegido.value;                     
	const horario = turnoElegido.dataset.horario;         


	console.log("Carrera elegida: " + carrera);
	console.log("Turno elegido: " + turno + " (" + horario + ")");

	const datos = {
		nombre: nombre.value,
		dni: dni.value,
		celular: celular.value,
		correo: correo.value,
		carrera: carrera,
		turno: turno,
		horario: horario
	};

	const datosMemoria = JSON.parse(localStorage.getItem("datos") || "[]");
	datosMemoria.push(datos);
	localStorage.setItem("datos", JSON.stringify(datosMemoria));

	console.log("Solicitud guardada:", datos);
}
