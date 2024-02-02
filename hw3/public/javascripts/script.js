/* 
 * Author: Malissa Chen 
 * Date: Feb. 2, 2024
 */


// helper method for handling orders
function handleOrder(event) {
    event.preventDefault(); // prevent the default form submission

    var notesValue = $("#message").val().toLowerCase();

    if (notesValue.includes("vegan")) {
        alert("Warning: Cheesecakes contain dairy!");
        // searched on stackoverflow on how to do the popup alert message
        // here's the link to the stackoverflow: https://stackoverflow.com/questions/14884596/html-alert-box-when-loading-page/37481124
    
    } else {
        var quantity = $("#quanity").val();
        var topping = $("input[name='topping']:checked").val();
        var orderDetails = "Thank you! Your order has been placed.\nTopping: " + topping + "\nQuantity: " + quantity + "\nNotes: " + notesValue;

        // replace the form section with the order details
        $("table, p, form, input, label2, [type='submit']").hide();
        $("label2[for='fname']").after("<p1>" + orderDetails + "</p3>");
    }
}

$(function () {
    // event handler for the order button click
    $("input[type='submit']").click(handleOrder);

    // dropdown menu
    // searched on w3schools on how to do the script on the dropdown menu
    // here's the link: https://www.w3schools.com/howto/howto_js_dropdown.asp
    $(".dropdown").hover(
        function () {
            $(".dropdown-options").css("display", "block");
        },
        function () {
            $(".dropdown-options").css("display", "none");
        }
    );

    $(".dropdown-option").click(function () {
        var selectedMonth = $(this).data("month");
        $(".dropdown-header").text("Orders for " + selectedMonth);
        $(".dropdown-options").css("display", "none");
    });
});
