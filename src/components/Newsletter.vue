<template>
  <div class="newsletter-main-sec">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="newsletter-heading-area">
            <h2>Subscribe Our Newsletter</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
      <div class="newsletter-con-main">
        <div class="newsletter-con-inner">
          <form>
            <div class="newslwtter-row">
              <div class="form-field-cus">
                <input
                  type="text"
                  name=""
                  class="custom-form-control"
                  placeholder="First Name"
                />
              </div>
              <div class="form-field-cus">
                <input
                  type="text"
                  name=""
                  class="custom-form-control"
                  placeholder="Last Name"
                />
              </div>
              <div class="form-field-cus">
                <input
                  type="email"
                  name=""
                  class="custom-form-control"
                  placeholder="Email Address"
                />
              </div>
              <div class="form-field-cus">
                <button type="submit" class="banner-btn subscribe">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.newsletter-main-sec {
  margin: 0px;
  padding: 100px 0;
  background: #121212;
  position: relative;
  z-index: 1;
}
.newsletter-heading-area {
  margin: 0px;
  padding: 0px;
  text-align: center;
}
.newsletter-heading-area h2 {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 50px;
  line-height: 50px;
  text-align: center;
  letter-spacing: 0px;
  color: #fff;
  margin: 0 0 20px 0;
}
.newsletter-heading-area p {
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #fff;
  margin: 0px;
}
.newsletter-con-main {
  margin: 50px 0 0 0;
  padding: 0px;
}
.newsletter-con-inner {
  margin: 0px;
  padding: 0px;
}
.newslwtter-row {
  margin: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
}
.form-field-cus {
  margin: 0px 10px 0 0;
  padding: 0px;
  width: 300px;
}
.form-field-cus .custom-form-control {
  width: 100%;
  display: block;
  border-radius: 0px;
  border: none;
  background: #fff;
  padding: 22px 20px;
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.05em;
  color: #121212;
}
.banner-btn {
  display: inline-block;
  padding: 12px 50px;
  text-align: center;
  background: #fff;
  color: #d11d27;
  font-family: "DM Sans", sans-serif;
  font-weight: 900;
  font-size: 19px;
  line-height: 28px;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 10px 0px 10px 0px;
  border: none;
  transition: background ease-in-out 0.4s;
}
.banner-btn:hover {
  background: #d11d27;
  color: #fff;
}
</style>
<script></script>