import "./StudyItem.css"
import StudyDate from "./StudyDate";
const StudyItem =  (props) => {

    return (
        <div className="study-item">
            <StudyDate date={props.StudyData.date}></StudyDate>
            <div className="study-item__description">
                <h2>{props.StudyData.title}</h2>
                <div className="study-item__list">{props.StudyData.list}</div>
            </div>
        </div>
    )
}

export default StudyItem