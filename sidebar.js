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
