import React from 'react';
import { useState } from 'react';
import VectorG from '../assets/Vector_G.png';
import VectorD from '../assets/Vector_D.png';
import '../styles/Caroussel.scss';


export default function Caroussel(pictures) {

    const [current, setCurrent] = useState(0)
    const length = pictures.pictures.length

    const ImagePrecedente = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const ImageSuivante = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    return (
        <div>
            <div className="Caroussel_Container">
                {pictures.pictures &&
                    pictures.pictures.map((picture, index) => {
                        return (
                            <div className={index === current ? 'picture active' : 'picture'} key={index}>
                                <img className="Caroussel_Image" key={index} src={picture} alt="Caroussel_Image" />
                                { }
                                <div>
                                    <div className='Compteur'>{current + 1}/{pictures.pictures.length}</div>
                                </div>
                            </div>
                        )

                    })}
                <div className={pictures.pictures.length === 1 ? 'hide' : ''}>
                    <img className="VectorD" src={VectorD} alt="Vector_Droite" onClick={ImageSuivante} />
                    <img className="VectorG" src={VectorG} alt="Vector_Gauche" onClick={ImagePrecedente} />
                </div>
            </div>
        </div>
    )
}