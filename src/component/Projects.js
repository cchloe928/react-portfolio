function Projects () {
    return (
<div id="portfolio" className="portfolio">
        <h1>Portfolio</h1>
        <div className="portfolio__container">
          <div className="horiseon">
            <a href="https://github.com/cchloe928/horiseon/">
              <img className="horiseon__page" src={require("./images/horiseon-challenge1.png")} />
            </a>
          </div>
          <div className="row">
            <div className="password-generator">
              <img src={require("./images/password_generator-challenge3.png")} alt="zero" style={{width: '25%', height: '40%'}} />
            </div>
            <div className="comingsoon1">
              <img src={require("./images/comingsoon1.jpeg")} alt="one" style={{width: '25%', height: '25%'}} />
            </div>
            <div className="comingsoon2">
              <img src={require("./images/comingsoon2.png")} alt="two" style={{width: '25%', height: '25%'}} />
            </div>
            <div className="github">
              <a href="http://github.com/cchloe928/">
                <img src={require("./images/github.jpg")} alt="github" style={{width: '25%', height: '40%'}} />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Projects