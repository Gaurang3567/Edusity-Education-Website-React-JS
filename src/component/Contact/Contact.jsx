import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import locatio_icon from '../../assets/location-icon.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "8093ed47-0d7b-4803-bebd-e587196fae79");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consectetur sint impedit repellat ipsam unde nihil iusto atque necessitatibus harum.</p>
        <ul>
            <li><img src={mail_icon} alt="" />Contact@GreatStack.dev</li>
            <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
            <li><img src={locatio_icon} alt="" />77 Massachusetts Ave, Cambridge <br /> MA 02139,United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label htmlFor='name'>Your Name</label>
            <input type="text" name='name' placeholder='Enter Your Name' required id='name'/>
            <label htmlFor='phone'>Phone Number</label>
            <input type="text" name='phone' placeholder='Enter Your Phone Number' required id='phone'/>
            <textarea name="message" id=""  rows="10" placeholder='Enter Your Massage' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
