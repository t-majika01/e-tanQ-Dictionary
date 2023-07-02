import React from "react";
import "./Result.css";

function Result({name, mypos, mean}){

    // function playSound(){
    //     var audio = new Audio(sound);
    //     audio.play(); 
    // }


    return(
        <div>
            <div className="my-results">
                <label className="my-search-result">{name}</label>
                {/* <button onClick={playSound} className="bg-res"><i class="fa-solid fa-play "></i></button> */}

                <div className="div-word-details">
                    <p className="word-details">{mypos}</p>
                </div>

                <div className="div-word-meaning">
                    <p className="word-meaning">{mean}</p>
                </div>
                

            </div>
           
            
        </div>
    )
}


export default Result;