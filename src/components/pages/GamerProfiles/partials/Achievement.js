const Achievement = () => {
    return ( <div className="container">
    <div className="row">
        <div className="col-xl-12">
            <div className="achievment-area big">
                <div className="header-area">
                    <h4>Achievements</h4>
                    <a href="#">All Rewards <i className="fas fa-chevron-right"></i></a>
                </div>
                <ul>
                    <li>
                        <div className="s-a">
                            <img src="assets/images/gamer/a1.png" alt=""/>
                            <span>Tournaments <br/>
                                Joined</span>
                        </div>
                    </li>
                    <li>
                        <div className="s-a">
                            <img src="assets/images/gamer/a2.png" alt=""/>
                            <span>Sets of <br/>
                                Missions</span>
                        </div>
                    </li>
                    <li>
                        <div className="s-a">
                            <img src="assets/images/gamer/a3.png" alt=""/>
                            <span>Game <br/>
                                plays</span>
                        </div>
                    </li>
                    <li>
                        <div className="s-a">
                            <img src="assets/images/gamer/a4.png" alt=""/>
                            <span>Active <br/>
                                Days</span>
                        </div>
                    </li>
                    <li>
                        <div className="s-a">
                            <img src="assets/images/gamer/a5.png" alt=""/>
                            <span>Tournaments <br/>
                                Won</span>
                        </div>
                    </li>
                    <li>
                        <div className="s-a">
                            <img src="assets/images/gamer/a6.png" alt=""/>
                            <span>Friends <br/>
                                Referred</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div> );

}
export default Achievement;