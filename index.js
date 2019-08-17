function set_ace_theme() {
    setTimeout(function(){
        $('.elementor-code-editor').attr("id", "test")
        // Initialize your Ace Editor
        var editor = (function() {
            var aceEditor = ace.edit('test');
            // default theme
            aceEditor.getSession().setMode("ace/mode/javascript");
            return aceEditor;
        })();

        // Change theme on the fly
        editor.setTheme("ace/theme/kuroir");
    },1)
}(jQuery);

jQuery(document).ready(function($) {
    // hook elementor code control to inject custom script
    //var inject = '<# set_ace_theme(); #>';
    //var template = $('#tmpl-elementor-control-code-content').html();
    //$('#tmpl-elementor-control-code-content').html(inject + template);
});
