module.exports = function (app, db) {

    app.post('/api/deleteaccount', (req, res) => {
        db.accounts.destroy({
            where: {
                reference: req.body.reference
            }
        }).then(function () {
            db.accounts.sync()
        })
    })//end post

} //end module