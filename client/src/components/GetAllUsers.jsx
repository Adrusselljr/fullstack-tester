import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function GetAllUsers(props) {
    console.log(props)

    return (
        <div className='App'>

            <h1>Get All Users: </h1><br/>

            <button className='btn btn-primary' onClick={ props.getClickHandlerGetAllProp }>Get All Users</button><br/><br/>

            { props.allUsersProp.map(user => {
                console.log(user)
                return <h6>{ user.name }'s ID: { user._id }</h6>
            }) }
        
        </div>
    )
}

export default GetAllUsers
