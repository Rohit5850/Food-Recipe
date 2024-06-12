import React, { useEffect, useState } from "react";
import RecipeProducts from "./RecipeProducts";

const FoodRecipeApp = () =>{
    const API_KEY = '7359b679b71f3913159898aa130862b6';

    const API_ID = 'eb6c6e8b'
    const [serach , setSearch] = useState("")
    const [recipe,setRecipe] = useState([]);
    const [query,setQuery] = useState("chicken")
    
    const searchFood = ()=>{
        console.log(serach)
        setSearch('')
    }

    const getSearch = (e)=>{ 
        e.preventDefault();
        setQuery(serach)
        setSearch('')
    }



    useEffect(()=>{
        getRecipes();
    },[query])

    const getRecipes = async ()=>{
        const response = await fetch (`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
        const data = await response.json();
        console.log(data.hits);
        setRecipe(data.hits)
    }
  
    return(

        <div className="foodRecipeApp">
                   <div className="app_heading">
                    <h2>Food Recipe</h2>
                   </div>
               
               <div className="recipe_div">
                <form action="" onSubmit={getSearch}>
                <div className="recipe_input">
                       <input type="text" placeholder="Enter Recipe Name" value={serach} onChange={(e)=>{setSearch(e.target.value)}}/>
                       <button className="search_recipe" type="submit" >Search</button>
                </div>
                </form> 
               </div>
               
               <div className="recipe_item_container">
               <div className="recipe_item">
                 {recipe.map(item => (
                    <RecipeProducts key={item.recipe.label} title={item.recipe.label} calories={item.recipe.calories} img={item.recipe.image} ingredients={item.recipe.ingredients}/>
                 ))}
               </div>
               </div>

        </div>
    )
}

export default FoodRecipeApp