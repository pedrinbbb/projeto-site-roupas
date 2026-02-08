function abrirMenu(){
            if(document.querySelector('.menu').style.width == '250px'){
                document.querySelector('.menu').style.width = '0px'
        }else{
            document.querySelector('.menu').style.width = '250px'
        }
        }
        function fecharMenu(){
            document.querySelector('.menu').style.width = '0px'
        }