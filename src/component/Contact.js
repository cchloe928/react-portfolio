function Contact() {
  return (
    <div id="contact" className="contact">
      <h1>Contact</h1>
      <div className="contact-instagram">
        <a href="https://www.instagram.com/wanderlust._.chloe/?hl=en">
          <img src={require("./images/580b57fcd9996e24bc43c521.png")} alt="instagram" style={{ width: '100%' }} />
        </a>
      </div>
      <div className="contact-email">
        <a href="mailto:chloechoii928@gmail.com">
          <img src={require("./images/email.jpg")} alt="email" style={{ width: '100%' }} />
        </a>
      </div>
      <div className="contact-phone">
        <a href="tell:1234567890">
          <img src={require("./images/call-or-text.png")} alt="phone" style={{ width: '100%' }} />
        </a>
      </div>
    </div>
  )
}

export default Contact