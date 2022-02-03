import React from 'react';

const Button = ({ label, bgColor, color, width, height, fontSize, }) => {

 const classButton = {
     background: `linear-gradient(359deg, ${bgColor} 90%,white)`,
     color,
     width,
     height,
     borderRadius: '15px',
     outline:'none',
     border:'none',
     fontSize:'18px',
     fontWeight:'bold',
     letterSpacing:'1px',
     marginTop:'30px'
 }

  return <button classname="button" style={classButton}>{label}</button>;
}

export default Button;
