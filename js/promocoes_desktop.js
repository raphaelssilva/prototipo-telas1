var modalRenovacao = null;
$(document).ready(function(){
    $(".carrossel").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        prevArrow:'<div class="box-slick-btn"><div class="box-slick-btn-content"><div class="slick-btn"><span class="slick-text"><i class="atom-icon icon-arrow_down down down-rigth rotate-90" ></i></span></div></div></div>',
        nextArrow:'<div class="box-slick-btn box-slick-btn-right"><div class="box-slick-btn-content"><div class="slick-btn"><span class="slick-text"><i class="atom-icon icon-arrow_down down down-left rotate-270" ></i></span></div></div></div>'  
    });
    $("#accordion").accordions();   
    modalRenovacao = $("#modal-renocao").modalBeatrix({
        title:"Antecipar renovação",
        bottons:[
                    {
                        text:"Cancelar",
                        classCss:"white",
                        onClick:function(){
                            modalRenovacao.close()
                        }
                    },
                    {
                        text:"Confirmar antecipação",
                        classCss:"",
                        onClick:function () {
                            alert("Renovado");
                            modalRenovacao.close();
                        }
                    }
                ]
    });
     
});

(function( $ ) {
    $.fn.accordions = function(){
        var items = $(this).find(".accordion-item")
        items.each(function(i, e){
            var body = $(e).find(".accordion-item-body");
            var title = $(e).find(".accordion-item-title");
            $('<i class="atom-icon icon-arrow_down down rotate-180" ></i>').insertBefore(title);
            body.hide();
            title.click(function(){
                var visible = body.is(':visible');
                items.find(".accordion-item-body").each(function(i, ee){
                    $(ee).hide();
                    $(ee).parent().find(".atom-icon").addClass("rotate-180")
                });
                if(visible){
                    body.hide();
                }else{
                    body.show();
                    body.parent().find(".atom-icon").removeClass("rotate-180");
                }
            });
        })
    }
}( jQuery ))

