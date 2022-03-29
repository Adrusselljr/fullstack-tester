import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function DeleteUser(props) {
    return (
        <div className='App'>

            <h1>Delete User:</h1><br/>

            <div className="form-group">
                <label>ID : </label>
                <input className='form-control' type="text" name="id" value={ props.userIdProp2 } onChange={ props.changeHandlerUserIdProp }/><br/>
            </div>

            <button className='btn btn-primary' onClick={ () => props.clickHandlerDeleteProp(props.userIdProp) }>Delete User</button><br/><br/>

            <h3 style={{color: "red"}}>{ props.messageDeleteProp }</h3>
        
        </div>
    )
}

export default DeleteUser
