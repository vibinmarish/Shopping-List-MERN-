import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from'./components/AppNavbar';

class App extends Component{
  render(){
    return(
    <div className="App">
      <AppNavbar></AppNavbar>
      <h1> hello world ! </h1>
    </div>
  );
}
}

export default App;
