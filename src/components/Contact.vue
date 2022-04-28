<template>
  <div class="contact-main-sec">
    <div class="container-fluid p-0">
      <div class="row g-0">
        <div class="col-lg-6 col-12">
          <div class="map-sec-block">
            <div class="map-sec-block-inner">
              <img src="../assets/images/map.png" alt="" class="img-fluid" />
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-12">
          <div class="contactform-item-block">
            <div class="contactform-item-block-inner">
              <div class="row justify-content-center g-0">
                <div class="col-12">
                  <div class="contactform-con-block">
                    <h2>Contact Us</h2>
                    <div class="contactform-con-block-inner">
                      <form>
                        <div class="form-group">
                          <input
                            type="text"
                            name=""
                            class="form-control"
                            placeholder="Email address"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            name=""
                            class="form-control"
                            placeholder="First name"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            name=""
                            class="form-control"
                            placeholder="Last name"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            name=""
                            class="form-control"
                            placeholder="Contact number"
                          />
                        </div>
                        <div class="form-group">
                          <textarea
                            class="form-control"
                            placeholder="Massege..."
                          ></textarea>
                        </div>
                        <div class="form-group">
                          <button type="submit" class="primary-btn">
                            Submit
                          </button>
                        </div>
                      </form>
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
.contact-main-sec {
  margin: 0px;
  padding: 0 0 100px 0;
  background: #121212;
}
.map-sec-block {
  margin: 0px;
  padding: 0px;
}
.map-sec-block-inner {
  margin: 0px;
  padding: 0px;
}
.map-sec-block-inner img {
  height: 850px;
  object-fit: cover;
  width: 100%;
}
.contactform-item-block {
  margin: 50px;
  padding: 0px;
}
.contactform-item-block-inner {
  margin: 0px;
  padding: 0px;
}
.contactform-con-block {
  margin: 0px;
  padding: 0px;
}
.contactform-con-block-inner {
  margin: 0px;
  padding: 50px;
  border-radius: 10px;
  background: #fff;
}
.contactform-con-block-inner .form-group {
  margin: 0 0 1rem 0;
}
.contactform-con-block-inner .form-control {
  height: 55px;
  font-family: "DM Sans", sans-serif;
  font-weight: 400;
  color: #121212;
  background-color: #fff;
  border: 2px solid #d11d27;
  padding-left: 20px;
  transition: border 0.5s ease-in-out;
}
.contactform-con-block-inner textarea {
  height: 200px !important;
  padding: 20px;
}
.contactform-con-block-inner .primary-btn {
  border: none;
}
.contactform-item-block h2 {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: #fff;
  font-size: 44px;
  line-height: 1.4em;
  margin: 0px 0 30px 0px;
}
</style>
<script></script>