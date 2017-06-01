(function( $ ) {
    $.fn.modalBeatrix = function(options){
        var vm = this;
        var data = $.data(this[0], "modalBeatrix");
        if(!data){
            data = {};
            data.openMascara = function(){
                var alturaTela = $(document).height();
                var larguraTela = $(window).width();
                $('#mascara').css({'width':larguraTela,'height':alturaTela});
                $('#mascara').show();  
            }

            data.buildModal = function(){
                var modalStr = "";
                modalStr += ' <div id="modal">';
                modalStr += '<div class="modal-header">';
                modalStr += '<div class="col-1 ">';
                modalStr += '<div class="modal-header-icon"> ';
                modalStr += '</div>';
                modalStr += '</div>';
                modalStr += '<div class="col-10">';
                modalStr += '<div class="modal-title">';
                modalStr += data.options.title;
                modalStr += '</div> ';
                modalStr += '</div>';
                modalStr += '<div class="col-1">';
                modalStr += '<div class="btn-modal-close link">';
                modalStr += ' X';
                modalStr += '</div>';
                modalStr += '</div>';
                modalStr += ' </div>';
                modalStr += '<div class="modal-body">';
                modalStr += vm[0].innerHTML;
                modalStr += '</div>';
                modalStr += '<div class="modal-actions-btns">';               
                modalStr += '</div> ';
                modalStr += ' </div> ';                

                $("#modal").remove();
                $("#mascara").remove();
                $( "body" ).append(modalStr);
                $( "body" ).append('<div id="mascara"></div>');
                $(data.options.bottons).each(function(index, btn){
                    var btnAction = $('<div class="btn '+btn.classCss+'" >'+btn.text+'</div>');
                   
                    $(".modal-actions-btns").append(btnAction);
                     btnAction.click(function(){
                        btn.onClick();
                    });
                    
                });
                $(".btn-modal-close, #mascara").click(function(){
                    data.close();
                });
            }

            data.closeMascara = function(){
                $('#mascara').remove();
            }

            data.openModal = function(){
                var left = ($(window).width() /2) - ( $("#modal").width() / 2 );
                var top = ($(window).height() / 2) - ( $("#modal").height() / 2 );
            
                $("#modal").css({'top':top,'left':left});
                $("#modal").fadeIn(1000);
            }

            data.closeModal = function(){
                $("#modal").remove();        
            }

            data.open = function(){
                data.buildModal();
                data.openMascara();
                data.openModal();        
            }

            data.close = function(){
                data.closeModal();
                data.closeMascara();
            }
            data.options = {
                iconHeader:"",
                title:"",
                body:"",
                bottons:[
                    {
                        text:"Cancelar",
                        classCss:"white",
                        onClick:vm.close
                    }
                ]
            }
            $.extend(data.options, options);
            $.data(this[0], "modalBeatrix", data);
        }
        return data;
    }
}( jQuery ))
    // $("a[rel=modal]").click( function(ev){
    //     ev.preventDefault();
 
    //     var id = $(this).attr("href");
 
    //     var alturaTela = $(document).height();
    //     var larguraTela = $(window).width();
     
    //     //colocando o fundo preto
    //     $('#mascara').css({'width':larguraTela,'height':alturaTela});
    //     $('#mascara').fadeIn(1000); 
 
    //     var left = ($(window).width() /2) - ( $(id).width() / 2 );
    //     var top = ($(window).height() / 2) - ( $(id).height() / 2 );
     
    //     $(id).css({'top':top,'left':left});
    //     $(id).show();   
    // });
 
    // $("#mascara").click( function(){
    //     $(this).hide();
    //     $(".window").hide();
    // });
 
    // $('.fechar').click(function(ev){
    //     ev.preventDefault();
    //     $("#mascara").hide();
    //     $(".window").hide();
    // });
//});