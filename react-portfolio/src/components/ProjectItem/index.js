import React from 'react';

function ProjectItem ({ project }) {

  console.log('proj ', project);
  return (
    <div className='card mb-3'>
      <div className='row no-gutters'>
        <div className='col-md-4'>
          <img src={project.thumbnail} className='card-img' alt='jeremiah' />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>{project.name}</h5>
            <p className='card-text'>{project.description}</p>
            <p className='card-text'><small className='text-muted'>{project.repository}</small></p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectItem;