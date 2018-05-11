module.exports = function(app,db) {

    app.post('/api/newaccount', (req,res) => {
        db.accounts.create({
            reference: req.body.reference,
            owner_id: req.body.owner_id,
            account_name: req.body.name,
            poc: req.body.poc,
            contact_info: req.body.contact_info
        }).then(function(){
            db.accounts.sync()
        }).then(
            userID = req.body.owner_id
        )
    })//end post

} //end module