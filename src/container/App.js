import React, {Component} from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './App.css'

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots :[],
            searchField : ''
        }
    }
    onSearchChange = (e) =>{
        this.setState({ searchField : e.target.value}); //change searchfield to input value
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => this.setState({robots: users}));
    }
    render(){
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        });
        return !robots.length ? <h1>Loading</h1> :
        (
            <div className="tc">
                <h1 className="f2">Robofriends</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots= {filteredRobots}/>
                </Scroll>
            </div>
        ); 
    }
}

export default App;