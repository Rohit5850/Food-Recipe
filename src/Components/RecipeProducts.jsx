import React from "react";


const RecipeProducts = (props,{key})=>{

    return(
        <div className="recipe_card" key={key}>

           
             
           <img className="recipe_img" src={props.img} alt={props.title} />
           <h2 className="recipe_title">{props.title}</h2>

           <p className="recipe_ingridents">{(props.ingredients).map(item => (
            <li>{item.text}</li>
           ))} </p>

        </div>
    )
}

export default RecipeProducts