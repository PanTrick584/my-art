import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { ArtworkItem } from '../types/types';

interface MyContextType {
    mainContentOn: boolean;
    drawingsOn: boolean;
    paintingsOn: boolean;
    photosOn: boolean;
    handleRouting: (route: string) => void;
    singleViewVisible: boolean;
    singleViewSrc: ArtworkItem | undefined;
    handleSingleView: (singleViewVisible: boolean, singleViewSrc?: ArtworkItem) => void;
}

interface MyContextProviderProps {
    children: ReactNode;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export const useContextProvider = () => {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error('useMyContext must be used within a MyContextProvider');
    }
    return context;
};

export const ContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
    const [mainContentOn, setMainContentOn] = useState(true);
    const [drawingsOn, setDrawingsOn] = useState(false);
    const [paintingsOn, setPaintingsOn] = useState(false);
    const [photosOn, setPhotosOn] = useState(false);
    const [singleViewVisible, setSingleViewVisible] = useState(false);
    const [singleViewSrc, setSingleViewSrc] = useState<ArtworkItem | undefined>();

    const handleRouting = (route: string) => {
        if (route === 'main') {
            setMainContentOn(true);
            setDrawingsOn(false);
            setPaintingsOn(false);
            setPhotosOn(false);
        }
        if (route === 'drawings') {
            setMainContentOn(false);
            setDrawingsOn(true);
            setPaintingsOn(false);
            setPhotosOn(false);
        }
        if (route === 'paintings') {
            setMainContentOn(false);
            setDrawingsOn(false);
            setPaintingsOn(true);
            setPhotosOn(false);
        }
        if (route === 'photos') {
            setMainContentOn(false);
            setDrawingsOn(false);
            setPaintingsOn(false);
            setPhotosOn(true);
        }
    }

    // useEffect(() => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "smooth"
    //     })
    // }, [handleRouting])

    const handleSingleView = (singleViewVisible: boolean, singleViewSrc?: ArtworkItem) => {
        setSingleViewVisible(singleViewVisible);
        setSingleViewSrc(singleViewSrc)
    }

    return (
        <MyContext.Provider
            value={{
                mainContentOn,
                drawingsOn,
                paintingsOn,
                photosOn,
                handleRouting,
                singleViewVisible,
                singleViewSrc,
                handleSingleView
            }}>
            {children}
        </MyContext.Provider>
    );
};