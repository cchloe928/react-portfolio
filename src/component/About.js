function About() {
    return (
        <div>
            <div className="container">
                <div id="home" className="home text">
                    <img src={require ("./images/chloe-home.jpeg")} />
                    <h1>Hello!</h1>
                    <h4>My name is CHLOE CHOI</h4>
                </div>
            </div>
            <div id="about" className="about">
                <h1>About Me</h1>
                <div className="aboutme__container">
                    <div className="about-me">
                        <img src={require ("./images/chloe-about.jpg")} alt="about-me" style={{ width: '70%' }} />
                    </div>
                    <div className="about-coding">
                        <img src={require ("./images/coding.jpg")} alt="coding" style={{ width: '70%' }} />
                    </div>
                    <p>
                        In 2022, I started my coding bootcamp at University of Pennsylvania
                    </p>
                </div>
            </div>
        </div>

    )
}

export default About