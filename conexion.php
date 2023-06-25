<?php
$server = "localhost";
$user = "root";
$pass = "localhost2023";
$db = "juegoderol";

$conexion = new mysqli($server, $user, $pass, $db);

if ($conexion->connect_errno) {
    die("conexion fallida" . $conexion->connect_errno);
} else {
    echo "PERFECTIRIJILLO";
}

$nombre = isset($_POST['nombre']) ? $_POST['nombre'] : '';
$nick = isset($_POST['nick']) ? $_POST['nick'] : '';
$contrasena = isset($_POST['contrasena']) ? $_POST['contrasena'] : '';

// Verificamos la conexión a la base de datos
if (isset($_POST['Continuar'])) {
    $insertar = "INSERT INTO personajes (nombre, nick, contrasena) VALUES ('$nombre', '$nick', '$contrasena')";
    $sql = mysqli_query($conexion, $insertar);

    if ($sql) {
        echo '<script>alert("Registro exitoso.");</script>';
        echo '<script>window.location.href = "iniciorol.html";</script>';
        exit();
    } else {
        echo "Error al registrar el personaje: " . mysqli_error($conexion);
    }
}

// Verificamos el inicio de sesión
if (isset($_POST['IniciarSesion'])) {
    $consulta = "SELECT * FROM personajes WHERE nick = '$nick' AND contrasena = '$contrasena'";
    $resultado = mysqli_query($conexion, $consulta);

    if (mysqli_num_rows($resultado) > 0) {
        echo '<script>alert("Inicio de sesión exitoso.");</script>';
        echo '<script>window.location.href = "iniciorol.html";</script>';
        exit();
    } else {
        echo '<script>alert("Credenciales incorrectas. Por favor, regístrese.");</script>';
        echo '<script>window.location.href = "index.html";</script>';
        exit();
    }
}

$conexion->close();
?>
