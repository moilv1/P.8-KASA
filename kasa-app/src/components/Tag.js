import '../styles/Tag.scss'

export default function Tag({titre, index}) {
        return (
            <span key={index} className='tag'>
                {titre}
            </span>
        );       
}
