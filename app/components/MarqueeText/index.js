import React from 'react';
import './style.css';

function MarqueeText(props) {
    let direction = props.direction || 'left';
    let behavior =  props.behavior || 'scroll';
    let text = props.children || 'test marquee';
    let scrollamount = props.scrollamount || 7;

   return (
     <div className="marquee-container">
       <marquee
         className="marquee-text"
         direction={direction}
         behavior={behavior}
         scrollamount={scrollamount}
       >
         {text}
       </marquee>
     </div>
   );
}

export default MarqueeText;