var express = require('express');
var getRouter = express.Router();
var client = require('../database');

getRouter.get("/GetGroupData", function (req, res) {
    const { id, gId } = req.body;
    console.log(id);
    console.log(gId);

    client.query('SELECT * FROM "You_usergroup" WHERE user_id = $1 AND usergroup_id = $2', [id, gId], function (err, result) {
        console.log("OKAY");
        if (err) throw err;
        console.log(result);
        console.log("Hello");
        res.send(result.rows[0]);
    });
});

module.exports = getRouter;