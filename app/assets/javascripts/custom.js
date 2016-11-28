
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

    //mostrador de productos
    var setMinMax = function(values){
	    min = values[0].toString();
	    max = values[1].toString();
	    if(max.length > 3){ 
	      max = max.slice(0, (max.length - 3)) + "." + max.slice(-3);
	    }
	    if(min.length > 3){ 
	      min = min.slice(0, (min.length - 3)) + "." + min.slice(-3);
	    }
	    $("#min").text('$' + min);
	    $("#max").text('$' + max);
	};
	  
	// Inicializacion para slide del filtro
	var mySlider = $("#ex12c").bootstrapSlider({ id: "slider12c", min: 0, max: 100000, range: true, value: [0, 100000] });  
	values  = mySlider.bootstrapSlider('getValue');
	setMinMax(values);
	  
	//Eventos del filtro  
	mySlider.on("slide", function(){
	    values  = mySlider.bootstrapSlider('getValue');
	    setMinMax(values);    
	});

	//Cambio de iconos al collapsar panel en filtro
	$('#mp-accordion .collapse').on('show.bs.collapse', function () {
	    $(this).parent().find('.glyphicon').removeClass('glyphicon-plus').addClass('glyphicon-minus');
	});
	$('#mp-accordion .collapse').on('hide.bs.collapse', function () {
	    $(this).parent().find('.glyphicon').removeClass('glyphicon-minus').addClass('glyphicon-plus');
	});
});

