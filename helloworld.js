define( [
        'jquery'//needed to load jquery module for increased functionality
		,'./properties'//reference to external properties file
    ],
    function ( $,props ) {
        'use strict';
	
        return {
			definition: props,
			//Paint resp.Rendering logic
            paint: function ( $element, layout ) {
				console.info('paint >> layout >> ', layout);
				console.info('paint >> props >> ', props);			
				var vId = layout.qInfo.qId;
				var $obj = $('#'+vId);
				
				if(!$obj.length){ //Create object only if doesn't exist
					console.log($obj.html);
					$obj = $(document.createElement('div'));
					$obj.attr('id',vId);
					$element.append($obj)
				}
                $obj.html( layout.props.myTextBox );
            }
        };
    } ); 