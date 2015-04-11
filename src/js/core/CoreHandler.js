/**
 * Created by Satyagrahi on 4/11/2015.
 */

var JSDP = JSDP || {};

JSDP.Core = {
    SachinCounter: 0,
    SachinClick: function(){
        JSDP.Core.SachinCounter++;
        $('[data-sachincount-label]').html('Number of Centuries scored today are  ' + JSDP.Core.SachinCounter);
    },
    InitializeSachinCounter: function(){
        JSDP.Core.SachinCounter = 0;
    }
};