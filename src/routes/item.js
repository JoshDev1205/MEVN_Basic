const router = require('express').Router()
const Item = require('../models/item')

// Get Items from Database
router.get('/', (req, res) => {
  Item.find(function (err, items) {
    if (err) { throw err }
    res.json(items)
  })
})

//Get information about an specific item
router.get('/:id', (req, res, next) => {
  Item.findById(req.params.id, function(err, item) {
    res.json(item)
  })
})

// Add Items to the Database
router.post('/', (req, res) => {
  const item = new Item(req.body)
  item.save()
  .then(item => {
    res.status(200).json('Item agregado')
  })
  .catch(err => {
    res.status(400).send({item: 'Error al agregar el Item'})
  })
})

// Updating Items on Database
router.put('/:id', (req, res, next) => {
  Item.findById(req.params.id,function(err, item) {
      if(!item) {
        return next(new Error('No se pudo cargar el documento'))
      } else {
        item.name = req.body.name
        item.price = req.body.price
        item.save()
        .then( item => {
          res.json('Actualizacion Completada')
        })
        .catch(err => {
          res.status(400).send('No se pudo actualizar')
        })
      }
    }
  )
})

router.delete('/:id', (req, res, next) => {
  Item.findByIdAndRemove(req.params.id,function(err, item) {
    if(err) { res.json(err)}
    else {
      res.json('item eliminado satisfactoriamente')
    }
  })
})

module.exports = router