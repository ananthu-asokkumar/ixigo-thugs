import { createContext, useState } from "react"



export const BookingContext=createContext({isdropDown:"",setIsDropDown:()=>{}})

const BookingAuthContextProvider = ({ children }) => {
    const [isdropDown,setIsDropDown] = useState("");
    return (
        <BookingContext.Provider value={{isdropDown,setIsDropDown}}>
            {children}
        </BookingContext.Provider>
    )
}

export default BookingAuthContextProvider
