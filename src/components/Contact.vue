<template>
  <section class="call-back">
    <div class="container">
      <div class="row d-flex g-0">
        <div class="col-lg-7">
          <div class="call-sec-left-main">
            <div class="call-sec-left-inner">
              <h3>Connect with us!</h3>
              <p><a href="https://discord.gg/VVW3v2ABuT">Discord</a></p>
              <p><a href="https://t.me/TheGeekyNinja">Telegram</a></p>
              <p><a href="mailto:contact@thegeeky.ninja">Email</a></p>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="call-sec-right-main">
            <div>
            &lt;<span class="contactColor">Contact</span> <span style="color:red;">/</span>&gt;
            </div>
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
.call-sec-right-main .contactColor {
  color: #609bd7;
}
.call-sec-left-main {
  background-color: #121212;
  width: 100%;
  height: 100%;
  padding: 50px;
}
.call-sec-right-main {
  background-color: #121212;
  color:white;
  font-size: 40px;
  vertical-align: middle;
  height:100%;
}
.call-sec-right-main div {
  display:block;
  margin: auto;
  text-align:center;
  vertical-align: middle;
  padding-top:140px;
}

.call-sec-left-inner a {
  color: #fff;
  font-size:24px;
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