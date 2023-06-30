<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Juego Rolero de la PTM</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <!-- Contenedor de la cuadrícula -->
  <div id="grid" class="grid"></div>
  
  <!-- Contenedor del personaje -->
  <div id="player"></div>

  <!-- Contenedor datos del jugador -->
  <div class="info-box" id="infoBox">
    <div class="inner-box" id="innerBox">
    <?php
      session_start();
      $nick = isset($_SESSION['nick']) ? $_SESSION['nick'] : '';
      // Aquí puedes mostrar el valor del nick 
echo $nick;
    ?>
    </div>
    <div class="inner-box-second" id="innerBoxSecond"></div>
    <div class="inner-box-tercero" id="innerBoxTercero"></div>
  </div>

  <div class="info-box2" id="infoBox2">
    <div class="inner-box2" id="innerBox2"></div>
    <div class="inner-box-second2" id="innerBox3"></div>
    <div class="inner-box-tercero2" id="innerBox4"></div>
  </div>

  <div id="popup" class="popup">
    <div class="popup-content">
      <h3>¡Decide tu Futuro!</h3>
      <p>Piensa muy bien lo que vas a hacer.</p>
      <button id="btnvolver">Volver</button>
      <button id="btnpelear">Pelear</button>
      <button id="btndescanzar">Descansar</button>
      <button id="btnClosePopup">Cerrar</button>
    </div>
  </div>  
  
  <!-- Contenido del juego -->
  <script src="jquery-3.7.0.min.js"></script>
  <script src="script.js"></script>
  
</body>
</html>
