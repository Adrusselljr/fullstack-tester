import React, { Component } from 'react'
import CreateUser from './components/CreateUser'
import GetUserUpdate from './components/GetUserUpdate'
import DeleteUser from './components/DeleteUser'
import GetAllUsers from './components/GetAllUsers'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const url = "http://localhost:4000/users"

export class App extends Component {

    state = {
        name: "",
        age: 1,
        favoriteMovie: [],
        fetchedName: "",
        fetchedAge: 1,
        fetchedFavoriteMovie: [],
        userId: "",
        messageCreate: "",
        messageUpdate: "",
        messageDelete: "",
        messageGet: "",
        allUsers: []
    }

    changeHandlerName = e => {
        this.setState({
            name: e.target.value
        })
    }

    changeHandlerAge = e => {
        this.setState({
            age: e.target.value
        })
    }

    changeHandlerMovie = e => {
        this.setState({
            favoriteMovie: e.target.value.split(',')
        })
    }

    changeHandlerFetchedName = e => {
        this.setState({
            fetchedName: e.target.value
        })
    }

    changeHandlerFetchedAge = e => {
        this.setState({
            fetchedAge: e.target.value
        })
    }

    changeHandlerFetchedMovie = e => {
        this.setState({
            fetchedFavoriteMovie: e.target.value.split(',')
        })
    }

    changeHandlerUserId = e => {
        this.setState({
            userId: e.target.value
        })
    }

    clickHandlerCreate = async () => {
        const {name, age, favoriteMovie} = this.state

        const newBody = {
            name: name,
            age: age,
            favoriteMovie: favoriteMovie
        }

        const fetchedData = await fetch(`${url}/create-user`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBody)
        })
        const parsedData = await fetchedData.json()

        this.setState({
            messageCreate: parsedData.message,
            name: "",
            age: 1,
            favoriteMovie: ""
        })
        setTimeout(() => {
            this.setState({
                messageCreate: ""
            })
        }, 1500)

        return parsedData
    }

    clickHandlerUpdate = async (id) => {
        const {fetchedName, fetchedAge, fetchedFavoriteMovie} = this.state

        const newBody = {
            name: fetchedName,
            age: fetchedAge,
            favoriteMovie: fetchedFavoriteMovie
        }

        const fetchedData = await fetch(`${url}/update-user/${id}`, {
            method: "PUT",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBody)
        })
        const parsedData = await fetchedData.json()

        this.setState({
            userId: "",
            fetchedName: "",
            fetchedAge: 1,
            fetchedFavoriteMovie: "",
            messageUpdate: "User has been updated"
        })
        setTimeout(() => {
            this.setState({
                messageUpdate: ""
            })
        }, 1500)

        return parsedData
    }

    clickHandlerDelete = async (id) => {
        const response = await fetch(`${url}/delete-user/${id}`, {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const responseData = await response.json()
        
        if(responseData.message === "error") {
            this.setState({
                messageDelete: responseData.error,
                userId: ""
            })
        }
        else {
            this.setState({
                messageDelete: responseData.message,
                userId: ""
            })
        }
        setTimeout(() => {
            this.setState({
                messageDelete: ""
            })
        }, 1500)
    }

    getClickHandlerGet = async (id) => {
        const currentUser = await clickHandlerGet(id)
        const parsedData = JSON.parse(currentUser)

        if(parsedData.payload === null) {
            this.setState({
                messageGet: "No user with id found!"
            })
            setTimeout(() => {
                this.setState({
                    messageGet: ""
                })
            }, 1500)
        }
        else {
            this.setState({
                fetchedName: parsedData.payload.name,
                fetchedAge: parsedData.payload.age,
                fetchedFavoriteMovie: parsedData.payload.favoriteMovie,
            })
        }

    }

    getClickHandlerGetAll = async () => {
        const allUsers = await clickHandlerGetAll()
        const parsedData = JSON.parse(allUsers)

        this.setState({
            allUsers: parsedData.payload
        })
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
                messageCreateProp={ this.state.messageCreate }
            />

            <br/><p>--------------------------------------------------------------------------------------------------</p><br/>

            <GetAllUsers
                allUsersProp={ this.state.allUsers }
                getClickHandlerGetAllProp={ this.getClickHandlerGetAll }
            />

            <br/><p>--------------------------------------------------------------------------------------------------</p><br/>

            <GetUserUpdate 
                fetchedNameProp={ this.state.fetchedName }
                fetchedAgeProp={ this.state.fetchedAge }
                fetchedFavoriteMovieProp={ this.state.fetchedFavoriteMovie }
                userIdProp={ this.state.userId }
                changeHandlerUserIdProp={ this.changeHandlerUserId }
                getClickHandlerGetProp = { this.getClickHandlerGet }
                clickHandlerUpdateProp={ this.clickHandlerUpdate }
                changeHandlerFetchedNameProp={ this.changeHandlerFetchedName }
                changeHandlerFetchedAgeProp={ this.changeHandlerFetchedAge }
                changeHandlerFetchedMovieProp={ this.changeHandlerFetchedMovie }
                messageUpdateProp={ this.state.messageUpdate }
                messageGetProp={ this.state.messageGet }
            />

            <br/><p>--------------------------------------------------------------------------------------------------</p><br/>

            <DeleteUser
                userIdProp2={ this.state.userId }
                changeHandlerUserIdProp={ this.changeHandlerUserId }
                clickHandlerDeleteProp={ this.clickHandlerDelete }
                messageDeleteProp={ this.state.messageDelete }
            />

        </div>
        )
    }
}

export default App

const clickHandlerGet = async (id) => {
    const response = await fetch(`${url}/get-user/${id}`, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        }
    })
    return await response.text()
}

const clickHandlerGetAll = async () => {
    const response = await fetch(`${url}/get-all-users`, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        }
    })
    return await response.text()
}