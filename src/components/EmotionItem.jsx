import { getEmotionImage } from '../util/get-emotion-image';
import './EmotionItem.css';

const EmotionItem = ({ emotionId, emotionName, isSelected }) => {
    return (
        <div className={`EmotionItem
                ${isSelected? `EmotionItem_on_${emotionId}` : ''
            }`}>
            <img className='emotion_img' src={getEmotionImage(emotionId)} alt={emotionName} />
            <div className='emotion_name'>{emotionName}</div>
        </div>
    )
}

export default EmotionItem;