const router = require("express").Router();
const {
  getAdidas,
  getAdidadById,
  addAdidas,
  updateAdidas,
  deleteAdidas,
} = require("../controller/adidas-ctrl");

router.get("/", getAdidas);
router.get('/getAdidasById/:id',getAdidadById);
router.post('/addAdidas',addAdidas);
router.put('/updateAdidas/:id',updateAdidas);
router.delete('/deleteAdidas/:id',deleteAdidas);

module.exports = router;
