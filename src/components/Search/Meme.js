import React from 'react'

export default function Meme(){

    const [meme,setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })
    const [allMeme,setAllMeme] = React.useState([]);
    
    // use API to upload the pictures
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data => setAllMeme(data.data.memes))
    },[])


    function handleChange(event){
        const{name,value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]:value
        }))
    }

    function getImage(){
        const randomNumber = Math.floor(Math.random()*allMeme.length);
        const url = allMeme[randomNumber].url;
        setMeme(prevMeme =>({
            topText:"",
            bottomText:"",
            randomImage:url
        }))
    }


    return(
        <div>
            <div className='meme-form'>
                <input 
                    type= 'text'
                    className = 'form_input'
                    placeholder = 'Top Text'
                    name = 'topText'
                    value = {meme.topText}
                    onChange={handleChange}
                />

                <input 
                    type= 'text'
                    className = 'form_input'
                    placeholder='Bottom Text'
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={handleChange}
                />

                <button className='form_button' onClick={getImage}>Get a new meme Image</button>
                <input type='file' id="myFile" hidden/>
                <label for="myFile" className='upload_button' >Upload Image from your computer </label>
                {/* <button className='upload_button' >Download</button> */}
            </div>

            <div className='meme'>
                <img src={meme.randomImage} alt='memeImage' className='memeImage'/>
                <h2 className='meme_text meme_text_top'>{meme.topText}</h2>
                <h2 className='meme_text meme_text_bottom'>{meme.bottomText}</h2>
            </div>
        </div>
    )
}