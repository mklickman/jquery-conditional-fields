(function( $ ) {
 
    $.fn.conditionalFields = function() {
 
        this.each(function() {
          var $control = $(this).find('[data-conditional-select-control]');

          var update = function() {
            var currentValue = $control.val();

            $('[data-show-for]').hide();
            $('[data-show-for=' + currentValue + ']').show();
          };
          
          update();
          $control.on('change', update);
        });
 
        return this;
 
    };
 
}( jQuery ));