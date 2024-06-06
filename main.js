// setTimeout(function() {
//     console.log("Hello world");
//   }, 0);




  let counter = 0;
let interval = setInterval(function() {
    counter++;
    console.log("Counter:", counter);
    if (counter === 10) {
        clearInterval(interval);
        console.log("Interval dayandırıldı!");
    }
}, 5000);