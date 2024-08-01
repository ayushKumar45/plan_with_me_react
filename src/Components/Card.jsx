import { useState } from "react";
function Card({id,image,info,price ,name,removetour})
{
    const[readmore,setreadmore]=useState(false);
    const description = readmore ? info :`${info.substring(0,200)}....`;
function readmorehandler()
{
   setreadmore(!readmore);
}


    return (
        <div className="card">
            <img  className="image" src={image} alt="" />
            <div className="tour-info">
                <div className="tour-datails">
                <h4 className="tour-price">{price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div>
            <div className="description">
                {description}
                <span className="read-more"onClick={readmorehandler}>
                {readmore ? ` Show Less`: ` Read More`}
                </span> 
            </div>
            </div>
            <div>
               <button className="red-btn" onClick={()=>(removetour(id))}>
                Not Interested
               </button>

                
            </div>
        </div>
    );
}
export default Card;  