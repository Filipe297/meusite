$(function(){

    var divAtrue = $('a[noart="true"] ');
    var divAfalse = $('a[noart="false"]');
    var spantrue = $('a[noart="true"] span');
    var spanfalse = $('a[noart="false"] span');
    var divArt1 = $('.aviso');

    var id1 = $('#id1');
    var id2 = $('#id2');

    spantrue.html("<span>Artigo em produção</span>")
    spanfalse.html("<span>Artigo</span>")
    
    divAtrue.click(function(e){
       divArt1.css("left","-300px")
        setTimeout(function() {
            divArt1.css("left","0px")
        }, 100);
        setTimeout(function() {
            divArt1.css("left","-300px")
        }, 2000);
    });
});