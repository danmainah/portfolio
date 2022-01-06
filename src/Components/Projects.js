import micro from '../assets/micro.png';
import vacations from '../assets/vacation.png';
import maths from '../assets/maths.png';
import corona from '../assets/corona.jpg';
import musika from '../assets/musika.png';
import projects from '../assets/projects.png';

const Projects = function () {
  return (
    <div className="container-fluid">
      <div className="row">
        <h2 className="tm-welcome-title d-flex bg-secondary bg-gradient justify-content-center">My Projects</h2>
        <div className="card col-lg-6 col-md-6 col-sm-12 bg-secondary bg-gradient">
          <img src={micro} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Micro-Reddit</h5>
            <p className="card-text">
              <small>
                This is a rails project that replicates how reddit apps function.
                It test the MVC structure implementation in rails.
                It also test Building using active records.
                Build using ruby on rails as backend and using HTML and bootstrap for the frontend
              </small>
            </p>
            <a href="https://solai-reddit.herokuapp.com/" className="btn btn-info m-2">View Demo</a>
            <a href="https://github.com/danmainah/micro-reddit" className="btn btn-info m-2">View Code</a>
          </div>
        </div>
        <div className="card col-lg-6 col-md-6 col-sm-12 bg-secondary bg-gradient">
          <img src={vacations} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Vacation Booking</h5>
            <p className="card-text">
              <small>
                It is a react app that allows user to browser destinations,
                book a destination and get the total cost of the destination,
                depending on number of days the user stays at the destination.
                Build using React,HTML,CSS and Bootstrap.
              </small>
            </p>
            <a href="https://booking-destinations.netlify.app/" className="btn btn-info m-2">View Demo</a>
            <a href="https://github.com/danmainah/vacations-booking-front-end" className="btn btn-info m-2">View Code</a>
          </div>
        </div>
        <div className="card col-lg-6 col-md-6 col-sm-12 bg-secondary bg-gradient">
          <img src={maths} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Math Magician</h5>
            <p className="card-text">
              <small>
                This a website for all fans of mathematics.
                It is a Single Page App (SPA) that allows users to make simple calculations,
                and read a random math-related quote.
                Created using React ,Html,CSS, Javascript.
              </small>
            </p>
            <a href="https://6151b8e2a5d486829dfa421d--quizzical-gates-1eca7b.netlify.app/" className="btn btn-info m-2">View Demo</a>
            <a href="https://github.com/danmainah/math-magicians" className="btn btn-info m-2">View Code</a>
          </div>
        </div>
        <div className="card col-lg-6 col-md-6 col-sm-12 bg-secondary bg-gradient">
          <img src={corona} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Metrics-webapp</h5>
            <p className="card-text">
              <small>
                This is a website that displays two pages.
                The Home page, where you can see,
                top 10 corona nations and a link to their respective data.
                And the Details page, where you can get more details on a coutry corona status.
                Created using React-Redux, Javascript.
              </small>
            </p>
            <a href="https://gifted-kepler-3add98.netlify.app/" className="btn btn-info m-2">View Demo</a>
            <a href="https://github.com/danmainah/metrics-webapp" className="btn btn-info m-2">View Code</a>
          </div>
        </div>
        <div className="card col-lg-6 col-md-6 col-sm-12 bg-secondary bg-gradient">
          <img src={musika} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Music-Instruments Store</h5>
            <p className="card-text">
              <small>
                A project to build a music instrument store,with a homepage and search result page ,
                demonstrating ability to use flexbox and creating an attractive webpage .
                Created using HTML CSS, Twitter-Bootstrap
              </small>
            </p>
            <a href="https://danmainah.github.io/music-instruments-store/" className="btn btn-info m-2">View Demo</a>
            <a href="https://github.com/danmainah/music-instruments-store" className="btn btn-info m-2">View Code</a>
          </div>
        </div>
        <div className="card col-lg-6 col-md-6 col-sm-12 bg-secondary bg-gradient">
          <img src={projects} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Micro-Reddit</h5>
            <p className="card-text">
              <small>
                This is a project that involve creating a transactions mobile app.
                It incude a grouped ,ungrouped and groups main pages,
                enabling user to track amount of time spent on each project.
                The user is able to classify projects into different groups
                and get total amount spent in each group.
                Build using Ruby on Rails,Html,CSS and Bootstrap.
              </small>
            </p>
            <a href="https://solai2.herokuapp.com/" className="btn btn-info m-2">View Demo</a>
            <a href="https://github.com/danmainah/group-transactions" className="btn btn-info m-2">View Code</a>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Projects;
