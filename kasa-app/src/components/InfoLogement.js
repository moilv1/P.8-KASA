import React from 'react';
import LogementJson from '../logementsDATA/logements.json';
import { useParams } from 'react-router-dom';
import Rating from './Rating';
import '../styles/InfoLogement.scss';
import Tag from './Tag';




export default function InfoLogement() {
    const { id } = useParams();
    const DataLogement = LogementJson.find((product) => product.id === id);
    const DataTags = DataLogement.tags

    return (
        <article className='InfoLogementHost'>
            <div className='InfoLogementContainer'>
                <h1>{DataLogement.title}</h1>
                <p>{DataLogement.location}</p>

                <div className='tagsContainer'>
                        {
                            DataTags.map((tag, index) => <Tag key={index} titre={tag}></Tag> )
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


