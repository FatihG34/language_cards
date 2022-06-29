import { languages } from "../../helper/data";
import Card from './Card';
import "./Main.css";

const Main = () => {
    return (
        <div className="main">
            <div className="title">
                <h1>Languages</h1>
            </div>
            <div className="cards">
                {languages.map((item, index) => <Card {...item} key={index} />)}
            </div>
        </div>
    )
}

export default Main