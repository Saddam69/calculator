import React from 'react';
import PropTypes from 'prop-types';

function Keypad({ onButtonPress }) {
  const buttons = ['7', '8', '9', '+', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.','/', '=', 'C',  ];

  const handleClick = (button) => {
    onButtonPress(button);
  };

  return (
    <div className="keypad">
      {buttons.map((button, index) => (
        <button key={index} onClick={() => handleClick(button)}>
          {button}
        </button>
      ))}
    </div>
  );
}

Keypad.propTypes = {
  onButtonPress: PropTypes.func.isRequired,
};
export default Keypad;





























// import React from 'react';
// import PropTypes from 'prop-types';

// function Keypad({ onButtonPress }) {
//   const buttons = ['C','7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', ];

//   const handleClick = (button) => {
//     onButtonPress(button);
//   };

//   return (
//     <div className="keypad">
//       {buttons.map((button, index) => (
//         <button key={index} onClick={() => handleClick(button)}>
//           {button}
//         </button>
//       ))}
//     </div>
//   );
// }

// Keypad.propTypes = {
//   onButtonPress: PropTypes.func.isRequired,
// };

// export default Keypad;

