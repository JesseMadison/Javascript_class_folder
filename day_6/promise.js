// three second wait function created
function waitUptoThreeSeconds(time){
  var promise = new Promise(function(resolve,reject){
    console/log(`I will wait upto 3 seconds, you asked me to wait for ${time} seconds`);

    setTimeout(function (){
      resolve(`${time} seconds up`)
    }, time * 1000);

    setTimeout(function) (){
      reject("3 seconds up are up, you asked me to wait for too long!")
    }, 3000);
  })
  return promise
}

waitUptoThreeSeconds(2).then(function(result){
  console.log(result);
}).catch(function)(err){
  console.log(err);
})
