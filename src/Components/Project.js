/* eslint-disable react/destructuring-assignment */
const Project = function (data) {
  const {
    image, name, description, lang, demo, code,
  } = data.data;
  console.log(image);
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <img src={`${process.env.PUBLIC_URL}./assets/micro-reddit(1).png`} className="card-img-top" alt="project" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <h6 className="card-subtitle mb-2 text-muted">
          Build using:
          {lang}
        </h6>
        <a href={demo} className="btn m-1 btn-info">View Demo</a>
        <a href={code} className="btn m-1 btn-info">View Code</a>
      </div>
    </div>
  );
};

export default Project;
