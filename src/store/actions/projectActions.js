export const createProject =(project) =>{
    return (dispatch, getState, { getFirestore, getFirebase }) =>{
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Bash',
            authorLastName: 'Ali',
            authorId: 123,
            createdAt: new Date()
        })
        .then(product =>  dispatch({type: 'CREATE_PROJECT', project}))
        .catch(err => dispatch({type:'CREATE_PROJECT_ERROR', err})
        );
    }
};