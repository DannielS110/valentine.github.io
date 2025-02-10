// Acción al presionar "Sí"
document.getElementById("yes-btn").addEventListener("click", () => {
  document.getElementById("yes-btn").classList.add("clicked-yes"); // Cambia color
  document.getElementById("no-btn").classList.remove("clicked-no"); // Restablece color del "No"

  document.querySelector(".valentine-section").style.display = "none";
  document.getElementById("login-section").style.display = "flex";
});

// Acción al presionar "No"
document.getElementById("no-btn").addEventListener("click", () => {
  document.getElementById("no-btn").classList.add("clicked-no"); // Cambia color
  document.getElementById("yes-btn").classList.remove("clicked-yes"); // Restablece color del "Sí"

  document.querySelector(".valentine-section").style.display = "none";
  document.getElementById("error-section").style.display = "flex";
});

// Acción para regresar en caso de error
document.getElementById("return-btn").addEventListener("click", () => {
  document.getElementById("error-section").style.display = "none";
  document.querySelector(".valentine-section").style.display = "flex";
});

// Acción al enviar el formulario de inicio de sesión
document.getElementById("login-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  if (username === "lailany" && password === "22") {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("tulip-section").style.display = "flex";

    // 🎵 Reproducir Música al Ingresar Correctamente 🎵
    const music = document.getElementById("valentine-music");
    music.play();
  } else {
    errorMessage.style.display = "block";
  }
});


// Dibujar el tulipán progresivamente con animaciones mejoradas
function drawTulip() {
  const canvas = document.getElementById("tulip-drawing");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#FFF8F0";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Dibujar el tallo
  setTimeout(() => {
    ctx.fillStyle = "#008000";
    ctx.fillRect(290, 400, 20, 150);
  }, 500);

  // Dibujar hojas con animación
  setTimeout(() => {
    ctx.fillStyle = "#008000";
    ctx.beginPath();
    ctx.moveTo(300, 450);
    ctx.quadraticCurveTo(350, 400, 370, 500);
    ctx.quadraticCurveTo(350, 450, 300, 450);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(300, 450);
    ctx.quadraticCurveTo(250, 400, 230, 500);
    ctx.quadraticCurveTo(250, 450, 300, 450);
    ctx.fill();
  }, 1000);

  // Dibujar pétalos con animación
  setTimeout(() => {
    ctx.fillStyle = "#FF69B4";
    ctx.beginPath();
    ctx.moveTo(300, 300);
    ctx.bezierCurveTo(250, 200, 250, 350, 300, 400);
    ctx.bezierCurveTo(350, 350, 350, 200, 300, 300);
    ctx.fill();
  }, 1500);
}

// Botón "Siguiente"
document.getElementById("next-btn").addEventListener("click", () => {
  alert("¡Feliz San Valentín AMOR DE MI VIDA! ❤️");
  document.getElementById("next-btn").addEventListener("click", () => {
    document.getElementById("tulip-section").style.display = "none";
    document.getElementById("locks-section").style.display = "flex";
  
    // 🎵 Pausar la música al salir 🎵
    const music = document.getElementById("valentine-music");
    music.pause();
  });
  
});

// Agregar animación a los botones
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
  button.addEventListener("mouseover", () => {
    button.style.transform = "scale(1.1)";
  });

  button.addEventListener("mouseout", () => {
    button.style.transform = "scale(1)";
  });
});

// Agregar efectos a la galería
const galleryImages = document.querySelectorAll(".gallery-item");
galleryImages.forEach(image => {
  image.addEventListener("click", () => {
    image.style.border = "3px solid var(--primary-color)";
  });
});

// Formulario de contacto
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("¡Tu mensaje ha sido enviado con éxito! 💌");
    form.reset();
  });
};
// Acción al presionar "Siguiente" en el tulipán
document.getElementById("next-btn").addEventListener("click", () => {
  // Ocultar la sección del tulipán
  document.getElementById("tulip-section").style.display = "none";

  // Mostrar la sección de los candados
  document.getElementById("locks-section").style.display = "flex";
});

// Función para verificar las contraseñas de los candados
// Función para verificar los códigos y abrir la carta correspondiente
function checkLocks(lockNumber) {
  let code = "";
  let imageSrc = "";

  // Determinar el código y la imagen según el candado
  if (lockNumber === 1) {
    code = "22";
    imageSrc = "imagenes/carta1.jpeg";
  } else if (lockNumber === 2) {
    code = "03";
    imageSrc = "imagenes/Carta2.jpeg";
  } else if (lockNumber === 3) {
    code = "2024";
    imageSrc = "imagenes/carta3.jpeg";
  }

  // Obtener el valor del input correspondiente
  const input = document.getElementById(`input${lockNumber}`).value;

  // Verificar si el código es correcto
  if (input.trim() === code) {
    showLetter(imageSrc); // Mostrar la carta si el código es correcto
  } else {
    alert("❌ Código incorrecto. Intenta nuevamente.");
  }
}

