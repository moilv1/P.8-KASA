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
                <h2>{DataLogement.title}</h2>
                <p>{DataLogement.location}</p>
                <div className='tagsContainer'>
                    {
                        DataLogement.tags &&
                        DataLogement.tags.map((tags, index) => {
                            return (
                                <span className='tags' key={tags + index}>
                                    {tags}
                                </span>
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