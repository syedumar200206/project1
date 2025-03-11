$(document).ready(function(){
    $("#storeName").on("input", function(){
        $("#previewStoreName").text($(this).val());
    });

    $("#storeTitle").on("input", function(){
        $("#previewStoreTitle").text($(this).val());
    });

    $("#storeLogo").change(function(event){
        var file = event.target.files[0];

        if (file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $("#previewLogo").attr("src", e.target.result).css({
                    "max-width": "100px", // Adjust width
                    "max-height": "100px", // Adjust height
                    "display": "block", 
                    "margin-top": "10px"
                });
            }
            reader.readAsDataURL(file);
        }
    });

    $("#supportDetails").change(function(){
        if(this.checked) {
            $("#supportFields").slideDown();
            $("#supportPreview").slideDown();
        } else {
            $("#supportFields").slideUp();
            $("#supportPreview").slideUp();
        }
    });

    $("#supportEmail").on("input", function(){
        $("#previewEmail").text($(this).val());
    });

    $("#supportPhone").on("input", function(){
        $("#previewPhone").text($(this).val());
    });
});