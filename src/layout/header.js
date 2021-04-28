import logo from '../../public/images';

function Header() {
  return (
    <header id="header" className="header-shop">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <div className="navbar-logo">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
