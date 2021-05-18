$(window).scroll(function(){
    if($(this).scrollTop()>0){
        $('.header-list').css('right','0');
        $('.header-list').css('background-color','slategray');
        $('.header-list').css('border-radius','30px 0px 0px 30px');
        $('.header-list').css('text-align','right');

    }else{
        $('.header-list').css('background-color','#07689f');
        $('.header-list').css('width','auto');
        $('.header-list').css('right','30px');
    }
})

$('#html').mouseover(function(){
    $('#front-percent-html').css('background-color','red');
    $('#percent-html').css('display','block');
});
$('#html').mouseout(function(){
    $('#front-percent-html').css('background-color','#e9dcc8');
    $('#percent-html').css('display','none');
});


$('#css').mouseover(function(){
    $('#front-percent-css').css('background-color','blue');
    $('#percent-css').css('display','block');
});
$('#css').mouseout(function(){
    $('#front-percent-css').css('background-color','#e9dcc8');
    $('#percent-css').css('display','none');
});


$('#js').mouseover(function(){
    $('#front-percent-javascript').css('background-color','orange');
    $('#percent-js').css('display','block');
});
$('#js').mouseout(function(){
    $('#front-percent-javascript').css('background-color','#e9dcc8');
    $('#percent-js').css('display','none');
});


$('#node').mouseover(function(){
    $('#front-percent-nodejs').css('background-color','green');
    $('#percent-node').css('display','block');
});
$('#node').mouseout(function(){
    $('#front-percent-nodejs').css('background-color','#e9dcc8');
    $('#percent-node').css('display','none');
});

$('#node').mouseover(function(){
    $('#front-percent-nodejs').css('background-color','green');
    $('#percent-node').css('display','block');
});
$('#node').mouseout(function(){
    $('#front-percent-nodejs').css('background-color','#e9dcc8');
    $('#percent-node').css('display','none');
});

$('#mongo').mouseover(function(){
    $('#front-percent-nodejs').css('background-color','green');
    $('#percent-node').css('display','block');
});
$('#mongo').mouseout(function(){
    $('#front-percent-nodejs').css('background-color','#e9dcc8');
    $('#percent-node').css('display','none');
});


$('#project1').mouseover(function(){
    $('#project1').attr( 'src', './image/url_negative.png' );
});
$('#project1').mouseout(function(){
    $('#project1').attr( 'src', './image/url.png' );
});
$('#project2').mouseover(function(){
    $('#project2').attr( 'src', './image/url_negative.png' );
});
$('#project2').mouseout(function(){
    $('#project2').attr( 'src', './image/url.png' );
});
$('#project3').mouseover(function(){
    $('#project3').attr( 'src', './image/url_negative.png' );
});
$('#project3').mouseout(function(){
    $('#project3').attr( 'src', './image/url.png' );
});


var typingBool = false; 
    var typingIdx=0; 
    var typingTxt = $(".main-title").text(); 
    typingTxt=typingTxt.split(""); 
    if(typingBool==false){ 
       typingBool=true; 
       
       var tyInt = setInterval(typing,100); 
     } 
     
     function typing(){ 
       if(typingIdx<typingTxt.length){ 
         $(".typing").append(typingTxt[typingIdx]); 
         typingIdx++; 
       } else{ 
         clearInterval(tyInt); 
       } 
     }  