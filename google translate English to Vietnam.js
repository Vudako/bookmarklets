javascript:(function () {
    function getSelectionText() {
        var text = "";
        if (window.getSelection) {
            text = window.getSelection().toString();
        } else if (document.selection && document.selection.type != "Control") {
            text = document.selection.createRange().text;
        }
        return text;
    }
    var textToTranslate = getSelectionText();
    console.log(textToTranslate);

    var win = window.open('https://translate.google.com/#view=home&op=translate&sl=en&tl=vi&text=' + textToTranslate, '_blank');
    win.focus();
})();

