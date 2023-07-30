import React from 'react'
import '../styles/Admin.css'
function Admin({removeAuth}) {
    return (
        <div className='admin-container'>
            <h1>Welcome to Admin Dashboard</h1>
            <div className="admin-form-container">
                <form>
                     <div className='input-field'>
                        <label>Hero Section image url</label>
                        <input type="text"/>
                     </div>
                     <div className='input-field'>
                        <label>User</label>
                        <input type="text"/>
                     </div>
                     <div className='input-field'>
                        <label>Market</label>
                        <input type="text"/>
                     </div>
                     <div className='input-field'>
                        <label>Builder</label>
                        <input type="text"/>
                     </div>
                     <button id='update-btn'>Update</button>
                </form>
            </div>

            <button id='logout-btn' onClick={removeAuth}>Log out</button>
        </div>
    )
}

export default Admin
