<template>
  <section class="call-back">
    <div class="container">
      <div class="row d-flex g-0">
        <di class="col-lg-7">
          <div class="call-sec-left-main">
            <div class="call-sec-left-inner">
              <h3>Request a Call Back</h3>
              <div class="call-details">
                <div class="call-name">
                  <input
                    type="text"
                    name=""
                    placeholder="Name"
                    id=""
                    class="form-control"
                  />
                </div>
                <div class="call-email">
                  <input
                    type="email"
                    name=""
                    placeholder="Email"
                    id=""
                    class="form-control"
                  />
                </div>
                <div class="call-phone">
                  <input
                    type="tel"
                    name=""
                    placeholder="Phone"
                    id=""
                    class="form-control"
                  />
                </div>
                <div class="call-message">
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="5"
                    placeholder="Message"
                    class="form-control"
                  ></textarea>
                </div>
              </div>
              <div class="call-submit">
                <a href="http://#">Submit Now </a>
              </div>
            </div>
          </div>
        </di>
        <div class="col-lg-5">
          <div class="call-sec-right-main">
            <img
              src="../assets/images/call.jpg"
              alt=""
              srcset=""
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.call-back {
  padding: 100px 0;
}

.call-sec-left-main {
  background-color: #121212;
  width: 100%;
  height: 100%;
  padding: 50px;
}

.call-sec-left-inner h3 {
  color: #fff;
  font-weight: 700;
  padding-bottom: 25px;
  margin-bottom: 30px;
  position: relative;
  font-family: "Poppins", sans-serif;
}

.call-sec-left-inner h3::before {
  content: "";
  position: absolute;
  height: 4px;
  width: 15px;
  background-color: #d11d27;
  bottom: 7px;
  left: 0px;
  border: none;
  border-radius: 10px;
}

.call-sec-left-inner h3::after {
  content: "";
  position: absolute;
  height: 4px;
  width: 25px;
  background-color: #d11d27;
  bottom: 7px;
  left: 20px;
  border-radius: 10px;
  border: none;
}

.call-name,
.call-email,
.call-phone {
  padding-bottom: 15px;
}

.call-message {
  padding-bottom: 30px;
}

.call-submit a {
  padding: 13px 34px;
  text-decoration: none;
  background-color: #d11d27;
  color: #fff;
  transition: all 0.3s ease-in-out;
  font-family: "DM Sans", sans-serif;
  margin: 40px 0 0 0;
  display: inline-block;
}

.call-submit a:hover {
  padding: 13px 34px;
  text-decoration: none;
  background-color: #fff;
  color: #d11d27;
}

.call-details input {
  font-family: "DM Sans", sans-serif;
  background-color: #fff;
  outline: none;
  border: none;
  border-radius: 0;
  transition: all 0.3ms ease-in-out;
  padding: 10px 10px;
}

.call-details input:focus {
  background-color: #fff;
  border: none;
  outline: none;
  box-shadow: none;
  border: #d11d27 1px solid;
  caret-color: #fff;
}

.call-details textarea {
  background-color: #fff;
  outline: none;
  border: none;
  border-radius: 0;
}

.call-details textarea:focus {
  background-color: #fff;
  outline: none;
  border: none;
  box-shadow: none;
  border: 1px solid #d11d27;
  caret-color: #fff;
}

.call-sec-right-main {
  position: relative;
  height: 100%;
}

.call-sec-right-main img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.call-fig {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 10;
}
</style>
<script></script>