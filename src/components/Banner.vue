<template>
  <div class="banner-sec-main">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="banner-con-main">
            <div class="banner-con-inner">
              <h2>
                Lorem ipsum dolor sit amet
                <span>adipisicing elit.</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur laudantium quibusdam alias, iure ratione possimus
                cumque nam officiis aut temporibus sapiente quae voluptatibus
                sunt pariatur sint vero autem modi. Molestias!
              </p>
              <a href="javascript:void(0)" class="primary-btn">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.banner-sec-main {
  margin: 0px;
  padding: 150px 0;
  background-image: url("../assets/images/banner-bg.png");
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
}
.banner-sec-main:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: -1;
}
.banner-con-main {
  margin: 0px;
  padding: 0px;
  text-align: left;
}
.banner-con-inner {
  margin: 0px;
  padding: 0px;
}
.banner-con-inner h2 {
  font-family: "Poppins", sans-serif;
  font-size: 60px;
  line-height: 90px;
  color: #fff;
  font-weight: bold;
  margin: 0 0 25px 0;
}
.banner-con-inner h2 span {
  display: block;
}
.banner-con-inner p {
  font-family: "DM Sans", sans-serif;
  font-weight: 400;
  font-size: 22px;
  line-height: 34px;
  color: #fff;
  max-width: 70%;
  margin: 0 0 40px 0;
}
.primary-btn {
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  padding: 18px 25px;
  font-size: 18px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  color: #fff;
  background: #d11d27;
  position: relative;
  line-height: 1.4;
  z-index: 2;
  text-decoration: none;
  text-transform: uppercase;
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease-out;
  -ms-transition: all 0.5s ease-out;
  -o-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
}
.primary-btn:before {
  content: "";
  height: 100%;
  width: 0;
  background-color: #121212;
  border-radius: 4px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  transition: all 0.5s ease-out;
}
.primary-btn:hover {
  color: #fff;
}
.primary-btn:hover:before {
  width: 100%;
  left: 0;
}
</style>
<script></script>