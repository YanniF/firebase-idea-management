export const createProject = (project) => (dispatch, getState, { getFirebase, getFirestore }) => {
	const firestore = getFirestore(); // reference to the Firestore database
	const profile = getState().firebase.profile;
	const authorId = getState().firebase.auth.uid;

	firestore
		.collection('projects')
		.add({
			...project,
			authorFirstName: profile.firstName,
			authorLastName: profile.lastName,
			authorId,
			createdAt: new Date(),
		})
		.then(() => {
			dispatch({ type: 'CREATE_PROJECT', project });
		})
		.catch((error) => {
			dispatch({ type: 'CREATE_PROJECT_ERROR', error });
		});
};
