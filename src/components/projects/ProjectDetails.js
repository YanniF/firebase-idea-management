import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetails = (props) => {
	const { project } = props;

	return project ? (
		<div>
			<div className="container section project-details">
				<div className="card z-depth-0">
					<div className="card-content">
						<span className="card-title">{project.title}</span>
						<p>{project.content}</p>
					</div>
					<div className="card-action grey lighten-4 grey-text">
						<div>
							Posted my {project.authorFirstName} {project.authorLastName}
						</div>
						<div>2dn September, 2am</div>
					</div>
				</div>
			</div>
		</div>
	) : (
		<div className="container center">
			<p>Loading project...</p>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		project: state.firestore.data['project'] && state.firestore.data.project,
	};
};

export default compose(
	firestoreConnect((props) => {
		return [ { collection: 'projects', doc: props.match.params.id, storeAs: 'project' } ];
	}),
	connect(mapStateToProps),
)(ProjectDetails);
