import { useState } from "react";
import "./Card.css";


const Card = ({ name, img, options }) => {
    const [isClick, setIsClick] = useState(true);
    const [isHover, setIsHover] = useState(false)
    let myImg = {
        transform: ""
    }
    let shadow = {
        boxShadow: ""
    }

    if (isHover) {
        myImg.transform = "scale(1.3)";
        shadow.boxShadow = "1px 1px 5px 5px #E488FF";
    }
    return (
        <div style={shadow} className="allSide">
            {
                isClick
                    ?
                    <div
                        onMouseOver={() => setIsHover(true)}
                        onMouseOut={() => setIsHover(false)}
                        onClick={() => setIsClick(false)} className="front">
                        <img style={myImg} src={img} alt="" />
                        <h1>{name}</h1>
                    </div>
                    :
                    <div onClick={() => setIsClick(true)} className="back">
                        <ul>
                            {options.map((items) => {
                                return <li>{items}</li>
                            })}
                        </ul>
                    </div>
            }
        </div>
    )
}

export default Card