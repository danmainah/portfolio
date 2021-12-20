const Portfolio = function () {
  return (
    <section id="tmPortfolio">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="tm-portfolio-item">
              <div className="tm-portfolio-description">
                <h3 className="text-info">
                  My Skills
                  <span className="tm-title-small"> (2019 January to Present)</span>
                </h3>
                <div className="mb-0">
                  <ul>
                    <li> Front-end development; ReactJS | JQuery | WordPress | NextJS </li>
                    <li> Back-end development; Ruby on Rails </li>
                    <li> Databases; Postgres | MySql </li>
                    <li> Infra; Netlify | Heroku | DigitalOcean</li>
                    <li> Mobile development; ReactNative </li>
                    <li> Styling; SASS | CSS-in-JS | Bootstrap | TailwindCSS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
