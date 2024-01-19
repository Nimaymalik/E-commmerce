const reviewService = require("../Services/review.service");

const createReview = async (req, res) => {
    const user = req.user;

    try {
        const review = await reviewService.createReview(user, req.body);
        return res.status(201).send(review);
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}

const getAllReview = async (req, res) => {
    const productId = req.params.productId;

    const user = req.user;
    try {
        const reviews = await reviewService.getAllReview(productId);
        return res.status(201).send(reviews);
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}

module.exports = {
    getAllReview,
    createReview
}
