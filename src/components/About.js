import React from "react";

function About() {
    return (
        <main className="about_us--main">
            <h1 className="about_us--header">What is Bon AppeType?</h1>
            <img
                src={require("../images/ReduceFoodWaste.webp")}
                alt=""
                className="about_us--img"
            />
            <p className="about_us--intro">
                We are Anjula, Ashanti, Lourdes and Ryan, and this is our capstone project for Ada Developer's Academy- 
                Atlanta Campus Cohort 18.
            </p>
        
            <p className="about_us--stats">
                The idea behind this app is to help users reduce food waste by giving them recipe ideas of things they already have at home.
                Each year about 119 billion pounds of food is wasted in the United States, with household food waste making up 39% [42 billion pounds]
                of the total amount. Not only does this food waste generate significant greenhouse gas emissions when it ends up in landfills, but it is
                expensive to the consumer- about $160 billion in spoiled foods annually. We hope that with the web application, not only is the user able to reduce the amout of food waste at home, but also help them
                save some money, while learning to have fun in the kitchen and trying out different recipes!
            </p>
            <p className="about_us--tech">
                For our Tech Stack we used Flask/SQL for our backend, and that is deployed on
                Heroku. Our front end uses React, Redux, and React-Router, and is deployed on Google Firebase. For our recipe
                data we used the Spoonacular API.
            </p>

            <p className="about_us--links"> 
                <a href='https://www.usda.gov/foodwaste/faqs'> Food Waste FAQ </a>
                <a href='https://www.feedingamerica.org/'> Find Your Local Food Bank </a>
                <a href="https://spoonacular.com/food-api">Spoonacular API</a>
            </p>
            
            
            <footer className="about_us--footer">
            <small>©2023 Foodies C18 development. All rights reserved.</small>
            </footer>
        </main>
        
    )
};

export default About;