const Navbar = function () {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bgc sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand link-info" href="Home">Danmainah</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link link-info" aria-current="page" href="Home">HOME</a>
              <a className="nav-link link-info" href="About">ABOUT</a>
              <a className="nav-link link-info" href="Projects">PROJECTS</a>
              <a className="nav-link link-info" href="Contact">CONTACT</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
