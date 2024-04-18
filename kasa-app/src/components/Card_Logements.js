import { NavLink } from "react-router-dom"

export default function Card_logements({id, src, titre}) {
    return (
        <NavLink className='card' to={`logement/${id}`}  >
            <div className="card-item" >
                <div className='fade'></div>
                <img className="card-item-image" src={src} alt={'Photo' + titre}></img>
                <p className="card-item-text"> {titre}</p>
            </div>
        </NavLink>
    )
}