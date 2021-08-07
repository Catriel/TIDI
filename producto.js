const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const productoSchema = new Schema({

"id": {
  type: Number,
  required: [true, 'Se debe indicar el tipo de producto']  },

"description": 
{ type: String,
  required: [true, 'Se debe indicar una Descripción']},
"unitPrice": 
{type: Number,
  required: [true, 'Indicar Precio']},

"id_sku": {
  type: Number,
  required: [true, 'Id oblligatorio']
},
"id_proveedor": { 
  type: Number,
  required: [true, 'Indicar el ID del proveedor']},
"inStock": {
  type: Boolean,
  default: true,
  required: [true, 'debe indicar si hay Stock True o no False, ej:0']
},
"stockMax": {
  type: Number,
  required: [true, 'debe indicar la cantidad Max de Stock']
},
"stockMin":{
  type: Number ,
required: [true, 'debe indicar la cantidad Min de Stock']
}

});


const Student = mongoose.model('producto',productoSchema);

module.exports = Student;

