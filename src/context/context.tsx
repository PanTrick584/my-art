import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

interface MyContextType {
    drawingsOn: boolean;
    handleDrawing: () => void;
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
    const [drawingsOn, setDrawingsOn] = useState<boolean>(false);
    const handleDrawing = () => setDrawingsOn(prev => !prev)

    return (
        <MyContext.Provider
            value={{
                drawingsOn,
                handleDrawing
            }}>
            {children}
        </MyContext.Provider>
    );
};