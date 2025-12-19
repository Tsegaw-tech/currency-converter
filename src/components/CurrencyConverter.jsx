import { useEffect, useState } from "react";
import CurrencySelect from "./CurrencySelect";
import AmountInput from "./AmountInput";
import Result from "./Result";

const API_URL = "https://api.exchangerate-api.com/v4/latest/USD";

export default function CurrencyConverter({ darkMode }) {
    const [rates, setRates] = useState({});
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("ETB");
    const [history, setHistory] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => setRates(data.rates));
    }, []);

    const exchangeRate = rates[toCurrency] / rates[fromCurrency] || 0;
    const convertedAmount = (amount * exchangeRate).toFixed(2);

    const handleSwap = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    const handleConvert = () => {
        const conversion = {
            amount,
            from: fromCurrency,
            to: toCurrency,
            result: convertedAmount,
            rate: exchangeRate.toFixed(4),
            date: new Date().toLocaleString(),
        };
        setHistory([conversion, ...history]);
    };

    return (
        <div className={`${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"} p-6 rounded-xl shadow-lg w-full max-w-md transition-colors duration-300`}>
            <h1 className="text-2xl font-bold text-center mb-6">Currency Converter</h1>

            <AmountInput amount={amount} setAmount={setAmount} darkMode={darkMode} />

            <div className="flex gap-2 my-4">
                <CurrencySelect
                    label="From"
                    value={fromCurrency}
                    onChange={setFromCurrency}
                    currencies={Object.keys(rates)}
                    darkMode={darkMode}
                />

                <button
                    onClick={handleSwap}
                    className={`${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"} px-3 py-2 rounded self-end transition-colors duration-200`}
                >
                    ⇄
                </button>

                <CurrencySelect
                    label="To"
                    value={toCurrency}
                    onChange={setToCurrency}
                    currencies={Object.keys(rates)}
                    darkMode={darkMode}
                />
            </div>

            <button
                onClick={handleConvert}
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-200 mb-4"
            >
                Convert
            </button>

            <Result
                amount={amount}
                from={fromCurrency}
                to={toCurrency}
                result={convertedAmount}
                rate={exchangeRate}
                darkMode={darkMode}
            />

            {history.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">Conversion History</h3>
                    <ul className="space-y-2 max-h-40 overflow-y-auto">
                        {history.map((item, index) => (
                            <li key={index} className={`${darkMode ? "bg-gray-700" : "bg-gray-100"} p-2 rounded transition-colors duration-200`}>
                                {item.amount} {item.from} → {item.result} {item.to} <br />
                                <small className="text-gray-400">{`Rate: ${item.rate} | ${item.date}`}</small>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
