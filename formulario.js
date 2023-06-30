function mostrarFormulario(formulario) {
  // Obtener referencia a los elementos del formulario
  var registroForm = document.getElementById('registro-form');
  var inicioForm = document.getElementById('inicio-form');

  // Mostrar el formulario correspondiente según el parámetro recibido
  if (formulario === 'registro-form') {
    registroForm.style.display = 'block'; // Mostrar formulario de registro
    inicioForm.style.display = 'none'; // Ocultar formulario de inicio de sesión
  } else if (formulario === 'inicio-form') {
    registroForm.style.display = 'none'; // Ocultar formulario de registro
    inicioForm.style.display = 'block'; // Mostrar formulario de inicio de sesión
  }
}

function redirigirPaginaInicio() {
  window.location.href = 'index.html';
}

function redirigirPaginaCorrecto() {
  window.location.href = 'iniciorol.php';
}

// Limpiar los campos de escritura al cargar la página
window.addEventListener('load', function() {
  var nombreInput = document.getElementById('nombre');
  var nickInput = document.getElementById('nick');
  var contrasenaInput = document.getElementById('contrasena');

  nombreInput.value = '';
  nickInput.value = '';
  contrasenaInput.value = '';
});

// Evitar el envío del formulario al cambiar entre formularios
var cambioFormularios = document.getElementById('cambio-formularios-registro');
cambioFormularios.addEventListener('click', function(event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del botón
});

// Evitar el envío del formulario al cambiar entre formularios
var cambioFormularios = document.getElementById('cambio-formularios-inicio');
cambioFormularios.addEventListener('click', function(event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del botón
});