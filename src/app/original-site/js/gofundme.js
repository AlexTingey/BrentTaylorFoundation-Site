/*
    Expecting a iframe of the form:
    <iframe class="gfm-media-widget" image="1" coinfo="0" width="100%" height="100%" frameborder="0" id="brett"></iframe>
    <script src="//funds.gofundme.com/js/5.0/media-widget.js"></script>
*/
GFMWidget = {};
GFMWidget.scriptNamespace = GFMWidget.scriptNamespace || {};

GFMWidget.isFirstLoad = function(namesp) {
    var isFirst = namesp.firstLoad === undefined;
    namesp.firstLoad = false;

    return isFirst;
};

(function() {
    // wait for DomReady
    document.addEventListener("DOMContentLoaded", function() {
        if (!GFMWidget.isFirstLoad(GFMWidget.scriptNamespace)) {
            return;
        }
        var widgets = document.getElementsByClassName('gfm-media-widget');

        // without the iframe, the call instead of the src attribute, needs to make a get request
        // var getFundInfo = new XMLHttpRequest();
        // var fundsInfo;
        // getFundInfo.onreadystatechange = function() {
        //     if (getFundInfo.readyState == XMLHttpRequest.DONE) {
        //         //fundsInfo.push(getFundInfo.responseText);
        //         console.log(getFundInfo.responseText);
        //         // fundsInfo = Object.keys(getFundInfo.responseText).map(function(k) {
        //         //     return o[k];
        //         // });
        //         fundsInfo = JSON.parse(getFundInfo.responseText);
        //         //document.getElementById('gfm-widget').innerHTML = '<ol><li>'+fundsInfo.title+'</li></ol>';
        //     }
        // };
        // getFundInfo.open("GET", "//www.gofundme.com/mvc.php?route=widgets/getfundinfo&fund=brett");
        // getFundInfo.send();

        // INJECTING CSS IN STYLE TAG
        // width of parent container <= 220px
        var styleXS = '.responsive-wrapper {height: 343px;width:100%;} .hide-image.responsive-wrapper { height: 182px; } .hide-organizer.responsive-wrapper { height: 291px; } .hide-image.hide-organizer.responsive-wrapper { height: 131px; }';
        // width of parent container >= 221px and <= 285px
        var styleS = '.responsive-wrapper { height: 370px; } .hide-image.responsive-wrapper { height: 182px; } .hide-organizer.responsive-wrapper { height: 364px; }.hide-image.hide-organizer.responsive-wrapper { height: 131px; }';
        // width of parent container >= 286 px and <= 349px
        var styleM = '.responsive-wrapper { height: 415px; } .hide-image.responsive-wrapper { height: 182px; } .hide-organizer.responsive-wrapper { height: 364px; } .hide-image.hide-organizer.responsive-wrapper { height: 131px; }';
        // width of parent container >= 350px and <= 435px
        var styleL = '.responsive-wrapper { height: 502px; } .hide-image.responsive-wrapper { height: 210px; } .hide-organizer.responsive-wrapper { height: 449px; } .hide-image.hide-organizer.responsive-wrapper { height: 159px; }';
        // width of parent container >= 436px
        var styleXL = '.responsive-wrapper { height: 557px; } .hide-image.responsive-wrapper { height: 210px; } .hide-organizer.responsive-wrapper { height: 506px; } .hide-image.hide-organizer.responsive-wrapper { height: 159px; }';
        var getResponsiveCSS = function(e) {
            if (e.parentNode.offsetWidth <= 220) {
                return styleXS;
            } else if (e.parentNode.offsetWidth >= 221 && e.parentNode.offsetWidth <= 285) {
                return styleS;
            } else if (e.parentNode.offsetWidth >= 286 && e.parentNode.offsetWidth <= 349) {
                return styleM;
            } else if (e.parentNode.offsetWidth >= 350 && e.parentNode.offsetWidth <= 435) {
                return styleL;
            } else if (e.parentNode.offsetWidth >= 436) {
                return styleXL;
            }
        };

        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = getResponsiveCSS(widgets[0]);
        head.appendChild(style);

        /* go through all gofundme widget iframes */
        for (var i=0; i<widgets.length; ++i) {
            var responsiveWrapper = document.createElement('div');
            var theme;
            var widgetUrl;
            responsiveWrapper.setAttribute('class', 'responsive-wrapper');
            widget = widgets[i];
            widget.setAttribute('scrolling', 'no');
            // build up widget src from existing options in widget attributes
            theme = widget.getAttribute('theme');
            widgetUrl = "https://www.gofundme.com/mvc.php?route=widgets/mediawidget&fund=" + widget.id + "&image=" + widget.getAttribute('image') + "&coinfo=" + widget.getAttribute('coinfo');

            if (theme) {
                widgetUrl += '&theme=' + theme;
            }
            widget.src = widgetUrl;
            if (widget.getAttribute('image') === "0") {
                responsiveWrapper.className += " hide-image";
            }
            if (widget.getAttribute('coinfo') === "0") {
                responsiveWrapper.className += " hide-organizer";
            }
            widget.parentNode.insertBefore(responsiveWrapper, widget);
            responsiveWrapper.appendChild(widget);

            var pixelTrackGA = "<img style='display:none;' src='https://www.google-analytics.com/__utm.gif?utmwv=5.1.7&utms=1&utmn="+ Math.floor(Math.random() * 1000000000) + 1000000000 +"&utmhn="+ encodeURI(location.hostname) +"&utmcs=UTF-8&utmsr=1280×1024&utmsc=24-bit&utmul=en-us&utmje=1&utmfl=10.3%20r183&utmdt=" + encodeURI(document.title) + " - " + widget.id + "&utmr=" + encodeURI(document.referrer) + "&utmp=" + encodeURI(location.pathname) + "&utmac=UA-5577581-4&utmcc=__utma%3D230887938.1463229748.1317737798.1317737798.1317737798.1%3B%2B__utmz%3D230887938.1317737798.1.1.utmcsr%3Dwidget%7Cutmccn%3D(organic)%7Cutmcmd%3Dnone%7Cutmctr%3Dgofundme%2520widget%3B&utmu=DC~' height='1' width='1'>";
            if(responsiveWrapper.parentNode.attachEvent) { // IE8 and below support
                window.attachEvent('onresize', function() {
                    style.innerHTML = getResponsiveCSS(responsiveWrapper);
                });
            } else if(responsiveWrapper.parentNode.addEventListener) {
                window.addEventListener('resize', function() {
                    style.innerHTML = getResponsiveCSS(responsiveWrapper);
                }, true);
            }

            responsiveWrapper.innerHTML += pixelTrackGA;
        }

    });
})();
