import './Studies.css'
import StudyItem from "./StudyItem";
import Card from "../UI/Card";

function Studies(props) {
    return (
        <Card className="studies">
            <StudyItem StudyData={props.studies[0]}></StudyItem>
            <StudyItem StudyData={props.studies[1]}></StudyItem>
        </Card>
    )
}

export default Studies