<template>
  <div class="cta-main-sec">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="cta-con-main">
            <div class="cta-con-inner">
              <h2>Lorem ipsum doller sit amet</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                fugiat assumenda, ipsam illum, saepe vel maxime nostrum nihil
                placeat veritatis sint labore dignissimos consequatur earum
                consequuntur quibusdam quidem et culpa.
              </p>
              <a href="javascript:void(0)" class="primary-btn">Contact us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.cta-main-sec {
  margin: 0px;
  padding: 100px 0;
  background-image: url("../assets/images/banner-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
  z-index: 1;
}
.cta-main-sec::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: -1;
}
.cta-con-main {
  margin: 0px;
  padding: 0px;
}
.cta-con-inner {
  margin: 0px auto;
  padding: 90px 60px;
  background: #fff;
  text-align: center;
  width: 800px;
}
.cta-con-inner h2 {
  font-family: "DM Sans", sans-serif;
  font-size: 44px;
  font-weight: 600;
  line-height: 1.4em;
  color: #121212;
  margin: 0 0 30px 0;
}
.cta-con-inner p {
  font-family: "DM Sans", sans-serif;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.5em;
  color: #121212;
  margin: 0 0 48px 0;
}
</style>
<script></script>