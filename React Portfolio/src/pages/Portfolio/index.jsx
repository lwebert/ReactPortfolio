import './Portfolio.css';
import Project from '../../components/Project';

export default function Portfolio() {

    const projectArray =[]


    return(
        <div>
            <div>Portfolio</div>
            <Project props={projectArray} />
        </div>
    )
}
//hard code an array of objects for projects. pass as prop to Project

//fetch repo list from github - github API, fetch public repos from inside React App - map over repos and create card for each
