import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export const Footer = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <footer className={`${theme === "ligth" ? "text-black" : "text-white"} p-8 text-center border-t-2 border-t-sky-600 mt-36`}>
            birdtech
        </footer>
    )
}