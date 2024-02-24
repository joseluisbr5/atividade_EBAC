$(document).ready(function(){
    $('#btn-list').click(function(e){
        e.preventDefault();
        var tarefa = $('#input-list').val();
        $('#list').append("<li>" + tarefa + "</li>")
        $('#input-list').val("");
    })
    $('#list').on("click", "li", function(){
        $(this).toggleClass("done")
    })
})