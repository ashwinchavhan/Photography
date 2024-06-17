import React from "react";

import './Contact.css'


const Contact =()=>{
  
  return(



    <div>
    


<section class="contact-page-sec">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="contact-info">
          <div class="contact-info-item">
            <div class="contact-info-icon">
              <i class="fas fa-map-marked"></i>
            </div>
            <div class="contact-info-text">
              <h2>address</h2>
              <span>Shop No -6 ,Pune-  Kothrud - Nandan pride near - Karve Statue </span>
              <span>Pune-MAHARASTRA , INDIA</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="contact-info">
          <div class="contact-info-item">
            <div class="contact-info-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="contact-info-text">
              <h2>E-mail & Contact No.</h2>
              <span>info@LoremIpsum.com</span>
              <span>yourmail@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="contact-info">
          <div class="contact-info-item">
            <div class="contact-info-icon">
              <i class="fas fa-clock"></i>
            </div>
            <div class="contact-info-text">
              <h2>office time</h2>
              <span>Mon - Thu 9:00 am - 4.00 pm</span>
              <span>Thu - Mon 10.00 pm - 5.00 pm</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="social">
                
                <a href="www.whatsapp.com" style={{ "--socialAni": 1 }}><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://www.instagram.com/rahul__vaishnav__rj21/" style={{ "--socialAni": 2 }}><i className="fa-brands fa-instagram"></i></a>
                <a href="www.facebook.com" style={{ "--socialAni": 3 }}><i className="fab fa-whatsapp"></i></a>

                <a href="https://www.youtube.com/@r-tiststudios4400?si=NErk_mTCO-AjiTJ5" style={{ "--socialAni": 4 }} target="_blank" rel="noopener noreferrer">
  <i className="fa-brands fa-youtube"></i>
</a>



              </div>
    <div class="row">
      <div class="col-md-8">
        <div class="contact-page-form" method="post">
          <h2>Get in Touch</h2>
          <form action="contact-mail.php" method="post">
            <div class="row">
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field">
                  <input type="text" placeholder="Your Name" name="name" />
                </div>
              </div>
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field">
                  <input type="email" placeholder="E-mail" name="email" required />
                </div>
              </div>
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field">
                  <input type="text" placeholder="Phone Number" name="phone" />
                </div>
              </div>
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field">
                  <input type="text" placeholder="Subject" name="subject" />
                </div>
              </div>
              <div class="col-md-12 message-input">
                <div class="single-input-field">
                  <textarea placeholder="Write Your Message" name="message"></textarea>
                </div>
              </div>
              <div class="single-input-fieldsbtn">
                <input type="submit" value="Send Now" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="col-md-4">
        <div class="contact-page-map">
        <iframe
  title="Google Maps Pune"
  width="100%"
  height="450"
  frameBorder="0"
  allowFullScreen
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15121.9890902831!2d73.80410818849612!3d18.504013889796966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfc062fa8de1%3A0x5d04560a509d2ae5!2sNandan%20Pride%2C%20147%2F9%2C%20Warje%20Malwadi%20Rd%2C%20Mayur%20Colony%2C%20Kothrud%2C%20Pune%2C%20Maharashtra%20411038!5e0!3m2!1sen!2sin!4v1625139573159"
></iframe>




        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )

}

export default Contact