import { useEffect, useState } from 'react';
import './styles/artwork-image.scss';
import { Loader } from './Loader';

type Image = {
    image: string[];
    type: string;
}

export const ArtworkImage = ({image, type}: Image) => {
    const [currentImage, setCurrentImage] = useState<number>(0);

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
            {/* <Loader /> */}
            {image.map( (img, id) => {
                return (
                    <img 
                        src={`assets/${type}s/${img}`} 
                        alt="" 
                        key={id}
                        className="artwork-image-item" 
                        style={{transform: `translateX(-${currentImage * 100}%)`}}
                        loading='lazy' />
                )
            })}
            {image.length > 1 &&
                <div className="artwork-image-buttons">
                    <div 
                        className="btn-left" 
                        onClick={() => handleImageChange(0)}>
                            <div className='direction'>{'<<<'}</div>
                            <div className="btn-counter">{currentImage + 1}</div>
                        </div>
                    <div 
                        className="btn-right"
                        onClick={() => handleImageChange(1)}>
                            <div className="btn-counter">{image.length}</div>
                            <div className='direction'>{'>>>'}</div>
                        </div>
                </div>
            }
        </div>
    )
}