import { NavLink } from "react-router-dom"

export default function Card_logements({id, src, titre, index}) {
    return (
        <NavLink className='card' to={`logement/${id}`} key={id + index} >
            <div className="card-item" key={index}>
                <div className='fade'></div>
                <img className="card-item-image" src={src} alt={'Photo' + titre}></img>
                <p className="card-item-text"> {titre}</p>
            </div>
        </NavLink>
    )
}