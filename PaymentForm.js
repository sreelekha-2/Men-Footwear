
let addressNode=$("#delAddress")
let mobileNode=$("#mobileNo")
let errMsgOne=$("#errMsg1")
let errMsgTwo=$("#errMsg2")
let errMsgThree=$("#errMsg3")


let formNode=$("#form")
let rb1=$("#debitCard")
let rb2=$("#netBank")
let rb3=$("#cod")
let rb4=$("#upi")

let border1="2px solid red";
let border2="2px solid green";
errMsgOne.css('color','red')
errMsgTwo.css('color','red')
errMsgThree.css('color','red')


$(function(){

    addressNode.blur(()=>validate1())
    mobileNode.blur(()=>validate2())
    formNode.submit(()=>validateform())

})

function validate1(){
    if(addressNode.val()==""){
        errMsgOne.text("this field is required*");
        addressNode.css('border',border1)
        return false;
    }
    else{
        errMsgOne.text("")
        addressNode.css('border',border2);
        return true;

    }
}

function validate2(){
    let regExp=new RegExp("^[0-9]*$")
    if(mobileNode.val()==""){
        errMsgTwo.text("this field is required*")
        mobileNode.css('border',border1)
        return false;
    }
    else if((regExp.test(mobileNode.val())==false) || (mobileNode.val().length<10 || mobileNode.val().length>10)){
        errMsgTwo.text("please enter valid number")
        mobileNode.css('border',border1)
        return false;
    }
    
    else{
        errMsgTwo.text("")
        mobileNode.css('border',border2)
        return true;
    }
}

function validate3(){
    if(rb1.prop("checked")==true || rb2.prop("checked")==true || rb3.prop("checked")==true || rb4.prop("checked")==true ){
        errMsgThree.text("");
        return true;
    }
    else{
        errMsgThree.text("please select payment method*");
        return false;
    }
}

function validateform(){
    let res1=validate1();
    let res2=validate2();
    let res3=validate3();
    return res1 && res2 && res3
}