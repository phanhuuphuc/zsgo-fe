import React from "react";
import { Link } from "react-router-dom";
const HelpComponents = () => {
  return (
    <React.Fragment>
      <section className="help-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <aside>
                <ul>
                  <li>
                    <Link href="help1.html">
                      <i className="fas fa-chevron-right"></i>User Agreement
                    </Link>
                  </li>
                  <li>
                    <Link href="help2.html">
                      <i className="fas fa-chevron-right"></i>Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="help3.html" className="active">
                      <i className="fas fa-chevron-right"></i>FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="help4.html">
                      <i className="fas fa-chevron-right"></i>Cryptocurrency
                    </Link>
                  </li>
                  <li>
                    <Link href="help5.html">
                      <i className="fas fa-chevron-right"></i>Fee
                    </Link>
                  </li>
                  <li>
                    <Link href="help6.html">
                      <i className="fas fa-chevron-right"></i>Forget Password
                    </Link>
                  </li>
                  <li>
                    <Link href="help7.html">
                      <i className="fas fa-chevron-right"></i>Registration and
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link href="help8.html">
                      <i className="fas fa-chevron-right"></i>Technical issues
                    </Link>
                  </li>
                </ul>
              </aside>
            </div>
            <div className="col-lg-8">
              <div className="help-content">
                <h2 className="heading-title">FAQs</h2>
                <div className="h-inner-content">
                  <h4 className="content-title">Account Information</h4>
                  <div
                    className="accordion sorteo-accordion"
                    id="accordionExample1"
                  >
                    <div className="card">
                      <div className="card-header" id="headingOne1">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseOne1"
                            aria-expanded="true"
                            aria-controls="collapseOne1"
                          >
                            What if I forget my password?
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseOne1"
                        className="collapse show"
                        aria-labelledby="headingOne1"
                        data-parent="#accordionExample1"
                      >
                        <div className="card-body">
                          <p>
                            scelerisque consectetuer ac a at nunc, in lectus. Ut
                            lectus erat. Sit praesent tellus, ac eget pede
                            risus, urna ante nec tincidunt vel, tincidunt tortor
                            sit lacinia. Enim massa in, porttitor felis justo,
                            aenean habitant velit nunc, maecenas eget magna
                            viverra imperdiet magna tincidunt. Lacinia eleifend
                            luctus ante fermentum, lectus faucibus mi id, orci
                            congue, amet donec erat nisl vestibulum. Ut ac
                            luctus semper curabitur ipsum, odio pretium nec
                            interdum tellus urna.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo1">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTwo1"
                            aria-expanded="false"
                            aria-controls="collapseTwo1"
                          >
                            Can I change my username or email address?
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseTwo1"
                        className="collapse"
                        aria-labelledby="headingTwo1"
                        data-parent="#accordionExample1"
                      >
                        <div className="card-body">
                          <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingThree1">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseThree1"
                            aria-expanded="false"
                            aria-controls="collapseThree1"
                          >
                            How do I become a VIP?
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseThree1"
                        className="collapse"
                        aria-labelledby="headingThree1"
                        data-parent="#accordionExample1"
                      >
                        <div className="card-body">
                          <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-inner-content">
                  <h4 className="content-title">My wallet</h4>
                  <div
                    className="accordion sorteo-accordion"
                    id="accordionExample2"
                  >
                    <div className="card">
                      <div className="card-header" id="headingOne2">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseOne2"
                            aria-expanded="true"
                            aria-controls="collapseOne2"
                          >
                            Minimum Withdraw amount ?
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseOne2"
                        className="collapse show"
                        aria-labelledby="headingOne2"
                        data-parent="#accordionExample2"
                      >
                        <div className="card-body">
                          <p>
                            scelerisque consectetuer ac a at nunc, in lectus. Ut
                            lectus erat. Sit praesent tellus, ac eget pede
                            risus, urna ante nec tincidunt vel, tincidunt tortor
                            sit lacinia. Enim massa in, porttitor felis justo,
                            aenean habitant velit nunc, maecenas eget magna
                            viverra imperdiet magna tincidunt. Lacinia eleifend
                            luctus ante fermentum, lectus faucibus mi id, orci
                            congue, amet donec erat nisl vestibulum. Ut ac
                            luctus semper curabitur ipsum, odio pretium nec
                            interdum tellus urna.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo2">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTwo2"
                            aria-expanded="false"
                            aria-controls="collapseTwo2"
                          >
                            Minimum Deposit amount ?
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseTwo2"
                        className="collapse"
                        aria-labelledby="headingTwo2"
                        data-parent="#accordionExample2"
                      >
                        <div className="card-body">
                          <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingThree2">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseThree2"
                            aria-expanded="false"
                            aria-controls="collapseThree2"
                          >
                            How do I cancel a Withdrawal Request?
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseThree2"
                        className="collapse"
                        aria-labelledby="headingThree2"
                        data-parent="#accordionExample2"
                      >
                        <div className="card-body">
                          <p>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            sustainable VHS.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HelpComponents;
