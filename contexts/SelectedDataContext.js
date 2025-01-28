// contexts/SelectedDataContext.js
import { createContext, useContext, useState } from 'react';

const SelectedDataContext = createContext();

export const useSelectedData = () => {
    return useContext(SelectedDataContext);
};

export const SelectedDataProvider = ({ children }) => {
    const [selectedDuration, setSelectedDuration] = useState(25); 
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <SelectedDataContext.Provider value={{ selectedDuration, setSelectedDuration, selectedDate, setSelectedDate }}>
            {children}
        </SelectedDataContext.Provider>
    );
};
