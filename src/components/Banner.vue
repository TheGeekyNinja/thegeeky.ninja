<template>
  <div class="banner-main-sec">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="banner-con-main">
            <h2>Lorem</h2>
            <h3>Lorem Ipsum</h3>
            <h2>Lorem ipsum</h2>
            <h4>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              <span>optio in libero sint.</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.banner-main-sec {
  margin: 0px;
  padding: 100px 0px;
  background-image: url(../assets/images/banner-bg.svg);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 1;
}
.banner-con-main {
  margin: 0px;
  padding: 0px 0 220px 0;
  text-align: center;
}
.banner-con-main h2 {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 100px;
  line-height: 100px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #fff;
  margin: 0 0 40px 0;
}
.banner-con-main h3 {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 50px;
  text-align: center;
  text-transform: uppercase;
  color: #d11d27;
  margin: 0 0 45px 0;
  padding: 0 20px;
  position: relative;
  z-index: 1;
  display: inline-block;
}
.banner-con-main h3:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  z-index: -1;
}
.banner-con-main h4 {
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #fff;
  margin: 0px;
}
.banner-con-main h4 span {
  display: block;
}
</style>
<script></script>