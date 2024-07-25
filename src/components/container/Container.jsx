/* eslint-disable no-unused-vars */
import React from 'react'

function Container({children}) {
  return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;
  
}

export default Container

// import React from 'react';
// import PropTypes from 'prop-types';

// function Container({ children }) {
//   return (
//     <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>
//   );
// }

// Container.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default Container;
