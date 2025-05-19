document.addEventListener("DOMContentLoaded", () => {
  // Referencias a elementos del DOM
  const loginContainer = document.getElementById("login-container");
  const loginForm = document.getElementById("login-form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const hue1Slider = document.getElementById("h1");
  const hue2Slider = document.getElementById("h2");
  const hue1Value = document.getElementById("h1-value");
  const hue2Value = document.getElementById("h2-value");
  const autoChangeToggle = document.getElementById("auto-change");
  const socialButtons = document.querySelectorAll(".social-button");
  const loginButton = document.querySelector(".login-button");

  // Inicializar colores aleatorios
  const rand1 = 120 + Math.floor(Math.random() * 240);
  const rand2 = rand1 - 80 + (Math.floor(Math.random() * 60) - 30);

  hue1Slider.value = rand1;
  hue2Slider.value = rand2;
  hue1Value.textContent = rand1;
  hue2Value.textContent = rand2;

  document.documentElement.style.setProperty("--hue1", rand1);
  document.documentElement.style.setProperty("--hue2", rand2);

  // Variable para almacenar el intervalo de cambio automático
  let autoChangeInterval;

  // Función para iniciar el cambio automático de colores
  function startAutoChange() {
    if (autoChangeInterval) clearInterval(autoChangeInterval);
    
    autoChangeInterval = setInterval(() => {
      const currentHue1 = parseInt(hue1Slider.value);
      const currentHue2 = parseInt(hue2Slider.value);
      
      const newHue1 = (currentHue1 + 1) % 360;
      const newHue2 = (currentHue2 + 2) % 360;
      
      hue1Slider.value = newHue1;
      hue2Slider.value = newHue2;
      hue1Value.textContent = newHue1;
      hue2Value.textContent = newHue2;
      
      document.documentElement.style.setProperty("--hue1", newHue1);
      document.documentElement.style.setProperty("--hue2", newHue2);
    }, 100);
  }

  // Función para detener el cambio automático de colores
  function stopAutoChange() {
    if (autoChangeInterval) {
      clearInterval(autoChangeInterval);
      autoChangeInterval = null;
    }
  }

  // Manejar cambios en los sliders de color
  hue1Slider.addEventListener("input", (event) => {
    const value = event.target.value;
    document.documentElement.style.setProperty("--hue1", value);
    hue1Value.textContent = value;
  });

  hue2Slider.addEventListener("input", (event) => {
    const value = event.target.value;
    document.documentElement.style.setProperty("--hue2", value);
    hue2Value.textContent = value;
  });

  // Manejar cambio en el toggle de cambio automático
  autoChangeToggle.addEventListener("change", () => {
    if (autoChangeToggle.checked) {
      startAutoChange();
      hue1Slider.disabled = true;
      hue2Slider.disabled = true;
    } else {
      stopAutoChange();
      hue1Slider.disabled = false;
      hue2Slider.disabled = false;
    }
  });

  // Iniciar cambio automático si está activado por defecto
  if (autoChangeToggle.checked) {
    startAutoChange();
    hue1Slider.disabled = true;
    hue2Slider.disabled = true;
  }

  // Manejar envío del formulario
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    // Validación simple
    if (!email || !password) {
      loginContainer.classList.add("shake");
      setTimeout(() => {
        loginContainer.classList.remove("shake");
      }, 500);
      return;
    }

    // Simulación de inicio de sesión
    loginContainer.style.opacity = "0.5";
    loginContainer.style.pointerEvents = "none";

    setTimeout(() => {
      // Aquí iría la lógica real de autenticación
      alert("¡Inicio de sesión exitoso!\nEmail: " + email);

      // Resetear el formulario
      loginForm.reset();
      loginContainer.style.opacity = "1";
      loginContainer.style.pointerEvents = "auto";
    }, 1500);
  });

  // Efectos de animación para los botones sociales
  socialButtons.forEach((button) => {
    button.addEventListener("click", function() {
      const network = this.classList[1]; // google, facebook, twitter
      alert(`Iniciando sesión con ${network}`);
    });
  });

  // Animación de entrada
  setTimeout(() => {
    loginContainer.classList.add("open");
  }, 300);
});