module.exports = function (app, db) {

    app.post('/api/shiporder', (req, res) => {
        db.orders.update({
            status: req.body.status,
        },{
            where: {
                reference: req.body.reference
            }
        }).then(function () {
            db.orders.sync()
        })
    })//end post

} //end module