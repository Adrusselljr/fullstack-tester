import React, { Component } from 'react'
import CreateUser from './components/CreateUser'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const url = "http://localhost:4000/users"

export class App extends Component {

    state = {
        name: "",
        age: 1,
        favoriteMovie: []
    }

    changeHandlerName = e => {
        this.setState({
            name: e.target.value
        }, () => console.log(this.state.name))
    }

    changeHandlerAge = e => {
        this.setState({
            age: e.target.value
        }, () => console.log(this.state.age))
    }

    changeHandlerMovie = e => {
        this.setState({
            favoriteMovie: e.target.value.split(', ')
        }, () => console.log(this.state))
    }

    clickHandlerCreate = async () => {
        const { name, age, favoriteMovie } = this.state

        const newBody = {
            name: name,
            age: Number(age),
            favoriteMovie: favoriteMovie
        }

        const fetchedData = await fetch(`${url}/create-user`, {
            method: "POST",
            body: JSON.stringify(
                newBody
            )
        })
        const parsedData = await fetchedData.json()
        return parsedData
    }

    render() {
        return (
        <div className='App'>

            <CreateUser
                nameProp={ this.state.name }
                ageProp={ this.state.age }
                favoriteMovieProp={ this.state.favoriteMovie }
                changeHandlerNameProp={ this.changeHandlerName }
                changeHandlerAgeProp={ this.changeHandlerAge }
                changeHandlerMovieProp={ this.changeHandlerMovie }
                clickHandlerCreateProp={ this.clickHandlerCreate }
            />

        </div>
        )
    }
}

export default App