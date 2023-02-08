import React from "react";
import StudyForm from "./StudyForm";
import './NewStudy.css'

const NewStudy = (props) => {
    const saveStudyDatahandler = (enteredStudyData) => {
        const StudyData = {
            ...enteredStudyData,
            id: Math.random().toString()
        }
        props.onAddStudy(StudyData)
    }


    return(
        <div className='new-study'>
            <StudyForm onSaveStudyData={saveStudyDatahandler}></StudyForm>
        </div>
    )
}

export default NewStudy