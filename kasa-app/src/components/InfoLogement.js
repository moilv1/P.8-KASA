import React from 'react';
import LogementJson from '../logementsDATA/logements.json';
import { useParams } from 'react-router-dom';
import Rating from './Rating';
import '../styles/InfoLogement.scss'


export default function InfoLogement() {

    const { id } = useParams();
    const DataLogement = LogementJson.find((product) => product.id === id)


    return (
        <article className='InfoLogementHost'>
            <div className='InfoLogementContainer'>
                <div className='title'>{DataLogement.title}</div>
                <div className='location'>{DataLogement.location}</div>
                <div className='tagsContainer'>
                    {
                        DataLogement.tags &&
                        DataLogement.tags.map((tags, index) => {
                            return (
                                <ul className='tags' key={tags + index}>
                                    <li >{tags}</li>
                                </ul>
                            )
                        })
                    }
                </div>
            </div>
            <div className='InfoLogement2Container'>
                <div className='InfoLogement2'>
                    <div className='host'>{DataLogement.host.name}</div>
                    <img className="hostImg" src={DataLogement.host.picture} alt={'Photo' + DataLogement.host.name}></img>
                </div>
                <Rating rating={DataLogement.rating} />
            </div>

        </article>
    )
}