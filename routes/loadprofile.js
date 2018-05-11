module.exports = function(app, db) {

  app.get('/api/loadprofile/:id', (req, res) => {

    var userID = req.params.id;
    let userObject = []

    db.users.findById(userID).then(user => {
        userObject = {
          info: {
            id: user.id,
            email: user.email
          }
        }
      })
      .then(
        db.todo.findAll({
          where: {
            owner_id: userID
          }
        }).then(toDoitems => {
          var toDoList = []
          for (var i = 0; i < toDoitems.length; i++) {
            var new_todo = {
              reference: toDoitems[i].reference,
              account_name: toDoitems[i].account_name,
              content: toDoitems[i].content
            }
            toDoList.push(new_todo);
            userObject.todo = toDoList;
          }
        })
      )
      .then(
        db.accounts.findAll({
          where: {
            owner_id: userID
          }
        }).then(account => {
          var accountsList = [];
          for (var i = 0; i < account.length; i++) {
            var new_account = {
              reference: account[i].reference,
              owner_id: account[i].owner_id,
              name: account[i].account_name,
              poc: account[i].poc,
              contact_info: account[i].contact_info
            }
            accountsList.push(new_account);
            userObject.accounts = accountsList;
          }
        })
      )
      .then(
        db.orders.findAll({
          where: {
            owner_id: userID
          }
        }).then(order => {
          var ordersList = [];
          for (var i = 0; i < order.length; i++) {
            var new_order = {
              reference: order[i].reference,
              account_name: order[i].account_name,
              ship_to: order[i].ship_to,
              ship_date: order[i].ship_date,
              status: order[i].status
            }
            ordersList.push(new_order);
            userObject.orders = ordersList;
          }
          res.json(userObject)
        })
      )


  }) //end app.get

} //end module
