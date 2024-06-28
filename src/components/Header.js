import {LOGO_URL} from "../utils/contains"; 
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
const Header=()=>{
    let btnName="Login";
    const [btnLogin,setbtnLogin]=useState("login");

    const cartItems=useSelector((store)=> store.cart.items)
    return(
        <div className="header" style={{backgroundImage:
            "url('https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png')"}}> 
            <div className="c_header">
                <div className="logo-container">
                    <img  className="logo"src= {LOGO_URL}></img>
                </div>
                <div className="nav-items">
                    <ul>
                        <li>
                        <Link to="/"style={{ textDecoration: 'none', color:"whitesmoke" }}>Home</Link>
                        </li>
                        <li>
                        <Link to="/about" style={{ textDecoration: 'none', color:"whitesmoke" }}>About Us</Link>
                        </li>
                        <li>
                        <Link to="/contact" style={{ textDecoration: 'none', color:"whitesmoke" }} >Contact Us</Link>
                        </li>
                        <li>
                        <Link to="/Cart" style={{ textDecoration: 'none', color:"whitesmoke" }} >Cart {cartItems.length}</Link>
                        </li>

                    </ul>
                </div>
            </div>
            <div className="Discrip">
                <p>
                    <h1>
                    EAT MORE
                    </h1>  
                    <p>Discover the best food & drinks</p>
                </p>
            </div>
        </div>
    )
}

export default Header;