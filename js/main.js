function consultaCep(){
    $(".barraProgresso").show();
    var cep = document.getElementById("CEP").value;
    var url = "http://viacep.com.br/ws/"+ cep + "/json/"
    $.ajax({
        url:  url,
        type: "GET",
        success: function(response){
            var CEP = response.cep;
            var RUA = response.logradouro;
            var BAIRRO = response.bairro;
            var LOCALIDADE = response.localidade;
            var UF = response.uf;

            $("#logradouro").html(RUA);
            $("#ccep").html(CEP);
            $("#bairro").html(BAIRRO);
            $("#localidade").html(LOCALIDADE);
            $("#uf").html(UF);
            $(".cep").show();
            $(".barraProgresso").hide();

            
        }
    })
}
$(function(){
    $(".cep").hide();
    $(".barraProgresso").hide();
})