import Project from './Project';

const devs = [
  {
    id: 1,
    name: 'Micro-Reddit',
    description: 'This is a rails project that replicates how reddit apps function.It test the MVC structure implementation in rails.It also test Building using active records.Build using ruby on rails as backend and using HTML CSS and bootstrap for the frontend',
    image: '../assets/bg.jpg',
    demo: 'https://solai-reddit.herokuapp.com/',
    code: 'https://github.com/danmainah/micro-reddit',
    type: 'mine',
    lang: 'Ruby on Rails',
  },
  {
    id: 2,
    name: 'Micro-Reddit',
    description: 'This is a rails project that replicates how reddit apps function.It test the MVC structure implementation in rails.It also test Building using active records.Build using ruby on rails as backend and using HTML CSS and bootstrap for the frontend',
    image: '../assets/bg.jpg',
    demo: 'https://solai-reddit.herokuapp.com/',
    code: 'https://github.com/danmainah/micro-reddit',
    type: 'group',
    lang: 'Ruby on Rails',
  },
  {
    id: 3,
    name: 'Micro-Reddit',
    description: 'This is a rails project that replicates how reddit apps function.It test the MVC structure implementation in rails.It also test Building using active records.Build using ruby on rails as backend and using HTML CSS and bootstrap for the frontend',
    image: '../../assets/bg.jpg',
    demo: 'https://solai-reddit.herokuapp.com/',
    code: 'https://github.com/danmainah/micro-reddit',
    type: 'group',
    lang: 'Ruby on Rails',
  },
];

const Projects = function () {
  // const group = devs.filter((value) => value.group);
  // const solo = devs.filter((value) => value.mine);
  return (
    <div className="row">
      <div className="btn-group" role="group" aria-label="Basic mixed styles example">
        <button type="button" className="btn btn-danger">All</button>
        <button type="button" className="btn btn-warning">Individual</button>
        <button type="button" className="btn btn-success">Group</button>
      </div>
      {devs.map((data) => (
        <Project key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Projects;
