const initState = {
    projects:[
        {id:'1', title: 'Play Cricket', content: 'blah blah'},
        {id:'2', title: 'Project 2', content: 'blah blah'},
        {id:'3', title: 'Project 3', content: 'blah blah'}
    ]
};
const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            return state; 
        case 'CREATE_PROJECT_ERROR':
                console.log('Error: ', action.err)
            return state; 
        default:
        return state;
    }
}
export default projectReducer;