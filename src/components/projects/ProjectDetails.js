import React from 'react';

const ProjectDetails = (props) => {
    const { match } = props;
    const { params } = match;
    console.log('match', params);

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {params.id}  </span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div> Posted By Bash</div>
                    <div> 16 November 2018</div>
                </div>
            </div>
        </div>
    )
}
export default ProjectDetails;