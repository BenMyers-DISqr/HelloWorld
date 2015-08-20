define( [
        'jquery'
    ],
    function ( $ ) {
        'use strict';

        return {

            //Paint resp.Rendering logic
            paint: function ( $element, layout ) {
				var vId = layout.qInfo.qId;
				var $obj = $('#'+vId);
				
				var vContent = 'Test 9';		
				
				if(!$obj.length){
					console.log($obj.html);
					$obj = $(document.createElement('div'));
					$obj.attr('id',vId);
					$element.append($obj)
				}
                $obj.html( vContent );
            }
        };
    } ); 