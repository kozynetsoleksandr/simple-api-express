import fetch from "node-fetch";

export const loadCurrency = async (currencyName) =>
  await fetch(`https://api.coincap.io/v2/rates/${currencyName}`).then((r) =>
    r.json()
  );