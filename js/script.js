const header = document.querySelector("header");
const footer = document.querySelector("footer");
const btblack = document.querySelector("#btblack");
const info = document.querySelector("#contenido-dinamico");

header.innerHTML = `
<nav class="navbar navbar-expand-lg bg-primary navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html">
      <img src="img/logo.png" alt="Logo Colegio Luz del Himalaya" width="120" class="d-inline-block align-text-top">
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
            aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" href="index.html">Inicio</a>
        <a class="nav-link" href="Nosotros.html">Nosotros</a>
        <a class="nav-link" href="Actividades.html">Actividades</a>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" 
             data-bs-toggle="dropdown" aria-expanded="false">
            Ofertas académicas
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="Inicial.html">Nivel inicial</a></li>
            <li><a class="dropdown-item" href="primario.html">Nivel primario</a></li>
            <li><a class="dropdown-item" href="secundario.html">Nivel secundario</a></li>
          </ul>
        </li>

        <div class="d-flex align-items-center">
          <a href="iniciosecion.html" class="btn btn-light ms-3">Ingreso formulario</a>
          <span id="usuarioNombre" class="ms-2 text-white fw-bold"></span>
        </div>
      </div>

      <span class="navbar-text ms-auto text-white fw-bold fs-4 d-none d-lg-block">
        U.E. Luz del Himalaya
      </span>
    </div>
  </div>
</nav>
`;

footer.innerHTML = `
  <h1>@Todos los derechos reservados</h1>
  <div class="card-group">
    <div class="card text-center">
      <i class="bi bi-geo-alt-fill fs-1"></i>
      <div class="card-body">
        <h5 class="card-title">Ubicación</h5>
        <p class="card-text">
          <a href="https://www.google.com/maps/place/...">Calle Capuchinas esquina Calle Madre Perla s/n. Zona Alto Queru Queru</a>
        </p>
        <p class="card-title">Cochabamba-Bolivia</p>
      </div>
    </div>
    <div class="card text-center">
      <i class="bi bi-envelope fs-1"></i>
      <div class="card-body">
        <h5 class="card-title">EMAIL COLEGIO</h5>
        <a href="mailto:secretaria@froebel.edu.bo">secretaria@froebel.edu.bo</a>
        <h5 class="card-title">EMAIL COOPERATIVA</h5>
        <a href="mailto:secretariacoop@ffroebel.com">secretariacoop@ffroebel.com</a>
      </div>
    </div>
    <div class="card text-center">
      <div class="card-body">
        <i class="bi bi-twitter-x fs-1"></i> <a href="https://x.com">Twitter</a><br>
        <i class="bi bi-tiktok fs-1"></i> <a href="https://vt.tiktok.com/ZSujqNmrM/">TikTok</a>
      </div>
    </div>
  </div>
`;

btblack.innerHTML=`
  <button id="botonOscuro">Modo Oscuro</button>
  
`;

document.addEventListener("DOMContentLoaded", () => {
    const btblack = document.querySelector("#btblack");
    const info = document.querySelector("#info"); // Asegúrate de tener este ID en tu HTML

    if (btblack) {
        btblack.innerHTML = `<button id="botonOscuro" class="btn btn-outline-dark">Modo Oscuro</button>`;
        
        const boton = document.getElementById("botonOscuro");
        
        boton.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            if (document.body.classList.contains("dark-mode")) {
                boton.textContent = "Modo Claro";
                boton.classList.replace("btn-outline-dark", "btn-outline-light");
            } else {
                boton.textContent = "Modo Oscuro";
                boton.classList.replace("btn-outline-light", "btn-outline-dark");
            }
        });
    }

    if (info) {
        info.innerHTML = `
          <div class="row align-items-center">
            <div class="col-md-6">
              <img src="https://froebel.edu.bo/wp-content/uploads/2025/04/cropped-P3.jpg" class="img-fluid rounded-4 shadow-lg border border-3 border-warning" alt="Educación">
            </div>
            <div class="col-md-6">
              <h2 class="text-primary fw-bold">Luz del Himalaya</h2>
              <p class="lead">Aprendizaje basado en juegos, robótica junior y desarrollo socio-afectivo.</p>
              <h5 class="mt-4 text-warning"><i class="bi bi-star-fill"></i> Actividades Especiales</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item lead"><i class="bi bi-mic"></i> <strong>Oratoria:</strong> Certámenes de debate y declamación.</li>
                <li class="list-group-item lead"><i class="bi bi-trophy"></i> <strong>Deportivas:</strong> Olimpiadas internas y torneos intercolegiales.</li>
                <li class="list-group-item lead"><i class="bi bi-cpu"></i> <strong>Tecnología:</strong> Talleres de robótica y ferias de ciencia digital.</li>
              </ul>
            </div>
          </div>`;
    }
});
info.innerHTML=`
  <div class="row align-items-center">
    <div class="col-md-6">
      <img src="https://froebel.edu.bo/wp-content/uploads/2025/04/cropped-P3.jpg" class="img-fluid rounded-4 shadow-lg border border-3 border-warning" alt="Educación">
    </div>
    <div class="col-md-6">
      <h2 class="text-primary fw-bold">Luz del Himalaya</h2>
      <p class="lead">Aprendizaje basado en juegos, robótica junior y desarrollo socio-afectivo.</p>
      
      <h5 class="mt-4 text-warning"><i class="bi bi-star-fill"></i> Actividades Especiales</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item lead"><i class="bi bi-mic"></i> <strong>Oratoria:</strong> Certámenes de debate y declamación.</li>
        <li class="list-group-item lead"><i class="bi bi-trophy"></i> <strong>Deportivas:</strong> Olimpiadas internas y torneos intercolegiales.</li>
        <li class="list-group-item lead"><i class="bi bi-cpu"></i> <strong>Tecnología:</strong> Talleres de robótica y ferias de ciencia digital.</li>
      </ul>
    </div>
  </div>

`;