import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from "react";
import {API} from "../utils/contains";
import {Link} from "react-router-dom";
import Shimmer from "./Shimmer";
import { AllRes } from "../utils/contains";

const Body=()=>{
 
 
  const [RList,setRList]=useState([]);
  const [ResList,setResList]=useState([]);
  const [searchText,setsearchText]=useState([""]);


  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData= async()=>{
    const data = await fetch(API);
    var list=await data.json();
    console.log(list);
    setResList(list.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setRList(list.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  };
 
  
  if(ResList.length===0)
    {
      return <Shimmer/>
    }
  
    return(
        <div className="body">
            <div className="Searchbox">
              <div className="nddiv">
              <input type="text" placeholder="Search for cuisine or a dish..." className="search-box" value={searchText} onChange={(e)=>{setsearchText(e.target.value)}}></input>
              <button 
                className="search-btn" 
                onClick={()=>{
                  const fillname = RList.filter(
                    (res)=>res?.info?.cuisines.includes(searchText)
                  )
                  setResList(fillname);
              }}>@</button>
              </div>
              <button 
              className="filter-btn" 
              onClick={()=>{
                const filterList=RList.filter(
                  (res)=>res.info.avgRating>4.2
              )
              setResList(filterList);

              }}>Top reataurents</button>
            </div>
            
              <div className="res-container">
                {
                  ResList.map((res) =>(
                  <Link style={{ textDecoration: 'none' }} to={"/Restaurents/"+res.info.id}><RestaurantCard key={res.info.id} resData={res}/></Link> 
                ))
                }
               </div>
        </div>

    )
}

export default Body;