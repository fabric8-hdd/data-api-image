var express = require("express"),
	app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

var port = process.env.APP_PORT || 9090,
	ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || "0.0.0.0"

var routes = require("./node_modules/data-api/src/api/routes")(app)

//Setting up server
var server = app.listen(port, function () {
	var port = server.address().port
	console.log("App now running on port", port)
})

module.exports = server