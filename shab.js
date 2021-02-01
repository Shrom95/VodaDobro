<script type="text/jаvascript" >
    $(document).ready(function() {
        $('.minus').click(function () {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});
</script>

$(function () {
    $("#button").click(function () {
        $("#button").addClass("onclic", 250, validate);
    });

    function validate() {
        setTimeout(function () {
            $("#button").removeClass("onclic");
            $("#button").addClass("validate", 450, callback);
        }, 2250);
    }
    function callback() {
        setTimeout(function () {
            $("#button").removeClass("validate");
        }, 1250);
    }
});