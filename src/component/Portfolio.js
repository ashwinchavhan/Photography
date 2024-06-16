// Portfolio.js
// import React from "react";
// import { NavLink, Routes, Route } from 'react-router-dom';
// import Animation from './Animation';
// import Events from './Events';
// import './Portfolio.css';

// const Portfolio = () => {
//   return (
//     <div className="portfolio">
//       <nav className="portfolio-nav">
//         <NavLink to="/portfolio/animations">Animations</NavLink>
//         <NavLink to="/portfolio/events">Events</NavLink>
//       </nav>

//       <Routes>
//         <Route path="/animations" element={<Animation />} />
//         <Route path="/events" element={<Events />} />
//       </Routes>
//     </div>
//   );
// };

// export default Portfolio;





// Portfolio.js
// import React from "react";
// import { Link, Routes, Route } from "react-router-dom";
// import Animation from './Animation';
// import Events from "./Events";

// const Portfolio = () => {
//   return (
//     <div>
//       <h2>Portfolio</h2>
//       <ul>
//         <li>
//           <Link to="/portfolio/Animation">Animations</Link>
//         </li>
//         <li>
//           <Link to="/portfolio/Events">Events</Link>
//         </li>
//       </ul>

//       <Routes>
//         <Route path="/portfolio/Animation" element={<Animation />} />
//         <Route path="/portfolio/Events" element={<Events />} />
//       </Routes>
//     </div>
//   );
// };

// export default Portfolio;




    

// import React from "react";
// import { NavLink, Outlet, Routes, Route, useParams } from 'react-router-dom';
// import Animations from './Animations';
// import Marriage from './Marriage';
// import All from './All';
// import './Portfolio.css';


// const Portfolio = () => {
//     const { category } = useParams();

//     return (

//       <div className="new-gallery">

//       <nav className="new-nav"> 
      
      
//           <NavLink to="/Portfolio/animations">Animation</NavLink>
//           <NavLink to="/Portfolio/marriage">Events</NavLink>
//           <NavLink to="/Portfolio/all">Others</NavLink>
//       </nav>


//       <Routes>
//       <Route path="/" element={<Animations />} />
//           <Route path="Animations" element={<Animations />} />
//           <Route path="Marriage" element={<Marriage />} />
//           <Route path="All" element={<All />} />
//       </Routes>

//       <div>ram ram</div>
//   </div>

// );
// };

// export default Portfolio;






// import React from 'react';
// import './Portfolio.css'; // Import the corresponding CSS file
//  <img src={imageweding} alt="home img1" />
// function Portfolio () {
//   return (
//     <div>
//       <div className="parent-container">
//         <div className="child-container" id="one">
//           <img src="https://source.unsplash.com/s4uCgs7qVQc" alt="Portfolio 1" width="100%" height="auto" />
//           <img src="https://source.unsplash.com/6Pou6SeJ6cY" alt="Portfolio 2" width="100%" height="auto" />
//           <img src="https://source.unsplash.com/QwoNAhbmLLo" alt="Portfolio 3" width="100%" height="auto" />
//           <img src="https://source.unsplash.com/an-artists-rendering-of-a-distant-object-in-space-fSLGThEmY2Y" alt="Portfolio 4" width="100%" height="auto" />
//           <img src="https://source.unsplash.com/3yQY9GPM8Mg" alt="Portfolio 5" width="100%" height="auto" />
//         </div>
//         <div className="child-container" id="two">
//           <img src="https://source.unsplash.com/QrlCL6DH3yU" alt="Portfolio 6" width="100%" height="auto" />
//           <img src="https://source.unsplash.com/7bnvNN3R_eo" alt="Portfolio 7" width="100%" height="auto" />
//           <img src="https://source.unsplash.com/zwk1sQqGRcQ" alt="Portfolio 8" width="100%" height="auto" />
//         </div>
//         <div className="child-container" id="three">
//           <img src="https://source.unsplash.com/UGNXT7QryGA" alt="Portfolio 9" width="100%" height="auto" />
//           <img src="https://source.unsplash.com/nc1zsYGkLFA" alt="Portfolio 10" width="100%" height="auto" />
//           <img src="https://source.unsplash.com/a-man-in-a-space-suit-standing-on-top-of-a-rock-XDFfAHlxw9I" alt="Portfolio 11" width="100%" height="auto" />
//           <img src="https://source.unsplash.com/kXLgdCmmGYk" alt="Portfolio 12" width="100%" height="auto" />
//           <img src="https://source.unsplash.com/OiiVv1iiB0A" alt="Portfolio 13" width="100%" height="auto" />
//         </div>
//       </div>
//       <div className="greeting">
//         <h1>Thanks for visiting</h1>
//         <a href="https://codepen.io/Mysha484" target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>
//       </div>
//     </div>
//   );
// }

// export default Portfolio;
import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div>


    <h1>  PORTFOLIO</h1>
<div class="grid-container">
  <div>
    <img class='grid-item grid-item-1' src='https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
    <p>"I'm so happy today!"</p>
  </div>
  <div>
    <img class='grid-item grid-item-2' src='https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
    <p>"I see those nugs."</p>
  </div>
  <div>
    <img class='grid-item grid-item-3' src='https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
    <p>"I love you so much!"</p>
  </div>
  <div>
    <img class='grid-item grid-item-4' src='https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
    <p>"I'm the baby of the house!"</p>
  </div>
  <div>
    <img class='grid-item grid-item-5' src='https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
    <p>"Are you gunna throw the ball?"</p>
  </div>
  <div>
    <img class='grid-item grid-item-6' src='https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
    <p>"C'mon friend!"</p>
  </div>
  <div>
    <img class='grid-item grid-item-7' src='https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
    <p>"A rose for mommy!"</p>
  </div>
  <div>
    <img class='grid-item grid-item-8' src='https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
    <p>"You gunna finish that?"</p>
  </div>
  <div>
    <img class='grid-item grid-item-9' src='https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
    <p>"We can't afford a cat!"</p>
  </div>
  <div>
    <img class='grid-item grid-item-10' src='https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
    <p>"Dis my fren!"</p>
  </div>



  <div>
  <img class='grid-item grid-item-1' src='https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
  <p>"I'm so happy today!"</p>
</div>
<div>
  <img class='grid-item grid-item-2' src='https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
  <p>"I see those nugs."</p>
</div>
<div>
  <img class='grid-item grid-item-3' src='https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
  <p>"I love you so much!"</p>
</div>
<div>
  <img class='grid-item grid-item-4' src='https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
  <p>"I'm the baby of the house!"</p>
</div>
<div>
  <img class='grid-item grid-item-5' src='https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
  <p>"Are you gunna throw the ball?"</p>
</div>
<div>
  <img class='grid-item grid-item-6' src='https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
  <p>"C'mon friend!"</p>
</div>
<div>
  <img class='grid-item grid-item-7' src='https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
  <p>"A rose for mommy!"</p>
</div>
<div>
  <img class='grid-item grid-item-8' src='https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
  <p>"You gunna finish that?"</p>
</div>
<div>
  <img class='grid-item grid-item-9' src='https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
  <p>"We can't afford a cat!"</p>
</div>
<div>
  <img class='grid-item grid-item-10' src='https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
  <p>"Dis my fren!"</p>
</div>
</div>



     
    </div>
  );
};

export default Portfolio;
