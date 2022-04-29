<template>
  <div class="site-header-main">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="javascript:void(0)"
            ><img src="../assets/images/Logo.png" alt="logo" class="img-fluid"
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a
                  class="nav-link"
                  aria-current="page"
                  href="javascript:void(0)"
                  >Home</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Service</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Project</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>


<style>
.site-header-main {
  margin: 0px;
  padding: 15px;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 99;
  box-shadow: 0px 10px 60px rgb(0 0 0 / 8%);
}
.site-header-main .navbar {
  padding: 0px;
}
.site-header-main .navbar-expand-lg .navbar-nav .nav-link {
  margin: 0px 60px 0 0;
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  text-transform: uppercase;
  color: #181818;
  position: relative;
  transition: all ease 0.4s;
}
.site-header-main .navbar-expand-lg .navbar-nav .nav-link:after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -5px;
  text-align: center;
  margin: 0 auto;
  height: 10px;
  width: 10px;
  background: #d11d27;
  border-radius: 100%;
  opacity: 0;
  transition: opacity ease 0.4s;
}
.site-header-main .navbar-expand-lg .navbar-nav .nav-link:hover:after {
  opacity: 1;
}
</style>

<script>
</script>