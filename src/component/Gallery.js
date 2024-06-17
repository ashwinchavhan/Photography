import React from 'react';
import './Gallery.css';





// Import your images
// import image1 from './images/image1.jpg';
// import image2 from './images/image2.jpeg';
// import image3 from './images/image3.jpeg';
// import image4 from './images/image4.jpeg';
// import image5 from './images/image5.jpeg';
// import image6 from './images/image6.jpeg';
// Add more imports as needed

// const images = [image1, image2, image3 , image4,image5,image6/*, add more images here */];

const Gallery = () => {
  return (
 <div>

 <p class="heading"> Gallery</p>
 <div class="gallery-image">
   <div class="img-box">
     <img src="https://picsum.photos/350/250?image=444" alt="" />
     <div class="transparent-box">
       <div class="caption">
         <p>Library</p>
         <p class="opacity-low">Architect Design</p>
       </div>
     </div> 
   </div>
   <div class="img-box">
     <img src="https://picsum.photos/350/250/?image=232" alt="" />
     <div class="transparent-box">
       <div class="caption">
         <p>Night Sky</p>
         <p class="opacity-low">Cinematic</p>
       </div>
     </div>
   </div>
   <div class="img-box">
     <img src="https://picsum.photos/350/250/?image=431" alt="" />
     <div class="transparent-box">
       <div class="caption">
         <p>Tea Talk</p>
         <p class="opacity-low">Composite</p>
       </div>
     </div>
   </div>
   <div class="img-box">
     <img src="https://picsum.photos/350/250?image=474" alt="" />
     <div class="transparent-box">
       <div class="caption">
         <p>Road</p>
         <p class="opacity-low">Landscape</p>
       </div>
     </div> 
   </div>
   <div class="img-box">
     <img src="https://picsum.photos/350/250?image=344" alt="" />
     <div class="transparent-box">
       <div class="caption">
         <p>Sea</p>
         <p class="opacity-low">Cityscape</p>
       </div>
     </div> 
   </div>
   <div class="img-box">
     <img src="https://picsum.photos/350/250?image=494" alt="" />
     <div class="transparent-box">
       <div class="caption">
         <p>Vintage</p>
         <p class="opacity-low">Cinematic</p>
       </div>
     </div> 
   </div>
 </div>
 
 
 </div>
  );
}

export default Gallery;




// const Gallery = () => {


//   const galleryRef = useRef(null);

//   useEffect(() => {
//     const gallery = galleryRef.current;
//     const track = gallery.querySelector('.gallery-track');
//     const cards = gallery.querySelectorAll('.card');
//     const easing = 0.05;
//     let startY = 0;
//     let endY = 0;
//     let raf;

//     const lerp = (start, end, t) => start * (1 - t) + end * t;

//     function updateScroll() {
//       startY = lerp(startY, endY, easing);
//       gallery.style.height = `${track.clientHeight}px`;
//       track.style.transform = `translateY(-${startY}px)`;
//       activateParallax();
//       raf = requestAnimationFrame(updateScroll);
//       if (startY.toFixed(1) === window.scrollY.toFixed(1))
//         cancelAnimationFrame(raf);
//     }

//     function startScroll() {
//       endY = window.scrollY;
//       cancelAnimationFrame(raf);
//       raf = requestAnimationFrame(updateScroll);
//     }

//     function parallax(card) {
//       const wrapper = card.querySelector('.card-image-wrapper');
//       const diff = card.offsetHeight - wrapper.offsetHeight;
//       const { top } = card.getBoundingClientRect();
//       const progress = top / window.innerHeight;
//       const yPos = diff * progress;
//       wrapper.style.transform = `translateY(${yPos}px)`;
//     }

//     const activateParallax = () => cards.forEach(parallax);

//     function init() {
//       activateParallax();
//       startScroll();
//     }

//     window.addEventListener('load', updateScroll, false);
//     window.addEventListener('scroll', init, false);
//     window.addEventListener('resize', updateScroll, false);

//     return () => {
//       window.removeEventListener('load', updateScroll, false);
//       window.removeEventListener('scroll', init, false);
//       window.removeEventListener('resize', updateScroll, false);
//     };
//   }, []);

