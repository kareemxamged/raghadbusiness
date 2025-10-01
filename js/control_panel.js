$(document).ready(function() {
    $("#control-panel").on("change", "textarea", function() {
        var textareaId = $(this).attr("id");
        var content = $(this).val();
        var lang = textareaId.split("-")[1];
        $.ajax({
            url: "admin-ajax.php",
            type: "POST",
            data: {
                action: "update_landing_page",
                lang: lang,
                content: content
            },
            success: function(response) {
                console.log("Content updated successfully.");
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("Error updating content:", textStatus, errorThrown);
            }
        });
    });
});