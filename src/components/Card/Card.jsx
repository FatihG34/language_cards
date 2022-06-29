import "./Card.css"
const Card = ({ name, img, options }) => {
    // console.log(languages);
    const remove = () => {
        document.querySelector(".front").remove();

    }
    return (
        <div className="allSide">
            <div onClick={remove} className="front">
                <img src={img} alt="" />
                <h1>{name}</h1>
            </div>

            <div className="back">
                {options.map((items) => {
                    return <li>{items}</li>
                })}
            </div>

        </div>
    )
}

export default Card