


$("input[name='uname']").blur(
	function()
	{
		/*var v=$(this).val()*/
		/*var p=/\d/*/
		/*var p=/^\d+$/*/
		/*var p=/^\w+$/*/
		/*var p=/[0-4]/*/
		/*var p=/[a-zA-Z]/*/
		/*var p=/[^0-4]/*/
		/*var p=/[0-9]{1}/*/   /*one no.*/
		/*var p=/^\d$/*/
		
		/*var p=/^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|3[01])\/(19|20)\d{2}$/*/
		/*console.log(p.test(v));*/
	}

)
/*$("input[name='uname']").blur(
	function()
	{
		var v=$(this).val();
		v=v.replace(/\s+/g,'');
		var pattern=/^[A-Z]/
		var aler=$(this).parent().find('.alert');
		var error='';
		if(v.length>=5 && (pattern.test(v)))
		{
			aler.fadeOut(200);
		}
		else
		{
			aler.fadeIn(200)
			aler.html("invalid username")
		}
		
	}

)*/

$("input[name='upassword']").blur(
	function()
	{
	/*	var v=$(this).val();*/
	/*	v=v.replace(/\s+/g,'');*/
	/*	var pattern=/[A-Z]/ */ /*capital littre is necessary*/
	/*	var pattern1=/[0-9]/*/ /*no. is necessary*/
	/*	var pattern2=/^\w+$/ *//*no symbols*/
	/*	var aler=$(this).parent().find('.alert');*/
	/*	var error='';*/
	/*	if((pattern.test(v))&&(pattern1.test(v))&&(pattern2.test(v)))
		{
			aler.fadeOut(200);
		}
		else
		{
			aler.fadeIn(200)
			aler.html("invalid password")
		}
		*/
	})
	

	
	 var canvas = new fabric.Canvas('c1');
	 
	 $(".addCircle").click(
	 function()
	 {
  canvas.add(new fabric.Circle({ radius: 80, fill: '#f55', top: 150, left: 150 }));

  canvas.selectionColor = 'rgba(0,255,255,0.3)';
  canvas.selectionBorderColor = '#09c';
  canvas.selectionLineWidth = 5;
  this.__canvases.push(canvas);
	 })
	 
	 
	 