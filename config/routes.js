//Update the name of the controller below and rename the file.
const cards_controller = require("../controllers/cards.js")
module.exports = function(app){

  app.get('/', cards_controller.getIndex);
  app.post('/new/card', cards_controller.postNew)
  app.post('/add/:card_id', cards_controller.addCard)
  app.get('/remove/:card_id', cards_controller.removeCard)
}
