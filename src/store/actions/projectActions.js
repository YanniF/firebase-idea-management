export const createProject = project => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore(); // reference to the Firestore database

  firestore
    .collection("projects")
    .add({
      ...project,
      authorFirstName: "Yanni",
      authorLastName: "Fraga",
      authorId: 123,
      createdAt: new Date(),
    })
    .then(() => {
      dispatch({ type: "CREATE_PROJECT", project });
    })
    .catch(error => {
      dispatch({ type: "CREATE_PROJECT_ERROR", error });
    })
};
