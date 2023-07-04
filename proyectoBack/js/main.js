document.getElementById("header").innerHTML=` 

<nav class="navbar navbar-expand-sm navbar-light" style="background-color: #BBBBBB;">
<div class="container">
    <a class="navbar-brand" href="vehiculos.html">
    <img src="imagenes/logo.png" alt="logo de auto" width="60" height="30" class="d-inline-block align-text-top">
    Vehiculos
    </a>
    <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav me-auto mt-2 mt-lg-0">
          <li class="nav-item">
              <a class="nav-link active" href="vehiculos.html" aria-current="page"><span class="visually-hidden">(current)</span></a>
          </li>
          
      </ul>
      <form class="d-flex my-2 my-lg-0">
          <input class="form-control me-sm-2" type="text" placeholder="Buscar">
          <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit" style="border-color: black; color: write;">Buscar</button>
      </form>
  </div>
</div>
</nav>
`
document.getElementById("footer").innerHTML = `
<footer style="background-color: #BBBBBB; padding: 10px; position: absolute; bottom: 0; width: 100%;">
  <div class="container">
    <div class="row">
      <div class="col text-center">
        <img src="imagenes/logo.png" alt="logo de auto" width="60" height="30">
      </div>
    </div>
    <div class="row">
      <div class="col text-center">
        <p class="mt-2">&copy; Alquiler de Vehiculos CAC - 2023</p>
      </div>
    </div>
  </div>
</footer>
`



