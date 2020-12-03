const message = new mongoose.Schema({
    name: String
})

const message = mongoose.model('message', messageSchema);

const silence = new message({ name: 'Silence'});
console.log(silence.name);

message.Schema.methods.speak = function () {

    const greeting = this.name
    
}