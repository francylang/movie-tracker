import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Header = ({ user, handleSignOut }) => {
  let userBox;

  const userContents = (
    <div className='user-box'>
      <p className='user'>{user.name}</p>
      <Link to='/favorites'>View Favorites</Link>
      <button
        onClick={() => handleSignOut()}>
        Sign Out
      </button>
    </div>);

  const noUserContents =
  <div className='no-user-box'>
    <Link className='login-link' to='/login'>Log In</Link>
    <Link className='login-link' to='/createuser'>Create Account</Link>
  </div>;

  (!user.name) ? userBox = noUserContents : userBox = userContents;

  return (
    <div className='header'>
      <h1>MovieTracker</h1>
      {userBox}
    </div>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  handleSignOut: PropTypes.func
};

export default Header;
