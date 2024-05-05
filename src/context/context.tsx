import { ReactNode, createContext, useContext, useState } from 'react';

interface MyContextType {
    count: number;
    incrementCount: () => void;
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
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <MyContext.Provider
            value={{
                 count,
                 incrementCount
            }}>
            {children}
        </MyContext.Provider>
    );
};