import React, {useState} from "react";
import './StudyForm.css'


const StudyForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredImportance, setEnteredImportance] = useState('')
    const [enteredDate, setEnteredDate] = useState('')


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const ImportanceChangeHandler = (event) => {
        setEnteredImportance(event.target.value)
    }
    const DateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const StudyData = {
            title: enteredTitle,
            Importance: enteredImportance,
            date: new Date(enteredDate)
    }

    props.onSaveStudyData(StudyData)
        setEnteredTitle('')
        setEnteredImportance('')
        setEnteredDate('')

}
    return(
        <form onSubmit={submitHandler}>
            <div className="new-study__control input">
                <div className="new-study__control">
                    <label>Title</label>
                    <input type="text"
                    onChange={titleChangeHandler} value={enteredTitle} />
                </div>
                <div className="new-study__control">
                    <label>Importance</label>
                    <select onChange={ImportanceChangeHandler}>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <div className="new-study__control">
                    <label>Date</label>
                    <input type = "date" min="2022-01-01" max="2025-12-31" onChange={DateChangeHandler} value={enteredDate}/>
                </div>
            </div>
            <div className="new-study__actions">
                <button type = " submit">Add Study</button>
            </div>
        </form>
    )
}

export default StudyForm