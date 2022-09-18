import React,{useState} from "react";
import data from "../memesData"
import ImageSection from "./ImageSection";
import "../css/Form.css"

export default function Form(){
    const[meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        image_url: "",
        width:0,
        height:0
    })
    function get_first_sentence(e){
        setMeme(prev=>{
            return{
                ...prev,
                topText: e.target.value
            }
        })
    }
    function get_second_sentence(e){
        setMeme(prev=>{
            return{
                ...prev,
                bottomText: e.target.value
            }
        })
    }
    function form_data (e){
        e.preventDefault();
        const len = data.data.memes.length
        let ran = Math.floor(Math.random() * len);
        let url = data.data.memes[ran]
        setMeme(prev=>{
            return {
                ...prev,
                image_url: url
            }
        })
        console.log(meme);
    }
    return(
        <div>
            <form action="/action_page.php">
                <div className="inputs">
                    <input id="first" type="text" vlaue="first-input" placeholder="add first sentence" onChange={(e)=>get_first_sentence(e)}/>
                    <input id="second" type="text" vlaue="second-input" placeholder="add second sentence" onChange={(e)=>get_second_sentence(e)}/>
                </div>
                <button onClick={form_data}>Get a new meme image  🖼</button>
            </form>
            {meme.image_url && <ImageSection image_url={meme.image_url}/>}
        </div>
    )
}