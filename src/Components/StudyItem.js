import "./StudyItem.css"

const StudyItem =  (props) => {
    console.log(props)

    return (
        <div className="study-item">
            <div>{props.StudyData.date.toString()}</div>
            <div className="study-item__description">
                <h2>{props.StudyData.title}</h2>
                <div className="study-item__list">{props.StudyData.list}</div>
            </div>
        </div>
    )
}

export default StudyItem