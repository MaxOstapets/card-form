import { createContext } from "react";

const ValidationContext = createContext()

const ValidationProvider = ({children}) => {
    const validation = /^[a-zA-Z.,\-\s]+$/
    const validationTest = (e) => {validation.test(e.target.value)}

    return(
        <ValidationContext.Provider value={{validation, validationTest}}>
            {children}
        </ValidationContext.Provider>
    )
}

export {ValidationContext, ValidationProvider}