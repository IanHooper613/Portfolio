import React from 'react';
import ProjectItem from '../components/ProjectItem';
// import projects from '../utils/projects.json';
import { useStoreContext } from "../utils/GlobalState";
function Portfolio (){
	// console.log('projects ', projects);
	const [state] = useStoreContext();

	console.log('state ', state);
	return(
		<div>
			<h1>Portfolio</h1>
			{state.projects.map(o => (
				<ProjectItem key={o.id} project={o} />	
			))}
		</div>
	);
};
export default Portfolio;