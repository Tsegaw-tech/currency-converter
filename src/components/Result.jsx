export default function Result({ amount, from, to, result, rate }) {
    return (
        <div className="mt-6 text-center">
            <p className="text-gray-600 mb-2">
                Exchange Rate: 1 {from} = {rate.toFixed(4)} {to}
            </p>
            <h2 className="text-xl font-semibold">
                {amount} {from} = {result} {to}
            </h2>
        </div>
    );
}