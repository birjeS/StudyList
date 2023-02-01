import "./StudyDate.css"

function StudyDate(props){
    const month = props.date.toLocaleString('en-US', {month: 'long'})
    const day = props.date.toLocaleString('en-US', {day: '2-digit'})
    const year = props.date.getFullYear()

    return (
        <div className="study-date">
            <div className="study-date__month">{month}</div>
            <div className="study-date__day">{day}</div>
            <div className="study-date__year">{year}</div>
        </div>
    )
}

export default StudyDate