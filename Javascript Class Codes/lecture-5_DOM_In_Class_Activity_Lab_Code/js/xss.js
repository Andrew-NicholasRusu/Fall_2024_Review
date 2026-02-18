let script = document.createElement("script");
script.innerHTML = "var i=0; while(i<5){ i++; alert('click me 5 times to get rid of this alert :) hahaha!'); }";
//uncomment the next line to have timer for this alert and go to html file and refresh the page.
// script.innerHTML = "setTimeout(()=>{console.log('Execute After 5 seconds!');var i=0; while(i<5){ i++; alert('click me 5 times to get rid of this alert :) hahaha!'); };},5000);";
document.body.appendChild(script);




