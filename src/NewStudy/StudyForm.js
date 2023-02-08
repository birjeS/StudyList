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
            importance: enteredImportance,
            date: new Date(enteredDate)
    }

    props.onSaveStudyData(StudyData)
        setEnteredTitle('')
        setEnteredImportance('')
        setEnteredDate('')
        console.log(StudyData)
        setEnteredTitle('')
}
    return(
        <form onSubmit={submitHandler}>
            <div className="new-study__control input">
                <div className="new-study__controls">
                    <label>Title</label>
                    <input type="text"
                    onChange={titleChangeHandler} value={enteredTitle} />
                </div>
                <div className="new-study__controls">
                    <label>Importance</label>
                    <select onChange={ImportanceChangeHandler}>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <div className="new-study__controls">
                    <label>Date</label>
                    <input type = "date" min="2022-01-01" max="2025-12-31" onChange={DateChangeHandler}/>
                </div>
            </div>
            <div>
                <button type = "submit">Add Study</button>
            </div>
        </form>
    )
}

export default StudyForm