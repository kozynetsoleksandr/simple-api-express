import { loadCurrency } from "./api.js";

class RatesService {
    
    async findCurrency(nameCurrency) {
        const getCurrency = await loadCurrency(nameCurrency);
        return getCurrency.data.rateUsd;  
    }
}

export default new RatesService();