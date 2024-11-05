
const Wallet = () => {
  const balance = 1250.75; // Wallet balance
  const transactions = [
    { id: 1, date: "2024-10-21", description: "Refund For cancelling", amount: -40.0 },
    { id: 2, date: "2024-10-20", description: "Refund For cancelling", amount: -15.5 },
    { id: 3, date: "2024-10-19", description: "Refund For cancelling", amount: 500.0 },
    { id: 4, date: "2024-10-18", description: "Refund For cancelling", amount: -8.75 },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Wallet Balance Card */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 mb-6 text-center">
        <h2 className="text-xl font-semibold text-gray-700">Wallet Balance</h2>
        <p className="text-4xl font-bold text-orange-500 mt-2">₹{balance.toFixed(2)}</p>
      </div>

      {/* Transactions Table */}
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-orange-500 text-white">
            <tr>
              <th className="p-4 text-left font-semibold">Date</th>
              <th className="p-4 text-left font-semibold">Description</th>
              <th className="p-4 text-right font-semibold">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="even:bg-gray-50 odd:bg-white hover:bg-orange-100"
              >
                <td className="p-4 text-gray-700">{transaction.date}</td>
                <td className="p-4 text-gray-700">{transaction.description}</td>
                <td
                  className={`p-4 text-right font-semibold ${
                    transaction.amount < 0 ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {transaction.amount < 0 ? `-₹${Math.abs(transaction.amount)}` : `+₹${transaction.amount}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wallet;
