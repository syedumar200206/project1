$(document).ready(function(){
    $("#productName").on("input", function(){
        $("#previewName").text($(this).val());
    });

    $("#productDescription").on("input", function(){
        $("#previewDescription").text($(this).val());
    });

    $("#stockLevel").on("input", function(){
        $("#previewStock").text($(this).val());
    });

    $("#showMoreFields").click(function(){
        $("#extraFields").slideDown();
    });

    $("#productImage").change(function(event){
        var reader = new FileReader();
        reader.onload = function(){
            $("#previewImage").attr("src", reader.result).show();
        }
        reader.readAsDataURL(event.target.files[0]);
    });

    function updatePrice() {
        let price = parseFloat($("#listPrice").val()) || 0;
        let discount = parseFloat($("#discount").val()) || 0;
        let gst = parseFloat($("#gstRate").val()) || 0;
        let shipping = parseFloat($("#shippingCharge").val()) || 0;

        let discountedPrice = price - (price * (discount / 100));
        let finalPrice = discountedPrice + (discountedPrice * (gst / 100));
        let netPrice = finalPrice + shipping;

        $("#finalPrice").text(finalPrice.toFixed(2));
        $("#netPrice").val(netPrice.toFixed(2));
        $("#previewNetPrice").text(netPrice.toFixed(2));
    }

    $("#listPrice, #discount, #gstRate, #shippingCharge").on("input", updatePrice);
});