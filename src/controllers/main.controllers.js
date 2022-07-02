const {index} = require("../models/products.model");
module.exports = {
    home: function(req, res){
        let products = index()
        if(req.query && req.query.price){
            products = products.filter(e => e.price > parseInt(req.query.price))
        }
        if(req.query && req.query.name){
            products = products.filter(e => e.name.indexOf(req.query.name) !== -1)
        }
        return res.render("index",{
            title: "Home",
            products: products
        })
    }
}
/* title: "Home",
products: index().filter(e => req.query && req.query.price ? e.price > parseInt(req.query.price) : e.price > 2000),// re.query = ? //true para que devuelva todos los elementos */