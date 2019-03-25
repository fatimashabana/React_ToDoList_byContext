import React from 'react';
import  uuidv4 from 'uuid/v4';
import ToDoCard from './Card';
import { MyContext } from '../../App';



 class ToDoList extends React.Component {
//	constructor(props){
	//	super(props);
		state = {
		taskName:""
						}
		// this.handleSubmit=this.handleSubmit.bind(this);
		// this.handleChange=this.handleChange.bind(this);
		// this.handleClickDeleted=this.handleClickDeleted.bind(this);
		// this.handleClickCompleted=this.handleClickCompleted.bind(this);
//	}

	handleChange=(e)=>{
	 const taskName=e.target.value;
	 this.setState({taskName: taskName	})

	}

	handleSubmit=(addToDo)=> (e)=>{
				 
		e.preventDefault();
		if (!this.state.taskName) return;
								
		const todo=	{id:uuidv4(),
	            	taskName:this.state.taskName,
	             	completed:false,
              		deleted:false
								 }
								 
	   addToDo(todo);
			 console.log (todo);
			 this.setState({	taskName:""	});
			
		}
		
		handleClickCompleted=(value)=>(e)=>{
			// const todolist= value.state.data.slice();
			const todo=value.state.data.find(function(element){
			const Id=	e.target.dataset.id;
			console.log(Id);
			return element.id === Id;
			});

			todo.completed=true;
			todo.deleted=false;
			value.addToDo(todo);
			console.log(todo);

	      // value.state.data=todolist;
				}
		
		
		handleClickDeleted=(value)=>(e)=>{
			const Id=	e.target.dataset.id;
			// const todolist=value.state.data.slice();
			const todo=value.state.data.find(function(element){
				return element.id===Id;
			});
			todo.deleted=true;
			todo.completed=false;
			value.addToDo(todo);
					}
		
		render(){
		
			return (
				<MyContext.Consumer>
					{
        (value)=>(
					<>
			<form onSubmit={this.handleSubmit(value.addToDo)} >
				<div className="form-group display ">
					<input type="text" onChange={this.handleChange} value={this.state.taskName} className="form-control" id="" placeholder="Enter task name" />
					<button type="submit">Add</button>
				</div>
			</form>

		   	<div className="ToDoList">
		      	<h3>To Do List</h3>
					  	 {value.state.data.filter(t => !(t.completed||t.deleted)).map(t=> <div key={t.id}  className="display"> 
							 <ToDoCard id={t.id}  name={t.taskName}/>
		  				 <div><input type="button" value="complete" data-id={t.id} name="completed" onClick={this.handleClickCompleted(value)} />
							 <input type="button" value="  delete   " data-id={t.id} name="deleted" onClick={this.handleClickDeleted(value)} /></div> 
								</div>
							)} 
		  	</div>

				 </>
				)
					}
			</MyContext.Consumer>
		)
	}
 }
export default ToDoList;

