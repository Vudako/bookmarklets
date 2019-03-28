javascript:(function () {
    /* Add bookmarklet code here. */
    function getSelectionText() {
        var text = "";
        if (window.getSelection) {
            text = window.getSelection().toString();
        } else if (document.selection && document.selection.type != "Control") {
            text = document.selection.createRange().text;
        }
        return text;
    }
    var textToSearch = getSelectionText();
    

    var win = window.open('https://explainshell.com/explain?cmd=' + textToSearch , '_blank');
    win.focus();
})();

