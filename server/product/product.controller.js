var Product = require("./product.model.js");

var interface = {
    getList: function(req,res,next){
        Product.find({})
            .then(function(products){
                res.send(products)
            })
    }
};


module.exports = interface;