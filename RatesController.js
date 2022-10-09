import RatesService from "./RatesService.js";

class RatesController {
    async index(req, res) {
        try {
            const rateUsd = await RatesService.findCurrency(req.query.currency);
            res.json({usd: rateUsd});
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export default new RatesController();