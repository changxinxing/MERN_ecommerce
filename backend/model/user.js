const mongoose =  require('../services/mongoose').mongoose;
const md5 = require('md5');
const Schema = mongoose.Schema;
const userSchema = new Schema({
        name: {
            type: String,
            maxlength: 50
        },
        email: {
            type: String,
            trim: true,
            unique: 1
        },
        password: {
            type: String,
            minlength: 5
        },
   
    },
    {
        collection: "userlists",
    }
)
userSchema.methods.comparePassword = function(plainPassword) {
    const compare = md5(plainPassword) == this.password;
    if(compare == false) {console.log("Wrong Password")
}
    else {
        console.log("Welcome  " + this.name + "!")}
    
}
module.exports = mongoose.model("userSchema", userSchema);
