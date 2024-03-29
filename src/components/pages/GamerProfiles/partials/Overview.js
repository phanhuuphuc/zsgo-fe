import { Link } from "react-router-dom";
const Overview = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-3 col-lg-4">
          <aside>
            <div className="about">
              <h4>About Me</h4>
              <p>
                Nothing Interesting hasn't been written here, what a pity it is
                quite a nice field
              </p>
              <ul>
                <li>
                  <p>
                    <i className="fas fa-map-marked-alt"></i> Bern Switzerland
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    <i className="fas fa-calendar-alt"></i> Member Since 08 Jan
                    2021
                  </p>
                </li>
              </ul>
            </div>
            <div className="rank-area">
              <div className="top-area">
                <div className="left">
                  <img src="assets/images/gamer/lavel.png" alt="" />
                </div>
                <div className="right">
                  <p>
                    Rank: <span>12</span>
                  </p>
                </div>
              </div>
              <div className="bottom-area">
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: 75 }}
                  >
                    75%
                  </div>
                </div>
                <Link href="#">
                  View all Ranks <i className="fas fa-chevron-right"></i>
                </Link>
              </div>
            </div>
            <div className="achievment-area">
              <div className="header-area">
                <h4>Achievements</h4>
                <Link href="#">
                  All Rewards <i className="fas fa-chevron-right"></i>
                </Link>
              </div>
              <ul>
                <li>
                  <div className="s-a">
                    <img src="assets/images/gamer/a1.png" alt="" />
                    <span>
                      Tournaments <br />
                      Joined
                    </span>
                  </div>
                </li>
                <li>
                  <div className="s-a">
                    <img src="assets/images/gamer/a2.png" alt="" />
                    <span>
                      Sets of <br />
                      Missions
                    </span>
                  </div>
                </li>
                <li>
                  <div className="s-a">
                    <img src="assets/images/gamer/a3.png" alt="" />
                    <span>
                      Game <br />
                      plays
                    </span>
                  </div>
                </li>
                <li>
                  <div className="s-a">
                    <img src="assets/images/gamer/a4.png" alt="" />
                    <span>
                      Active <br />
                      Days
                    </span>
                  </div>
                </li>
                <li>
                  <div className="s-a">
                    <img src="assets/images/gamer/a5.png" alt="" />
                    <span>
                      Tournaments <br />
                      Won
                    </span>
                  </div>
                </li>
                <li>
                  <div className="s-a">
                    <img src="assets/images/gamer/a6.png" alt="" />
                    <span>
                      Friends <br />
                      Referred
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
        <div className="col-xl-9 col-lg-8">
          <main>
            <div className="main-box">
              <div className="header-area">
                <h4>Games Playing</h4>
              </div>
              <div className="table-responsive">
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <td>
                        <div className="game-info">
                          <img src="assets/images/gamer/g1.png" alt="" />
                          <div className="content">
                            <h6>Fortnite</h6>
                            <span>Wager Challenge</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="players">
                          <ul>
                            <li>
                              <Link href="#">
                                <img
                                  src="assets/images/player/sm1.png"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <img
                                  src="assets/images/player/sm2.png"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <img
                                  src="assets/images/player/sm3.png"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <img
                                  src="assets/images/player/sm4.png"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                              <span>32+</span>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <div className="ratio">
                          <span>Win Ratio</span>
                          <h4>63%</h4>
                        </div>
                      </td>
                      <td>
                        <div className="ratio">
                          <span>Elo Ratings </span>
                          <h4>2368</h4>
                        </div>
                      </td>
                      <td>
                        <Link href="#" className="mybtn2">
                          Challenge
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="game-info">
                          <img src="assets/images/gamer/g2.png" alt="" />
                          <div className="content">
                            <h6>Fortnite</h6>
                            <span>Wager Challenge</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="players">
                          <ul>
                            <li>
                              <Link href="#">
                                <img
                                  src="assets/images/player/sm1.png"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <img
                                  src="assets/images/player/sm2.png"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <img
                                  src="assets/images/player/sm3.png"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <img
                                  src="assets/images/player/sm4.png"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                              <span>32+</span>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <div className="ratio">
                          <span>Win Ratio</span>
                          <h4>63%</h4>
                        </div>
                      </td>
                      <td>
                        <div className="ratio">
                          <span>Elo Ratings </span>
                          <h4>2368</h4>
                        </div>
                      </td>
                      <td>
                        <Link href="#" className="mybtn2">
                          Challenge
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="game-info">
                          <img src="assets/images/gamer/g3.png" alt="" />
                          <div className="content">
                            <h6>Fortnite</h6>
                            <span>Wager Challenge</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="players">
                          <ul>
                            <li>
                              <Link href="#">
                                <img
                                  src="assets/images/player/sm1.png"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <img
                                  src="assets/images/player/sm2.png"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <img
                                  src="assets/images/player/sm3.png"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <img
                                  src="assets/images/player/sm4.png"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                              <span>32+</span>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <div className="ratio">
                          <span>Win Ratio</span>
                          <h4>63%</h4>
                        </div>
                      </td>
                      <td>
                        <div className="ratio">
                          <span>Elo Ratings </span>
                          <h4>2368</h4>
                        </div>
                      </td>
                      <td>
                        <Link href="#" className="mybtn2">
                          Challenge
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="game-info">
                          <img src="assets/images/gamer/g4.png" alt="" />
                          <div className="content">
                            <h6>Fortnite</h6>
                            <span>Wager Challenge</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="players">
                          <ul>
                            <li>
                              <Link href="#">
                                <img
                                  src="assets/images/player/sm1.png"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <img
                                  src="assets/images/player/sm2.png"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <img
                                  src="assets/images/player/sm3.png"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <img
                                  src="assets/images/player/sm4.png"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                              <span>32+</span>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <div className="ratio">
                          <span>Win Ratio</span>
                          <h4>63%</h4>
                        </div>
                      </td>
                      <td>
                        <div className="ratio">
                          <span>Elo Ratings </span>
                          <h4>2368</h4>
                        </div>
                      </td>
                      <td>
                        <Link href="#" className="mybtn2">
                          Challenge
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="game-info">
                          <img src="assets/images/gamer/g5.png" alt="" />
                          <div className="content">
                            <h6>Fortnite</h6>
                            <span>Wager Challenge</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="players">
                          <ul>
                            <li>
                              <Link href="#">
                                <img
                                  src="assets/images/player/sm1.png"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <img
                                  src="assets/images/player/sm2.png"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <img
                                  src="assets/images/player/sm3.png"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <img
                                  src="assets/images/player/sm4.png"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                              <span>32+</span>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <div className="ratio">
                          <span>Win Ratio</span>
                          <h4>63%</h4>
                        </div>
                      </td>
                      <td>
                        <div className="ratio">
                          <span>Elo Ratings </span>
                          <h4>2368</h4>
                        </div>
                      </td>
                      <td>
                        <Link href="#" className="mybtn2">
                          Challenge
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="game-info">
                          <img src="assets/images/gamer/g6.png" alt="" />
                          <div className="content">
                            <h6>Fortnite</h6>
                            <span>Wager Challenge</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="players">
                          <ul>
                            <li>
                              <Link href="#">
                                <img
                                  src="assets/images/player/sm1.png"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <img
                                  src="assets/images/player/sm2.png"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <img
                                  src="assets/images/player/sm3.png"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <img
                                  src="assets/images/player/sm4.png"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                              <span>32+</span>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <div className="ratio">
                          <span>Win Ratio</span>
                          <h4>63%</h4>
                        </div>
                      </td>
                      <td>
                        <div className="ratio">
                          <span>Elo Ratings </span>
                          <h4>2368</h4>
                        </div>
                      </td>
                      <td>
                        <Link href="#" className="mybtn2">
                          Challenge
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Overview;
