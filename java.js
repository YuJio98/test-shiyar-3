var textarea = document.getElementById("text");
var result = document.getElementById("result");
var select = document.getElementById("select");

textarea.oninput = ()=>{
    get_result();
}
select.onchange = ()=>{
    get_result();
}

function get_result(){
    if(select.value == "decode"){
        result.value = window.atob(textarea.value) ;
    }else{
        result.value = window.btoa(textarea.value) ;
    }
}