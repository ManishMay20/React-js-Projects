const Header = () => {
  return (
    <div className="header">
      <img src="/images/brand_logo.png" alt="brand logo" />
      <nav>
        <ul>
          <li>LOCATION</li>
          <li>MENU</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </nav>
      <button className="primary-btn">Login</button>
    </div>
  );
};

export default Header;
