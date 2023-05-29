import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Online Examination System</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      {/* Add any other desired header content */}
    </header>
  );
};

export default Header;