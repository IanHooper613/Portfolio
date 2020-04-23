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
							<img src='' alt='Me' />
						</div>
						<div className='col-sm'>
								<p>
										'I am just a traveler searching for purity.'  That is a quote from the man pictured on this page, Thomas Moore, in the movie the Saint.
										This is one of Val Kilmer's best roles in my opinion.  Although I suspect this page is intended to be a platform to actually add my projects
										in the future, I think I need a lot more practice in the 'markup' area.  I should have allowed myself more time to work on this homework- a 
										mistake I will not make again.  I am not really sure what else I should be writing here.
								</p>
						</div>
						<div className='col-lg-auto'></div>
				</div>
			</div> 
    );
};
export default Home;