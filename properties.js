define( [
		//modules to load go here.
		],
	function () {
    'use strict';

    // *****************************************************************************
    // Dimensions & Measures
    // *****************************************************************************
/*     var dimensions = {
        uses: "dimensions",
        min: 0,
        max: 1
    };

    var measures = {
        uses: "measures",
        min: 0,
        max: 1
    }; 
*/

    // *****************************************************************************
    // Appearance Section
    // *****************************************************************************
    // Text box definition

	var myTextBox = {
		ref: "props.myTextBox",
		label: "My Text Box",
		type: "string"
	};
	
	var appearanceSection = {
        uses: "settings",
		items: {
			myTextBox: myTextBox
		}
    };

    // *****************************************************************************
    // Main property panel definition
    // ~~
    // Only what's defined here will be returned from properties.js
    // *****************************************************************************

    return {
        type: "items",
        component: "accordion",
        items: {
            //dimensions: dimensions,
            //measures: measures,
            appearance: appearanceSection

        }
    };

} );