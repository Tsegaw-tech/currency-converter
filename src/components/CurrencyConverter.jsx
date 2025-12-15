import { useEffect, useState } from "react";
import CurrencySelect from "./CurrencySelect";
import AmountInput from "./AmountInput";
import Result from "./Result";


const API_URL = "https://api.exchangerate-api.com/v4/latest/USD";


export default function CurrencyConverter() {
    const [rates, setRates] = useState({});
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("ETB");


    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => setRates(data.rates));
    }, []);


    const exchangeRate = rates[toCurrency] / rates[fromCurrency] || 0;
    const convertedAmount = (amount * exchangeRate).toFixed(2);


    return (
        <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
            <h1 className="text-2xl font-bold text-center mb-6">
                Currency Converter
            </h1>


            <AmountInput amount={amount} setAmount={setAmount} />


            <div className="flex gap-4 my-4">
                <CurrencySelect
                    label="From"
                    value={fromCurrency}
                    onChange={setFromCurrency}
                    currencies={Object.keys(rates)}
                />


                <CurrencySelect
                    label="To"
                    value={toCurrency}
                    onChange={setToCurrency}
                    currencies={Object.keys(rates)}
                />
            </div>


            <Result
                amount={amount}
                from={fromCurrency}
                to={toCurrency}
                result={convertedAmount}
                rate={exchangeRate}
            />
        </div>
    );
}