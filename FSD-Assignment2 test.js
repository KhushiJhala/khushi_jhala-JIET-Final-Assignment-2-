//API
const express = require("express");
app = express();
const mongoose = require("mongoose");
const postRoute = require("./Routes/PostRoute");

app.use(express.urlencoded({extended : false}));
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/assessmentdb" , {
    useUnifiedTopology : true ,
    useNewUrlParser : true ,
})
.then(() => {
    console.info("Mongodb connenction successful");
})
.catch(() => {
    console.error("Mongodb connenction unsuccessful")
});

app.use(postRoute);

const PORT = 1100;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});