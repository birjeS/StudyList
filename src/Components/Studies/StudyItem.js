import "./StudyItem.css"
import StudyDate from "./StudyDate";
import "./StudyItem.css";
import Card from "../UI/Card";
import {useState} from "react";
const StudyItem =  (props) => {
    const [title, settitle] = useState(props.StudyData.title)

    const clickHandler = (props) => {
        settitle('Updated')
        console.log(title)
    }

    return (
        <Card className="study-item">
            <StudyDate date={props.StudyData.date}></StudyDate>
            <div className="study-item__description">
                <h2>{props.StudyData.title}</h2>
                <div className="study-item__list">{props.StudyData.list}</div>
            </div>
            <button onClick = {clickHandler}>Change Title</button>
        </Card>
    )
}

export default StudyItem