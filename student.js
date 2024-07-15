import { useEffect, useState } from "react";

function Student(){
    const [data,setData] = useState([]);
    const [user ,setUser] =useState("");
    const [id ,setID] =useState("");
    
    const [url ,setUrl] =useState("");
    
    const [thumb ,setThumb] =useState("");
    useEffect(()=>{
        Showuser();
        
    },[]);

    function Showuser(){
        fetch("http://localhost:3000/posts").then((result)=>{
            result.json().then((responsiv)=>{
                setData(responsiv)
            })
        })
    }
    function Selectuser(id){
        setUser(data[id-1].user);
        setID(data[id-1].id);
       
        setUrl(data[id-1].url);
        setThumb(data[id-1].thumb);

    }
    function deletuser(id){
        fetch("http://localhost:3000/posts/"+id,{
            method: "DELETE"
        }).then((deletresult)=>{
            deletresult.json().then((resp)=>{
                console.log(resp);
                Showuser();
            })
        })
    }

    return(
        <div>
            <table>
                <tr>
                    <td>User Id</td>
                    <td>Id</td>
                    <td>Title</td>
                    <td>URL</td>
                    <td>thumbnailUrl</td>
                </tr>
                {
                    data.map((item)=>
                        <tr>
                            <td>{item.albumId}</td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.url}</td>
                            <td>{item.thumbnailUrl}</td>
                            <td><button type="submit" onClick={()=>deletuser(item.id)}> DELETE </button></td>
                            <td><button type="submit" onClick={()=>Selectuser(item.id)}> EDIT </button></td>
                        </tr> 
                    )
                }
            </table>     

                <div>
                <input type="text" value={user}  name="user" placeholder="USER ID" />
                <input type="text" value={id} name="id" placeholder="ID"/>
                <input type="text" value={url}  name="url" placeholder="URL" />
                <input type="text" value={thumb} name="thumb" placeholder="THUMB"/>
                </div>

        </div>
    )
}
export default Student;
