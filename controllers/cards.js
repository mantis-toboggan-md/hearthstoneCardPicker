const knex = require("../db/knex.js");

module.exports = {

  //render index with sessions' cards displayed
  getIndex: (req, res)=> {
    if(!req.session.cards){
       req.session.cards = [];
    }
    knex('cards').then((result)=>{
      res.render('index', {cards:result, deck:req.session.cards})
    })
  },

  //update card table w/ user-defined card from index form
  postNew: (req,res)=>{
    knex('cards').insert({
      name: req.body.name,
      img_url: req.body.img_url,
      description: req.body.description,
      mana: req.body.mana,
      health: req.body.health,
      attack: req.body.attack
    }).then(()=>{
      res.redirect('/')
    })
  },

  //add a card to the session
  addCard: (req,res)=>{
    knex('cards').where('id', req.params.card_id).then((card)=>{
      req.session.cards.push(card[0])
    }).then(()=>{
      res.redirect('/')
    })
  },

  //remove one card corresponding to id from session
  removeCard: (req,res)=>{
    let cardIndex = req.session.cards.map(card=>card.id).indexOf(req.params.card_id)
    req.session.cards.splice(cardIndex, 1)
    res.redirect('/')
  }
}
