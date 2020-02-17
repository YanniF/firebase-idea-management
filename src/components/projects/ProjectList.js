import React from 'react';
import { Link } from 'react-router-dom';

import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects = [] }) => {
	return (
		<div className="project-list section">
			{projects.map((project) => (
				<Link key={project.id} to={'project/' + project.id}>
					<ProjectSummary project={project} />
				</Link>
			))}
		</div>
	);
};

export default ProjectList;
