<template>
  <div class="service-main-sec">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="service-main-heading-area">
            <h2>Services</h2>
          </div>
        </div>
      </div>
      <div class="row custom-row">
        <div class="col-lg-4 col-md-6">
          <div class="service-item-block">
            <div class="service-item-block-inner">
              <div class="service-img-area">
                <img src="" class="img-fluid" />
                <div class="service-overlay-con">
                  <div class="service-overlay-con-inner">
                    <div class="service-heading-area">
                      <h2>
                        CTO as a Service
                      </h2>
                      <div class="service-con-block">
                        <h2>
                          Add a fully integrated member of your management team capable of
                          implementing your tokenomic model, interfacing with your development
                          team, and facilitating high level milestones.
                        </h2>
                        <a href="JavaScript:void(0)" class="service-btn"
                          >Read more</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="service-item-block">
            <div class="service-item-block-inner">
              <div class="service-img-area">
                <img src="" class="img-fluid" />
                <div class="service-overlay-con">
                  <div class="service-overlay-con-inner">
                    <div class="service-heading-area">
                      <h2>
                        Consulting
                      </h2>
                      <div class="service-con-block">
                        <h2>
                          Bring the visionary, establish your model, define the specifications
                        </h2>
                        <a href="JavaScript:void(0)" class="service-btn"
                          >Read more</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="service-item-block">
            <div class="service-item-block-inner">
              <div class="service-img-area">
                <img src="" class="img-fluid" />
                <div class="service-overlay-con">
                  <div class="service-overlay-con-inner">
                    <div class="service-heading-area">
                      <h2>
                        Blockchain Development
                      </h2>
                      <div class="service-con-block">
                        <h2>
                          Eye catching, responsive design<br />
                          Custom planned and built Solidity Smart Contracts<br />
                          Elegant and responsive web3 DApps
                        </h2>
                        <a href="JavaScript:void(0)" class="service-btn"
                          >Read more</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="service-item-block">
            <div class="service-item-block-inner">
              <div class="service-img-area">
                <img src="" class="img-fluid" />
                <div class="service-overlay-con">
                  <div class="service-overlay-con-inner">
                    <div class="service-heading-area">
                      <h2>
                        Systems Administration/DevOps
                      </h2>
                      <div class="service-con-block">
                        <h2>
                          We &hearts; Servers. How about you?
                        </h2>
                        <a href="JavaScript:void(0)" class="service-btn"
                          >Read more</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="service-item-block">
            <div class="service-item-block-inner">
              <div class="service-img-area">
                <img src="" class="img-fluid" />
                <div class="service-overlay-con">
                  <div class="service-overlay-con-inner">
                    <div class="service-heading-area">
                      <h2>
                        Web Development
                      </h2>
                      <div class="service-con-block">
                        <h2>
                          Landing pages, portfolio sites, shops, boring web2 stuff.
                        </h2>
                        <a href="JavaScript:void(0)" class="service-btn"
                          >Read more</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.service-main-sec {
  margin: 0px;
  padding: 160px 0 100px 0;
  background: #121212;
  position: relative;
  top: 0px;
}
.service-main-sec:after {
  content: "";
  position: absolute;
  left: 0;
  top: -160px;
  height: 100%;
  width: 100%;
  background: #121212;
  z-index: -1;
}
.service-main-heading-area {
  margin: 0px;
  padding: 0px;
  text-align: center;
}
.service-main-heading-area h2 {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 60px;
  line-height: 70px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #fff;
  margin: 0 0 80px 0;
}
.custom-row {
  position: relative;
  top: 0px;
}
.service-item-block {
  margin: 0px;
  padding: 0px;
  position: relative;
  overflow: hidden;
}
.service-item-block-inner {
  margin: 0px;
  padding: 0px;
  position: relative;
  cursor: pointer;
}
.service-img-area {
  margin: 0px;
  padding: 0px;
  position: relative;
  z-index: 1;
  border-radius: 20px;
  border: 2px solid transparent;
}
.service-img-area img {
  border-radius: 20px;
  width: 100%;
  height: 450px;
  object-fit: cover;
}
.service-img-area:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(18, 18, 18, 0.75) 84.37%,
    #121212 100%
  );
  opacity: 0.9;
  border-radius: 20px;
}
.service-overlay-con {
  margin: 0px;
  padding: 0px;
  position: absolute;
  bottom: 60px;
  width: 100%;
  z-index: 1;
}
.service-overlay-con-inner {
  margin: 0px;
  padding: 0px 30px;
  text-align: center;
}
.service-heading-area {
  margin: 0px;
  padding: 0px;
  text-align: center;
}
.service-heading-area h2 {
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #fff;
  margin: 0px;
  transition: opacity 0.3s;
}
.service-heading-area h2 span {
  display: block;
}
.service-con-block {
  margin: 0px;
  padding: 0px;
  text-align: center;
  position: absolute;
  opacity: 0;
  visibility: hidden;
  bottom: -100%;
  transition: all ease 0.4s;
  width: 100%;
  left: 0;
}
.service-con-block h2 {
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #fff;
  margin: 0px 0 20px 0;
  opacity: 1;
}
.service-con-block h3 {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  margin: 0 0 20px 0;
}
.service-btn {
  display: inline-block;
  padding: 16px 40px;
  background: #d11d27;
  border-radius: 30px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
}
.service-btn:hover {
  color: #fff;
}
.service-button-area {
  margin: 0px auto;
  padding: 0px;
  position: relative;
  bottom: 35px;
  z-index: 1;
  width: 90%;
}
.service-button-inner {
  margin: 0px;
  padding: 10px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
}
.service-icon-main {
  margin: 0px;
  padding: 0px;
}
.service-icon-inner {
  margin: 0px;
  padding: 0px;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #121212;
  border-radius: 5px;
}
.service-title-main {
  margin: 0px 0 0 15px;
  padding: 0px;
}
.service-title-main h3 {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #121212;
  margin: 0px;
}
.service-title-main p {
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  color: #d11d27;
  margin: 0px;
}
.service-item-block-inner:hover .service-heading-area h2 {
  opacity: 0;
}
.service-item-block-inner:hover .service-con-block {
  bottom: 30px;
  visibility: visible;
  opacity: 1;
}
.service-item-block-inner:hover .service-con-block h2 {
  opacity: 1;
}
.service-item-block-inner:hover .service-img-area:after {
  background: var(--black-color);
  opacity: 0.8;
  border: 2px solid var(--primary-color);
}
.service-item-block-inner:hover .service-img-area:after {
  background: #000;
  opacity: 0.8;
  border: 2px solid #d11d27;
}
</style>
<script></script>