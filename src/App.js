import './App.css';
import React, {useState} from "react";

import Studies from "./Components/Studies";
import NewStudy from "./NewStudy/NewStudy";

const DUMMY_STUDIES = [
        {
            id: 'test1',
        date: new Date (2023, 1, 26),
        title: 'Järelevastamine',
        importance: 'Medium'
    },
        {
            id: 'test2',
            date: new Date (2023, 1, 10),
            title: 'Kodutöö',
            importance: 'High'
        }
]
const App = () => {
    const [studies, setStudies] = useState(DUMMY_STUDIES)
const addStudyhandler = (studies) => {
        console.log('In App.js')
        setStudies((previousStudies) => {
            return [studies, ...previousStudies]
        })
    }
console.log(studies)
  return  (
      <div className="App">
          <NewStudy onAddStudy={addStudyhandler}></NewStudy>
        <Studies studies ={DUMMY_STUDIES}></Studies>
      </div>
  );
}
export default App;


