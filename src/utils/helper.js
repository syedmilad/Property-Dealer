// --- Helper Function for Currency Formatting ---
export const formatCurrency = (value) => {
  // Basic formatting, consider using Intl.NumberFormat for better localization
  return `$ ${value.toLocaleString("en-US")}`;
};

export const formatCurrencyToDataTable = (amount) => {
  // Ensure it's a number before formatting
  const numberAmount =
    typeof amount === "string" ? parseFloat(amount.replace(/,/g, "")) : amount;
  if (isNaN(numberAmount)) {
    return amount; // Return original string if parsing fails
  }
  return numberAmount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
