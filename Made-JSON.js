import { useState } from "react";

function Createjson(){
    const [user ,setUser] =useState("");
    const [id ,setID] =useState("");
    const [title ,setTitle] =useState("");
    const [url ,setUrl] =useState("");
    const [thumb ,setThumb] =useState("");
    function saveData(){
        let data  = {user,id,title,url,thumb};
        fetch("http://localhost:3000/posts",{
            method : 'POST',
            headers:{
                
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
            })
        },[]);

    }

    return(
        <>
        <h1>CREAT-POST-API</h1>
        <input type="text" value={user} onChange={(e)=> {setUser(e.target.value)}} name="user" placeholder="USER ID" />
        <input type="text" value={id} onChange={(e)=> {setID(e.target.value)}} name="id" placeholder="ID"/>
        <input type="text" value={title} onChange={(e)=> {setTitle(e.target.value)}} name="title" placeholder="TITLE"/>
        <input type="text" value={url} onChange={(e)=> {setUrl(e.target.value)}} name="url" placeholder="URL" />
        <input type="text" value={thumb} onChange={(e)=> {setThumb(e.target.value)}} name="thumb" placeholder="THUMB"/>
        <button onClick={()=>saveData()}>SUBMIT</button>

        </>
    )
}
export default Createjson;