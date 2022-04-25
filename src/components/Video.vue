<template>
  <div class="video-main-sec">
    <video loop="" autoplay="" muted="">
      <source src="../assets/images/video.mp4" type="video/mp4" />
    </video>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="video-content-main">
            <div class="video-content-inner">
              <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing
                <span>elit ea aliquid eligendi.</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.video-main-sec {
  margin: 0px;
  padding: 0px;
  height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}
.video-main-sec:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
}
.video-main-sec video {
  position: absolute;
  height: auto;
  width: 100%;
  top: 0;
  left: 0;
}
.video-content-main {
  margin: 0px;
  padding: 0px;
}
.video-content-inner {
  margin: 0px;
  padding: 0px;
  text-align: center;
  position: relative;
  z-index: 99;
}
.video-content-inner h2 {
  font-family: "DM Sans", sans-serif;
  font-weight: 700;
  color: #fff;
  line-height: 1.3;
  font-size: 60px;
  text-align: center;
  margin: 0px;
}
</style>
<script></script>