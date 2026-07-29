import whatsapp from "../assets/whatsapp.png";
import tiktok from "../assets/tiktok.png";
import facebook from "../assets/facebook.png";
import gmail from "../assets/gmail.png";
function Contact() {

  return(
    <section id="contact">
      <div className="contact-info">
      <h1>Contact Us</h1>
      <p>For More Enquires <i>reach out on:</i></p>
      <div>
        <a href="https://wa.me/2348101217454?text=Hi,%20can%20I%20know%20more%20about%20your%20services?"><img src={whatsapp} alt="whatsapp" width={50} /></a>
        <br />        
        <a href="https://www.tiktok.com/@jodas_technologies"><img src={tiktok} alt="tiktok" width={40} /></a>
        <a href="mailto:adewunmioluwadamilare09@gmail.com?subject=Hi,&body=Can%20I%20know%more%20about%20you!"><img src={gmail} alt="gmail" width={40} /></a>
        <a href="https://www.facebook.com/adewunmi.oluwadamilare.2025?text=Hi,%20can%20I%20know%20more%20about%20your%20services?"><img src={facebook} alt="facebook" width={40} /></a>
      </div>
    </div>
    </section>
  )
}
export default Contact;