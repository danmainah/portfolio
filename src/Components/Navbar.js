const Navbar = function () {
  return (
    <nav className="navbar navbar-expand-lg bgc fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand link-info" href="#">Danmainah</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link link-info" aria-current="page" href="#">HOME</a>
            <a className="nav-link link-info" href="#">ABOUT</a>
            <a className="nav-link link-info" href="#">PROJECTS</a>
            <a className="nav-link link-info" href="#">CONTACT</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
