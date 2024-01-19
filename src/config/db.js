const  mongoose  = require("mongoose")

const mongodbUrl = "mongodb+srv://nimaymalik12:PZYthVT3PTMcQkNf@cluster0.4et3q0w.mongodb.net/?retryWrites=true&w=majority "

const connectDb = () => {

    return mongoose.connect(mongodbUrl);

}
module.exports =  {connectDb}; 