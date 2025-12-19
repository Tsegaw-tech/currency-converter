export default function CurrencySelect({ label, value, onChange, currencies, darkMode }) {
    return (
        <div className="flex-1">
            <label className="block text-sm font-medium mb-1">{label}</label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={`${darkMode ? "bg-gray-700 text-white border-gray-600" : "bg-white text-gray-900 border-gray-300"} w-full border rounded px-3 py-2 transition-colors duration-300`}
            >
                {currencies.map((cur) => (
                    <option key={cur} value={cur}>{cur}</option>
                ))}
            </select>
        </div>
    );
}
