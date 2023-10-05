import { Link } from "react-router-dom";
import "./Welcome-design.css";

const Welcome = (props) => {


    return (
        <section>
        <h2>DogDayCare!</h2>
        <p>Would you like to Start?</p>
        <Link to = "/dogdaycare">
        <button >Start!</button>
        </Link> 
        </section>
    )
}

export default Welcome;