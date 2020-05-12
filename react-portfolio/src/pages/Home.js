import React from 'react';

function Home (){

    return(
			<div className='container-sm'>
				<div className='row'>
						<div className='col-auto'>
								<h1 className='text-center'>About Me</h1>
						</div>
				</div>
				<div className='row'>
						<div className='col-sm text-center'>
							<img src='https://raw.githubusercontent.com/cbrittingham14/portfolio/master/react-portfolio/public/assets/images/portrait.jpg' className='self-portrait' alt='Me' />
						</div>
						<div className='col-sm'>
								<p>
								Full stack web developer and electrical engineer knowledgeable about both hardware and 
								software design and troubleshooting, experienced in problem solving, teamwork, and customer 
								service. Known for his ability to get along with everyone, his tenacity and creative thinking
								in solving complex problems, and his leadership abilities.
								</p>
						</div>
						<div className='col-lg-auto'></div>
				</div>
			</div> 
    );
};
export default Home;