var hidebox1 = document.getElementById('hideBox1');
var hidebox2 = document.getElementById('hideBox2');
var hidebox3 = document.getElementById('hideBox3');


    hidebox1.style.display='none';
    hidebox2.style.display='none';
    hidebox3.style.display='none';
function ClickBox1(){
    
    if(hidebox1.style.display ='none' ){
        hidebox1.style.display='inline'
        hidebox2.style.display='none';
        hidebox3.style.display='none'
    }
}

function ClickBox2(){
    if(hidebox2.style.display='none'){
        hidebox1.style.display='none';
        hidebox2.style.display='inline';
        hidebox3.style.display='none';
    }
}

function ClickBox3(){
    if(hidebox3.style.display='none'){
        hidebox1.style.display='none';
        hidebox2.style.display='none';
        hidebox3.style.display='inline';
    }
}

