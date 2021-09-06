$(window).scroll(function(){
    if($(this).scrollTop()>0){
        $('.header-list').css('right','20px');
        $('.header-list').css('background','gray');
        $('.header-list').css('text-align','right');
        // $('.header-list').css('box-shadow','3px 1px 1px #382d2d');
        $('.header-list').removeClass("Top_li");
        
    }else{
        $('.header-list').css('width','auto');
        $('.header-list').css('background','none');
        $('.header-list').css('right','30px');
        $('.header-list').css('box-shadow','none');
        $('.header-list').addClass("Top_li")
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

$('#project5').mouseover(function(){
    $('#project5').attr( 'src', './image/url_negative.png' );
});
$('#project5').mouseout(function(){
    $('#project5').attr( 'src', './image/url.png' );
});


$('#project6').mouseover(function(){
    $('#project6').attr( 'src', './image/url_negative.png' );
});
$('#project6').mouseout(function(){
    $('#project6').attr( 'src', './image/url.png' );
});

let typingBool = false; 
let typingIdx=0; 
let typingTxt = $(".main-title").text(); 
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