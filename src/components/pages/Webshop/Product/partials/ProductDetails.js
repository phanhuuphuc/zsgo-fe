const ProductDetails = () => {
  return (
    <section class="raffles-details">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-xl-7 col-lg-7">
            <div class="xzoom-container">
              <img
                class="xzoom5"
                id="xzoom-magnific"
                src="assets/images/lottery/d1.jpg"
                xoriginal="assets/images/lottery/d1.jpg"
                style="width: 635px;"
              />
              <div class="xzoom-thumbs">
                <div class="all-slider owl-carousel owl-theme owl-loaded">
                  <div class="owl-stage-outer">
                    <div
                      class="owl-stage"
                      style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s; width: 831.25px;"
                    >
                      <div
                        class="owl-item active"
                        style="width: 136.25px; margin-right: 30px;"
                      >
                        <a href="assets/images/lottery/d1.jpg">
                          <img
                            class="xzoom-gallery5 xactive"
                            src="assets/images/lottery/d1.jpg"
                            title="The description goes here"
                          />
                        </a>
                      </div>
                      <div
                        class="owl-item active"
                        style="width: 136.25px; margin-right: 30px;"
                      >
                        <a href="assets/images/lottery/d2.jpg">
                          <img
                            class="xzoom-gallery5"
                            src="assets/images/lottery/d2.jpg"
                            title="The description goes here"
                          />
                        </a>
                      </div>
                      <div
                        class="owl-item active"
                        style="width: 136.25px; margin-right: 30px;"
                      >
                        <a href="assets/images/lottery/d3.jpg">
                          <img
                            class="xzoom-gallery5"
                            src="assets/images/lottery/d3.jpg"
                            title="The description goes here"
                          />
                        </a>
                      </div>
                      <div
                        class="owl-item active"
                        style="width: 136.25px; margin-right: 30px;"
                      >
                        <a href="assets/images/lottery/d4.jpg">
                          <img
                            class="xzoom-gallery5"
                            src="assets/images/lottery/d4.jpg"
                            title="The description goes here"
                          />
                        </a>
                      </div>
                      <div
                        class="owl-item"
                        style="width: 136.25px; margin-right: 30px;"
                      >
                        <a href="assets/images/lottery/d2.jpg">
                          <img
                            class="xzoom-gallery5"
                            src="assets/images/lottery/d3.jpg"
                            title="The description goes here"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="owl-controls">
                    <div class="owl-nav">
                      <div class="owl-prev" style="">
                        <i class="fa fa-angle-left"></i>
                      </div>
                      <div class="owl-next" style="">
                        <i class="fa fa-angle-right"></i>
                      </div>
                    </div>
                    <div class="owl-dots" style="display: none;"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-5">
            <div class="raffles-ends-box">
              <div class="counter-area">
                <h5>This Competition Ends In:</h5>
                <div class="c" data-countdown2="2021/12/15">
                  <p>
                    00 : <span>Days</span>
                  </p>{" "}
                  <p>
                    00 : <span>Hours</span>
                  </p>{" "}
                  <p>
                    00 : <span>Minutes</span>
                  </p>{" "}
                  <p>
                    00 <span>Seconds</span>
                  </p>
                </div>
              </div>
              <div class="top-bar-wrapper">
                <div class="numbers">
                  <span>0</span>
                  <span>400</span>
                </div>
                <div class="top-bar">
                  <div class="progress-bar" style="width: 70%;"></div>
                  <div class="main-bar"></div>
                </div>
              </div>
              <div class="main-content">
                <h6 class="t-left">
                  <i class="fas fa-ticket-alt"></i> 99 Tickets Left
                </h6>
                <div class="price-area">
                  €1.00
                  <span>Per Tickets</span>
                </div>
                <div class="p-b">
                  <div class="price-qty">
                    <span class="q i">
                      <i class="fas fa-minus"></i>
                    </span>
                    <span class="price">2</span>
                    <span class="q d">
                      <i class="fas fa-plus"></i>
                    </span>
                  </div>
                  <a href="#" class="mybtn1">
                    Buy Ticket
                  </a>
                </div>
                <p class="t-price">€239.99 Buy Now</p>
              </div>
            </div>
            <div class="r-features">
              <h6>
                <i class="fas fa-check"></i> Buying a ticket gives you a chance
                of winning.
              </h6>
              <h6>
                <i class="fas fa-check"></i> You'll receive a notification when
                the raffle ends.
              </h6>
              <h6>
                <i class="fas fa-check"></i> Buying a ticket gives you a chance
                of winning.
              </h6>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-7">
            <div class="raffle-details">
              <h2>HyperX - JETBLACK</h2>
              <h4>Overview</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed ex eget mi sollicitudin consequat. Sed rhoncus ligula vel
                justo dignissim aliquam. Maecenas non est vitae ipsum luctus
                feugiat.
              </p>
              <p>
                Fusce purus nunc, sodales at condimentum sed, ullamcorper a
                nulla. Nam justo est, venenatis quis tellus in, volutpat
                eleifend nunc. Vestibulum congue laoreet mi non interdum. Ut ut
                dapibus tellus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
