import React, { useEffect } from "react";
import "./Dictionary.css";
import Result from "./Result";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Dictionary(){

    const [myword, setMyWord] = useState("");
    const [word, setWord] = useState("");
    const [mypos, setMyPos] = useState("");
    const [mymeaning1, setMyMeaning] = useState("");
    const [check, setCheck] = useState(false);
   
    var myurl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

    function HandleChangeSearch(event){
        setMyWord(event.target.value);
    }

    function HandleSearch(event){
        event.preventDefault();
        fetch(`${myurl}${myword}`)
            .then((response) => response.json())
            .then((data) => {
                setWord(myword);
                setMyPos(data[0].meanings[0].partOfSpeech);
                setMyMeaning(data[0].meanings[0].definitions[0].definition);
                setCheck(true);
            })
            .catch((error)=>{
                setCheck(false);
                Swal.fire({
                    text: 'Word not found!',
                    background: "#E7CEA6",
                  })
            });  
    }



    return(
        <div>
            <div className="my-container">
                <div className="search-me">
                    <form onSubmit={HandleSearch}>
                        <input type="text" className="my-input" placeholder="Search for word" onChange={HandleChangeSearch}></input>
                        <button type="submit" className="search-btn">Search</button>
                    </form>
                  

                    
                </div>

            

                {
                    check===true&&mymeaning1!==""&&mypos!==""? <Result name={word} mypos={mypos} mean={mymeaning1}/> : null
                }

      
              

               

            </div>
        </div>
    );
}

export default Dictionary;