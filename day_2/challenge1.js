var rl = require("readline");

var prompts = rl.createInterface(process.stdin, process.stdout);

prompts.question("How many glass of water do you drink each day?", function (glasses) {
    var message = "";
    if (glasses > 5) {
        message = "Great! Water is the key of a healthy life.";
    } else {
        message = "Are you drinking just " + glasses + " glass of water? You should drink at least " + (6 - glasses) + " more.";
    }
    console.log(message);
    process.exit();
});
