module.exports = function(app,db) {

    app.post('/api/newtodo', (req,res) => {
        db.todo.create({
            reference: req.body.reference,
            owner_id: req.body.owner_id,
            account_name: req.body.account_name,
            content: req.body.content
        }).then(function(){
            db.todo.sync()
        }).then(
            userID = req.body.owner_id
        )
    })//end post

} //end module