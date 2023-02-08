import './Studies.css'
import Card from "./UI/Card";
import StudiesFilter from "./Studies/StudiesFilter";
import StudiesList from "./Studies/StudiesList";
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

    const filteredStudies = props.studies.filter(
        (studies) => {
            return studies.date.getFullYear().toString() ===
                filteredYear
        }
    )

    return (
        <Card className="studies">
            <StudiesFilter selected ={filteredYear}
            onChangeFilter = {filterChangeHandler
            }></StudiesFilter>
            <StudiesList filteredStudies={filteredStudies}></StudiesList>
        </Card>)

}

export default Studies