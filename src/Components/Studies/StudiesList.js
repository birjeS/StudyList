import React from "react";
import StudyItem from "../StudyItem";
import './StudiesList.css'

const StudiesList = (props) => {
    if (props.filteredStudies.length === 0) {
        return <p className="estudies-list__fallback">No Studies Found.</p>
    }

    return (
        <ul className="studies-list">
            {
            props.filteredStudies.map((studies) => {
            return <StudyItem
            id={studies.id}
            title={studies.title}
            importance={studies.importance}
            date={studies.date}></StudyItem>})
            }
        </ul>
)
}

export default StudiesList