import React from "react";
import axios from "axios";
import { useState } from "react";

export default function FavoritesBtn({ recipe }) {
  const [liked, setLiked] = useState(false);
  const userId = 3;

  const addToFav = async () => {
    const body = {
      ...recipe,
      user_id: 3,
    };

    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    console.log(body, "body 0-0-0-0");
    try {
      if (liked) {
        // if(recipe.liked) This is if we have the liked attribute in the backend for recipe.
        const res = await axios.delete(
          `${process.env.REACT_APP_BACKEND_URL}/search_recipes/remove/${recipe.recipe_id}`
        );
        console.log(res);
      } else {
        const res = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/user/3/add_recipe`,
          JSON.stringify(body),
          axiosConfig
        );
        console.log(res);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <button
        onClick={() => {
          addToFav();
          setLiked(!liked);
        }}
      >
        {!liked ? "🤍" : "❤️"}
      </button>
    </>
  );
}
