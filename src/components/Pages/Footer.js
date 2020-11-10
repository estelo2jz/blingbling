import React from 'react'

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__box">
        <h2>JOIN OUR MAILING LIST</h2>
        <p>
          SUBSCRIBE for <br/>
          our neewest Discount and FREE Giveaway
        </p>
        <div className="footer__socials">
          <li>
            <i class="fab fa-facebook-square"></i>
          </li>
          <li>
            <i class="fab fa-youtube-square"></i>
          </li>
          <li>
            <i class="fab fa-instagram"></i>
          </li>
        </div>
        <p>
          © 2020 BLINGBLING
        </p>
      </div>
      <div className="footer__box">
        <h2>CONTACT US</h2>
        <p><span>Phone:</span>(415) 413*4915</p>
        <p><span>Days:</span>Monday - Friday</p>
        <p><span>Hours:</span>9am - 5pm PST</p>
        <p><span>Email:</span><br/>support@blingbling.com</p>
      </div>
      <div className="footer__box">
        <h2>GET TO KNOW US</h2>
        <ul>
          <li>
            <a href="#">Who we are</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">Shipping Policy</a>
          </li>
          <li>
            <a href="#">Returns and Refunds Policy</a>
          </li>
          <li>
            <a href="#">Terms and Condition</a>
          </li>
          <li>
            <a href="#">Privary Policy</a>
          </li>
          <li>
            <a href="#">Financing</a>
          </li>
        </ul>
      </div>
      <div>
        <p>
          Disclaimer: Our products are for cosmetic and entertainment purposes only and should not be used for the replacement of natural teeth or broken fillings. Custom Gold Grillz does not perform dental procedures, and we are not able to take impressions of your teeth in person. You must purchase a do-it-yourself mold kit or have your impression created by a licensed dentist. We will not be held liable for any direct, indirect, incidental, special, or consequential losses or damages arising from the use of our products.
        </p>
      </div>
    </div>
  )
}

export default Footer
