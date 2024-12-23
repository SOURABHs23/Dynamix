// in future we can add more rules here

export const checklistRules = [
  {
    id: 1,
    name: "Valuation Fee Paid",
    condition: (data) => data.isValuationFeePaid === true,
  },
  {
    id: 2,
    name: "UK Resident",
    condition: (data) => data.isUkResident === true,
  },
  {
    id: 3,
    name: "Risk Rating Medium",
    condition: (data) => data.riskRating === "Medium",
  },
  {
    id: 4,
    name: "LTV Below 60%",
    condition: (data) => {
      const purchasePrice = parseFloat(
        data.mortgage.purchasePrice.slice(1).replace(/,/g, "")
      );
      const loanRequired = parseFloat(
        data.mortgage.loanRequired.slice(1).replace(/,/g, "")
      );
      console.log(purchasePrice, loanRequired);
      const LTV = (loanRequired / purchasePrice) * 100;
      return LTV < 60;
    },
  },
];
