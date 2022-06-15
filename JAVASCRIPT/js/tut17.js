console.log('this is tut17 on events');
/*
anything happen during the interection with webpage on browser is called event  
they are like click on anything,hover , copy paste, many more

javascript gives us capablity to capture these events
we can run certain code after a event and can make attractive our webpages

addEventlistener fxn is used to listen events its first argument is event or dusra argument ek fxn hota hai jo ki event ke hone ke baad run krega

use mouseover insted of click
*/
document.getElementById('heading').addEventListener('click', function (e) {

    console.log('you have clicked on the heading');

    let variable;
    variable=e.target;
    // variable=e.target.className;
    // variable=e.target.classlist;
    // variable=e.target.id;
    // variable=e.offsetX;
    // variable=e.offsetY;
    // variable=e.clientX;
    // variable=e.clientY;

    console.log(variable);
    // console.log(e);//for printing event
    //for redirecting on any webpage
    // location.href='//google.com'

});