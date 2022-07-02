const {index} = require("../models/products.model");
module.exports = {
    home: function(req, res){
        return res.render("index",{
            title: "Home",
            products: index()
        })
    }
}
/* title: "Home",
products: index().filter(e => req.query && req.query.price ? e.price > parseInt(req.query.price) : e.price > 2000),// re.query = ? //true para que devuelva todos los elementos */