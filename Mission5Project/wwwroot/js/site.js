// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function Calculate() {
    if (Number.isInteger(parseFloat($("#hoursInput").val())) && parseFloat($("#hoursInput").val()) >= 0) {
        $("#total").text($("#hoursInput").val() * parseFloat($("#chargePerHour").text().replace("$", "")));
        console.log(parseFloat($("#chargePerHour").text().replace("$", "")));
        $("#warning").text("");
    } else {
        $("#warning").text("Please input an integer.");
    }
}