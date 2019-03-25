import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router';
import Home from './Components/ToDo/Home';
import './App.css';

export const MyContext = React.createContext({data:[]});
class App extends Component {
  state={
    data:[]
  }

  addToDo=(todo)=>{
    // const {data}=this.state;
    this.setState({...this.state.data,data:[...this.state.data,todo]})
    }
  

  render() {
    const value={
      state:this.state,
      addToDo:this.addToDo
    }
    return (
  <MyContext.Provider value={value}>
      <Router>
        <Switch>
         <Route exact path="/" component={Home} />
        </Switch>
     </Router>
   </MyContext.Provider>
    );
  }
}

export default App;
