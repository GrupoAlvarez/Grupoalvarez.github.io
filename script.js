window.addEventListener("DOMContentLoaded", function() {
  var grid = document.getElementById("grid");
  var player = document.getElementById("player");
  var infoBox = document.getElementById("infoBox");
  var innerBox = document.getElementById("innerBox");
  var innerBoxSecond = document.getElementById("innerBoxSecond");
  var innerBoxTercero = document.getElementById("innerBoxTercero");
  var popup = document.getElementById("popup");
  var btnClosePopup = document.getElementById("btnClosePopup");

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

  // Nombres de los grupos
  var groupNames = [
    "Camelot",
    "Avalon",
    "Tintagel",
    "Glastonbury",
    "Lyonesse",
    "Winchester",
    "Londres",
    "Carlisle",
    "Caerleon",
    "Joya del Río",
    "Corbenic",
    "Alnwick",
    "Orkney",
    "Montaña Blanca",
    "Isla de San Brandán",
    "Brocéliande",
    "Caerwent",
    "Montañas de Cumberland",
    "Silchester",
    "Colina de Berwyn",
    "Abbadon",
    "Isla de Glass",
    "Orkeny",
    "Ascalón",
    "Carduel"
  ];

  // Obtener el número de la celda actual
  function getCurrentCellNumber() {
    var currentCell = Math.floor(playerPositionY / gridSize) * gridWidth + Math.floor(playerPositionX / gridSize) + 1;
    return currentCell;
  }

  // Obtener el número de grupo correspondiente a la celda actual
  function getCurrentGroupNumber() {
    var currentCell = getCurrentCellNumber();
    var group = null;

    // Asignar el número de grupo basado en las celdas que componen cada grupo
    if ([1, 2, 3, 4, 21, 22, 23, 24, 41, 42, 43, 44, 61, 62, 63, 64].includes(currentCell)) {
      group = 1;
    } else if ([5, 6, 7, 8, 25, 26, 27, 28, 45, 46, 47, 48, 65, 66, 67, 68].includes(currentCell)) {
      group = 2;
    } else if ([9, 10, 11, 12, 29, 30, 31, 32, 49, 50, 51, 52, 69, 70, 71, 72].includes(currentCell)) {
      group = 3;
    } else if ([13, 14, 15, 16, 33, 34, 35, 36, 53, 54, 55, 56, 73, 74, 75, 76].includes(currentCell)) {
      group = 4;
    } else if ([17, 18, 19, 20, 37, 38, 39, 40, 57, 58, 59, 60, 77, 78, 79, 80].includes(currentCell)) {
      group = 5;
    } else if ([81, 82, 83, 84, 101, 102, 103, 104, 121, 122, 123, 124, 141, 142, 143, 144].includes(currentCell)) {
      group = 6;
    } else if ([85, 86, 87, 88, 105, 106, 107, 108, 125, 126, 127, 128, 145, 146, 147, 148].includes(currentCell)) {
      group = 7;
    } else if ([89, 90, 91, 92, 109, 110, 111, 112, 129, 130, 131, 132, 149, 150, 151, 152].includes(currentCell)) {
      group = 8;
    } else if ([93, 94, 95, 96, 113, 114, 115, 116, 133, 134, 135, 136, 153, 154, 155, 156].includes(currentCell)) {
      group = 9;
    } else if ([97, 98, 99, 100, 117, 118, 119, 120, 137, 138, 139, 140, 157, 158, 159, 160].includes(currentCell)) {
      group = 10;
    } else if ([161, 162, 163, 164, 181, 182, 183, 184, 201, 202, 203, 204, 221, 222, 223, 224].includes(currentCell)) {
      group = 11;
    } else if ([165, 166, 167, 168, 185, 186, 187, 188, 205, 206, 207, 208, 225, 226, 227, 228].includes(currentCell)) {
      group = 12;
    } else if ([169, 170, 171, 172, 189, 190, 191, 192, 209, 210, 211, 212, 229, 230, 231, 232].includes(currentCell)) {
      group = 13;
    } else if ([173, 174, 175, 176, 193, 194, 195, 196, 213, 214, 215, 216, 233, 234, 235, 236].includes(currentCell)) {
      group = 14;
    } else if ([177, 178, 179, 180, 197, 198, 199, 200, 217, 218, 219, 220, 237, 238, 239, 240].includes(currentCell)) {
      group = 15;
    } else if ([241, 242, 243, 244, 261, 262, 263, 264, 281, 282, 283, 284, 301, 302, 303, 304].includes(currentCell)) {
      group = 16;
    } else if ([245, 246, 247, 248, 265, 266, 267, 268, 285, 286, 287, 288, 305, 306, 307, 308].includes(currentCell)) {
      group = 17;
    } else if ([249, 250, 251, 252, 269, 270, 271, 272, 289, 290, 291, 292, 309, 310, 311, 312].includes(currentCell)) {
      group = 18;
    } else if ([253, 254, 255, 256, 273, 274, 275, 276, 293, 294, 295, 296, 313, 314, 315, 316].includes(currentCell)) {
      group = 19;
    } else if ([257, 258, 259, 260, 277, 278, 279, 280, 297, 298, 299, 300, 317, 318, 319, 320].includes(currentCell)) {
      group = 20;
    } else if ([321, 322, 323, 324, 341, 342, 343, 344, 361, 362, 363, 364, 381, 382, 383, 384].includes(currentCell)) {
      group = 21;
    } else if ([325, 326, 327, 328, 345, 346, 347, 348, 365, 366, 367, 368, 385, 386, 387, 388].includes(currentCell)) {
      group = 22;
    } else if ([329, 330, 331, 332, 349, 350, 351, 352, 369, 370, 371, 372, 389, 390, 391, 392].includes(currentCell)) {
      group = 23;
    } else if ([333, 334, 335, 336, 353, 354, 355, 356, 373, 374, 375, 376, 393, 394, 395, 396].includes(currentCell)) {
      group = 24;
    } else if ([337, 338, 339, 340, 357, 358, 359, 360, 377, 378, 379, 380, 397, 398, 399, 400].includes(currentCell)) {
      group = 25;
    }
    
    // Este montón de números son los que indican cómo se organizan los grupos

    return group;
  }

  // Actualizar la información del cuadro interno
  function updateInfoBox() {
    innerBoxSecond.innerText = getCurrentCellNumber();
    var groupNumber = getCurrentGroupNumber();
    if (groupNumber !== null) {
      innerBoxTercero.innerText = groupNames[groupNumber - 1];
    } else {
      innerBoxTercero.innerText = "Sin grupo";
    }
  }

  // Función para mostrar el cuadro emergente
  function showPopup() {
    popup.style.display = "block";
    // Bloquear el movimiento del personaje
    document.removeEventListener("keydown", movePlayer);
  }

  // Función para ocultar el cuadro emergente
  function hidePopup() {
    popup.style.display = "none";
    // Permitir el movimiento del personaje nuevamente
    document.addEventListener("keydown", movePlayer);
  }




 // Función para mover al jugador
function movePlayer(event) {
  // Movimiento según la tecla presionada
  var key = event.key;
  var targetCell = getCurrentCellNumber(); // Obtener la celda actual del jugador
  var blockedCells = [35, 55, 30]; // Números de las celdas bloqueadas

  // Verificar si el jugador intenta moverse a una celda bloqueada
  if (
    (key === "ArrowUp" || key === "w") &&
    blockedCells.includes(targetCell - gridWidth)
  ) {
    return; // No permitir el movimiento hacia arriba
  } else if (
    (key === "ArrowDown" || key === "s") &&
    blockedCells.includes(targetCell + gridWidth)
  ) {
    return; // No permitir el movimiento hacia abajo
  } else if (
    (key === "ArrowLeft" || key === "a") &&
    blockedCells.includes(targetCell - 1)
  ) {
    return; // No permitir el movimiento hacia la izquierda
  } else if (
    (key === "ArrowRight" || key === "d") &&
    blockedCells.includes(targetCell + 1)
  ) {
    return; // No permitir el movimiento hacia la derecha
  }
  

  // Resto del código para mover al jugador y actualizar la posición
switch (key) {
  case "ArrowUp":
  case "w":
    if (playerPositionY > gridSize) {
      playerPositionY -= gridSize;
    }
    break;
  case "ArrowDown":
  case "s":
    if (playerPositionY < (gridHeight - 1) * gridSize) {
      playerPositionY += gridSize;
    }
    break;
  case "ArrowLeft":
  case "a":
    if (playerPositionX > gridSize) {
      playerPositionX -= gridSize;
    }
    break;
  case "ArrowRight":
  case "d":
    if (playerPositionX < (gridWidth - 1) * gridSize) {
      playerPositionX += gridSize;
    }
    break;
}


  // Actualizar posición del jugador
  player.style.left = playerPositionX + "px";
  player.style.top = playerPositionY + "px";

  // Actualizar la información del cuadro interno
  updateInfoBox();

  // Mostrar el cuadro emergente cuando el personaje se mueva
  showPopup();
}








  // Agregar el evento de escucha para las teclas de flecha
  document.addEventListener("keydown", movePlayer);

  // Agrega un evento de clic al botón "Cerrar" para ocultar el cuadro emergente
  btnClosePopup.addEventListener("click", hidePopup);

  // Generar celdas de la cuadrícula
  for (var i = 0; i < 400; i++) {
    var cell = document.createElement("div");
    cell.classList.add("cell");
    cell.innerText = i + 1;
    cell.classList.add("hidden");
    cell.style.left = ((i % 20) * gridSize) + "px";
    cell.style.top = (Math.floor(i / 20) * gridSize) + "px";
    grid.appendChild(cell);

    var row = Math.floor(i / 20);
    var col = i % 20;

    var groupRow = Math.floor(row / 4);
    var groupCol = Math.floor(col / 4);
    var group = groupRow * 5 + groupCol + 1;
    var groupId = "group-" + group; // Color del grupo

    cell.classList.add(groupId);
    cell.setAttribute("data-group-id", groupId);

    cell.addEventListener("mouseover", function() {
      this.classList.add("highlight"); // Agrega la clase "highlight" al pasar el cursor
    });

    cell.addEventListener("mouseout", function() {
      this.classList.remove("highlight"); // Remueve la clase "highlight" al quitar el cursor
    });
  }

  // Actualizar la información del cuadro interno inicialmente
  updateInfoBox();

  // Ocultar el cuadro emergente al cargar la página
  popup.style.display = "none";
});
