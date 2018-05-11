module.exports = function(app,db) {

    app.post('/api/neworder', (req,res) => {
        db.orders.create({
            reference: req.body.reference,
            owner_id: req.body.owner_id,
            account_name: req.body.account_name,
            ship_to: req.body.ship_to,
            ship_date: req.body.ship_date,
            status: req.body.status
        }).then(function(){
            db.orders.sync()
        }).then(
            userID = req.body.owner_id
        )
    })//end post

} //end module