const RestaurantCard=(props)=>{
    const {resData} = props;
    console.log(resData)

        return(
        <div className="res-card">
            <img
            className="res-logo"
            alt="res-logo"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData?.info?.cloudinaryImageId}`}>
            </img>
            <p className="resName" >{resData?.info?.name}</p>
            
            
        </div>
    )
}

export default RestaurantCard;