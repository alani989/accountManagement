module.exports = function (app, db) {

    app.post('/api/deleteorder', (req, res) => {
        db.orders.destroy({
            where: {
                reference: req.body.reference
            }
        }).then(function () {
            db.orders.sync()
        })
    })//end post

} //end module