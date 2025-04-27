import { Link, useLocation } from "react-router-dom"
import image from "../assets/Ai image.jpg"
export const Navbar=()=>{
    const location  = useLocation();
    return(
        <>
        <nav className="flex items-center justify-between bg-teal-500 px-6 py-2">
            <div>
                <img src={image} alt="logo" className="h-20"/></div>
            <div>
                {
                    location.pathname==="/"?(
                        <Link to={"/post"}>
            <button className="py-3 md:px-6 bg-red-500 md:text-x1 md:text-yellow-700 font-normal rounded-md cursor-pointer"> +Create Posts </button>
            </Link> ): (
            <Link to={"/"}>
            <button className="py-3 px-5 bg-red-500 text-x1 text-yellow-700 font-normal rounded-md cursor-pointer"> Posts </button>
            </Link>
                    ) }
            </div>

        </nav>
        </>
    )
}