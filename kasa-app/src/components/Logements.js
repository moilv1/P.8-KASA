import { NavLink } from 'react-router-dom';
import logementsjson from '../logementsDATA/logements.json';
import '../styles/Logements.scss'


function Logements() {
	return (
        <article className="card-container">
            {logementsjson &&
                logementsjson.map((LogementJson, index) => (
                    <NavLink className='card' to={`logement/${LogementJson.id}`} key={LogementJson.id + index} >
                        <div className="card-item" key={index}>
                            <img className="card-item-image" src={LogementJson.cover} alt={'Photo' + LogementJson.title}></img>
                            <p className="card-item-text"> {LogementJson.title}</p>
                        </div>
                    </NavLink>
                ))
            }
        </article >
    )
}

export default Logements; 