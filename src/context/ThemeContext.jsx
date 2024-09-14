import { createContext ,useContext, useState } from "react";

//1 creamos context: declaramos variable.

const ThemeContext = createContext();

//2 Custom Hook para usar el contexto

export const useTheme = () => {
    // Obtener el contexto usando el hook useContext
    const context = useContext(ThemeContext);
    // Verificar si el contexto está definido, si no, lanzar un error
    if (context === undefined) {
        throw new Error("useTheme debe estar dentro del ThemeProvider");
        //Devolver el contexto 
    }
    return context;
};

//3 Provider proveedpr del contexto:
export const ThemeProvider = ({ children }) => {
    //estado para almacenar el tema actual, por defecto es 'light'
    const [theme, setTheme] = useState("light");

    //funcion para cambiar el tema
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    //proveedor del contexto con el estado y la funcion para cambiar el tema
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext