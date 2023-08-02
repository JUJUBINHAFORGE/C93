var canvas = new fabric.Canvas('myCanvas')


block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 480;

var block_image_object= "";


function new_image(get_image)
{
fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img
 block_image_object.sacleToWidth(block_imgae_width)  
 block_image_object.scaleToHeight(block_image_height)
	block_image_object.set( {top : block_y, left : block_x} )
 canvas.add(block_image_object)
 })
 }
	



window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
	
	if(keyPressed == '82') 
	{
		block_x = 10
		new_image('vermelho.jpg')
		console.log('R')
	}
	if(keyPressed == '71')
	{
		block_x = 310
		new_image('verde.png')
		console.log('g')
	}
	if(keyPressed == '89')
	{
		block_x = 560
		new_image('amarela.png')
		console.log('Y')
	}
	if(keyPressed == '80')
	{
		block_x = 880
		new_image('rosa.png')
		console.log('P')
	}
	
	if(keyPressed == '66')
	{
		block_x = 1040
		new_image('zul.png')
		console.log('B')
	}
	
}

