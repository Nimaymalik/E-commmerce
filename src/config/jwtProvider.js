const jwt = require("jsonwebtoken");
const SECRET_KEY = "sdnklcuioivuiefweinwekfuk";
const generateToken = (userId) => {
    try {
        const token = jwt.sign({ userId }, SECRET_KEY, { expiresIn: "48h" });
        return token;
    } catch (error) {
       console.error("Token generation error:", error);
        throw error;
    }
}

const getUserIdFromToken = (token) => {
    try {
        const decodedToken = jwt.verify(token, SECRET_KEY);
        return decodedToken.userId;
    } catch (error) {
        
        console.error("Token verification error:", error);
        throw error;
    }
}

module.exports={generateToken, getUserIdFromToken}