import React from 'react';
import ToDoCard from './Card';
import { MyContext } from '../../App';



class CompletedList extends React.Component
{

	
	handleClickUndo=(value)=>(e)=>{
		const Id=	e.target.dataset.id;
		// const completedlist= value.state.data.slice();
		const todo=value.state.data.find(function(element){
			return element.id===Id;
		});
		todo.completed=false;
		todo.deleted=false;
		value.addToDo(todo);
			}

			handleClickDelete=(value)=>(e)=>{
				const Id=	e.target.dataset.id;
				// const completedlist= value.state.data.slice();
				const deleted=value.state.data.find(function(element){
					return element.id===Id;
				});
				deleted.completed=false;
				deleted.deleted=true;
				value.addToDo(deleted);
					}
render(){
	
	return(
		<MyContext.Consumer>
			{
				value=>(
					<div className="CompletedList">
					<h3>Completed Tasks</h3>
				 
				 {value.state.data.filter(t => t.completed&&!t.deleted).map(t=> <div key={t.id} className="display"> 
					<ToDoCard  id={t.id}  name={t.taskName}/>
								<div><input type="button" value=" undo " data-id={t.id} name="undo" onClick={this.handleClickUndo(value)} />
					<input type="button" value="delete"  data-id={t.id}  name="deleted" onClick={this.handleClickDelete(value)} /></div> 
					</div>
					)}  
				 </div>
				)
			}
			</MyContext.Consumer>
	
	)
}
}
export default CompletedList
