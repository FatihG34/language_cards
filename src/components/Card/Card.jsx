import { useState } from "react";
import "./Card.css";


const Card = ({ name, img, options }) => {
    const [isClick, setIsClick] = useState(true);

    return (
        <div className="allSide">
            {
                isClick
                    ?
                    <div onClick={() => setIsClick(false)} className="front">
                        <img src={img} alt="" />
                        <h1>{name}</h1>
                    </div>
                    :
                    <div onClick={() => setIsClick(true)} className="back">
                        {options.map((items) => {
                            return <li>{items}</li>
                        })}
                    </div>
            }




        </div>
    )
}

export default Card