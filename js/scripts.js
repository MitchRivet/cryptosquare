var encrypt = function(message) {

    // var noSpaceString = message.replace(/\s+/g, '');
    var lowerString = message.toLowerCase();
    var array = lowerString.split(" ");
    var finalString = array.join("<br />");

    return finalString;
};

$(document).ready(function() {
    $("form#encrypt").submit(function(event) {
        var string = $("input#string").val();
        var result = encrypt(string);

        $(".returned_string").text(result);

        $("#result").show();
        event.preventDefault();

    });
});
