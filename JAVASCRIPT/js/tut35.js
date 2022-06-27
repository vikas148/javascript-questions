console.log("this is tut 35 ajax");
/*
what is ajax

1  ajax stands for asynchromous javascript and Xml
2 ajax is not a programming language rather it's a set of existing technologies
3 ajax helps in fetching data asynchronously without interfering with the existing page 
4 no page is reload / refresh
5 modern websites use JSON insted of xml for data transfer
*/
/*
why use AJAX
1 no page reload/refresh
2 Better us eexperience
3 saves network bandwidth
4 very intrective

*/

/*
How it works

1 AJAX uses XML http request object (also called XHR object  )  to achive this
2 Modern websites uses JSON insted of XMl
3 Data can be transferd in any format and protocol (Not always https necessarily)

pure javascript== vanila javascript

*/

let fetchbtn=document.getElementById('fetchbtn')
fetchbtn.addEventListener('click',buttonClickHandler)

function buttonClickHandler() {
    console.log("you hav eclicked the fetch data");
    //instantiate an  XHR object
    const xhr=new XMLHttpRequest(); 
    
    //open the object
    xhr.open('GET','harry.txt',true)

    //what to do on progress optional!
    xhr.onprogress = function(){
        console.log('on progress');
    }

//what to do whwn response is redy    
xhr.onload=function () {
    if (this.status===200) {
        
        console.log(this.responseText);
    }
    else{
        console.error()
    }
}    

//send the response
xhr.send()
}

//23
