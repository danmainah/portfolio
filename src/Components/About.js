import '../style/About.css';
import '../style/animations.scss';
import background from '../assets/bg.jpg';

const About = function () {
  return (
    <section id="About" className="parallax-window" data-parallax="scroll" style={{ backgroundImage: `url(${background})` }}>
      <div className="container-fluid tm-brand-container-outer d-flex justify-content-end">
        <div className="row">
          <div className="col-12">
            <div className="ml-auto mr-0 tm-bg-black-transparent text-white tm-brand-container-inner">
              <div className="tm-brand-container text-center">
                <h1 className="tm-brand-name">Daniel Maina</h1>
                <div className="tm-brand-description mb-0 typing-demo text-center wordCarousel">
                  <span>Am a: </span>
                  <div>
                    <ul className="flip3">
                      <li className="text-info">Front-end Developer</li>
                      <li className="text-info">Back-end Developer</li>
                      <li className="text-info">Full-stack Developer</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tm-bg-white-transparent tm-welcome-container">
        <div className="container-fluid">
          <div className="row h-100">
            <div className="col-md-7 tm-welcome-left-col">
              <div className="tm-welcome-left">
                <h2 className="tm-welcome-title">About me</h2>
                <p className="pb-0">
                  A multi-skilled full-stack developer with hands-on experience
                  in designing and developing web-based applications.
                  Passionate about designing and developing web-based applications.
                  Open for exploring exciting full-stack, back-end,
                  and front-end development opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
