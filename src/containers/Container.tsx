import './styles/container.scss';
import { useContextProvider } from '../context/context';
import Section from './sections/Section.tsx';

// import { drawings } from '../context/data/drawings.ts';
import { drawings_2024 } from '../context/data/drawings/drawings_2024.ts';
import { drawings_2023 } from '../context/data/drawings/drawings_2023.ts';
import { drawings_2022 } from '../context/data/drawings/drawings_2022.ts';
import { drawings_2018 } from '../context/data/drawings/drawings_2018.ts';
import { drawings_2017 } from '../context/data/drawings/drawings_2017.ts';
import { drawings_2016 } from '../context/data/drawings/drawings_2016.ts';
import { drawings_2015 } from '../context/data/drawings/drawings_2015.ts';
import { drawings_2014 } from '../context/data/drawings/drawings_2014.ts';
import { paintings } from '../context/data/paintings.ts';
import { photos } from '../context/data/photos.ts';
import Category from './category/Category.tsx';
import SingleView from './singleView/SingleView.tsx';
import { useEffect, useState } from 'react';
import { ArtworkItem } from '../types/types.ts';

const Container = () => {
    const mainContentVisible = useContextProvider().mainContentOn;
    const drawingsVisible = useContextProvider().drawingsOn;
    const paintingsVisible = useContextProvider().paintingsOn;
    const photosVisible = useContextProvider().photosOn;
    const [mixArt, setMixArt] = useState<ArtworkItem[]>([]);
    const fullDrawings = [
            ...drawings_2024,
            ...drawings_2023,
            ...drawings_2022,
            ...drawings_2018,
            ...drawings_2017,
            ...drawings_2016,
            ...drawings_2015,
            ...drawings_2014
        ];

    useEffect(() => {
        const mixedAray = [
            ...fullDrawings,
            ...paintings,
            ...photos
            ]
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
            setMixArt(mixedAray)
    }, [])

    const artworks_a = mixArt.slice(0, 3)
    const artworks_b = mixArt.slice(4, 9)
    const artworks_c = mixArt.slice(10, 14)
    const artworks_d = mixArt.slice(14, 17)
    const artworks_e = mixArt.slice(17, 22)
    const artworks_f = mixArt.slice(23, 27)

    return (
        <div className="container">
            <SingleView />
            <div className="section-container">
                {mainContentVisible 
                 && <>
                        <Section artworks={artworks_a} version='a'/>
                        <Section artworks={artworks_b} version='b'/>
                        <Section artworks={artworks_c} version='c'/>
                        <Section artworks={artworks_d} version='a'/>
                        <Section artworks={artworks_e} version='b'/>
                        <Section artworks={artworks_f} version='c'/>
                    </>
                }
                {drawingsVisible
                 && <div className='drawings-container'>
                        <Category data={fullDrawings} />
                    </div>}
                {paintingsVisible
                 && <div className='paintings-container'>
                        <Category data={paintings} />
                    </div>}
                {photosVisible
                 && <div className='photos-container'>
                        <Category data={photos} />
                    </div>}
            </div>
        </div>
    )
}

export default Container;