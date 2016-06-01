$('.toggle').click(function(){
  
   if($('.menu-content').hasClass('active')){
     $('.menu-content').removeClass('active');
   }
  
   else {
     $('.menu-content').addClass('active');
   }  
  
  $('.menu-content').toggleClass('active');
  
  $('.menu-content').slideToggle(1000);
});