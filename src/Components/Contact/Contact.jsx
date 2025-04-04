import React from 'react'
import './Contact.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3eeb822c-63e6-4d08-a15b-ae944d7ad1a1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      console.log("Success", res);
    }
    else{
      alert(res.message)
    }
  };
  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>Have an idea, a project, or just want to connect? I'm always open to collaboration, freelance opportunities, or simply a good tech conversation. Feel free to reach out and let’s build something great together!</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" />
                    <p>shailendra.29sq@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" />
                    <p>+91 8431692392</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" />
                    <p>Bengaluru, Karnataka</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text"  placeholder='Enter your name'  name='name'/>
          <label htmlFor="">Your Email</label>
          <input type="text"  placeholder='Enter your email'  name='email'/>
          <label htmlFor="">Write your message here</label>
          <textarea name="message"  rows='8' placeholder='Enter your message'></textarea>
          <button type="submit" className="contact-submit">Submit now</button>

        </form>
      </div>
    </div>
  )
}

export default Contact
