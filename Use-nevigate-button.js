import { useNavigate } from "react-router-dom";

function Jyotirani(){
    const navigate = useNavigate();
    const navtopage = ()=>{
        navigate();
    }
    return(
        <>
        {/* <button onClick={()=> navigate("/home")}>HOME-BUTTON</button>
        <button onClick={()=> navigate("/about")}>ABOUT-BUTTON</button> */}

        <button onClick={()=> navigate("/formm")}>FORM PAGE</button>




        </>
    )
}
export default Jyotirani;
