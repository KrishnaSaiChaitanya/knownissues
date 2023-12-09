import React from "react";
import "./FeatureSection.css";

function FeatureSection() {
  return (
    <div>
      <section class="section feature" id="feature">
        <div class="grid">
          <div class="col-6">
            <div class="col-12">
              <div class="section-title">
                <h2>App Features</h2>
                <p>
                  Demoralized by the charms of pleasure of the moment, so
                  blinded by desire, that they cannot foresee idea of denouncing
                  pleasure and praising
                </p>
              </div>
            </div>
          </div>
          <div class="col-6 bg-elipse">
            <div class="col-lg-4 align-self-center text-center text-lg-right">
              <div class="feature-item">
                <div class="icon">
                  <i class="ti-brush-alt"></i>
                </div>

                <div class="content">
                  <h5>Beautiful Interface Design</h5>
                  <p>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising
                  </p>
                </div>
              </div>

              <div class="feature-item">
                <div class="icon">
                  <i class="ti-gift"></i>
                </div>

                <div class="content">
                  <h5>Unlimited Features</h5>
                  <p>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 text-center">
              <div class="feature-item mb-0">
                <div class="icon">
                  <i class="ti-comments"></i>
                </div>

                <div class="content">
                  <h5>Full free chat</h5>
                  <p>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising
                  </p>
                </div>
              </div>
              <div class="app-screen">
                <img
                  class="img-fluid"
                  src="images/phones/i-phone-screen.png"
                  alt="app-screen"
                />
              </div>

              <div class="feature-item">
                <div class="icon">
                  <i class="ti-support"></i>
                </div>

                <div class="content">
                  <h5>24/7 support by real people</h5>
                  <p>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 text-center text-lg-left align-self-center">
              <div class="feature-item">
                <div class="icon">
                  <i class="ti-image"></i>
                </div>

                <div class="content">
                  <h5>Retina ready greaphics</h5>
                  <p>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising
                  </p>
                </div>
              </div>

              <div class="feature-item">
                <div class="icon">
                  <i class="ti-pie-chart"></i>
                </div>

                <div class="content">
                  <h5>IOS &amp; android version </h5>
                  <p>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeatureSection;
