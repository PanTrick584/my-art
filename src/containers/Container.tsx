import './styles/container.scss';
import { useContextProvider } from '../context/context';
import Section from './sections/Section.tsx';

import { drawings } from '../context/data/drawings.ts';
import { paintings } from '../context/data/paintings.ts';
import { photos } from '../context/data/photos.ts';

const Container = () => {
    const mixArt = [...drawings, ...paintings, ...photos]
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
        console.log(mixArt);
    
        const artworks_a = mixArt.slice(0, 3)
        const artworks_b = mixArt.slice(4, 9)
        const artworks_c = mixArt.slice(10, 14)
        const artworks_d = mixArt.slice(14, 17)
        const artworks_e = mixArt.slice(17, 22)
        const artworks_f = mixArt.slice(23, 27)
    
    return (
        <div className="container">
            <div className="section-container">
                {/* 3 items */}
                <Section artworks={artworks_a} version='a'/>
                {/* 5 images */}
                <Section artworks={artworks_b} version='b'/>
                {/* 4 images */}
                <Section artworks={artworks_c} version='c'/>
                <Section artworks={artworks_d} version='a'/>
                <Section artworks={artworks_e} version='b'/>
                <Section artworks={artworks_f} version='c'/>

            </div>
        </div>
    )
}

export default Container;