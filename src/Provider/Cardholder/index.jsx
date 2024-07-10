import { createContext, useState } from "react";

const CardholderContext = createContext()

const CardholderProvider = ({ children }) => {
    const [cardholderName, setCardholderName] = useState()
    const cardholderNameChanger = (e) => {setCardholderName(e.target.value)}

    return(
        <CardholderContext.Provider value={{cardholderName, cardholderNameChanger}}>
            {children}
        </CardholderContext.Provider>
    )
}

export {CardholderContext, CardholderProvider}