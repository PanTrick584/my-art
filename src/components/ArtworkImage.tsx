import { useEffect, useState } from 'react';
import './styles/artwork-image.scss';
import { Loader } from './Loader';

type Image = {
    image: string[];
    type: string;
}

export const ArtworkImage = ({image, type}: Image) => {
    const [currentImage, setCurrentImage] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);

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
            {loading && <Loader />}
            {image.map( (img, id) => {
                return (
                    <img 
                        src={`assets/${type}s/${img}`} 
                        alt="" 
                        key={id}
                        className="artwork-image-item" 
                        onLoad={() => setLoading(false)}
                        style={{transform: `translateX(-${currentImage * 100}%)`, flex: '0 0 0'}}
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