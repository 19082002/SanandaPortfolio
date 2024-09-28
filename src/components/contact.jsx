import { Send } from "lucide-react"
import "../css/contact.css"
function Contact() {
  return (
    <div id="contact">
      <h1 className="contactPageTitle">Contact Me</h1>
      {/* <span className="contactDesc">dgyisyhdsucdio</span>      */}
      <form action="" className="contactForm">
          <input type="text" placeholder="Name"className="name" />
          <input type="email" className="email" placeholder="Enter your mail"/>
          <textarea name="message" rows="5"placeholder="your message" className="msg"></textarea>
          <button type="submit" value='send' className="submitButton">
            <Send className="icon"/>
            Submit</button>
<div className="links"></div>
      </form>
    </div>
  )
}

export default Contact
