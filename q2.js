const express = require("express");
const axios = require("axios");
const router = express();
/* const Post = require("../PostModel")
 */
router.get("/", (req , res) => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
         console.log(response.data);
         var userId = [];
         userId = userId.forEach((el) => {
             return (response.data.userId = el);
         } )
         console.log(userId);
          return res.status(200).send(response.data);  
    })
    .catch((error) => {
        console.error(error);
        return res.status(500).send("error");
    });
});

module.exports = router;