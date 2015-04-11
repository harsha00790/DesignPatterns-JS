/**
 * Created by Satyagrahi on 4/11/2015.
 */

var JSDP = JSDP || {};

JSDP.Core = {
    SachinCounters: [],
    AddNewSachinCache: function(url, name){
        JSDP.Core.SachinCounters[name.replace(/ /g, '')] = {};
        JSDP.Core.SachinCounters[name.replace(/ /g, '')]['clicks'] = 0;
        JSDP.Core.SachinCounters[name.replace(/ /g, '')][url] = url;
        var li, image, name_label, clicks_label;
        li = $('<li><a href = "#" class = "btn ui-icon-link"></a></li>');
        $(li).find('a').html(name);
        $(li).find('a').attr('data-sachin-name', name.replace(/ /g, ''));
        $(li).find('a').click(function(){
            $('.display-area').find('img').addClass('hide');
            $('.display-area').find('label').not('.displayarea-sl').addClass('hide');
            var selector = 'img[data-sachin-name = ' + name.replace(/ /g, '') + ']';
            $(selector).removeClass('hide');
            selector = 'label[data-sachin-name = ' + name.replace(/ /g, '') + ']';
            $(selector).removeClass('hide');
        });
        name_label = $('<label class = "label hide"></label>');
        name_label.html("Name ---  " + name);
        name_label.attr('data-sachin-name', name.replace(/ /g, ''));
        clicks_label = $('<label class = "label hide"></label>');
        clicks_label.attr('data-sachin-name', name.replace(/ /g, ''));
        image = $('<img class = "hide">');
        image.attr('src', url);
        image.attr('data-sachin-name', name.replace(/ /g, ''));
        image.click(function(){
            var id = $(this).attr('data-sachin-name');
            JSDP.Core.SachinCounters[id]['clicks']++;
            $(this).next('label').html('The Centirues made by him today are  ' + JSDP.Core.SachinCounters[id]['clicks']);
        });
        $('[data-sachin-list]').append(li);
        $('.display-area').append(name_label, image, clicks_label);
    }
};