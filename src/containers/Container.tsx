import './Container.scss';
import { useContextProvider } from '../context/context';
import { ReactNode } from 'react';
import SectionGrid from './sections/SectionGrid';
import SectionRow from './sections/SectionRow';
import SectionBanner from './sections/SectionBanner';

type Artwork = {
    type: string;
    name: string;
    date: number;
    id: number;
    path: string;
}

const Container = () => {
    const artworksArray: Artwork[] = [
        {
            type: 'drawing',
            name: 'kaloryfer',
            date: 2015,
            id: 1,
            path: '/assets/drawings/pic-1.jpg'
        },
        {
            type: 'drawing',
            name: 'naczynia',
            date: 2015,
            id: 1,
            path: '/assets/drawings/pic-2.jpg'
        }
    ];
    return (
        <div className="container">
            <div className="section-container">
                <SectionRow />
                <SectionGrid />
                <SectionRow />
                <SectionBanner />
                <SectionGrid />
            {/* {artworksArray.map((artwork, id): ReactNode => {
                return(
                    <div className='artwork-container' key={id}>
                        <img className='artwork-image' src={artwork.path}/>
                        <div className="artwork-info">
                            <h3 className="artwork-title">{artwork.name}</h3>
                            <div className="info-container">
                                <span className="artwork-info-type">{artwork.type}</span>
                                <span className="artwork-info-year">{artwork.date}</span>
                            </div>
                        </div>
                    </div>
                )
            })} */}
            </div>
        </div>
    )
}

export default Container;