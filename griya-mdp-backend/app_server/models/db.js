let mongoose = require("mongoose");
let dbURI = "mongodb+srv://admin:<db_password>@cluster0.p4gdc1u.mongodb.net/?appName=Cluster0";

mongoose.connect(dbURI,{
    //useNewURLParser: true
});

mongoose.connection.on("connected", () => {
    console.log("Connected To MongoDB");
});

mongoose.connection.on("error", (error) => {
    console.log("Connection Error: " + error);
});

mongoose.connection.on("disconected", () => {
    console.log("Disconnected From MongoDB");
});

