export interface IWallet {
    balance: number;
    transactionHistory: Array<{
      amount: number;
      transactionType: "deposit" | "withdrawal";
      transactionDate: Date;
    }>;
  }