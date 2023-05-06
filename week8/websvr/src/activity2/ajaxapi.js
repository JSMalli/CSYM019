$(document).ready(function(){
    $("#movies").load("movies.html");
    $("#movies").change(function(){
        let movie = $(this).val();
        let apiUrl = "https://api.themoviedb.org/3/movie/"
        + movie
        + "?api_key=9d86948ed239b34ea5a1771b0f7c41a5&language=en-US";
        $.ajac( {
            url: apiUrl,
            type: "GET",
            dataType: "json",
            success: function(response){
                    $.each(response,function() {
                    $("#movieinfo").html("");
                    $("#movieinfo").append(response,overview);
                    if ($("#movieinfo").attr("hidden")) {
                        $("#movieinfo").show();
                    }
                    $("#movieinfo").css(
                        {
                            "border-color": "#C1E0FF",
                            "border-weight":"1px",
                            "border-style":"solid",
                            "margin-top":"1rem",
                            "width":"50%",
                            "padding":"0.5rem"
                        });
            });
            },
            error: function(xhr, error){
                $("#info").append(error.toUpperCase() + ".HTTP status: " + XMLHttpRequestEventTarget.status);
            }
        })
    });
});