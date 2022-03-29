import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function GetUserUpdate(props) {
    return (
        <div className='App'>

            <h1>Get and Update User:</h1><br/>

            <div className="form-group">
                <label>ID : </label>
                <input className='form-control' type="text" name="id" value={ props.userIdProp } onChange={ props.changeHandlerUserIdProp }/><br/>
            </div>

            <button className='btn btn-primary' onClick={ () => props.getClickHandlerGetProp(props.userIdProp) }>Get User</button><br/><br/>

            <h3 style={{color: "red"}}>{ props.messageGetProp }</h3>

            <div className="form-group">
                <label>Name : </label>
                <input className='form-control' type="text" name="fetchedName" value={ props.fetchedNameProp } onChange={ props.changeHandlerFetchedNameProp }/><br/>
            </div>

            <div className="form-group">
                <label>Age : </label>
                <input min={1} className='form-control' type="number" name="fetchedAge" value={ props.fetchedAgeProp } onChange={ props.changeHandlerFetchedAgeProp }/><br/>
            </div>

            <div className="form-group">
                <label>Favorite Movies : </label>
                <input className='form-control' type="text" name="fetchedFavoriteMovie" value={ props.fetchedFavoriteMovieProp } onChange={ props.changeHandlerFetchedMovieProp }/><br/>
            </div>

            <button className='btn btn-primary' onClick={ () => props.clickHandlerUpdateProp(props.userIdProp) }>Update User</button><br/><br/>

            <h3 style={{color: "red"}}>{ props.messageUpdateProp }</h3>

        </div>
    )
}

export default GetUserUpdate