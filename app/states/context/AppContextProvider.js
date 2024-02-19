'use client'

import AuthContextProvider from "./AuthContextProvider";

function AppContextProvider(props){
    return (
        <>
            <AuthContextProvider>
                
                {props.children}
                
            </AuthContextProvider>
        </>
    );
}

export default AppContextProvider;