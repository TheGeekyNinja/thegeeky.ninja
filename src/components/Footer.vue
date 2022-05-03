<template>
  <footer class="fin-footer">
    <div class="container">
      <div class="row">
        <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">
          <div class="social-media-col">
            <div class="footer-logo">
              <img src="../assets/images/Logo.png" alt="" srcset="" />
            </div>
            <div class="footer-para">
              <p>
                Finbuzz amet sit amet, consectetur adipise cingt sed doeiusmod
                tempor incididuntue labore et dolore magna.
              </p>
            </div>
            <div class="footer-social-media">
              <ul>
                <li>
                  <a href="javascript:void(0)"
                    ><i class="fa fa-facebook" aria-hidden="true"></i
                  ></a>
                </li>
                <li>
                  <a href="javascript:void(0)"
                    ><i class="fa fa-twitter" aria-hidden="true"></i
                  ></a>
                </li>
                <li>
                  <a href="javascript:void(0)"
                    ><i class="fa fa-linkedin" aria-hidden="true"></i
                  ></a>
                </li>
                <li>
                  <a href="javascript:void(0)"
                    ><i class="fa fa-pinterest" aria-hidden="true"></i
                  ></a>
                </li>
                <li>
                  <a href="javascript:void(0)"
                    ><i class="fa fa-skype" aria-hidden="true"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">
          <div class="list-col">
            <div class="footer-head-what">
              <h4>Title goes here..</h4>
            </div>
            <div class="footer-list">
              <div class="row">
                <div class="col-lg-6">
                  <ul class="footer-list-column">
                    <li>
                      <a href="javascript:void(0)">Link goes here..</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Link goes here..</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Link goes here..</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Link goes here..</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Link goes here..</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Link goes here..</a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul class="footer-list-column">
                    <li>
                      <a href="javascript:void(0)">Link goes here..</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Link goes here..</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Link goes here..</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-4 col-sm-6">
          <div class="list-col">
            <div class="footer-head-what">
              <h4>Title goes here..</h4>
            </div>
            <div class="footer-list">
              <div class="row">
                <div class="col-lg-6">
                  <ul class="footer-list-column">
                    <li>
                      <a href="javascript:void(0)">Link goes here..</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Link goes here..</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Link goes here..</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Link goes here..</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Link goes here..</a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul class="footer-list-column">
                    <li>
                      <a href="javascript:void(0)">Link goes here..</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Link goes here..</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Link goes here..</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="copyright">
          <p>All Rights Reserved</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
/* footer css start*/

.fin-footer {
  padding: 100px 0;
}

.footer-social-media ul {
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
}

.footer-social-media li {
  padding: 0px;
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-right: 5px;
  background-color: #d11d27;
  transition: all 0.3s ease-in-out;
}
.footer-social-media li i {
  color: #fff;
}

.footer-social-media li:hover {
  background-color: #121212;
  color: #fff;
}

.footer-para p {
  padding: 20px 20px 20px 0;
  font-family: "DM Sans", sans-serif;
}

.social-media-col {
  position: relative;
}

.footer-head-what h4 {
  font-weight: 700;
  padding: 0 0 30px 0;
}

.footer-list ul {
  list-style: none;
  padding: 0;
}

.footer-list li {
  padding-bottom: 10px;
  transition: all 0.3s ease-in-out;
}
.footer-list li a {
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  color: #121212;
  font-size: 17px;
  line-height: 28px;
  text-decoration: none;
}

.footer-list li:hover {
  color: #d11d27;
  transform: translateX(5px);
}

.footer-head-what h4 {
  position: relative;
  padding: 0 0 15px 0;
  margin: 0 0 15px 0;
  font-weight: 700;
}

.footer-head-what h4::before {
  content: "";
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 15px;
  height: 4px;
  background-color: var(--light-orange-color);
  border: none;
  border-radius: 10px;
}

.footer-head-what h4::after {
  content: "";
  position: absolute;
  left: 20px;
  bottom: 0px;
  width: 25px;
  height: 4px;
  background-color: var(--orange-main-color);
  border: none;
  border-radius: 10px;
}

.list-col {
  position: relative;
}

.list-col::after {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  width: 1px;
  height: 100%;
  background-color: var(--border-color);
}

.footer-head-get h4 {
  position: relative;
  padding: 0 0 15px 0;
  margin: 0 0 15px 0;
  font-weight: 700;
}

.footer-head-get h4::before {
  content: "";
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 15px;
  height: 4px;
  background-color: var(--light-orange-color);
  border: none;
  border-radius: 10px;
}

.footer-head-get h4::after {
  content: "";
  position: absolute;
  left: 20px;
  bottom: 0px;
  width: 25px;
  height: 4px;
  background-color: var(--orange-main-color);
  border: none;
  border-radius: 10px;
}

.footer-email {
  display: flex;
}

.footer-email input {
  outline: none;
  border: 1px solid var(--border-color);
  padding: 12px 6px;
}

.footer-email i {
  padding: 20px 20px;
  height: 100%;
  background-color: var(--orange-main-color);
  color: var(--white-color);
  border-radius: 2px;
}

.copyright {
  padding: 50px 0 0 0;
  text-align: center;
  position: relative;
}

.copyright p {
  display: inline;
}
</style>
<script></script>