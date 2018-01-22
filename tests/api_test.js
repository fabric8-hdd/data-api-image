var server = require("../main"),
    chai = require("chai"),
    chaiHTTP = require("chai-http"),
    should = chai.should()

chai.use(chaiHTTP)

describe("Test data api", function () {

    describe("GET to /api/v1.0/hypothesis/22f82a83-7b1b-4556-aeea-5b3b16a9b287", () => {
        it(" should return 200", function (done) {
            chai.request(server)
                .get("/api/v1.0/hypothesis/22f82a83-7b1b-4556-aeea-5b3b16a9b287")
                .end(function (err, res) {
                    res.should.have.status(200)
                    done()
                })
        })
    })


    describe("GET to /api/v1.0/hypothesis/22f82a83-7b1", () => {
        it("should return 404", function (done) {
            chai.request(server)
                .get("/api/v1.0/hypothesis/22f82a83-7b1")
                .end(function (err, res) {
                    res.should.have.status(400)
                    done()
                })
        })
    })

    describe("GET to /api/v1.0/hypothesis/", () => {
        it("should return 404", function (done) {
            chai.request(server)
                .get("/api/v1.0/hypothesis/")
                .end(function (err, res) {
                    res.should.have.status(404)
                    done()
                })
        })
    })

})

describe("Test readiness and liveness api", function () {

    describe("Get to /api/v1.0/readiness", () => {
        it(" should return 200", function (done) {
            chai.request(server)
                .get("/api/v1.0/readiness")
                .end(function (err, res) {
                    res.should.have.status(200)
                    done()
                })
        })
    })

    describe("Get to /api/v1.0/liveness", () => {
        it(" should return 200", function (done) {
            chai.request(server)
                .get("/api/v1.0/liveness")
                .end(function (err, res) {
                    res.should.have.status(200)
                    done()
                })
        })
    })
})