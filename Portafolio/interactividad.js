document.addEventListener("DOMContentLoaded", () => {
  // Mostrar/ocultar contenido adicional
  document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".project-card");
      const extraContent = card.querySelector(".extra-content");
      const isExpanded = card.classList.contains("expanded");

      if (extraContent) {
        if (isExpanded) {
          extraContent.style.display = "none";
          card.classList.remove("expanded");
          btn.textContent = "Ver más";
        } else {
          card.classList.add("expanded");
          extraContent.style.display = "block";
          btn.textContent = "Ver menos";
        }
      }
    });
  });

  // Estrellas
  document.querySelectorAll(".rating-container").forEach(container => {
    const radios = container.querySelectorAll('input[type="radio"]');
    const messageDiv = container.querySelector(".rating-message");

    radios.forEach(radio => {
      radio.addEventListener("change", () => {
        switch (radio.value) {
          case "1":
            messageDiv.textContent = "¡3 estrellas! ¡Le sabes!";
            break;
          case "2":
            messageDiv.textContent = "¿2 estrellas? ¿Por qué no 3?";
            break;
          case "3":
            messageDiv.textContent = "¿1 estrella? ¿En serio?";
            break;
        }
      });
    });
  });

  // Video
  const video = document.getElementById("introVideo");
  if (video) {
    try {
      video.play();
    } catch (error) {
      console.warn("El video no se pudo reproducir automáticamente.");
    }

    video.style.opacity = 0;
    setTimeout(() => {
      video.style.transition = "opacity 1s ease-in-out";
      video.style.opacity = 1;
    }, 300);
  }

  // Formulario
  const btnEnviar = document.getElementById('enviar'); 
  const edadInput = document.getElementById('edad');
  const edadError = document.getElementById('edadError');
  const formError = document.getElementById('formError'); // nuevo
  const nombreInput = document.getElementById('nombre');
  const ocupacionInput = document.getElementById('ocupacion');
  const proyectoInput = document.getElementById('proyecto');
  const contacto = document.getElementById('contactInfo');
  
  if (
    btnEnviar && edadInput && edadError && formError &&
    nombreInput && ocupacionInput && proyectoInput && contacto
  ) {
    btnEnviar.addEventListener('click', function () {
      const edad = parseInt(edadInput.value);
      const nombre = nombreInput.value.trim();
      const ocupacion = ocupacionInput.value;
      const proyecto = proyectoInput.value;
  
      const isEdadValida = edad > 0 && edad < 99;
      const isFormularioLleno = nombre && ocupacion && proyecto;
  
      // PRIMERO: verificar si faltan campos
      if (!isFormularioLleno) {
        formError.style.display = 'block';
        edadError.style.display = 'none';
        contacto.style.display = 'none';
        return; // detenemos aquí
      }
  
      // SEGUNDO: verificar edad SOLO si los demás están llenos
      if (!isEdadValida) {
        edadError.style.display = 'block';
        formError.style.display = 'none';
        edadInput.value = '';
        contacto.style.display = 'none';
      } else {
        // TODO CORRECTO
        edadError.style.display = 'none';
        formError.style.display = 'none';
        contacto.style.display = 'block';
      }
    });
  }
  

});
