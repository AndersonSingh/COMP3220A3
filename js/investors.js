$(document).ready(function() {
    var selectedReport = $('#reportlistselection').find(":selected").text();
    $("#downloadBtn").click(function(){
            alert("The file "+selectedReport+".pdf will be downloaded.");
    });

    $("#acrobatDownloadClick").click(function(){
            //alert("The file "+selectedReport+".pdf will be downloaded.");
            var win=window.open("https://get.adobe.com/reader/", '_blank');
            win.focus();
    });

    $("#acrobatDownloadClick").hover(function()
        {
            $(this).css('font-weight', 'bold');
        },
        function()
        {
            $(this).css('font-weight', 'normal')
        });


});
