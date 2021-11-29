import React, {createContext, useContext, useState} from "react";

const ClassCouncilModalContext = createContext();

export function ClassCouncilModalProvider({ children }) {
    const [isActive, setIsActive] = useState(false);
    const [selectedItem, setSelectedItem] = useState("");
    const [openModal, setOpenModal] = useState(false);

    return (
        <ClassCouncilModalContext.Provider 
            value={{isActive, setIsActive, selectedItem, setSelectedItem, openModal, setOpenModal}} 
        >
            {children}
        </ClassCouncilModalContext.Provider>
    );
}

export function useClassCouncilModal() {
    const context = useContext(ClassCouncilModalContext);

    if(!context) throw new Error("useClassCouncilModal must be used within a ClassCouncilModalProvider");

    const { isActive, setIsActive, selectedItem, setSelectedItem, openModal, setOpenModal } = context;
    return { isActive, setIsActive, selectedItem, setSelectedItem, openModal, setOpenModal };
}