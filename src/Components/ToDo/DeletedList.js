import React from 'react';
import ToDoCard from './Card';
import { MyContext } from '../../App';


class DeletedList extends React.Component
{
		
	handleClickUndo=(value)=>(e)=>{
		const Id=	e.target.dataset.id;
		// const deletedlist= value.state.data.slice();
		const todo=value.state.data.find(function(element){
			return element.id===Id;
		});
		// todo.completed=false;
		todo.deleted=false;
		value.addToDo(todo);
			}

			handleClickComplete=(value)=>(e)=>{
				const Id=	e.target.dataset.id;
				// const deletedlist= value.state.data.slice();
				const completed=value.state.data.find(function(element){
					return element.id===Id;
				});
				completed.completed=true;
				completed.deleted=false;
				value.addToDo(completed);
					}

render(){
	
	return(
		<MyContext.Consumer>{
		value=>(
			
	<div className="DeletedList">
	<h3>Deleted Tasks</h3>
 
 {value.state.data.filter(t => t.deleted).map(t=> <div key={t.id} className="display"> 
	<ToDoCard  id={t.id}  name={t.taskName}/>
	<div><input type="button" value="  undo   " data-id={t.id} name="undo" onClick={this.handleClickUndo(value)} />
	<input type="button" value="complete" data-id={t.id}  name="" onClick={this.handleClickComplete(value)} /></div> 
	</div>
	)}  
 </div>
			
		)}
		</MyContext.Consumer>
		)
}
}


export default DeletedList