// Función para mostrar la carta
function showLetter(imageSrc) {
  const letterImage = document.getElementById("letter-image");
  letterImage.src = imageSrc; // Asignar la imagen correspondiente
  document.getElementById("love-letter").style.display = "flex"; // Mostrar la carta
  document.getElementById("locks-section").style.display = "none"; // Ocultar la sección de candados
}

// Función para cerrar la carta y regresar a los candados
function closeLetter() {
  document.getElementById("love-letter").style.display = "none"; // Ocultar la carta
  document.getElementById("locks-section").style.display = "flex"; // Mostrar nuevamente los candados
}
// 🎵 Reproducir música SOLO en la Sección del Tulipán
document.getElementById("login-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === "lailany" && password === "22") {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("tulip-section").style.display = "flex";

        // Reproducir la música de la sección del tulipán
        const tulipMusic = document.getElementById("tulip-music");
        tulipMusic.play();
    } else {
        errorMessage.style.display = "block";
    }
});

// 🎵 Detener la música del Tulipán y reproducir la de Candados al dar Siguiente
document.getElementById("next-btn").addEventListener("click", () => {
    document.getElementById("tulip-section").style.display = "none";
    document.getElementById("locks-section").style.display = "flex";

    // Pausar la música del Tulipán
    const tulipMusic = document.getElementById("tulip-music");
    tulipMusic.pause();

    // Reproducir la música de los candados
    const locksMusic = document.getElementById("locks-music");
    locksMusic.play();
});
// Función para verificar los códigos y manejar la música correctamente
function checkLocks(lockNumber) {
  let code = "";
  let imageSrc = "";
  let musicId = "";

  // Determinar código, imagen y música según el candado
  if (lockNumber === 1) {
      code = "22";
      imageSrc = "imagenes/carta1.jpeg";
      musicId = "music1";
  } else if (lockNumber === 2) {
      code = "03";
      imageSrc = "imagenes/Carta2.jpeg";
      musicId = "music2";
  } else if (lockNumber === 3) {
      code = "2024";
      imageSrc = "imagenes/carta3.jpeg";
      musicId = "music3";
  }

  // Obtener el input ingresado por el usuario
  const input = document.getElementById(`input${lockNumber}`).value;

  // Verificar si el código es correcto
  if (input.trim() === code) {
      stopAllMusic(); // 🔇 Detener todas las músicas antes de iniciar una nueva
      showLetter(imageSrc); // Mostrar la carta

      // Detener la música de los candados
      const locksMusic = document.getElementById("locks-music");
      locksMusic.pause();
      locksMusic.currentTime = 0; // Reiniciar para que vuelva a empezar cuando regrese

      // Reproducir la música del candado desbloqueado
      const newMusic = document.getElementById(musicId);
      newMusic.play();
  } else {
      alert("❌ Código incorrecto. Intenta nuevamente.");
  }
}

// Función para cerrar la carta y regresar a los candados
function closeLetter() {
  document.getElementById("love-letter").style.display = "none"; // Ocultar la carta
  document.getElementById("locks-section").style.display = "flex"; // Mostrar nuevamente los candados
  
  // Detener todas las músicas antes de volver a la música de los candados
  stopAllMusic();

  // Reproducir la música de los candados nuevamente
  const locksMusic = document.getElementById("locks-music");
  locksMusic.play();
}

// Función para detener todas las músicas activas antes de reproducir otra
function stopAllMusic() {
  const allMusic = ["music1", "music2", "music3", "locks-music", "adelanto-music"];
  allMusic.forEach(id => {
      const audio = document.getElementById(id);
      if (audio) {
          audio.pause();
          audio.currentTime = 0; // Reinicia la música para que no se superponga
      }
  });
}


// 🎵 Función para mostrar el adelanto
function showAdelanto() {
    document.getElementById("adelanto-container").style.display = "flex";

    // Reproducir música del adelanto
    const adelantoMusic = document.getElementById("adelanto-music");
    adelantoMusic.play();
}

// 🎵 Cerrar adelanto
function closeAdelanto() {
    document.getElementById("adelanto-container").style.display = "none";

    // Pausar la música
    const adelantoMusic = document.getElementById("adelanto-music");
    adelantoMusic.pause();
}
