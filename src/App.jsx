import { useState } from "react";
import CurrencyConverter from "./components/CurrencyConverter";

export default function App() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "min-h-screen bg-gray-900 text-white flex items-center justify-center p-4 transition-colors duration-300" : "min-h-screen bg-gray-100 text-gray-900 flex items-center justify-center p-4 transition-colors duration-300"}>
            
            {/* Dark/Light Mode Icon Toggle */}
            <div className="absolute top-4 right-4">
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200 text-lg"
                    title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                    {darkMode ? "🌙" : "🌞"}
                </button>
            </div>

            {/* Currency Converter */}
            <CurrencyConverter darkMode={darkMode} />
        </div>
    );
}
