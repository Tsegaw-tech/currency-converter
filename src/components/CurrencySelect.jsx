export default function CurrencySelect({ label, value, onChange, currencies }) {
    return (
        <div className="flex-1">
            <label className="block text-sm font-medium mb-1">{label}</label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full border rounded px-3 py-2"
            >
                {currencies.map((cur) => (
                    <option key={cur} value={cur}>{cur}</option>
                ))}
            </select>
        </div>
    );
}