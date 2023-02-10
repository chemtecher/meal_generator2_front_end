import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react'

function SavedRecipes(props) {
    const {user_id, getSavedRecipes}= props 
return (
    <div className="popup-box">
        <div className="box">
            <div>
                <h3 onClick={()=>getSavedRecipes(user_id)}>Favorites</h3>
            </div>
    </div>
  </div>
)
}
export default SavedRecipes
