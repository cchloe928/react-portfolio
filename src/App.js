import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
<div>
  <section className="wrap">
    <div className="intro_bg">
      <img src="./Develop/assets/images/cute-cat.jpg"/>
      <div className="fixed_search_area">
        <form>
          <input type="search" placeholder="Search" />
          <span>
            <img src="./Develop/assets/images/search.jpg" />
          </span>
        </form>
      </div>
      <ul className="fixed_nav">
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#portfolio">PORTFOLIO</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </div>
  </section>
  <main>
    <section className="chloe's">
      <div className="container">
        <div id="home" className="home text">
          <img src="./Develop/assets/images/chloe-home.jpeg" />
          <h1>Hello!</h1>
          <h4>My name is CHLOE CHOI</h4>
        </div>
      </div>
      <div id="about" className="about">
        <h1>About Me</h1>
        <div className="aboutme__container">
          <div className="about-me">
            <img src="./Develop/assets/images/chloe-about.jpg" alt="about-me" style={{width: '70%'}} />
          </div>
          <div className="about-coding">
            <img src="./Develop/assets/images/coding.jpg" alt="coding" style={{width: '70%'}} />
          </div>
          <p>
            In 2022, I started my coding bootcamp at University of Pennsylvania
          </p>
        </div>
      </div>
      <div id="portfolio" className="portfolio">
        <h1>Portfolio</h1>
        <div className="portfolio__container">
          <div className="horiseon">
            <a href="https://github.com/cchloe928/horiseon/">
              <img className="horiseon__page" src="./Develop/assets/images/horiseon-challenge1.png" />
            </a>
          </div>
          <div className="row">
            <div className="password-generator">
              <img src="./Develop/assets/images/password_generator-challenge3.png" alt="zero" style={{width: '25%', height: '40%'}} />
            </div>
            <div className="comingsoon1">
              <img src="./Develop/assets/images/comingsoon1.jpeg" alt="one" style={{width: '25%', height: '25%'}} />
            </div>
            <div className="comingsoon2">
              <img src="./Develop/assets/images/comingsoon2.png" alt="two" style={{width: '25%', height: '25%'}} />
            </div>
            <div className="github">
              <a href="http://github.com/cchloe928/">
                <img src="./Develop/assets/images/github.jpg" alt="github" style={{width: '25%', height: '40%'}} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="contact">
        <h1>Contact</h1>
        <div className="contact-instagram">
          <a href="https://www.instagram.com/wanderlust._.chloe/?hl=en">
            <img src="./Develop/assets/images/580b57fcd9996e24bc43c521.png" alt="instagram" style={{width: '100%'}} />
          </a>
        </div>
        <div className="contact-email">
          <img src="./Develop/assets/images/email.jpg" alt="email" style={{width: '100%'}} />
        </div>
        <div className="contact-phone">
          <img src="./Develop/assets/images/call-or-text.png" alt="phone" style={{width: '100%'}} />
        </div>
      </div>
    </section>
  </main>
  <footer>
    <div className="footer">
      <h4>Thank you for visitng my website</h4>
      <p>Copyright ⓒ 2022 by Chloe Choi</p>
    </div>
  </footer>
</div>


    </div>
  );
}

export default App;
