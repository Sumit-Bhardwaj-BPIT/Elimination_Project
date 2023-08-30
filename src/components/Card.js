import { useState } from "react";
import './Card.css'
function Card({id,image,info,price,name,removeTour}){

    const[readmore,setReadmore]=useState(false);
    const description=readmore?info:`${info.substring(0,200)}....`

    function readmoreHandler(){
        setReadmore(!readmore);
    }
    

    return(
        <div className="card" >
            <img src={image} className="image" ></img>
            <div className="tour-info">
                <div className="tour-detail">
                    <h4 className="tour-price" >{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">{description}
                    <span className="read-more" onClick={readmoreHandler} >
                        {readmore ? 'show less': `Read more`}
                    </span>
                
                </div>
            </div>
            <button className="btn-click" onClick={()=> removeTour(id)} >
                Not Interested
            </button>
        </div>
    );
}

export default Card;