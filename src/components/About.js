import React from "react";

function About() {
    return (
        <main className="about--main">
            <h1>What is Bon AppeType?</h1>
            <p> We are a group of coders who come from all different walks of life, with a passion for creating!
                Through Ada we have learnt so much and put our learnign into practice with this capstone. 
                The idea for this capstone came from not knowing what to cook with all the miscellaneous ingredients
                left over in the fridge at the end of the week
                
            </p>
            <h1>Meet the Team</h1>
            <p>
                <img src={require('../images/placeholder.jpg')} alt="" className="about--img"/>
                The is Ryan: t is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point of using Lorem
                Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                using 'Content here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem Ipsum as their default
                model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                infancy. Various versions have evolved over the years, sometimes by accident, sometimes
                on purpose (injected humour and the like).
            </p>
            <p>
                <img src={require('../images/placeholder.jpg')} alt="" className="about--img"/>
                The is Ashanti: t is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point of using Lorem
                Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                using 'Content here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem Ipsum as their default
                model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                infancy. Various versions have evolved over the years, sometimes by accident, sometimes
                on purpose (injected humour and the like).
            </p>
            <p>
                <img src={require('../images/placeholder.jpg')} alt="" className="about--img"/>
                The is Anjula: t is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point of using Lorem
                Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                using 'Content here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem Ipsum as their default
                model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                infancy. Various versions have evolved over the years, sometimes by accident, sometimes
                on purpose (injected humour and the like).
            </p>
            <p>
                <img src={require('../images/placeholder.jpg')} alt="" className="about--img"/>
                The is Lourdes: t is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point of using Lorem
                Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                using 'Content here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem Ipsum as their default
                model text, and a search for 'lorem ipsum' will uncover many web sites still in their
                infancy. Various versions have evolved over the years, sometimes by accident, sometimes
                on purpose (injected humour and the like).
            </p>
            <footer>
            <small>©2023 Foodies C18 development. All rights reserved.</small>
            </footer>
        </main>
        
    )
};

export default About;