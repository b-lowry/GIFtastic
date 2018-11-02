var topics = ["eagle", "dog", "cat", "dolphin", "skunk" ];

//Add buttons for original animal topic array
function renderButtons() {
    $("#topics-view").empty();
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("topics");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#topics-view").append(a);
    }
}


$("#add-topic").on("click", function(event){
    event.preventDefault();
    var singleTopic = $("#topic-typed").val().trim();
    topics.push(singleTopic);
    renderButtons();
});

renderButtons();

//ajax call

$("#add-topic").on("click", function(event) {
    event.preventDefault();

    var singleTopic = $("#topic-typed").val()

    var apiKey = "KIyENXLtFC9C6ZrDCisfZOa24R3w8Yme";

    var queryURL = "https:api.giphy.com/v1/gifs/search?api_key=KIyENXLtFC9C6ZrDCisfZOa24R3w8Yme&q=" + singleTopic + "&limit=25&offset=0&rating=G&lang=en" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(queryURL);
        console.log(response);
        $(".rating").text(JSON.stringify(response));
    })
})








