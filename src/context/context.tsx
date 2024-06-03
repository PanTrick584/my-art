import { ReactNode, createContext, useContext, useState } from 'react';

interface MyContextType {
    mainContentOn: boolean;
    drawingsOn: boolean;
    paintingsOn: boolean;
    photosOn: boolean;
    handleRouting: (route: string) => void;
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
    const [mainContentOn, setMainContentOn] = useState<boolean>(true);
    const [drawingsOn, setDrawingsOn] = useState<boolean>(false);
    const [paintingsOn, setPaintingsOn] = useState<boolean>(false);
    const [photosOn, setPhotosOn] = useState<boolean>(false);

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

    return (
        <MyContext.Provider
            value={{
                mainContentOn,
                drawingsOn,
                paintingsOn,
                photosOn,
                handleRouting
            }}>
            {children}
        </MyContext.Provider>
    );
};