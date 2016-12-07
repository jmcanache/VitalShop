
//Headers
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById('overlay-body').style.display = "block";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById('overlay-body').style.display = "none";
}

$(document).ready(function(){  
	//home
    $('.hm-comida').mouseenter( function(){
        $(this).find('img').attr('src', 'iconos-01b.png')}).mouseleave( function(){
        $(this).find('img').attr('src', 'iconos-01.png')
    } );
    $('.hm-salud').mouseenter( function(){
        $(this).find('img').attr('src', 'iconos-03b.png')}).mouseleave( function(){
        $(this).find('img').attr('src', 'iconos-03.png')
    } );
    $('.hm-belleza').mouseenter( function(){
        $(this).find('img').attr('src', 'iconos-02b.png')}).mouseleave( function(){
        $(this).find('img').attr('src', 'iconos-02.png')
    } );
    $('.hm-bebes').mouseenter( function(){
        $(this).find('img').attr('src', 'iconos-04b.png')}).mouseleave( function(){
        $(this).find('img').attr('src', 'iconos-04.png')
    } );   

	//Cambio de iconos al collapsar panel en filtro
	$('#mp-accordion .collapse').on('show.bs.collapse', function () {
	    $(this).parent().find('.glyphicon').removeClass('glyphicon-plus').addClass('glyphicon-minus');
	});
	$('#mp-accordion .collapse').on('hide.bs.collapse', function () {
	    $(this).parent().find('.glyphicon').removeClass('glyphicon-minus').addClass('glyphicon-plus');
	});
});

