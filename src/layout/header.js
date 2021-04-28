function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="navbar__logo">
            <img src="static/images/Logo.svg" className="" alt="logo" />
          </div>
          <div className="navbar__phone">
            <span className="d-none d-md-inline-block">¿Tienes alguna duda?</span>
            <span className="ml-3">
              <img src="static/images/ic_phone.svg" className="navbar__icon" alt="logo" />
              (01) 4416001
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
