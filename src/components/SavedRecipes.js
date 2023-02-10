import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react'

function SavedRecipes(props) {
    const {user_id, getSavedRecipes}= props 
return (
        <div>
            <h3 onClick={()=>getSavedRecipes(user_id)}>Saved Recipes</h3>
        </div>
)
}
export default SavedRecipes
