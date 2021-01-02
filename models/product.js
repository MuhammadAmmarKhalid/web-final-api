var mongoose = require("mongoose");
const Joi = require("@hapi/joi");
var productSchema = mongoose.Schema({
  name: String,
  category: String,
  price:String,
  details:String,
  image:String,
});
var Product = mongoose.model("Product", productSchema);

function validateProduct(data) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(10).required(),
    category: Joi.string().min(0).required(),
    price: Joi.string().min(0).required(),
    details: Joi.string().min(0).required(),

    image: Joi.string().min(0).required()
  });
  return schema.validate(data, { abortEarly: false });
}
module.exports.Product = Product;
module.exports.validate = validateProduct;
