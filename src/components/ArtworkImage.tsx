import { useState } from 'react';
import './styles/artwork-image.scss';

type Image = {
    image: string[];
    type: string;
}

export const ArtworkImage = ({image, type}: Image) => {
    const [currentImage, setCurrentImage] = useState<number>(0)

    const handleImageChange = (move: number) => {      
        setCurrentImage( prev => {
            let activeImg = prev
            if( activeImg >= 0 && activeImg < image.length -1) {
                move ? activeImg++ : activeImg--
                if (activeImg < 0) activeImg = 0
                return activeImg
            }
            return 0;
        })
            
    }
    return (
        <div className="artwork-image">
            {image.map( (img, id) => {
                return <img 
                            src={`assets/${type}s/${img}`} 
                            alt="" 
                            key={id}
                            className="artwork-image-item" 
                            style={{transform: `translateX(-${currentImage * 100}%)`}}
                        />
            })}
            {image.length > 1 &&
                <div className="artwork-image-buttons">
                    <div 
                        className="btn-left" 
                        onClick={() => handleImageChange(0)}>
                            <div className='direction'></div>
                        </div>
                    <div 
                        className="btn-right"
                        onClick={() => handleImageChange(1)}>
                            <div className='direction'></div>
                        </div>
                </div>
            }
        </div>
    )
}