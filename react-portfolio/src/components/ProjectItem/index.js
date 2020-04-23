import React from 'react';
import './style.css';
function ProjectItem ({ project }) {

  console.log('proj ', project);
  return (
    <div className='card mb-3'>
      <div className='row'>
        <div className='col-md-4'>
          <img src={project.thumbnail} className='card-img' alt='jeremiah' />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>{project.name}</h5>
            <p className='card-text'>{project.description}</p>
            <small><a href={project.repository} className='left'>Github</a></small>
            <small><a href={project.deployed} className='right'>Deployed App</a></small>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectItem;