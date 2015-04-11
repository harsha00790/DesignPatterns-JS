/**
 * Created by Satyagrahi on 4/11/2015.
 */

var JSDP = JSDP || {};

JSDP.Core = {
    SachinCounters: [],
    NewSachin: function(){
        var identifier = Object.keys(JSDP.Core.SachinCounters).length;
        var sachin_image = $('<br><img src = "./media/images/128483.1.jpg"><br>');
        sachin_image.attr('data-sachin-image', identifier);
        var sachin_label = $('<label class = "label"></label><br>');
        sachin_label.attr('data-sachin-label', identifier);
        var sachin_name = $('<label class = "label"></label>');
        sachin_name.html('Sachin Tendulkar ' + identifier);
        JSDP.Core.SachinCounters[identifier] = {};
        JSDP.Core.SachinCounters[identifier]['clicks'] = 0;
        sachin_image.click(function(){
            var id = $(this).data('sachin-image');
            JSDP.Core.SachinCounters[id]['clicks']++;
            var label = '[data-sachin-label = ' + id + ']';
            $(label).html('The Centuries scored by him today are ' + JSDP.Core.SachinCounters[id]['clicks']);
        });
        $('[data-sachin-images]').append(sachin_name).append(sachin_image).append(sachin_label);
    }
};