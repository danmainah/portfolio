const Navbar =  () => {
    return ( 
        <nav class="navbar sticky-top navbar-light bg-light">
          <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
            <ul class="navbar-nav d-flex justify-content-center">
             <li class="nav-item">
             <a class="nav-link active" aria-current="page" href="#">About</a>
             </li>
            <li class="nav-item">
             <a class="nav-link" href="#">Projects</a>
             </li>
            <li class="nav-item">
             <a class="nav-link" href="#">Contact</a>
         </li>
        </ul>
          </div>
        </nav>
     );
}

export default Navbar;