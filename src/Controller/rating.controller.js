const ratingService = require("../Services/ratings.service");

const createRating = async (req, res) => {

    const user = req.user;
    try {
        const rating = await ratingService.createRating(user, req.body);
        return res.status(201).send(rating);
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}

const getAllRatings = async (req, res) => {
    const productId = req.params.productId;
    const user = req.user;
    try {
        const rating= await ratingService.getAllRatings(productId);
        return res.status(201).send(rating);
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }


}

module.exports = { createRating, getAllRatings }
