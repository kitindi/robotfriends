import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';
import Scroll from './Scroll';

class App extends React.Component{
    constructor(){
        super();
        this.state={
             robots: [],
            searchfield:''
        }
        // this.onSearchChange = this.onSearchChange.bind(this);
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').
        then(response => {
            return response.json();})
            .then(users =>{
                this.setState({robots:users});
            })
    
    }
    onSearchChange=(event)=>{
        this.setState({searchfield: event.target.value})
    }
    render(){
      const {robots,searchfield}= this.state;
        const filteredRobots = robots.filter(robots =>{ 
            return robots.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
        }
            )
        return(
            <div className="app-style">
                <h1 className="head-title">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                <CardList robots={filteredRobots}/>
                </Scroll>
              
            </div>
            
        )
    }
    
}

export default App;