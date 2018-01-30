process.env.ROUTE_PREFIX = "/api/v1.0"
process.env.ROUTE_PATH = "/data"

var server = require("../main"),
    chai = require("chai"),
    chaiHTTP = require("chai-http"),
    should = chai.should(),
    route_path = process.env.ROUTE_PATH || "/data",
    route_prefix = process.env.ROUTE_PREFIX

chai.use(chaiHTTP)

describe("Test data api", function () {

    describe("GET to /hypothesis/22f82a83-7b1b-4556-aeea-5b3b16a9b287", () => {
        it(" should return 200", function (done) {
            chai.request(server)
                .get(process.env.ROUTE_PATH + process.env.ROUTE_PREFIX + "/hypothesis/22f82a83-7b1b-4556-aeea-5b3b16a9b287")
                .end(function (err, res) {
                    res.should.have.status(200)
                    done()
                })
        })
    })


    describe("GET to /hypothesis/22f82a83-7b1", () => {
        it("should return 404", function (done) {
            chai.request(server)
                .get(process.env.ROUTE_PATH + process.env.ROUTE_PREFIX + "/hypothesis/22f82a83-7b1")
                .end(function (err, res) {
                    res.should.have.status(400)
                    done()
                })
        })
    })

    describe("GET to /hypothesis/", () => {
        it("should return 404", function (done) {
            chai.request(server)
                .get(process.env.ROUTE_PATH + process.env.ROUTE_PREFIX + "/hypothesis/")
                .end(function (err, res) {
                    res.should.have.status(404)
                    done()
                })
        })
    })

})

describe("Test readiness and liveness api", function () {

    describe("Get to /readiness", () => {
        it(" should return 200", function (done) {
            chai.request(server)
                .get(process.env.ROUTE_PATH + process.env.ROUTE_PREFIX + "/readiness")
                .end(function (err, res) {
                    res.should.have.status(200)
                    done()
                })
        })
    })

    describe("Get to /liveness", () => {
        it(" should return 200", function (done) {
            chai.request(server)
                .get(process.env.ROUTE_PATH + process.env.ROUTE_PREFIX + "/liveness")
                .end(function (err, res) {
                    res.should.have.status(200)
                    done()
                })
        })
    })
})