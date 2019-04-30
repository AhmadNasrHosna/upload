jQuery(document)['ready'](function() {
        var _0xcabbx1 = jQuery(window)['width']();

        function _0xcabbx2() {
            jQuery('#sidebar-sticky')['stick_in_parent']({
                    parent: '#wrapper',
                    offset_top: 70
                }
            )
        }

        _0xcabbx1 < 768 ? jQuery('#sidebar-sticky')['trigger']('sticky_kit:detach') : _0xcabbx2(), jQuery(window)['resize'](function() {
                (_0xcabbx1 = jQuery(window)['width']()) < 768 ? jQuery('#sidebar-sticky')['trigger']('sticky_kit:detach') : _0xcabbx2()
            }
        )
    }

);

$(document)['ready'](function() {
        $('#dontedit')['html'](' - \u062A\u0639\u0631\u064A\u0628 : <a href="https://www.tharabic.com" rel="dofollow" target="_blank" style="visibility:visible!important;opacity:1!important;position:relative!important">\u0627\u0644\u0645\u062D\u062A\u0631\u0641 \u0627\u0644\u0639\u0631\u0628\u064A</a>'), setInterval(function() {
                $('#dontedit:visible')['length'] || (window['location']['href'] = 'https://www.tharabic.com')
            }
            , 3e3)
    }
)
