module.exports = function (app, db) {

    app.post('/api/deletetodo', (req, res) => {
        db.todo.destroy({
            where: {
                reference: req.body.reference
            }
        }).then(function () {
            db.todo.sync()
        })
    })//end post

} //end module