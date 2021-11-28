import React, {createContext, useContext, useState} from "react";

const SideBarContext = createContext();

export function SideBarProvider({ children }) {
    const [inactive, setInactive] = useState(false);

    return (
        <SideBarContext.Provider 
            value={{inactive, setInactive}} 
        >
            {children}
        </SideBarContext.Provider>
    );
}

export function useSideBar() {
    const context = useContext(SideBarContext);

    if(!context) throw new Error("useSideBar must be used within a SideBarProvider");

    const { inactive, setInactive } = context;

    return { inactive, setInactive };
}