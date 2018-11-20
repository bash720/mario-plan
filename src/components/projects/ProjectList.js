import React from 'react'
import ProjectSummary from './ProjectSummary';
import * as _ from 'lodash';
const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
        {projects && _.map(projects, project => <ProjectSummary project={project} key={project.id}/>)}
    </div>
  )
}

export default ProjectList