import "./StudyItem.css"
import StudyDate from "./StudyDate";
import "./StudyItem.css";
import Card from "./UI/Card";
import {useState} from "react";
const StudyItem =  (props) => {

    return (
        <li>
        <Card className="study-item">
            <StudyDate date={props.date}></StudyDate>
            <div className="study-item__description">
                <h2>{props.title}</h2>
                <div
                    className="study-item__list">{props.importance}</div>
            </div>
        </Card>
        </li>
    )
}

export default StudyItem