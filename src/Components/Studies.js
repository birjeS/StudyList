import './Studies.css'
import StudyItem from "./StudyItem";
import Card from "./UI/Card";
import StudiesFilter from "./Studies/StudiesFilter";
import React, {useState} from "react";


const Studies = (props) => {
    const [filteredYear, setFilteredYear] =
    useState('2022')

    console.log('Year data in Studies.js' + filteredYear)

    const filterChangeHandler = (year) => {
        console.log('Filter change handled by Studies.js')
        console.log(year + ' in Studies.js')
        setFilteredYear(year)
    }


    return (
        <Card className="studies">
            <StudiesFilter selected ={filteredYear}
            onChangeFilter = {filterChangeHandler
            }></StudiesFilter>
            {
                props.studies.map((studies) => {
                return <StudyItem
                    id={studies.id}
                    title={studies.title}
                    importance = {studies.importance}
                    date={studies.date}
                ></StudyItem>
                })
            }
        </Card>
    )
}

export default Studies