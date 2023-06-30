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

// Mostrar los valores
echo "Nombre: " . $nombre . "<br>";
echo "Nick: " . $nick . "<br>";
echo "Contraseña: " . $contrasena . "<br>";

// Verificamos la conexión a la base de datos
if (isset($_POST['Continuar'])) {
    if (!empty($nombre) && !empty($nick) && !empty($contrasena)) {
        $insertar = "INSERT INTO personajes (nombre, nick, contrasena) VALUES (?, ?, ?)";
        $statement = $conexion->prepare($insertar);
        $statement->bind_param("sss", $nombre, $nick, $contrasena);

        if ($statement->execute()) {
            echo '<script>alert("Registro exitoso.");</script>';
            echo '<script>window.location.href = "iniciorol.php";</script>';
            // Guardamos el valor en una variable de sesión
            session_start();
            $_SESSION['nick'] = $nick;
            exit();
        } else {
            echo "Error al registrar el personaje: " . $statement->error;
        }
    } else {
        echo "Los campos nombre, nick y contraseña no pueden estar vacíos.";
    }
}

// Verificamos el inicio de sesión
if (isset($_POST['IniciarSesion'])) {
    $consulta = "SELECT * FROM personajes WHERE nick = ? AND contrasena = ?";
    $statement = $conexion->prepare($consulta);
    $statement->bind_param("ss", $nick, $contrasena);
    $statement->execute();
    $resultado = $statement->get_result();

    if ($resultado->num_rows > 0) {
        echo '<script>alert("Inicio de sesión exitoso.");</script>';
        echo '<script>window.location.href = "iniciorol.php";</script>';
        // Guardamos el valor en una variable de sesión
        session_start();
        $_SESSION['nick'] = $nick;
        exit();
    } else {
        echo '<script>alert("Credenciales incorrectas. Por favor, regístrese.");</script>';
        echo '<script>window.location.href = "index.html";</script>';
        exit();
    }
}

$conexion->close();
?>
