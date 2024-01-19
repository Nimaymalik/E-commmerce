const { connectDb } = require("./config/db");

const app = require(".")
const Port = 5454;

app.listen(Port, async () => {
  
  // Connect to the database
  await connectDb();
  
  console.log("E-Commerce API listening on port:", Port);
});
