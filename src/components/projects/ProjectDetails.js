import React from "react";

const ProjectDetails = (props) => {
  const id = props.match.params.id

  return (
    <div>
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Project Title - {id}</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptates cupiditate corporis veritatis
              maxime nemo rem eos autem impedit non ipsa exercitationem nesciunt ut ex mollitia, corrupti delectus,
              accusantium id!
            </p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted my Yanni</div>
            <div>2dn September, 2am</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails