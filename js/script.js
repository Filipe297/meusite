$(function(){

    var divAtrue = $('a[noart="true"] ');
    var divAfalse = $('a[noart="false"]');
    var spantrue = $('a[noart="true"] span');
    var spanfalse = $('a[noart="false"] span');
    var divArt1 = $('.aviso');
    var contaviso = $('.contaviso');

    var id1 = $('#id1');
    var id2 = $('#id2');

    spantrue.html("<span>Artigo em produção</span>")
    spanfalse.html("<span>Artigo</span>")
    
    divAtrue.click(function(e){
        contaviso.css("display","inline-block");
        divArt1.css("left","-400px");
        setTimeout(function() {
            divArt1.css("left","0px");
        }, 100);
        setTimeout(function() {
            divArt1.css("left","-400px");
            setTimeout(function() {
                contaviso.css("display","none");
            }, 1000);
        }, 2000);
        
    });
});