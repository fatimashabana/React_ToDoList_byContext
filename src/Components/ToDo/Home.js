import React from'react';
import ToDoList from'./List';
import CompletedList from'./CompletedList';
import DeletedList from'./DeletedList';



class Home extends React.Component {
  render() {
    return (
      <>
     <ToDoList/>
     <div className="display">
     <div className="display">
     <CompletedList/>
     </div>
     <div className="display">
     <DeletedList/>
     </div> 
     </div>
     </>
    );
  }
}

export default Home;

