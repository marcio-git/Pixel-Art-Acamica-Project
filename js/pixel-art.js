var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
$('.input-color').css('font-size','.9em');
$('#indicador-de-color-mensaje').css('font-size','.9em')

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    $indicadorColor.css('background-color',colorActual);
  })
);
var $paleta = $('#paleta');
var $grilla_pixeles = $('#grilla-pixeles');
var $indicadorColor = $('#indicador-de-color');


//generador de Paleta
for (let i = 0; i < nombreColores.length; i++) {
  let color = nombreColores[i];
  let posicion = i;
  let divPaleta = $('<div></div>');
  divPaleta.attr({'class':'color-paleta','id': posicion});
  divPaleta.css('background-color',color);
  $paleta.append(divPaleta);
}
//creacion de Grilla 
for (let i = 0; i < 1750; i++) {
  let divGrilla = $('<div></div>');
  $grilla_pixeles.append(divGrilla);
}
// toma color de paleta y copia a indicador-de-color
$('.color-paleta').click(function () {
  let colorClickeado = $(this).css('background-color');
  let idPosicion = $(this).attr('id');
  $indicadorColor.css('background-color',colorClickeado);
  $('#indicador-de-color-mensaje').html('PINCEL ' + colorClickeado +'<br/>'+ nombreColores[idPosicion])
})
// pinta la grilla
$('#grilla-pixeles div').click(function () {
  $(this).css('background-color',$indicadorColor.css('background-color'));
})

//borrar grilla
$('#borrar').click(function () {
  $('#grilla-pixeles div').animate({'background-color':''},2000);
})
//carga imagenes
$('#batman').click(function () {
  cargarSuperheroe(batman)
})
$('#wonder').click(function () {
  cargarSuperheroe(wonder)
})
$('#flash').click(function () {
  cargarSuperheroe(flash)
})
$('#invisible').click(function () {
  cargarSuperheroe(invisible)
})
//exportar imagenes
$('#guardar').click(function (){
  guardarPixelArt()
})

var mouseApretado

$('#grilla-pixeles div').mousedown(function(){
  mouseApretado = true;
})
$('#grilla-pixeles div').mouseup(function(){
  mouseApretado = false;
})
$('#grilla-pixeles div').mouseover(function(){
  if (mouseApretado == true) {
    $(this).css('background-color',$indicadorColor.css('background-color'));
  }
})

