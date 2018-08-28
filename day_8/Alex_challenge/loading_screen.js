

function onReady(callback) {
    // The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
    // The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.
    // The ID value returned by setInterval() is used as the parameter for the clearInterval() method.
    var intervalID = window.setInterval(checkReady, 1000);

    function checkReady() {
        // The program will only pass this test when the whole body tag loads completely hence changing the body from undefined to true
        if (document.getElementsByTagName('body')[0] !== undefined) {
            // Now since the clearInterval() has been called the setInterval method will stop
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    //  The ":" colon is used to make this line like a  ternary operator  it acts a  an if/then statement that switches the loading screen css properties from show to hide

    // The statement is trigged when the body tag loads a value
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
    show('page', true);
    show('loading', false);
});
