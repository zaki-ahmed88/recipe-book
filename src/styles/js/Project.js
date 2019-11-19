

$(document).ready(function(){
	
	
	/*Start Team  */
    
    
    $('.owl-carousel').owlCarousel({
		loop:false,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})
    
    /*End Team  */
	




	/*START MAGNIFIC POPUP JS*/
	
	$('.work-posts').magnificPopup({
		delegate: 'a', 
		type: 'image',
             
        gallery:
            {
                enabled: true
            },
		

			zoom:
			{
				enabled: true,
				duration: 300,
				easing: 'ease-in-out',
				
			}	
			

	  });

	  $('.video').magnificPopup({
		delegate: 'a', 
		type: 'iframe',
             
        gallery:
            {
                enabled: true
            },
		
			loop: false

	  });
	  

	 /*End MAGNIFIC POPUP JS*/



	  /**Start Timer */


	 // Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
 


  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;




  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    
  }
}, 1000);

	 /**End Timer */



/*Stat Counter*/
    
    
    
$('.counter_feature').bind('inview', function(event, visible, visiblePartX, visiblePartY)
{
	 if(visible)
	 {
		 $(this).find('.counter-num').each(function()
		 {
			 var $this = $(this);
			 $({counter:0}).animate({counter:$this.text()},
			 {
				 duration: 2000,
				 easing: 'swing',
				 step: function()
				 {
					 $this.text(Math.ceil(this.counter));
				 }
			 });

		 });
		 $(this).unbind('inview');
	 }
}); 



/*End Counter */





  });


	