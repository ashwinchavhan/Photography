import React from 'react';
import { } from 'react-router-dom'; // Import Link from react-router-dom
import  './Home.css'
const Home = () => {

    // function toggleMenu() {
    //     const main = document.querySelector('header .main');
    //     main.classList.toggle('active');
    //   }
      
    //   const hamburger = document.querySelector('header .hamburger');
    //   hamburger.addEventListener('click', () => {
    //     toggleMenu();
    //   });




    return (
        <body>   
        
        
        
        
       

    

    <section className="container">
        <div className="main">
            <div className="rounding-sec">
                <div className="big-circle">
                <div className="icon-block">
                <a href="https://wa.me/7057050504" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  style={{ width: '50px', height: '50px' }}
                />
              </a>
            </div>




            <div className="icon-block">
            <a href="https://www.instagram.com/ashwin6895" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              style={{ width: '50px', height: '50px' }}
            />
          </a>
        </div>





            <div className="icon-block">
            <a href="https://github.com/ashwinchavhan" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="GitHub"
              style={{ width: '50px', height: '50px' }}
            />
          </a>
        </div>




        <div className="icon-block">
        <a href="https://www.youtube.com/channel/your-youtube" target="_blank" rel="noopener noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
          alt="YouTube"
          style={{ width: '50px', height: '50px' }}
        />
      </a>
    </div>

            
                 
                   
                    
                </div>
                <div className="images">
                    <img src="myimg6.jpg" alt="" className="img-w" />
                </div>
            </div>
            <div className="detail">
                <h3>Hi, I'm</h3>
                <h1><span style={{ color: '#f9532d' }}>SHUBHAM</span> TELI</h1>
                <p>I'm a professional Photographar. Our Main Goal   is to capture the magic before your big day. </p>
                <a href="contact" class="button">Contact us</a>
            </div>
        </div>
    </section>

    <div className='line'><span>line</span></div>

    <div className='newsection'>  <h1>!! ARTIST WORLD !!</h1>

    <div class="wrapper">

	<h2 className='h2'><strong>Lets Start a small Trip<span>(  )</span></strong></h2>

	<div class="cards">

		<figure class="card">

			<img alt='crds' src="https://www.linkpicture.com/q/1_1484.jpg" />

			<figcaption>    Happy Client</figcaption>

		</figure>

		<figure class="card">

			<img  alt='crds' src="https://www.linkpicture.com/q/2_965.jpg" />

			<figcaption>Stick Fight</figcaption>

		</figure>

		<figure class="card">

			<img alt='crds' src="https://www.linkpicture.com/q/3_695.jpg" />

			<figcaption>Minion Masters</figcaption>

		</figure>

		<figure class="card">

			<img  alt='crds' src="https://www.linkpicture.com/q/4_543.jpg" />

			<figcaption>KoseBoz!</figcaption>

		</figure>



        <figure class="card">

        <img alt='crds' src="https://www.linkpicture.com/q/4_543.jpg" />

        <figcaption>KoseBoz!</figcaption>

    </figure>



    <figure class="card">

    <img alt='crds' src="https://www.linkpicture.com/q/4_543.jpg" />

    <figcaption>KoseBoz!</figcaption>

</figure>

	</div>

	<h2><strong>FEEDBACK</strong></h2>

	<div class="news">

		<figure class="article">

			<img alt='crds' src="https://www.linkpicture.com/q/news1_1.jpg" />

			<figcaption>

				<h3>New Item</h3>

				<p>

					In today’s update, two heads are better than one, 
                    and three heads are better than that, as the all-new
                     Flockheart’s Gamble Arcana item for Ogre Magi makes 
                     its grand debut.

				</p>

			</figcaption>

		</figure>

		<figure class="article">

			<img alt='crds' src="https://www.linkpicture.com/q/news2.png" />

			<figcaption>

				<h3>Update</h3>

				<p>

					Just in time for Lunar New Year and 
                    the Rat’s time in the cyclical place of honor,
                     the Treasure of Unbound Majesty is
                      now available.

				</p>

			</figcaption>

		</figure>

	</div>

</div>
    
    
    </div>
    </body>

);
};

export default Home;

           