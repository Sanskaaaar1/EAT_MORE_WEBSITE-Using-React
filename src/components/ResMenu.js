import {useEffect, useState} from "react";
import {API} from "../utils/contains";
import {useParams} from "react-router-dom";
import Shimmer from "./Shimmer";
import Menu from "./Menu.js";
import { useDispatch } from "react-redux";
import {addItem} from "../utils/cartSlice";

const ResMenu=()=>{
    
    const[ResInfo,setResInfo]=useState([]);
    const[ResIdmenu,setResIdmenu]=useState(null);
    useEffect(()=>{
        fetchMenu();
    },[ResInfo]);
    const Id=useParams();
    
    const fetchMenu= async()=>{
        const data= await fetch(API);
        const json=await data.json();
        setResInfo(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        const mininfo=ResInfo.filter((res)=>(res.info.id===Id.resId));
        setResIdmenu(mininfo)
        
    }

    const dispatch = useDispatch();
    const handleAddItem = ()=>{
        dispatch(addItem(""));

    }
    if(ResInfo.length===0)
        {
          return <Shimmer/>
        }
    else{
        return(
            <div className="resMenu">
                  <p className="MenuResName"><img className="hotelLogo"src="https://www.shutterstock.com/image-vector/restaurant-logo-food-service-vector-600w-454784548.jpg"></img>{ResIdmenu[0]?.info?.name}</p>
                  <div className="infores">
                    <p>
                    {ResIdmenu[0]?.info?.avgRating}<img className="starlogo"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn2fO06E83wILT6e9SNlK8MUEtKGAAmj8kzQ&s"></img>({ResIdmenu[0]?.info?.totalRatingsString}Ratings) * {ResIdmenu[0]?.info?.costForTwo}
                    </p>
                    <p>
                    <img className="location" src="https://t3.ftcdn.net/jpg/06/24/56/40/360_F_624564090_xd4o6CIL4zVJa96uIlQloINq93OEPYLl.jpg"></img><span >{ResIdmenu[0]?.info?.areaName}</span>
                    </p>
                    <p>
                        <img className="dis-loc" src="https://media.istockphoto.com/id/931336618/vector/clock-vector-icon-isolated.jpg?s=612x612&w=0&k=20&c=I8EBJl8i6olqcrhAtKko74ydFEVbfCQ6s5Pbsx6vfas="></img><span >{ResIdmenu[0]?.info?.sla?.slaString} </span>
                    </p>
                    <p>
                        <img className="cycle-logo"src="https://i.pinimg.com/736x/e4/09/6f/e4096f0afce5bbb76ef00df733a2e951.jpg"></img>{ResIdmenu[0]?.info?.sla?.lastMileTravelString}
                    </p>
                    
                  </div>
                  <div className="menu">
                    <div className="menu1">
                        <p>--MENU--</p>
                    </div>
                    <div className="menu2">
                            {
                                ResIdmenu[0]?.info?.cuisines.map((res)=>(
                                    <p className="p"><div><img className="spoonLogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBosodkRcKHkBKDLPP7v2dWkSj1e5TvJw6ig&s"></img>{res}</div> <div><button className="Addbtn" onClick={()=>handleAddItem(res)}>Add+</button></div></p> 
                                      
                                ))
                            }     
                    </div>
                            
                  </div>
            </div>
        )
    }
    
   
};

export default ResMenu;