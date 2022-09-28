import React,{useState} from "react";
// import data from "../memesData"
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
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=> res.json())
        .then(data=> setAllMemes(data.data))
    }, [])
    /* use await and sync rather than .then to hold the promiss
    
    React.useEffect(async ()=>{
       const result = await fetch("https://api.imgflip.com/get_memes")
       const data = await result.json()
       setAllMemes(data.data)
     }, [])

     */

    function changeHandle(event){
        const {name, value } = event.target
        setMeme(prevMeme=>{
            return{
                ...prevMeme,
                [name]: value
            }
        })
    }
    function form_data (e){
        e.preventDefault();
        const len = allMemes.memes.length
        let ran = Math.floor(Math.random() * len);
        let url = allMemes.memes[ran]
        setMeme(prev=>{
            return {
                ...prev,
                image_url: url
            }
        })
    }
    return(
        <div>
            <form action="/action_page.php">
                <div className="inputs">
                    <input 
                        id="first" 
                        type="text" 
                        name="topText"
                        vlaue={meme.topText}
                        placeholder="add first sentence" 
                        onChange={changeHandle}
                    />
                    <input 
                        id="second" 
                        type="text" 
                        name="bottomText"
                        vlaue={meme.bottomText}
                        placeholder="add second sentence" 
                        onChange={changeHandle}
                    />
                </div>
                <button onClick={form_data}>Get a new meme image  🖼</button>
            </form>
            
            <div className="meme">
                {meme.image_url && <ImageSection image_url={meme.image_url}/>}
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}