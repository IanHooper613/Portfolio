import React from 'react';

function Contact (){
    return(
			<div>
				<div className="container">
					<div className="row-align-items-left">
						<div className="col-sm-8">
						<form>
							<div className="form-group">
								<label>Name</label>
								<input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Jeremy" />
              </div>              
							<div className="form-group">
								<label>Email address</label>
								<input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
							</div>              
							<div className="form-group">
								<label>Message</label>
								<textarea className="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
							</div>
            </form>
            </div>			
					</div>
				</div>	
			</div>
        
    );
};
export default Contact;