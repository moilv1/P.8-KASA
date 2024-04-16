
import logementsjson from '../logementsDATA/logements.json';
import '../styles/Logements.scss'
import Card_logements from './Card_Logements';


function Logements() {
	return (
        <article className="card-container">
            {logementsjson &&
                logementsjson.map((LogementJson, index) => (
                    <Card_logements id={LogementJson.id} titre={LogementJson.title} index={index} src={LogementJson.cover}></Card_logements>
                ))
            }
        </article >
    )
}

export default Logements; 