import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

const Profile = ({ A, B, C, children, fnc, age }) => {
  return (
    <div className='info'>
      <h2>Name: {A}</h2>
      <h2>Bio: {B}</h2>
      <h2>Profession: {C}</h2>
      <h2>Age:{age}</h2>
      <button onClick={() => fnc(A)}> Show user </button>
      {children}
    </div>
  );
};
Profile.defaultProps = {
  age: 20,
};
Profile.propTypes = {
  age: PropTypes.string,
};
export default Profile;
