import RatesService from "./RatesService.js";

class RatesController {
    async index(req, res) {
        try {
            const currencyInfo = await RatesService.findCurrency(req.query.currency);
            
            (currencyInfo.data) ? res.json({usd: currencyInfo.data.rateUsd}) : res.status(404).json({
                message: `incorrect currency name ${req.query.currency}` 
            })
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export default new RatesController();