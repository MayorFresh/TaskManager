// A function for handling wrong route errors

const notFound = (req, res) => {
    res.status(404).send("Route does not Exist")
}

module.exports = notFound;