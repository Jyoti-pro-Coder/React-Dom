import { Link, Outlet } from "react-router-dom";

function Contact(){
    return(
        <>
        <Link to={"bhardwaj"}>LINK_CONTACT</Link>
        <Outlet />
        <h1>Hii!! I'M Contact[] PAGE</h1>
        
        </>
    )
}
export default Contact;
