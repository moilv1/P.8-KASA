import StarRed from '../assets/RatingRed.png'
import StarGrey from '../assets/RatingGrey.png'
import '../styles/Rating.scss'

function Rating(LogementJson) {
    let LogementRatingRed = LogementJson.rating;
    let LogementRatingGrey = 5 - LogementJson.rating
    const Starsgrey = () => {
        let greyStarsArray = []
        for (let i = 0; i < LogementRatingGrey; i++) {
            greyStarsArray.push(<img className='GreyStars' src={StarGrey} key={`Étoile grisée n°${i}`} alt={`Étoiles`} />)
        }
        return greyStarsArray;
    }
    const Starsred = () => {
        let redStarsArray = []
        for (let j = 0; j < LogementRatingRed; j++) {
            redStarsArray.push(<img className='RedStars' src={StarRed} key={`Étoile rouge n°${j}`} alt={`Étoiles`} />)
        }
        return redStarsArray;
    }

    return (
        <div className='Rating'>
            {Starsred()}
            {Starsgrey()}
        </div>
    )
}

export default Rating;