//   return (
//     <main className="gallery" ref={galleryRef}> 


// {/* <div class="custom-gallery-container">
//         <div className="gallery__hdg">
//             <h1>GALLERY</h1>
//         </div>  </div> */}




//       <div className="gallery-track">
//         <div className="card"> 
//           <div className="card-image-wrapper">
//             <img src="https://source.unsplash.com/kL3u4Tqfn1s" alt="Gallery Image 1" />
//           </div>
//         </div>


//         <div className="card"> 
//           <div className="card-image-wrapper">
//             <img src="https://source.unsplash.com/kL3u4Tqfn1s" alt="Gallery Image 1" />
//           </div>
//         </div>




//         <div className="card">
//           <div className="card-image-wrapper">
//             <img src='https://source.unsplash.com/yVUQlyRlJSw' alt="Gallery Image 1" />
//           </div>
//         </div>

//         <div className="card">
//           <div className="card-image-wrapper">
//             <img src='https://source.unsplash.com/7H77FWkK_x4' alt="Gallery Image 1" />
//           </div>
//         </div>

//         <div className="card">
//           <div className="card-image-wrapper">
//             <img src='https://source.unsplash.com/r7YZXv5f5cc' alt="Gallery Image 1" />
//           </div>
//         </div>


//         <div className="card">
//           <div className="card-image-wrapper">
//             <img src="https://source.unsplash.com/kL3u4Tqfn1s" alt="Gallery Image 1" />
//           </div>
//         </div>


//         <div className="card">
//           <div className="card-image-wrapper">
//             <img src="https://source.unsplash.com/kL3u4Tqfn1s" alt="Gallery Image 1" />
//           </div>
//         </div>

//         <div className="card">
//           <div className="card-image-wrapper">
//             <img src="https://source.unsplash.com/kL3u4Tqfn1s" alt="Gallery Image 1" />
//           </div>
//         </div>

//         <div className="card">
//           <div className="card-image-wrapper">
//             <img src="https://source.unsplash.com/kL3u4Tqfn1s" alt="Gallery Image 1" />
//           </div>
//         </div>

//         <div className="card">
//           <div className="card-image-wrapper">
//             <img src="https://source.unsplash.com/kL3u4Tqfn1s" alt="Gallery Image 1" />
//           </div>
//         </div>

//         <div className="card">
//           <div className="card-image-wrapper">
//             <img src="https://source.unsplash.com/kL3u4Tqfn1s" alt="Gallery Image 1" />
//           </div>
//         </div>

//         <div className="card">
//           <div className="card-image-wrapper">
//             <img src="https://source.unsplash.com/kL3u4Tqfn1s" alt="Gallery Image 1" />
//           </div>
//         </div>

//         <div className="card">
//           <div className="card-image-wrapper">
//             <img src="https://source.unsplash.com/kL3u4Tqfn1s" alt="Gallery Image 1" />
//           </div>
//         </div>

//         <div className="card">
//           <div className="card-image-wrapper">
//             <img src="https://source.unsplash.com/kL3u4Tqfn1s" alt="Gallery Image 1" />
//           </div>
//         </div>

//         <div className="card">
//           <div className="card-image-wrapper">
//             <img src="https://source.unsplash.com/kL3u4Tqfn1s" alt="Gallery Image 1" />
//           </div>
//         </div>

//         <div className="card">
//           <div className="card-image-wrapper">
//             <img src="https://source.unsplash.com/kL3u4Tqfn1s" alt="Gallery Image 1" />
//           </div>
//         </div>

//         <div className="card">
//           <div className="card-image-wrapper">
//             <img src="https://source.unsplash.com/kL3u4Tqfn1s" alt="Gallery Image 1" />
//           </div>
//         </div>

//         <div className="card">
//           <div className="card-image-wrapper">
//             <img src='https://source.unsplash.com/psdV2Rl-GvU' alt="Gallery Image 1" />
//           </div>
//         </div>


//       </div>
//     </main>
//   );
//  };

// export default Gallery;

