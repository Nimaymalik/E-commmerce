//done checking

const CartItem = require("../models/cartItem.model");
const userService = require("../Services/user.service");

async function updateCartItem(userId, cartItemId, cartItemData) {

    try {
        const item = await findCartItemById(cartItemId);
        const user = await userService.findUserById(item.userId);
        
        if (!user) {
            throw new Error("User not found with :", userId);
        }
        
        console.log(item.product);
        if (user._id.toString() === userId.toString()) {
            item.quantity = cartItemData.quantity;
            item.price = item.quantity * item.product.price;
            item.discountedPrice = item.quantity * item.product.discountedPrice;

            const updatedCartItem = await item.save();
            return updatedCartItem;
        }
        else
            throw new Error("You cannot update this cartItem");

    } catch (error) {
        throw new Error(error.message)
    }
}

async function removeCartItem(userId, cartItemId) {
    const cartItem = await findCartItemById(cartItemId);
    const user = await userService.findUserById(userId);
    
    if (user._id.toString() === cartItem.userId.toString()) {
        return await CartItem.findByIdAndDelete(cartItemId)
    }
    else {
        throw new Error("You cannot remove another user's item");

    }
}

async function findCartItemById(cartItemId) {
    const cartItem = await CartItem.findById(cartItemId).populate("product");

    if (cartItemId) {
        return cartItem;
    }
    else {
        throw new Error("CartItem not found with id", cartItemId);
    }
}
module.exports = {
    updateCartItem,
    removeCartItem,
    findCartItemById
}