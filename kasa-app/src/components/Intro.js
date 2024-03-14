import background from '../assets/IMG_info.jpg';
import '../styles/Intro.scss'

function Intro() {
    return (
        <div className='card-background'>
            <img src={background} alt='background'/>
            <div className='image-text'><p>Chez vous, partout et ailleurs</p></div>
        </div>
    );
}

export default Intro




