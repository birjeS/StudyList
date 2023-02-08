import './App.css';

import Studies from "./Components/Studies/Studies";
import NewStudy from "./NewStudy/NewStudy";

const App = () => {
    const studies = [
        {
        date: new Date (2023, 1, 26),
        titl: 'Järelevastamine',
        list: 'Medium'
    },
        {
            date: new Date (2023, 1, 10),
            titl: 'Kodutöö',
            list: 'High'
        }
]

const addStudyhandler = (study) => {
        console.log('In App.js')
        console.log(study)
}
  return  (
      <div className="App">
          <NewStudy onAddStudy={addStudyhandler()}></NewStudy>
        <Studies studies ={studies}></Studies>
      </div>
  );
}
export default App;


