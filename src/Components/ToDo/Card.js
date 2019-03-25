import React from 'react';

class ToDoCard extends React.Component{
 
	render()
	{
	return(
<div className="card">
  <div className="card-body">
    {this.props.name}
	  </div>
</div>
	)
}
}
export default  ToDoCard;