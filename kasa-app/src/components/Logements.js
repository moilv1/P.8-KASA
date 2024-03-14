import logementsjson from '../logementsDATA/logements.json';
import '../styles/Logements.scss'

function Logements() {
	return (
        <article className="card-container">
            {logementsjson &&
                logementsjson.map((LogementJson, index) => (
                    <div className='card' to={`logement/${LogementJson.id}`} key={LogementJson.id + index} >
                        <div className="card-item" key={index}>
                            <img className="card-item-image" src={LogementJson.cover} alt={'Photo' + LogementJson.title}>
                            </img>
                            <p className="card-item-text"> {LogementJson.title} </p>
                        </div>
                    </div>
                ))
            }
        </article >
    )
}

export default Logements; 