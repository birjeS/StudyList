import './App.css';

import StudyItem from "./Components/StudyItem";
const App = () => {
    const study = [
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
  return  (
      <div>
        <StudyItem StudyData={studies[0]}></StudyItem>
          <StudyItem StudyData={studies[1]}></StudyItem>
      </div>
  );
}
export default App;


