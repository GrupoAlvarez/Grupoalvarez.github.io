window.addEventListener("DOMContentLoaded", function() {
  var grid = document.getElementById("grid");
  var player = document.getElementById("player");
  
  // Agregar jugador
  player.style.left = "20px"; // Ubicación inicial en la celda 1
  player.style.top = "20px"; // Ubicación inicial en la celda 1

  // Posición inicial del jugador
  var playerPositionX = 20;
  var playerPositionY = 20;

  // Tamaño de cada celda de la cuadrícula
  var gridSize = 40;

  // Tamaño de la cuadrícula
  var gridWidth = 20;
  var gridHeight = 20;

  // Tamaño del jugador
  var playerSize = 20;

  // Función para mover al jugador
  function movePlayer(event) {
    var key = event.key;

    // Movimiento según la tecla presionada
    switch (key) {
      case "ArrowUp":
        if (playerPositionY > gridSize) {
          playerPositionY -= gridSize;
        }
        break;
      case "ArrowDown":
        if (playerPositionY < (gridHeight - 1) * gridSize) {
          playerPositionY += gridSize;
        }
        break;
      case "ArrowLeft":
        if (playerPositionX > gridSize) {
          playerPositionX -= gridSize;
        }
        break;
      case "ArrowRight":
        if (playerPositionX < (gridWidth - 1) * gridSize) {
          playerPositionX += gridSize;
        }
        break;
    }

    // Actualizar posición del jugador
    player.style.left = playerPositionX + "px";
    player.style.top = playerPositionY + "px";
  }

  // Agregar el evento de escucha para las teclas de flecha
  document.addEventListener("keydown", movePlayer);
  
  
  
  
  
  // Función para mover al jugador en respuesta al toque en una celda
  function movePlayerOnTouch(event) {
    var touch = event.touches[0];
    var target = document.elementFromPoint(touch.clientX, touch.clientY);

    if (!target.classList.contains("cell")) {
      return;
    }

    // Obtener la posición de la celda tocada
    var cellIndex = Array.from(target.parentNode.children).indexOf(target);
    var rowIndex = Array.from(target.parentNode.parentNode.children).indexOf(target.parentNode);

    // Calcular la posición absoluta del jugador en el centro de la celda
    var playerPositionAbsoluteX = cellIndex * gridSize + gridSize / 2 - playerSize / 2;
    var playerPositionAbsoluteY = rowIndex * gridSize + gridSize / 2 - playerSize / 2;

    // Mover al jugador a la posición de la celda tocada
    player.style.left = playerPositionAbsoluteX + "px";
    player.style.top = playerPositionAbsoluteY + "px";

    // Actualizar la posición del jugador
    playerPositionX = playerPositionAbsoluteX;
    playerPositionY = playerPositionAbsoluteY;
  }

  // Agregar evento de escucha para el toque en una celda
  grid.addEventListener("touchstart", movePlayerOnTouch);
  
  
  
  
  
  
  

  // Generar celdas de la cuadrícula
  for (var i = 0; i < 400; i++) {
    var cell = document.createElement("div");
    cell.classList.add("cell");
    cell.innerText = i + 1;
    cell.classList.add("hidden");
    grid.appendChild(cell);

    var row = Math.floor(i / 20);
    var col = i % 20;

    var groupRow = Math.floor(row / 4);
    var groupCol = Math.floor(col / 4);
    var group = groupRow * 5 + groupCol + 1;
    var groupId = "group-" + group;

    cell.classList.add(groupId);
    cell.setAttribute("data-group-id", groupId);

    cell.addEventListener("mouseover", function() {
      this.classList.add("highlight"); // Agrega la clase "highlight" al pasar el cursor
    });

    cell.addEventListener("mouseout", function() {
      this.classList.remove("highlight"); // Remueve la clase "highlight" al quitar el cursor
    });
  }
});
