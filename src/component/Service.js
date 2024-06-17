
import './Service.css'

import React from 'react';

import image1 from './images/weding.jpg';

import image2 from './images/wed2.jpg';

import image3 from './images/slide.jpg';

import image4 from './images/b1.jpg';

import image5 from './images/b2.jpg';



const images = [image1 , image2, image3, image4,image5/*, add more images here */];

const Service = ()=>{
  return(

    <div>

    <div class="container">
		<header class="main-header clearfix">
	
			<h1 class="name">Services provided by  <span>R-tist</span></h1>
		</header>

		<div class="content clearfix">

			<div class="cube-container">
				<div class="photo-cube">

        <img className="front" src={images[0]} alt="Image1" />
					<div class="back photo-desc">
					  <h3>Pre-Wedding Photography</h3>
					  <p>Capture the romantic moments before your big day with our
             expert pre-wedding photoshoots..</p>
						<a href="Contact" class="button">contact us</a>
					</div>
					<img class="left" src="http://gdurl.com/zDJz" alt=""/>
					<img class="right" src="http://gdurl.com/JLdx" alt=""/>

				</div>
			</div>	

			<div class="cube-container">
				<div class="photo-cube">

        <img className="front" src={images[1]} alt="Image2" />
					<div class="back photo-desc">
					  <h3>Wedding Photography</h3>
					  <p>Relive your special day with our comprehensive wedding photography services..</p>
						<a href="contact" class="button">contact us</a>
					</div>
					<img class="left" src="http://gdurl.com/A2BF" alt=""/>
					<img class="right" src="http://gdurl.com/wt4v" alt=""/>

				</div>
			</div>	

			<div class="cube-container">
				<div class="photo-cube">

        <img className="front" src={images[3]} alt="Image2" />
					<div class="back photo-desc">
					  <h3>Engagement Photography</h3>
					  <p>Celebrate your engagement with stunning photos that capture your love and excitement.
            .</p>
						<a href="contact" class="button">contact us</a>
					</div>
					<img class="left" src="http://gdurl.com/tvtR" alt=""/>
					<img class="right" src="http://gdurl.com/VjHH" alt=""/>

				</div>
			</div>	






      <div class="cube-container">
      <div class="photo-cube">

      <img   className="front" src={images[4]} alt="Image2" />
        <div class="back photo-desc">
          <h3>Family Portraits</h3>
          <p>Preserve precious family moments with our professional family portrait sessions..</p>
          <a href="contact" class="button">contact us</a>
        </div>
        <img class="left" src="http://gdurl.com/A2BF" alt=""/>
        <img class="right" src="http://gdurl.com/wt4v" alt=""/>

      </div>
    </div>	

    <div class="cube-container">
      <div class="photo-cube">

      <img className="front" src={images[5]} alt="Image2" />
        <div class="back photo-desc">
          <h3>Fashion Photography</h3>
          <p>Elevate your fashion portfolio with our creative and stylish fashion photography sessions.r. Fusce dapibus, tellus ac cursus commodo.</p>
          <a href="contact" class="button">Contact us</a>
        </div>
        <img class="left" src="http://gdurl.com/tvtR" alt=""/>
        <img class="right" src="http://gdurl.com/VjHH" alt=""/>

      </div>
    </div>	



    <div class="cube-container">
    <div class="photo-cube">

      <img class="front" src="http://gdurl.com/tvtR" alt=""/>
      <div class="back photo-desc">
        <h3>Fashion Photography</h3>
        <p>Elevate your fashion portfolio with our creative and stylish fashion photography sessions.r. Fusce dapibus, tellus ac cursus commodo.</p>
        <a href="contact" class="button">Contact us</a>
      </div>
      <img class="left" src="http://gdurl.com/tvtR" alt=""/>
      <img class="right" src="http://gdurl.com/VjHH" alt=""/>

    </div>
  </div>

		</div>
	</div>
    
    
    </div>

 
  )

  
}
export default Service