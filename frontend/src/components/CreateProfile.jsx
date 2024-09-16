
import { useState } from "react";

export function CreateProfile(props){
    const [names , setNames]= useState("");
    const [description , setdescription]= useState("");
    const [twitter , settwitter]= useState("");
    const [linkedin , setlinkedin]= useState("");
    return(
            <div>
                <input type="text" placeholder="title"  style={{margin: 10,
                padding:10}}   onChange={function(e){
                    setNames(e.target.value);
                }}  /> <br></br>


                <input type="text" placeholder="description" style={{margin: 10,
                padding:10}}    onChange={function(e){
                    setdescription(e.target.value);
                }}/> <br></br>
                <input type="text" placeholder="twitter" style={{margin: 10,
                padding:10}}   onChange={function(e){
                    settwitter(e.target.value);
                }}/><br></br>
                <input type="text" placeholder="linkedin" style={{margin: 10,
                padding:10}}    onChange={function(e){
                    setlinkedin(e.target.value);
                }}/><br></br>
                <button style={{margin: 10
                }}   onClick={ ()=>{
                    fetch("http://localhost:3000/add",{
                        method: 'POST',
                        
                        body: JSON.stringify({
                            name: names,
                            description: description,
                            twitter: twitter,
                            linkedin: linkedin              
                        }),
                        headers:{
                            "content-type": "application/json"
                        }
                        

                    }).then((res)=>{
                        const data = res.json();
                        alert("added");
                    }) }
                }> ADD PROFILE</button>

            </div>


    )
}