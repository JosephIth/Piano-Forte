document.addEventListener("DOMContentLoaded",() => {

  const navbar = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary" id="navBar">
    <div class="container-fluid">
      <div id="icono"><img src="Imagenes/nav-icon/icono.png"></div>

      <button class="navbar-toggler" id="navBar-T" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="Forte&Piano.html">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#pqElegirF&P">Conócenos</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categorias
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="Ingresar.html">Ingresar</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="Registro.html">Registrarse</a>
          </li>

          <li class="nav-item nav-itemUser">
            <a class="nav-link" href="Perfil.html"><i class="fi fi-br-portrait"></i>Perfil</a>
          </li>

        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="¿Que deseas buscar?" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>
`;

  // Aquí insertamos la barra en el <body>, al inicio

  document.getElementById("navbar-container").innerHTML = navbar;

});