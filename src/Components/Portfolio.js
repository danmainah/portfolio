const Portfolio = function () {
  return (
    <section id="tmPortfolio">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="tm-portfolio-item">
              <div className="tm-portfolio-description">
                <h3 className="text-dark">
                  My Skills
                  <span className="tm-title-small"> (2019 January to Present)</span>
                </h3>
                <div className="mb-0">
                  <ul>
                    <li> Front-end development; ReactJS | JQuery | WordPress | NextJS </li>
                    <li> Back-end development; Ruby on Rails, Django </li>
                    <li> Databases; Postgres | MySql </li>
                    <li> Mobile development; ReactNative </li>
                    <li> Styling; SASS | CSS-in-JS | Bootstrap | TailwindCSS</li>
                    <li>
                      Tools and Methods: Git, GitHub, Heroku, Mobile/Responsive Development,
                      RSpec, Chrome Dev Tools
                    </li>
                    <li> Professional; Remote Pair-Programming, Teamwork</li>
                  </ul>
                </div>
                <a
                  id="Projects"
                  href="https://docs.google.com/document/d/1GP3E5YdVOtdw6YOCsPHWuZd2u3OjSHlm22kaH8SalGY/edit?usp=sharing"
                  className="btn btn-info m-2 align-item-center"
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
