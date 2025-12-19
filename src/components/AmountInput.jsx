export default function AmountInput({ amount, setAmount, darkMode }) {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Amount</label>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className={`${darkMode ? "bg-gray-700 text-white border-gray-600 placeholder-gray-400" : "bg-white text-gray-900 border-gray-300"} w-full border rounded px-3 py-2 transition-colors duration-300`}
            />
        </div>
    );
}
