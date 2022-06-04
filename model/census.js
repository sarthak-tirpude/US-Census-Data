const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CSchema = new Schema( {
    city: {
        type:String,
        required: [true, 'City field required']
    },
    state: {
        type:String,
        required: [true, 'State field required']
    },
    census: {
        type:String,
        required: [true, 'Census field required']
    }
});
// First argument is the model name, second is Schema, third is collection name
const Census = mongoose.model('census', CSchema, "census");

module.exports = Census;
