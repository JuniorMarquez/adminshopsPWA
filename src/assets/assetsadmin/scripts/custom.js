$(window)['on']('load', function() {
        $('.menu')['css']('display', 'block'),
            $('#preloader')['addClass']('preloader-hide')
    }),
    $(document)['ready'](function() {
        'use strict';
        var _0xdc4bx1 = !0,
            _0xdc4bx2 = !0,
            _0xdc4bx3 = 1;

        function _0xdc4bx4() {
            $('a')['on']('click', function() {
                    if ('#' === $(this)['attr']('href')) {
                        return !1
                    }
                }),
                $('.menu-hider')['length'] || $('#page')['append']('<div class=\"menu-hider\"><div>');
            var _0xdc4bx4 = $('.menu'),
                _0xdc4bx5 = ($('body'),
                    $('.nav-fixed'),
                    $('#footer-bar')),
                _0xdc4bx6 = ($('.close-menu'),
                    $('.header')),
                _0xdc4bx7 = ($('#page'),
                    $('.page-content'),
                    $('.header, .page-content, #footer-bar'));

            function _0xdc4bx8() {
                var _0xdc4bx1 = $('[data-toggle-theme-switch], [data-toggle-theme], [data-toggle-theme-switch] input, [data-toggle-theme] input');

                function _0xdc4bx2() {
                    $('body')['removeClass']('theme-light')['addClass']('theme-dark'),
                        $('#dark-mode-detected')['removeClass']('disabled'),
                        localStorage['setItem']('Appkit-Theme', 'dark-mode')
                }

                function _0xdc4bx3() {
                    $('body')['removeClass']('theme-dark')['addClass']('theme-light'),
                        $('#dark-mode-detected')['removeClass']('disabled'),
                        localStorage['setItem']('Appkit-Theme', 'light-mode')
                }

                function _0xdc4bx4() {
                    const _0xdc4bx1 = window['matchMedia']('(prefers-color-scheme: dark)')['matches'],
                        _0xdc4bx4 = window['matchMedia']('(prefers-color-scheme: light)')['matches'];
                    window['matchMedia']('(prefers-color-scheme: no-preference)')['matches'];
                    window['matchMedia']('(prefers-color-scheme: dark)')['addListener']((_0xdc4bx1) => _0xdc4bx1['matches'] && _0xdc4bx2()),
                        window['matchMedia']('(prefers-color-scheme: light)')['addListener']((_0xdc4bx1) => _0xdc4bx1['matches'] && _0xdc4bx3()),
                        window['matchMedia']('(prefers-color-scheme: no-preference)')['addListener']((_0xdc4bx1) => _0xdc4bx1['matches'] && void($('#manual-mode-detected')['removeClass']('disabled'))),
                        _0xdc4bx1 && _0xdc4bx2(),
                        _0xdc4bx4 && _0xdc4bx3()
                }
                $('[data-toggle-theme], [data-toggle-theme-switch]')['off']()['on']('click', function() {
                        return $('body')['append']('<style id=\"transitions-remove\">.btn, .header, #footer-bar, .menu-box, .menu-active{transition:all 0ms ease!important;}</style>'),
                            $('body')['toggleClass']('theme-light theme-dark'),
                            $('body')['hasClass']('detect-theme') && $('body')['removeClass']('detect-theme'),
                            $('body')['hasClass']('theme-light') && (_0xdc4bx1['prop']('checked', !1),
                                localStorage['setItem']('Appkit-Theme', 'light-mode')),
                            $('body')['hasClass']('theme-dark') && (_0xdc4bx1['prop']('checked', !0),
                                localStorage['setItem']('Appkit-Theme', 'dark-mode')),
                            setTimeout(function() {
                                $('body')['find']('#transitions-remove')['remove']()
                            }, 150),
                            !1
                    }),
                    'dark-mode' == localStorage['getItem']('Appkit-Theme') && (_0xdc4bx1['prop']('checked', !0),
                        $('body')['removeClass']('theme-light')['addClass']('theme-dark')),
                    'light-mode' == localStorage['getItem']('Appkit-Theme') && (_0xdc4bx1['prop']('checked', !1),
                        $('body')['removeClass']('theme-dark')['addClass']('theme-light')),
                    $('body')['hasClass']('detect-theme') && _0xdc4bx4(),
                    $('.detect-dark-mode')['on']('click', function() {
                        return $('body')['addClass']('detect-theme'),
                            _0xdc4bx4(),
                            !1
                    }),
                    $('.disable-auto-dark-mode')['on']('click', function() {
                        return $('body')['removeClass']('detect-theme'),
                            $(this)['remove'](),
                            !1
                    })
            }
            _0xdc4bx8(),
                $('.footer-bar-2, .footer-bar-4, .footer-bar-5, .footer-bar-6')['length'] && ($('.footer-bar-1 strong, .footer-bar-2 strong, .footer-bar-4 strong, .footer-bar-5 strong, .footer-bar-6 strong')['length'] || ($('.footer-bar-1 .active-nav, .footer-bar-2 .active-nav, .footer-bar-4 .active-nav, .footer-bar-5 .active-nav, .footer-bar-6 .circle-nav')['append']('<strong><u></u></strong>'),
                    $('.footer-bar-6 .active-nav')['append']('<em></em>'))),
                localStorage['setItem']('z_AppKit-Visited:' + window['location']['pathname'], 'Page Visited'),
                $['fn']['visited'] = function(_0xdc4bx1) {
                    _0xdc4bx1 = _0xdc4bx1 || !1,
                        $(this)['each'](function(_0xdc4bx2, _0xdc4bx3) {
                            (_0xdc4bx3['host'] == window['location']['host'] && localStorage['getItem']('z_AppKit-Visited:' + _0xdc4bx3['pathname']) || localStorage['getItem']('z_AppKit-Visited:' + _0xdc4bx3['pathname'] + '/')) && (_0xdc4bx1 ? ($(_0xdc4bx3)['addClass'](_0xdc4bx1),
                                $(_0xdc4bx3)['find']('.badge')['addClass']('disabled')) : $(_0xdc4bx3)['attr']('data-visited', !0))
                        })
                },
                $('.list-group a')['on']('click', function() {
                    '#' != $(this)['attr']('href') && localStorage['setItem']('z_Appkit-Visited-Scroll-Position', $(window)['scrollTop']())
                }),
                $('.check-visited')['length'] && setTimeout(function() {
                    var _0xdc4bx1 = localStorage['getItem']('z_Appkit-Visited-Scroll-Position');
                    $(window)['scrollTop'](_0xdc4bx1),
                        localStorage['removeItem']('z_Appkit-Visited-Scroll-Position')
                }, 200),
                $('.check-visited a')['visited']('visited-link'),
                $('.back-button, [data-back-button]')['on']('click', function() {
                    window['history']['go'](-1)
                });
            var _0xdc4bx9 = $('.copyright-year, #copyright-year'),
                _0xdc4bxa = (new Date)['getFullYear']();
            _0xdc4bx9['html'](_0xdc4bxa);
            var _0xdc4bxb = $('.back-to-top-badge, .back-to-top-icon');

            function _0xdc4bxc() {
                $('.back-to-top, [data-back-to-top], .back-to-top-badge, .back-to-top-icon')['on']('click', function(_0xdc4bx1) {
                    return _0xdc4bx1['preventDefault'](),
                        $('html, body, .page-content')['animate']({
                            scrollTop: 0
                        }, 350),
                        !1
                })
            }

            function _0xdc4bxd() {
                _0xdc4bxb['removeClass']('back-to-top-visible')
            }
            _0xdc4bxc(),
                'none' == $('#adblock-detect img')['css']('display') ? $('#adblock-message')['removeClass']('disabled') : $('#adblock-message, #adblock-detect')['addClass']('disabled'),
                $('.activate-scroll-ad')['on']('click', function() {
                    $('#scroll-ad')['removeClass']('disabled'),
                        $('#fixed-ad')['addClass']('disabled')
                }),
                $('.activate-fixed-ad')['on']('click', function() {
                    $('#scroll-ad')['addClass']('disabled'),
                        $('#fixed-ad')['removeClass']('disabled')
                });
            var _0xdc4bxe = $('.scroll-ad');

            function _0xdc4bxf() {
                _0xdc4bxe['removeClass']('scroll-ad-visible')
            }
            if (setTimeout(function() {
                    var _0xdc4bx1 = $('.page-content-top')['height']();
                    $('.page-content-top-clear')['css']('height', _0xdc4bx1)
                }, 25),
                $(window)['on']('scroll', function() {
                    var _0xdc4bx1 = $('.page-title'),
                        _0xdc4bx2 = document['body']['scrollHeight'],
                        _0xdc4bx3 = _0xdc4bx1['height'](),
                        _0xdc4bx4 = $(this)['scrollTop']() > _0xdc4bx3,
                        _0xdc4bx5 = $(this)['scrollTop']() <= _0xdc4bx3,
                        _0xdc4bx6 = $(this)['scrollTop']() <= 150,
                        _0xdc4bx7 = $(this)['scrollTop']() >= 0,
                        _0xdc4bx8 = $(this)['scrollTop']() >= _0xdc4bx2 - ($(window)['height']() + 300);
                    1 == _0xdc4bx4 && ($('.header-auto-show')['addClass']('header-active'),
                            _0xdc4bx1['css']('opacity', '0')),
                        1 == _0xdc4bx5 && ($('.header-auto-show')['removeClass']('header-active'),
                            _0xdc4bx1['css']('opacity', '1')),
                        !0 === _0xdc4bx6 ? (_0xdc4bxd(),
                            _0xdc4bxf(),
                            _0xdc4bx1['length'] || $('.header-auto-show')['removeClass']('header-active')) : !0 === _0xdc4bx7 && (_0xdc4bxb['addClass']('back-to-top-visible'),
                            _0xdc4bxe['addClass']('scroll-ad-visible'),
                            _0xdc4bx1['length'] || $('.header-auto-show')['addClass']('header-active')),
                        1 == _0xdc4bx8 && (_0xdc4bxd(),
                            _0xdc4bxf())
                }),
                $('.visit-detection')['length']) {
                var _0xdc4bx10 = localStorage['getItem']('Appkit-Last-Visited'),
                    _0xdc4bx11 = new Date,
                    _0xdc4bx12 = _0xdc4bx11['getFullYear']() + '/' + (_0xdc4bx11['getMonth']() + 1) + '/' + _0xdc4bx11['getDate'](),
                    _0xdc4bx13 = _0xdc4bx11['getHours']() + ':' + _0xdc4bx11['getMinutes']() + ':' + _0xdc4bx11['getSeconds']();
                _0xdc4bx10 ? ($('.visit-before-time')['html'](_0xdc4bx10),
                    $('.never-visited')['hide'](),
                    $('.before-visited')['show'](),
                    localStorage['setItem']('Appkit-Last-Visited', '<br>Your last visit was ' + _0xdc4bx12 + ' at ' + _0xdc4bx13)) : ($('.never-visited')['show'](),
                    $('.before-visited')['hide'](),
                    localStorage['setItem']('Appkit-Last-Visited', '<br>Your last visit was ' + _0xdc4bx12 + ' at ' + _0xdc4bx13))
            };
            var _0xdc4bx14, _0xdc4bx15 = $('.tab-controls');
            _0xdc4bx15['length'] && (_0xdc4bx14 = $('.tab-controls a'),
                    _0xdc4bx15['each'](function() {
                        var _0xdc4bx1 = $(this)['parent']()['find']('.tab-controls')['data']('tab-items'),
                            _0xdc4bx2 = ($(this)['width'](),
                                $(this)['find']('a[data-tab-active]')),
                            _0xdc4bx3 = $('#' + _0xdc4bx2['data']('tab')),
                            _0xdc4bx4 = $(this)['data']('tab-active');
                        $(this)['find']('a[data-tab]')['css']('width', 100 / _0xdc4bx1 + '%'),
                            _0xdc4bx2['addClass'](_0xdc4bx4),
                            _0xdc4bx2['addClass'](_0xdc4bx4),
                            _0xdc4bx3['slideDown'](0)
                    }),
                    _0xdc4bx14['on']('click', function() {
                        var _0xdc4bx1 = $(this)['data']('tab'),
                            _0xdc4bx2 = $('#' + _0xdc4bx1),
                            _0xdc4bx3 = $(this)['parent']()['parent']()['find']('.tab-content'),
                            _0xdc4bx4 = (_0xdc4bx3 = $(this)['parent']()['parent']()['parent']()['find']('.tab-content'),
                                $(this)['data']('tab-order'),
                                $(this)['parent']()['parent']()['find']('.tab-controls')['data']('tab-active'));
                        $(this)['parent']()['find'](_0xdc4bx14)['removeClass'](_0xdc4bx4),
                            $(this)['addClass'](_0xdc4bx4),
                            $(this)['parent']()['find']('a')['removeClass']('no-click'),
                            $(this)['addClass']('no-click'),
                            _0xdc4bx3['slideUp'](250),
                            _0xdc4bx2['slideDown'](250)
                    })),
                $('.text-size-increase')['click'](function() {
                    $('.text-size-changer *')['css']('font-size', '+=1')
                }),
                $('.text-size-decrease')['click'](function() {
                    $('.text-size-changer *')['css']('font-size', '-=1')
                }),
                $('.text-size-default')['click'](function() {
                    $('.text-size-changer *')['css']('font-size', '')
                }),
                $('[data-search]')['on']('keyup', function() {
                    var _0xdc4bx1 = $(this)['val']();
                    '' != _0xdc4bx1 && ($('.search-results')['removeClass']('disabled'),
                            $('[data-filter-item]')['addClass']('disabled'),
                            $('[data-filter-item][data-filter-name*=\"' + _0xdc4bx1['toLowerCase']() + '\"]')['removeClass']('disabled')),
                        '' == _0xdc4bx1 && (console['log']('test'),
                            setTimeout(function() {
                                $('.search-results')['addClass']('disabled')
                            }, 10),
                            $('[data-filter-item]')['removeClass']('disabled'));
                    var _0xdc4bx2 = $('.search-results [data-filter-item]')['length'];
                    $('.search-no-results'),
                        $('.search-results')['find']('[data-filter-item].disabled')['length'] == _0xdc4bx2 ? ($('.search-no-results')['removeClass']('disabled'),
                            $('.search-results')['addClass']('disabled')) : ($('.search-no-results')['addClass']('disabled'),
                            $('.search-results')['removeClass']('disabled'))
                }),
                setTimeout(function() {
                    $('.user-slider')['owlCarousel']({
                            loop: !1,
                            margin: 20,
                            nav: !1,
                            lazyLoad: !0,
                            items: 1,
                            autoplay: !1,
                            dots: !1,
                            autoplayTimeout: 4e3
                        }),
                        $('.news-slider')['owlCarousel']({
                            loop: !0,
                            margin: 20,
                            nav: !1,
                            stagePadding: 30,
                            lazyLoad: !0,
                            items: 5,
                            autoplay: !1,
                            dots: !1,
                            autoplayTimeout: 4e3
                        }),
                        $('.topic-slider')['owlCarousel']({
                            loop: !0,
                            margin: 0,
                            nav: !1,
                            stagePadding: 40,
                            lazyLoad: !0,
                            items: 2,
                            autoWidth: !0,
                            autoplay: !1,
                            dots: !1,
                            autoplayTimeout: 4e3
                        }),
                        $('.story-slider')['owlCarousel']({
                            loop: !1,
                            margin: 20,
                            nav: !1,
                            stagePadding: 30,
                            lazyLoad: !0,
                            items: 4,
                            autoplay: !1,
                            dots: !1,
                            autoplayTimeout: 4e3
                        }),
                        $('.single-slider')['owlCarousel']({
                            loop: !0,
                            margin: 20,
                            nav: !1,
                            lazyLoad: !0,
                            items: 1,
                            autoplay: !0,
                            autoplayTimeout: 4e3
                        }),
                        $('.fast-slider')['owlCarousel']({
                            loop: !0,
                            margin: 20,
                            nav: !1,
                            lazyLoad: !0,
                            items: 1,
                            autoplay: !0,
                            autoplayTimeout: 2e3
                        }),
                        $('.boxed-slider')['owlCarousel']({
                            loop: !0,
                            margin: 20,
                            stagePadding: 50,
                            nav: !1,
                            lazyLoad: !0,
                            items: 1,
                            autoplay: !1,
                            autoplayTimeout: 4e3
                        }),
                        $('.card-slider')['owlCarousel']({
                            loop: !0,
                            margin: 20,
                            nav: !1,
                            lazyLoad: !0,
                            stagePadding: 50,
                            items: 1,
                            autoplay: !0,
                            autoplayTimeout: 4e3
                        }),
                        $('.cover-slider')['owlCarousel']({
                            loop: !1,
                            margin: 0,
                            nav: !1,
                            lazyLoad: !0,
                            items: 1,
                            autoplay: !0,
                            autoplayTimeout: 6e3
                        }),
                        $('.double-slider')['owlCarousel']({
                            loop: !0,
                            stagePadding: 20,
                            margin: 23,
                            nav: !1,
                            items: 2,
                            dots: !1
                        }),
                        $('.task-slider')['owlCarousel']({
                            loop: !0,
                            margin: 20,
                            nav: !1,
                            stagePadding: 50,
                            lazyLoad: !0,
                            items: 2,
                            autoplay: !1,
                            autoplayTimeout: 4e3
                        }),
                        $('.next-slide, .next-slide-arrow, .next-slide-text, .cover-next')['on']('click', function() {
                            $(this)['parent']()['find']('.owl-carousel')['trigger']('next.owl.carousel')
                        }),
                        $('.prev-slide, .prev-slide-arrow, .prev-slide-text, .cover-prev')['on']('click', function() {
                            $(this)['parent']()['find']('.owl-carousel')['trigger']('prev.owl.carousel')
                        }),
                        $('.next-slide-user')['on']('click', function() {
                            $(this)['closest']('.owl-carousel')['trigger']('next.owl.carousel')
                        }),
                        $('.prev-slide-user')['on']('click', function() {
                            $(this)['closest']('.owl-carousel')['trigger']('prev.owl.carousel')
                        })
                }, 10),
                setTimeout(function() {
                    $('.owl-prev, .owl-next')['addClass']('bg-highlight')
                }),
                (_0xdc4bx3c = {
                    Android: function() {
                        return navigator['userAgent']['match'](/Android/i)
                    },
                    iOS: function() {
                        return navigator['userAgent']['match'](/iPhone|iPad|iPod/i)
                    },
                    Windows: function() {
                        return navigator['userAgent']['match'](/IEMobile/i)
                    },
                    any: function() {
                        return _0xdc4bx3c.Android() || _0xdc4bx3c['iOS']() || _0xdc4bx3c.Windows()
                    }
                })['any']() || ($('body')['addClass']('is-not-ios'),
                    $('.show-ios, .show-android')['addClass']('disabled'),
                    $('.show-no-device')['removeClass']('disabled')),
                _0xdc4bx3c.Android() && ($('body')['addClass']('is-not-ios'),
                    $('head')['append']('<meta name=\"theme-color\" content=\"#FFFFFF\"> />'),
                    $('.show-android')['removeClass']('disabled'),
                    $('.show-ios, .show-no-device, .simulate-android, .simulate-iphones')['addClass']('disabled')),
                _0xdc4bx3c['iOS']() && ($('body')['addClass']('is-ios'),
                    $('.show-ios')['removeClass']('disabled'),
                    $('.show-android, .show-no-device, .simulate-android, .simulate-iphones')['addClass']('disabled')),
                $('[data-toast]')['on']('click', function() {
                    return $('.toast, .snackbar-toast, .notification')['toast']('hide'),
                        $('#' + $(this)['data']('toast'))['toast']('show'),
                        !1
                }),
                $('[data-dismiss]')['on']('click', function() {
                    var _0xdc4bx1 = $(this)['data']('dismiss');
                    $('#' + _0xdc4bx1)['toast']('hide')
                }),
                $(function() {
                    $('[data-toggle=\"tooltip\"]')['tooltip']()
                }),
                $('[data-toggle=\"collapse\"]')['length'] && $('[data-toggle=\"collapse\"]')['on']('click', function(_0xdc4bx1) {
                    _0xdc4bx1['preventDefault']()
                }),
                $('.stepper-add')['on']('click', function() {
                    var _0xdc4bx1 = +$(this)['parent']()['find']('input')['val']() + 1;
                    return $(this)['parent']()['find']('input')['val'](_0xdc4bx1),
                        !1
                }),
                $('.stepper-sub')['on']('click', function() {
                    var _0xdc4bx1 = $(this)['parent']()['find']('input')['val']() - 1;
                    return _0xdc4bx1 >= 0 && $(this)['parent']()['find']('input')['val'](_0xdc4bx1),
                        !1
                }),
                $('.ios-input, .android-input, .classic-input')['on']('click', function() {
                    var _0xdc4bx1 = $(this)['attr']('id'),
                        _0xdc4bx2 = $('[data-switch=' + _0xdc4bx1 + ']');
                    _0xdc4bx2['length'] && _0xdc4bx2['stop']()['animate']({
                        height: 'toggle'
                    }, 250)
                }),
                $('[data-activate]')['on']('click', function() {
                    var _0xdc4bx1 = $(this)['data']('activate');
                    $('#' + _0xdc4bx1)['trigger']('click')
                }),
                $('[data-trigger-switch]')['on']('click', function() {
                    var _0xdc4bx1 = $(this)['data']('trigger-switch');
                    $('#' + _0xdc4bx1)['prop']('checked') ? $('#' + _0xdc4bx1)['prop']('checked', !1) : $('#' + _0xdc4bx1)['prop']('checked', !0)
                });
            var _0xdc4bx16 = $('.business-hours');

            function _0xdc4bx17() {
                if ($('.is-on-homescreen')['length']) {
                    var _0xdc4bx1 = $('.page-title')['height'],
                        _0xdc4bx2 = screen['height'];
                    $('.page-content, #page')['css']('min-height', _0xdc4bx2 - _0xdc4bx1)
                };
                if (!$('.is-on-homescreen')['length']) {
                    _0xdc4bx1 = $('.page-title')['height'],
                        _0xdc4bx2 = window['innerHeight'];
                    $('.page-content, #page')['css']('min-height', _0xdc4bx2 - _0xdc4bx1)
                };
                $('.card-full')['css']('min-height', _0xdc4bx2),
                    $('[data-card-height]')['each'](function() {
                        var _0xdc4bx1 = $(this)['data']('card-height');
                        $(this)['css']('height', _0xdc4bx1),
                            'cover' == _0xdc4bx1 && (_0xdc4bx6['length'] && _0xdc4bx5['length'],
                                $(this)['css']('height', _0xdc4bx2),
                                $('.map-full, .map-full iframe')['css']('height', _0xdc4bx2)),
                            'cover-card' == _0xdc4bx1 && ($(this)['css']('height', _0xdc4bx2 - 200),
                                $('.map-full, .map-full iframe')['css']('height', _0xdc4bx2 - 200)),
                            'story-card' == _0xdc4bx1 && $(this)['css']('height', _0xdc4bx2 - 80)
                    })
            }

            function _0xdc4bx18() {
                $('[data-highlight-style]')['on']('click', function() {
                    $('.highlight-changer a')['removeClass']('menu-active'),
                        $(this)['addClass']('menu-active');
                    var _0xdc4bx1 = $(this)['data']('highlight-style');
                    return localStorage['setItem']('AppKit-Highlight', _0xdc4bx1),
                        $('#highlight')['remove'](),
                        $('head')['append']($('<link rel=\"stylesheet\" id=\"highlight\" type=\"text/css\" />')['attr']('href', _0xdc4bx1)),
                        !1
                });
                var _0xdc4bx1 = localStorage['getItem']('AppKit-Highlight');
                null != _0xdc4bx1 && $('.highlight-changer a')['removeClass']('menu-active'),
                    $('a[data-highlight-style=\"' + _0xdc4bx1 + '\"]')['addClass']('menu-active'),
                    $('head')['append']($('<link rel=\"stylesheet\" id=\"highlight\" type=\"text/css\" />')['attr']('href', _0xdc4bx1))
            }
            _0xdc4bx16['length'] && function() {
                    if (_0xdc4bx16['length']) {
                        var _0xdc4bx1 = new Date(Date['now']()),
                            _0xdc4bx2 = 'day-' + (new Date)['toLocaleDateString']('en', {
                                weekday: 'long'
                            })['toLowerCase'](),
                            _0xdc4bx3 = (_0xdc4bx1['getHours'](),
                                _0xdc4bx1['getMinutes'](),
                                $('.' + _0xdc4bx2)),
                            _0xdc4bx4 = _0xdc4bx16['data']('closed-message').toString(),
                            _0xdc4bx5 = _0xdc4bx16['data']('closed-message-under').toString(),
                            _0xdc4bx6 = _0xdc4bx16['data']('opened-message').toString(),
                            _0xdc4bx7 = _0xdc4bx16['data']('opened-message-under').toString();
                        $('[data-monday]')['data']('open'),
                            $('[data-monday]')['data']('close'),
                            $('.business-hours')['openingTimes']({
                                openingTimes: {
                                    Monday: ['08:00', '17:00'],
                                    Tuesday: ['08:00', '17:30'],
                                    Wednesday: ['08:00', '17:00'],
                                    Thursday: ['08:00', '17:00'],
                                    Friday: ['09:00', '18:55'],
                                    Saturday: ['09:00', '12:00']
                                },
                                openClass: 'bg-green-dark is-business-opened',
                                closedClass: 'bg-red-dark is-business-closed'
                            }),
                            _0xdc4bx16['hasClass']('is-business-opened') ? ($('.show-business-opened')['removeClass']('disabled'),
                                $('.show-business-closed')['addClass']('disabled'),
                                _0xdc4bx16['find']('h1')['html'](_0xdc4bx6),
                                _0xdc4bx16['find']('p')['html'](_0xdc4bx7),
                                _0xdc4bx16['find']('#business-hours-mail')['remove'](),
                                _0xdc4bx3['addClass']('bg-green-dark')) : ($('.show-business-opened')['addClass']('disabled'),
                                $('.show-business-closed')['removeClass']('disabled'),
                                _0xdc4bx16['find']('h1')['html'](_0xdc4bx4),
                                _0xdc4bx16['find']('p')['html'](_0xdc4bx5),
                                _0xdc4bx16['find']('#business-hours-call')['remove'](),
                                _0xdc4bx3['addClass']('bg-red-dark')),
                            _0xdc4bx3['find']('p')['addClass']('color-white')
                    }
                }(),
                function(_0xdc4bx1, _0xdc4bx2, _0xdc4bx3) {
                    if (_0xdc4bx3 in _0xdc4bx2 && _0xdc4bx2[_0xdc4bx3]) {
                        var _0xdc4bx4, _0xdc4bx5 = _0xdc4bx1['location'],
                            _0xdc4bx6 = /^(a|html)$/i;
                        _0xdc4bx1['addEventListener']('click', function(_0xdc4bx1) {
                                for (_0xdc4bx4 = _0xdc4bx1['target']; !_0xdc4bx6['test'](_0xdc4bx4['nodeName']);) {
                                    _0xdc4bx4 = _0xdc4bx4['parentNode']
                                };
                                'href' in _0xdc4bx4 && (_0xdc4bx4['href']['indexOf']('http') || ~_0xdc4bx4['href']['indexOf'](_0xdc4bx5['host'])) && (_0xdc4bx1['preventDefault'](),
                                    _0xdc4bx5['href'] = _0xdc4bx4['href'])
                            }, !1),
                            $('.add-to-home')['addClass']('disabled'),
                            $('body')['addClass']('is-on-homescreen')
                    }
                }(document, window['navigator'], 'standalone'),
                $('.simulate-android-badge')['on']('click', function() {
                    $('.add-to-home')['removeClass']('add-to-home-ios')['addClass']('add-to-home-visible add-to-home-android')
                }),
                $('.simulate-iphone-badge')['on']('click', function() {
                    $('.add-to-home')['removeClass']('add-to-home-android')['addClass']('add-to-home-visible add-to-home-ios')
                }),
                $('.add-to-home')['on']('click', function() {
                    $('.add-to-home')['removeClass']('add-to-home-visible')
                }),
                $('.simulate-android-banner')['on']('click', function() {
                    $('#menu-install-pwa-android, .menu-hider')['addClass']('menu-active')
                }),
                $('.simulate-ios-banner')['on']('click', function() {
                    $('#menu-install-pwa-ios, .menu-hider')['addClass']('menu-active')
                }),
                _0xdc4bx17(),
                $(window)['resize'](function() {
                    _0xdc4bx17()
                }),
                _0xdc4bx18(),
                $('.show-map, .hide-map')['on']('click', function() {
                    $('.map-full .caption')['toggleClass']('deactivate-map'),
                        $('.map-but-1, .map-but-2')['toggleClass']('deactivate-map'),
                        $('.map-full .hide-map')['toggleClass']('activate-map')
                }),
                $('.card-scale')['unbind']()['bind']('mouseenter mouseleave touchstart touchend', function() {
                    $(this)['find']('img')['toggleClass']('card-scale-image')
                }),
                $('.card-grayscale')['unbind']()['bind']('mouseenter mouseleave touchstart touchend', function() {
                    $(this)['find']('img')['toggleClass']('card-grayscale-image')
                }),
                $('.card-rotate')['unbind']()['bind']('mouseenter mouseleave touchstart touchend', function() {
                    $(this)['find']('img')['toggleClass']('card-rotate-image')
                }),
                $('.card-blur')['unbind']()['bind']('mouseenter mouseleave touchstart touchend', function() {
                    $(this)['find']('img')['toggleClass']('card-blur-image')
                }),
                $('.card-hide')['unbind']()['bind']('mouseenter mouseleave touchstart touchend', function() {
                    $(this)['find']('.card-center, .card-bottom, .card-top, .card-overlay')['toggleClass']('card-hide-image')
                }),
                $('#reading-progress-text')['each'](function(_0xdc4bx1) {
                    var _0xdc4bx2 = $(this)['text']()['split'](' ')['length'],
                        _0xdc4bx3 = Math['floor'](_0xdc4bx2 / 250),
                        _0xdc4bx4 = _0xdc4bx2 % 60;
                    $('.reading-progress-words')['append'](_0xdc4bx2),
                        $('.reading-progress-time')['append'](_0xdc4bx3 + ':' + _0xdc4bx4)
                });
            var _0xdc4bx19, _0xdc4bx1a, _0xdc4bx1b, _0xdc4bx1c, _0xdc4bx1d, _0xdc4bx1e, _0xdc4bx1f = $('.menuHider');
            if ($('[data-auto-show-ad]')['length']) {
                var _0xdc4bx20 = $('[data-auto-show-ad]')['data']('auto-show-ad');
                setTimeout(function() {
                    $('[data-auto-show-ad]')['trigger']('click')
                }, 1e3 * _0xdc4bx20)
            };
            $('[data-timed-ad]')['on']('click', function() {
                    var _0xdc4bx1 = $(this)['data']('timed-ad'),
                        _0xdc4bx2 = $('#' + $(this)['data']('menu'));
                    _0xdc4bx1f['addClass']('no-click'),
                        _0xdc4bx2['find']('.ad-time-close')['addClass']('no-click'),
                        _0xdc4bx2['find']('.ad-time-close i')['addClass']('disabled'),
                        _0xdc4bx2['find']('.ad-time-close span')['removeClass']('disabled');
                    var _0xdc4bx3 = setInterval(function() {
                        if (--_0xdc4bx1 <= 0) {
                            return _0xdc4bx1f['removeClass']('no-click'),
                                _0xdc4bx2['find']('.ad-time-close')['removeClass']('no-click'),
                                _0xdc4bx2['find']('.ad-time-close i')['removeClass']('disabled'),
                                _0xdc4bx2['find']('.ad-time-close span')['addClass']('disabled'),
                                void(clearInterval(_0xdc4bx3))
                        };
                        _0xdc4bx2['find']('.ad-time-close span')['html'](_0xdc4bx1)
                    }, 1e3)
                }),
                _0xdc4bx19 = '01/19/2030 03:14:07 AM',
                _0xdc4bx19 = (_0xdc4bx19 = new Date(_0xdc4bx19))['getTime'](),
                isNaN(_0xdc4bx19) || setInterval(function() {
                    var _0xdc4bx1 = new Date,
                        _0xdc4bx1 = new Date(_0xdc4bx1['getUTCFullYear'](), _0xdc4bx1['getUTCMonth'](), _0xdc4bx1['getUTCDate'](), _0xdc4bx1['getUTCHours'](), _0xdc4bx1['getUTCMinutes'](), _0xdc4bx1['getUTCSeconds']()),
                        _0xdc4bx2 = parseInt((_0xdc4bx19 - _0xdc4bx1['getTime']()) / 1e3);
                    _0xdc4bx2 >= 0 && (_0xdc4bx1a = parseInt(_0xdc4bx2 / 31536e3),
                        _0xdc4bx2 %= 31536e3,
                        _0xdc4bx1b = parseInt(_0xdc4bx2 / 86400),
                        _0xdc4bx2 %= 86400,
                        _0xdc4bx1c = parseInt(_0xdc4bx2 / 3600),
                        _0xdc4bx2 %= 3600,
                        _0xdc4bx1d = parseInt(_0xdc4bx2 / 60),
                        _0xdc4bx2 %= 60,
                        _0xdc4bx1e = parseInt(_0xdc4bx2),
                        $('.countdown')['length'] && ($('.countdown #years')[0]['innerHTML'] = parseInt(_0xdc4bx1a, 10),
                            $('.countdown #days')[0]['innerHTML'] = parseInt(_0xdc4bx1b, 10),
                            $('.countdown #hours')[0]['innerHTML'] = ('0' + _0xdc4bx1c)['slice'](-2),
                            $('.countdown #minutes')[0]['innerHTML'] = ('0' + _0xdc4bx1d)['slice'](-2),
                            $('.countdown #seconds')[0]['innerHTML'] = ('0' + _0xdc4bx1e)['slice'](-2)))
                }, 1),
                $('.accordion-btn')['on']('click', function() {
                    $(this)['addClass']('no-click'),
                        $('.accordion-icon')['removeClass']('rotate-180'),
                        'true' == $(this)['attr']('aria-expanded') ? $(this)['parent']()['find']('.accordion-icon')['removeClass']('rotate-180') : $(this)['parent']()['find']('.accordion-icon')['addClass']('rotate-180'),
                        setTimeout(function() {
                            $('.accordion-btn')['removeClass']('no-click')
                        }, 250)
                }),
                $('.caption-scale')['unbind']()['bind']('mouseenter mouseleave touchstart touchend', function() {
                    $(this)['find']('img')['toggleClass']('caption-scale-image')
                }),
                $('.caption-grayscale')['unbind']()['bind']('mouseenter mouseleave touchstart touchend', function() {
                    $(this)['find']('img')['toggleClass']('caption-grayscale-image')
                }),
                $('.caption-rotate')['unbind']()['bind']('mouseenter mouseleave touchstart touchend', function() {
                    $(this)['find']('img')['toggleClass']('caption-rotate-image')
                }),
                $('.caption-blur')['unbind']()['bind']('mouseenter mouseleave touchstart touchend', function() {
                    $(this)['find']('img')['toggleClass']('caption-blur-image')
                }),
                $('.caption-hide')['unbind']()['bind']('mouseenter mouseleave touchstart touchend', function() {
                    $(this)['find']('.caption-center, .caption-bottom, .caption-top, .caption-overlay')['toggleClass']('caption-hide-image')
                }),
                $('.upload-file')['length'] && $('.upload-file')['change'](function(_0xdc4bx1) {
                    ! function(_0xdc4bx1) {
                        if (_0xdc4bx1['files'] && _0xdc4bx1['files'][0]) {
                            var _0xdc4bx2 = new FileReader;
                            _0xdc4bx2['onload'] = function(_0xdc4bx1) {
                                    $('.file-data img')['attr']('src', _0xdc4bx1['target']['result']),
                                        $('.file-data img')['attr']('class', 'img-fluid rounded-xs mt-4')
                                },
                                _0xdc4bx2['readAsDataURL'](_0xdc4bx1['files'][0])
                        }
                    }(this),
                    _0xdc4bx1['target']['files'][0]['name'],
                        $('.upload-file-data')['removeClass']('disabled'),
                        $('.upload-file-name')['html'](_0xdc4bx1['target']['files'][0]['name']),
                        $('.upload-file-modified')['html'](_0xdc4bx1['target']['files'][0]['lastModifiedDate']),
                        $('.upload-file-size')['html'](_0xdc4bx1['target']['files'][0]['size'] / 1e3 + 'kb'),
                        $('.upload-file-type')['html'](_0xdc4bx1['target']['files'][0]['type'])
                }),
                $('.todo-list')['length'] && ($('.todo-list a')['each'](function() {
                        $(this)['find']('.form-check-input')['prop']('checked') ? $(this)['addClass']('opacity-70') : $(this)['removeClass']('opacity-70')
                    }),
                    $('.todo-list a')['on']('click', function() {
                        return $(this)['find']('input')['attr']('checked') ? ($(this)['removeClass']('opacity-70'),
                                $(this)['find']('input')['removeAttr']('checked')) : ($(this)['addClass']('opacity-70'),
                                $(this)['find']('input')['attr']('checked', 'true')),
                            !1
                    })),
                $('.check-card')['length'] && $('.check-card')['on']('click', function() {
                    return $(this)['find']('input')['attr']('checked') ? ($('.check-card')['find']('input')['removeAttr']('checked'),
                            $(this)['find']('input')['removeAttr']('checked')) : ($('.check-card')['find']('input')['removeAttr']('checked'),
                            $(this)['find']('input')['attr']('checked', 'true')),
                        !1
                }),
                $('.check-age')['length'] && (console['log']('active'),
                    $('.check-age')['on']('click', function() {
                        var _0xdc4bx1 = $('#date-birth-day')['val'](),
                            _0xdc4bx2 = $('#date-birth-month')['val'](),
                            _0xdc4bx3 = $('#date-birth-year')['val'](),
                            _0xdc4bx4 = new Date;
                        _0xdc4bx4['setFullYear'](_0xdc4bx3, _0xdc4bx2 - 1, _0xdc4bx1);
                        var _0xdc4bx5 = new Date,
                            _0xdc4bx6 = new Date;
                        return _0xdc4bx6['setFullYear'](_0xdc4bx4['getFullYear']() + 18, _0xdc4bx2 - 1, _0xdc4bx1),
                            _0xdc4bx5 - _0xdc4bx6 > 0 ? (console['log']('above 18'),
                                $('#menu-age')['removeClass']('menu-active'),
                                $('#menu-age-okay')['addClass']('menu-active')) : ($('#menu-age')['removeClass']('menu-active'),
                                $('#menu-age-fail')['addClass']('menu-active')),
                            !0
                    })),
                $('.get-location')['length'] && ('geolocation' in navigator ? $('.location-support')['html']('Your browser and device <strong class=\"color-green-dark\">support</strong> Geolocation.') : $('.location-support')['html']('Your browser and device <strong class=\"color-red-dark\">support</strong> Geolocation.'),
                    $('.get-location')['on']('click', function() {
                        $(this)['addClass']('disabled'),
                            function() {
                                const _0xdc4bx1 = document['querySelector']('.location-coordinates');
                                navigator['geolocation'] ? (_0xdc4bx1['textContent'] = 'Locating',
                                    navigator['geolocation']['getCurrentPosition'](function(_0xdc4bx2) {
                                        const _0xdc4bx3 = _0xdc4bx2['coords']['latitude'],
                                            _0xdc4bx4 = _0xdc4bx2['coords']['longitude'];
                                        _0xdc4bx1['innerHTML'] = '<strong>Longitude:</strong> ' + _0xdc4bx4 + '<br><strong>Latitude:</strong> ' + _0xdc4bx3;
                                        var _0xdc4bx5 = 'http://maps.google.com/maps?q=',
                                            _0xdc4bx6 = _0xdc4bx3 + ',',
                                            _0xdc4bx7 = _0xdc4bx5 + _0xdc4bx6 + _0xdc4bx4 + '&z=18&t=h&output=embed',
                                            _0xdc4bx8 = _0xdc4bx5 + _0xdc4bx6 + _0xdc4bx4 + '&z=18&t=h';
                                        $('.location-map')['after']('<iframe class=\"location-map\" src=\"' + _0xdc4bx7 + '\"></iframe> <div class=\"clearfix\"></div>'),
                                            $('.location-map')['parent']()['after'](' <a href=' + _0xdc4bx8 + ' class=\"btn btn-full btn-l bg-red-dark rounded-0 font-700 mb-n1\">View on Google Maps</a>')
                                    }, function() {
                                        _0xdc4bx1['textContent'] = 'Unable to retrieve your location'
                                    })) : _0xdc4bx1['textContent'] = 'Geolocation is not supported by your browser'
                            }()
                    }));
            var _0xdc4bx21, _0xdc4bx22, _0xdc4bx23 = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i,
                _0xdc4bx24 = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/,
                _0xdc4bx25 = /[A-Za-z]{2}[A-Za-z]*[ ]?[A-Za-z]*/,
                _0xdc4bx26 = /[A-Za-z]{2}[A-Za-z]*[ ]?[A-Za-z]*/,
                _0xdc4bx27 = /^(http|https)?:\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,4}/,
                _0xdc4bx28 = /[A-Za-z]{2}[A-Za-z]*[ ]?[A-Za-z]*/;
            //     _0xdc4bx29 = '<i class=\\'
            // fa fa - check color - green - dark\\ '></i>', _0xdc4bx2a = '<i class=\\'
            // fa fa - exclamation - triangle color - red - light\\ '></i>';

            function _0xdc4bx2b() {
                var _0xdc4bx1 = window['location']['href'],
                    _0xdc4bx2 = document['title'];
                $('.shareToFacebook')['prop']('href', 'https://www.facebook.com/sharer/sharer.php?u=' + _0xdc4bx1),
                    $('.shareToLinkedIn')['prop']('href', 'https://www.linkedin.com/shareArticle?mini=true&url=' + _0xdc4bx1 + '&title=' + _0xdc4bx2 + '&summary=&source='),
                    $('.shareToTwitter')['prop']('href', 'https://twitter.com/intent/tweet?text=' + _0xdc4bx1),
                    $('.shareToPinterest')['prop']('href', 'https://pinterest.com/pin/create/button/?url=' + _0xdc4bx1),
                    $('.shareToWhatsApp')['prop']('href', 'whatsapp://send?text=' + _0xdc4bx1),
                    $('.shareToMail')['prop']('href', 'mailto:?body=' + _0xdc4bx1),
                    $('.shareToCopyLink')['on']('click', function(_0xdc4bx2) {
                        $(this)['parent']()['find']('p')['html']('Link Copied'),
                            $(this)['removeClass']('color-blue-dark')['addClass']('color-green-dark'),
                            $(this)['find']('i')['attr']('class', ''),
                            $(this)['find']('i')['attr']('class', 'fa fa-check font-12'),
                            setTimeout(function() {
                                $('.shareToCopyLink')['parent']()['find']('p')['html']('Copy Link'),
                                    $('.shareToCopyLink')['removeClass']('color-green-dark')['addClass']('color-blue-dark'),
                                    $('.shareToCopyLink')['find']('i')['attr']('class', ''),
                                    $('.shareToCopyLink')['find']('i')['attr']('class', 'fa fa-link font-14')
                            }, 1e3);
                        var _0xdc4bx3 = $('<input>');
                        $('body')['append'](_0xdc4bx3),
                            _0xdc4bx3['val'](_0xdc4bx1)['select'](),
                            document['execCommand']('copy'),
                            _0xdc4bx3['remove']()
                    })
            }
            $('.input-required input, .input-required select, .input-required textarea')['on']('focusin keyup', function() {
                    var _0xdc4bx1 = $(this)['parent']()['find']('span')['text']();
                    $(this)['val']() != _0xdc4bx1 && '' != $(this)['val']() && $(this)['parent']()['find']('span')['addClass']('input-style-1-active')['removeClass']('input-style-1-inactive'),
                        '' === $(this)['val']() && $(this)['parent']()['find']('span')['removeClass']('input-style-1-inactive input-style-1-active')
                }),
                $('.input-required input, .input-required select, .input-required textarea')['on']('focusout', function() {
                    $(this)['parent']()['find']('span')['text']();
                    '' === $(this)['val']() && $(this)['parent']()['find']('span')['removeClass']('input-style-1-inactive input-style-1-active'),
                        $(this)['parent']()['find']('span')['addClass']('input-style-1-inactive')
                }),
                $('.input-required select')['on']('focusout', function() {
                    var _0xdc4bx1 = $(this)[0]['value'];
                    'default' === _0xdc4bx1 && ($(this)['parent']()['find']('em')['html'](_0xdc4bx2a),
                            $(this)['parent']()['find']('span')['removeClass']('input-style-1-inactive input-style-1-active')),
                        'default' != _0xdc4bx1 && $(this)['parent']()['find']('em')['html'](_0xdc4bx29)
                }),
                $('.input-required input[type=\"email\"]')['on']('focusout', function() {
                    _0xdc4bx23['test']($(this)['val']()) ? $(this)['parent']()['find']('em')['html'](_0xdc4bx29) : '' === $(this)['val']() ? $(this)['parent']()['find']('em')['html']('(required)') : $(this)['parent']()['find']('em')['html'](_0xdc4bx2a)
                }),
                $('.input-required input[type=\"tel\"]')['on']('focusout', function() {
                    _0xdc4bx24['test']($(this)['val']()) ? $(this)['parent']()['find']('em')['html'](_0xdc4bx29) : '' === $(this)['val']() ? $(this)['parent']()['find']('em')['html']('(required)') : $(this)['parent']()['find']('em')['html'](_0xdc4bx2a)
                }),
                $('.input-required input[type=\"password\"]')['on']('focusout', function() {
                    _0xdc4bx26['test']($(this)['val']()) ? $(this)['parent']()['find']('em')['html'](_0xdc4bx29) : '' === $(this)['val']() ? $(this)['parent']()['find']('em')['html']('(required)') : $(this)['parent']()['find']('em')['html'](_0xdc4bx2a)
                }),
                $('.input-required input[type=\"url\"]')['on']('focusout', function() {
                    _0xdc4bx27['test']($(this)['val']()) ? $(this)['parent']()['find']('em')['html'](_0xdc4bx29) : '' === $(this)['val']() ? $(this)['parent']()['find']('em')['html']('(required)') : $(this)['parent']()['find']('em')['html'](_0xdc4bx2a)
                }),
                $('.input-required input[type=\"name\"]')['on']('focusout', function() {
                    _0xdc4bx25['test']($(this)['val']()) ? $(this)['parent']()['find']('em')['html'](_0xdc4bx29) : '' === $(this)['val']() ? $(this)['parent']()['find']('em')['html']('(required)') : $(this)['parent']()['find']('em')['html'](_0xdc4bx2a)
                }),
                $('.input-required textarea')['on']('focusout', function() {
                    _0xdc4bx28['test']($(this)['val']()) ? $(this)['parent']()['find']('em')['html'](_0xdc4bx29) : '' === $(this)['val']() ? $(this)['parent']()['find']('em')['html']('(required)') : $(this)['parent']()['find']('em')['html'](_0xdc4bx2a)
                }),
                Date['prototype']['toDateInputValue'] = function() {
                    var _0xdc4bx1 = new Date(this);
                    return _0xdc4bx1['setMinutes'](this['getMinutes']() - this['getTimezoneOffset']()),
                        _0xdc4bx1['toJSON']()['slice'](0, 10)
                },
                $('input[type=\"date\"]')['val']((new Date)['toDateInputValue']()),
                $('.generate-qr-result, .generate-qr-auto')['length'] && (_0xdc4bx21 = window['location']['href'],
                    _0xdc4bx22 = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=',
                    $('.generate-qr-auto')['attr']('src', _0xdc4bx22 + _0xdc4bx21),
                    $('.generate-qr-button')['on']('click', function() {
                        if ($(this)['parent']()['find']('.fa')['hasClass']('fa-exclamation-triangle')) {
                            console['log']('Invalid URL')
                        } else {
                            var _0xdc4bx1 = $('.generate-qr-input')['val']();
                            '' == !_0xdc4bx1 && ($('.generate-qr-result')['empty'](),
                                setTimeout(function() {
                                    $('.generate-qr-result')['append']('<img class=\"mx-auto polaroid-effect shadow-l mt-4 delete-qr\" width=\"200\" src=\"' + _0xdc4bx22 + _0xdc4bx1 + '\" alt=\"img\"><p class=\"font-11 text-center mb-0\">' + _0xdc4bx1 + '</p>')
                                }, 30))
                        }
                    })),
                $('[data-vibrate]')['length'] && ($('[data-vibrate]')['on']('click', function() {
                        var _0xdc4bx1 = $(this)['data']('vibrate');
                        window['navigator']['vibrate'](_0xdc4bx1)
                    }),
                    $('.start-vibrating')['on']('click', function() {
                        var _0xdc4bx1 = $('.vibrate-demo')['val']();
                        window['navigator']['vibrate'](_0xdc4bx1)
                    }),
                    $('.stop-vibrating')['on']('click', function() {
                        window['navigator']['vibrate'](0),
                            $('.vibrate-demo')['val']('')
                    })),
                _0xdc4bx2b();
            var _0xdc4bx2c = $('.preload-img');
            $(function() {
                    _0xdc4bx2c['lazyload']({
                        threshold: 500
                    })
                }),
                $('[data-lightbox]')['addClass']('default-link'),
                lightbox['option']({
                    alwaysShowNavOnTouchDevices: !0,
                    resizeDuration: 200,
                    wrapAround: !1
                }),
                $('#lightbox')['hammer']()['on']('swipe', function(_0xdc4bx1) {
                    4 === _0xdc4bx1['gesture']['direction'] ? $('#lightbox a.lb-prev')['trigger']('click') : 2 === _0xdc4bx1['gesture']['direction'] && $('#lightbox a.lb-next')['trigger']('click')
                }),
                $('.gallery-filter-links')['length'] > 0 && ($('.gallery-filter-links')['filterizr'](),
                    $('.gallery-filter-active')['addClass']('color-highlight')),
                $('.gallery-filter-select')['length'] > 0 && ($('.gallery-filter-select')['filterizr'](),
                    $('#filter-select')['change'](function() {
                        var _0xdc4bx1 = $(this)['val']();
                        $('[data-filter=' + _0xdc4bx1 + ']')['trigger']('click')
                    })),
                $('.gallery-filter-controls li')['on']('click', function() {
                    $('.gallery-filter-controls li')['removeClass']('gallery-filter-active color-highlight'),
                        $(this)['addClass']('gallery-filter-active color-highlight')
                });
            var _0xdc4bx2d = $('.gallery-views'),
                _0xdc4bx2e = $('.gallery-view-controls a'),
                _0xdc4bx2f = $('.gallery-view-1-activate'),
                _0xdc4bx30 = $('.gallery-view-2-activate'),
                _0xdc4bx31 = $('.gallery-view-3-activate');
            _0xdc4bx2f['on']('click', function() {
                    _0xdc4bx2e['removeClass']('color-highlight'),
                        $(this)['addClass']('color-highlight'),
                        _0xdc4bx2d['removeClass']()['addClass']('gallery-views gallery-view-1')
                }),
                _0xdc4bx30['on']('click', function() {
                    _0xdc4bx2e['removeClass']('color-highlight'),
                        $(this)['addClass']('color-highlight'),
                        _0xdc4bx2d['removeClass']()['addClass']('gallery-views gallery-view-2')
                }),
                _0xdc4bx31['on']('click', function() {
                    _0xdc4bx2e['removeClass']('color-highlight'),
                        $(this)['addClass']('color-highlight'),
                        _0xdc4bx2d['removeClass']()['addClass']('gallery-views gallery-view-3')
                });
            var _0xdc4bx32, _0xdc4bx33, _0xdc4bx34, _0xdc4bx35, _0xdc4bx36 = 'false';
            if (jQuery(document)['ready'](function(_0xdc4bx1) {
                    function _0xdc4bx2(_0xdc4bx2, _0xdc4bx3) {
                        _0xdc4bx1('.formValidationError')['hide'](),
                            _0xdc4bx1('.fieldHasError')['removeClass']('fieldHasError'),
                            _0xdc4bx1('#' + _0xdc4bx2 + ' .requiredField')['each'](function(_0xdc4bx3) {
                                if ('' == _0xdc4bx1(this)['val']() || _0xdc4bx1(this)['val']() == _0xdc4bx1(this)['attr']('data-dummy')) {
                                    return _0xdc4bx1(this)['val'](_0xdc4bx1(this)['attr']('data-dummy')),
                                        _0xdc4bx1(this)['focus'](),
                                        _0xdc4bx1(this)['addClass']('fieldHasError'),
                                        _0xdc4bx1('#' + _0xdc4bx1(this)['attr']('id') + 'Error')['fadeIn'](300),
                                        !1
                                };
                                if (_0xdc4bx1(this)['hasClass']('requiredEmailField')) {
                                    var _0xdc4bx4 = '#' + _0xdc4bx1(this)['attr']('id');
                                    if (!/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/ ['test'](_0xdc4bx1(_0xdc4bx4)['val']())) {
                                        return _0xdc4bx1(_0xdc4bx4)['focus'](),
                                            _0xdc4bx1(_0xdc4bx4)['addClass']('fieldHasError'),
                                            _0xdc4bx1(_0xdc4bx4 + 'Error2')['fadeIn'](300),
                                            !1
                                    }
                                };
                                'false' == _0xdc4bx36 && _0xdc4bx3 == _0xdc4bx1('#' + _0xdc4bx2 + ' .requiredField')['length'] - 1 && function(_0xdc4bx2, _0xdc4bx3) {
                                    _0xdc4bx36 = 'true';
                                    var _0xdc4bx4 = _0xdc4bx1('#' + _0xdc4bx2)['serialize']();
                                    _0xdc4bx1['post'](_0xdc4bx1('#' + _0xdc4bx2)['attr']('action'), _0xdc4bx4, function(_0xdc4bx3) {
                                        _0xdc4bx1('#' + _0xdc4bx2)['addClass']('disabled'),
                                            $('.contact-form')['addClass']('disabled'),
                                            _0xdc4bx1('.formSuccessMessageWrap')['fadeIn'](500)
                                    })
                                }(_0xdc4bx2)
                            })
                    }
                    _0xdc4bx1('.formSuccessMessageWrap')['hide'](0),
                        _0xdc4bx1('.formValidationError')['fadeOut'](0),
                        _0xdc4bx1('input[type=\"text\"], input[type=\"password\"], textarea')['focus'](function() {
                            _0xdc4bx1(this)['val']() == _0xdc4bx1(this)['attr']('data-dummy') && _0xdc4bx1(this)['val']('')
                        }),
                        _0xdc4bx1('input, textarea')['blur'](function() {
                            '' == _0xdc4bx1(this)['val']() && _0xdc4bx1(this)['val'](_0xdc4bx1(this)['attr']('data-dummy'))
                        }),
                        _0xdc4bx1('.contactSubmitButton')['on']('click', function() {
                            return _0xdc4bx2(_0xdc4bx1(this)['attr']('data-formId')),
                                !1
                        })
                }),
                $('.chart')['length'] > 0) {
                _0xdc4bx32 = 'scripts/charts.js',
                    _0xdc4bx33 = function() {
                        var _0xdc4bx1 = $('#wallet-chart'),
                            _0xdc4bx2 = $('#pie-chart'),
                            _0xdc4bx3 = $('#doughnut-chart'),
                            _0xdc4bx4 = $('#polar-chart'),
                            _0xdc4bx5 = $('#vertical-chart'),
                            _0xdc4bx6 = $('#horizontal-chart'),
                            _0xdc4bx7 = $('#line-chart');
                        _0xdc4bx1['length'] && new Chart(_0xdc4bx1, {
                                type: 'bar',
                                data: {
                                    labels: ['Jun', 'Jul', 'Aug'],
                                    datasets: [{
                                        label: 'Expenses',
                                        backgroundColor: '#ED5565',
                                        data: [100, 100, 130]
                                    }, {
                                        label: 'Income',
                                        backgroundColor: '#A0D468',
                                        data: [170, 145, 165]
                                    }, {
                                        label: 'Subscriptions',
                                        backgroundColor: '#4A89DC',
                                        data: [71, 50, 70]
                                    }]
                                },
                                options: {
                                    responsive: !0,
                                    maintainAspectRatio: !1,
                                    legend: {
                                        display: !0,
                                        position: 'bottom',
                                        labels: {
                                            fontSize: 13,
                                            padding: 15,
                                            boxWidth: 12
                                        }
                                    },
                                    title: {
                                        display: !1
                                    }
                                }
                            }),
                            _0xdc4bx2['length'] && new Chart(_0xdc4bx2, {
                                type: 'pie',
                                data: {
                                    labels: ['Facebook', 'Twitter', 'WhatsApp'],
                                    datasets: [{
                                        backgroundColor: ['#4A89DC', '#4FC1E9', '#A0D468'],
                                        borderColor: 'rgba(255,255,255,0.5)',
                                        data: [7e3, 3e3, 2e3]
                                    }]
                                },
                                options: {
                                    responsive: !0,
                                    maintainAspectRatio: !1,
                                    legend: {
                                        display: !0,
                                        position: 'bottom',
                                        labels: {
                                            fontSize: 13,
                                            padding: 15,
                                            boxWidth: 12
                                        }
                                    },
                                    tooltips: {
                                        enabled: !0
                                    },
                                    animation: {
                                        duration: 1500
                                    }
                                }
                            }),
                            _0xdc4bx3['length'] && new Chart(_0xdc4bx3, {
                                type: 'doughnut',
                                data: {
                                    labels: ['Apple', 'Samsung', 'Google'],
                                    datasets: [{
                                        backgroundColor: ['#CCD1D9', '#5D9CEC', '#FC6E51'],
                                        borderColor: 'rgba(255,255,255,0.5)',
                                        data: [5500, 4e3, 3e3]
                                    }]
                                },
                                options: {
                                    responsive: !0,
                                    maintainAspectRatio: !1,
                                    legend: {
                                        display: !0,
                                        position: 'bottom',
                                        labels: {
                                            fontSize: 13,
                                            padding: 15,
                                            boxWidth: 12
                                        }
                                    },
                                    tooltips: {
                                        enabled: !0
                                    },
                                    animation: {
                                        duration: 1500
                                    },
                                    layout: {
                                        padding: {
                                            bottom: 30
                                        }
                                    }
                                }
                            }),
                            _0xdc4bx4['length'] && new Chart(_0xdc4bx4, {
                                type: 'polarArea',
                                data: {
                                    labels: ['Windows', 'Mac', 'Linux'],
                                    datasets: [{
                                        backgroundColor: ['#CCD1D9', '#5D9CEC', '#FC6E51'],
                                        borderColor: 'rgba(255,255,255,0.5)',
                                        data: [7e3, 1e4, 5e3]
                                    }]
                                },
                                options: {
                                    responsive: !0,
                                    maintainAspectRatio: !1,
                                    legend: {
                                        display: !0,
                                        position: 'bottom',
                                        labels: {
                                            fontSize: 13,
                                            padding: 15,
                                            boxWidth: 12
                                        }
                                    },
                                    tooltips: {
                                        enabled: !0
                                    },
                                    animation: {
                                        duration: 1500
                                    },
                                    layout: {
                                        padding: {
                                            bottom: 30
                                        }
                                    }
                                }
                            }),
                            _0xdc4bx5['length'] && new Chart(_0xdc4bx5, {
                                type: 'bar',
                                data: {
                                    labels: ['2010', '2015', '2020'],
                                    datasets: [{
                                        label: 'iOS',
                                        backgroundColor: '#A0D468',
                                        data: [900, 1e3, 1150]
                                    }, {
                                        label: 'Android',
                                        backgroundColor: '#4A89DC',
                                        data: [890, 950, 1100]
                                    }]
                                },
                                options: {
                                    responsive: !0,
                                    maintainAspectRatio: !1,
                                    legend: {
                                        display: !0,
                                        position: 'bottom',
                                        labels: {
                                            fontSize: 13,
                                            padding: 15,
                                            boxWidth: 12
                                        }
                                    },
                                    title: {
                                        display: !1
                                    }
                                }
                            }),
                            _0xdc4bx6['length'] && new Chart(_0xdc4bx6, {
                                type: 'horizontalBar',
                                data: {
                                    labels: ['2010', '2013', '2016', '2020'],
                                    datasets: [{
                                        label: 'Mobile',
                                        backgroundColor: '#BF263C',
                                        data: [330, 400, 580, 590]
                                    }, {
                                        label: 'Responsive',
                                        backgroundColor: '#EC87C0',
                                        data: [390, 450, 550, 570]
                                    }]
                                },
                                options: {
                                    legend: {
                                        display: !0,
                                        position: 'bottom',
                                        labels: {
                                            fontSize: 13,
                                            padding: 15,
                                            boxWidth: 12
                                        }
                                    },
                                    title: {
                                        display: !1
                                    }
                                }
                            }),
                            _0xdc4bx7['length'] && new Chart(_0xdc4bx7, {
                                type: 'line',
                                data: {
                                    labels: [2e3, 2005, 2010, 2015, 2010],
                                    datasets: [{
                                        data: [500, 400, 300, 200, 300],
                                        label: 'Desktop Web',
                                        borderColor: '#D8334A'
                                    }, {
                                        data: [0, 100, 300, 400, 500],
                                        label: 'Mobile Web',
                                        borderColor: '#4A89DC'
                                    }]
                                },
                                options: {
                                    responsive: !0,
                                    maintainAspectRatio: !1,
                                    legend: {
                                        display: !0,
                                        position: 'bottom',
                                        labels: {
                                            fontSize: 13,
                                            padding: 15,
                                            boxWidth: 12
                                        }
                                    },
                                    title: {
                                        display: !1
                                    }
                                }
                            })
                    },
                    _0xdc4bx34 = document['body'],
                    (_0xdc4bx35 = document['createElement']('script'))['src'] = _0xdc4bx32,
                    _0xdc4bx35['onload'] = _0xdc4bx33,
                    _0xdc4bx35['onreadystatechange'] = _0xdc4bx33,
                    _0xdc4bx34['appendChild'](_0xdc4bx35)
            };
            if (!0 === _0xdc4bx1) {
                var _0xdc4bx37 = new Date,
                    _0xdc4bx38 = new Date(_0xdc4bx37['getFullYear'](), 0, 0),
                    _0xdc4bx39 = _0xdc4bx37 - _0xdc4bx38,
                    _0xdc4bx3a = Math['floor'](_0xdc4bx39 / 864e5),
                    _0xdc4bx3b = localStorage['getItem']('Appkit-PWA-Timeout-Value');
                _0xdc4bx3a - _0xdc4bx3b > _0xdc4bx3 && localStorage['removeItem']('Appkit-PWA-Prompt'),
                    $('.pwa-dismiss')['on']('click', function() {
                        console['log']('User Closed Add to Home / PWA Prompt'),
                            localStorage['setItem']('Appkit-PWA-Prompt', 'install-rejected'),
                            $('body')['find']('#menu-install-pwa-android, #menu-install-pwa-ios, .menu-hider')['removeClass']('menu-active'),
                            localStorage['setItem']('Appkit-PWA-Timeout-Value', _0xdc4bx3a)
                    });
                var _0xdc4bx3c = {
                        Android: function() {
                            return navigator['userAgent']['match'](/Android/i)
                        },
                        iOS: function() {
                            return navigator['userAgent']['match'](/iPhone|iPad|iPod/i)
                        },
                        any: function() {
                            return _0xdc4bx3c.Android() || _0xdc4bx3c['iOS']() || _0xdc4bx3c.Windows()
                        }
                    },
                    _0xdc4bx3d = 1 == window['navigator']['standalone'];
                window['matchMedia']('(display-mode: standalone)')['matches'];
                if (_0xdc4bx3c.Android()) {
                    let _0xdc4bx1;
                    window['addEventListener']('beforeinstallprompt', (_0xdc4bx2) => {
                            _0xdc4bx2['preventDefault'](),
                                _0xdc4bx1 = _0xdc4bx2,
                                $('#menu-install-pwa-android, .add-to-home')['length'] ? 'install-rejected' != localStorage['getItem']('Appkit-PWA-Prompt') ? (setTimeout(function() {
                                        $('.add-to-home')['addClass']('add-to-home-visible add-to-home-android'),
                                            $('#menu-install-pwa-android, .menu-hider')['addClass']('menu-active')
                                    }, 4500),
                                    console['log']('Triggering PWA Window for Android')) : console['log']('PWA Install Rejected. Will Show Again in ' + (_0xdc4bx3b - _0xdc4bx3a + _0xdc4bx3) + ' Days') : console['log']('The div #menu-install-pwa-android was not found. Please add this div to show the install window')
                        }),
                        $('.pwa-install')['on']('click', function(_0xdc4bx2) {
                            _0xdc4bx1['prompt'](),
                                _0xdc4bx1['userChoice']['then']((_0xdc4bx2) => {
                                    _0xdc4bx2['outcome'],
                                        _0xdc4bx1 = null
                                })
                        }),
                        window['addEventListener']('appinstalled', (_0xdc4bx1) => {
                            $('#menu-install-pwa-android, .menu-hider')['removeClass']('menu-active')
                        })
                };

                function _0xdc4bx3e() {
                    $('.offline-message')['addClass']('offline-message-active'),
                        $('.online-message')['removeClass']('online-message-active'),
                        setTimeout(function() {
                            $('.offline-message')['removeClass']('offline-message-active')
                        }, 2e3)
                }

                function _0xdc4bx3f() {
                    $('.online-message')['addClass']('online-message-active'),
                        $('.offline-message')['removeClass']('offline-message-active'),
                        setTimeout(function() {
                            $('.online-message')['removeClass']('online-message-active')
                        }, 2e3)
                }

                function _0xdc4bx40() {
                    if ($(this)['attr']('href')['match'](/.html/)) {
                        return _0xdc4bx3e(),
                            !1
                    }
                }
                // _0xdc4bx3c['iOS']() && (_0xdc4bx3d || ($('#menu-install-pwa-ios, .add-to-home')['length'] ? 'install-rejected' != localStorage['getItem']('Appkit-PWA-Prompt') ? (console['log']('Triggering PWA Window for iOS'),
                //         setTimeout(function() {
                //             $('.add-to-home')['addClass']('add-to-home-visible add-to-home-ios'),
                //                 $('#menu-install-pwa-ios, .menu-hider')['addClass']('menu-active')
                //         }, 4500)) : console['log']('PWA Install Rejected. Will Show Again in ' + (_0xdc4bx3b - _0xdc4bx3a + _0xdc4bx3) + ' Days') : console['log']('The div #menu-install-pwa-ios was not found. Please add this div to show the install window'))),
                    $('.offline-message')['length'] || ($('body')['append']('<p class=\"offline-message bg-red-dark color-white center-text uppercase ultrabold\">No internet connection detected</p> '),
                        $('body')['append']('<p class=\"online-message bg-green-dark color-white center-text uppercase ultrabold\">You are back online</p>')),
                    $('.simulate-offline')['on']('click', function() {
                        _0xdc4bx3e()
                    }),
                    $('.simulate-online')['on']('click', function() {
                        _0xdc4bx3f()
                    }),
                    window['addEventListener']('online', function(_0xdc4bx1) {
                        navigator['onLine'],
                            _0xdc4bx3f(),
                            console['log']('Connection: Online'),
                            $('a')['off']('click', _0xdc4bx40)
                    }),
                    window['addEventListener']('offline', function(_0xdc4bx1) {
                        _0xdc4bx3e(),
                            $('a')['on']('click', _0xdc4bx40),
                            console['log']('Connection: Offline')
                    })
                    // hola
                    // }),
                    // 1 == _0xdc4bx2 && (caches['delete']('workbox-runtime')['then'](function() {}),
                    //     sessionStorage['clear'](),
                    //     caches['keys']()['then']((_0xdc4bx1) => {
                    //         _0xdc4bx1['forEach']((_0xdc4bx1) => {
                    //             caches['delete'](_0xdc4bx1)
                    //         })
                    //     }))
            };
            $('[data-menu-load]')['each'](function() {
                    var _0xdc4bx1 = $(this)['data']('menu-load');
                    $(this)['load'](_0xdc4bx1)
                })['promise']()['done'](function() {
                    setTimeout(function() {
                        _0xdc4bx2b(),
                            _0xdc4bx17(),
                            _0xdc4bx8(),
                            function() {
                                $('.menu-hider')['length'] || $('#page')['append']('<div class=\"menu-hider\"><div>');
                                var _0xdc4bx1 = $('.menu-hider'),
                                    _0xdc4bx2 = $('[data-menu]');
                                _0xdc4bx4['each'](function() {
                                        var _0xdc4bx1 = $(this)['data']('menu-height'),
                                            _0xdc4bx2 = $(this)['data']('menu-width');
                                        $(this)['data']('menu-active'),
                                            $(this)['hasClass']('menu-box-right') && $(this)['css']('width', _0xdc4bx2),
                                            $(this)['hasClass']('menu-box-left') && $(this)['css']('width', _0xdc4bx2),
                                            $(this)['hasClass']('menu-box-bottom') && $(this)['css']('height', _0xdc4bx1),
                                            $(this)['hasClass']('menu-box-top') && $(this)['css']('height', _0xdc4bx1),
                                            $(this)['hasClass']('menu-box-modal') && $(this)['css']({
                                                height: _0xdc4bx1,
                                                width: _0xdc4bx2
                                            })
                                    }),
                                    $('.menu a')['on']('click', function() {
                                        $('body')['removeClass']('modal-open')
                                    }),
                                    _0xdc4bx2['on']('click', function() {
                                        _0xdc4bx4['removeClass']('menu-active'),
                                            _0xdc4bx1['addClass']('menu-active');
                                        var _0xdc4bx3 = $(this)['data']('menu'),
                                            _0xdc4bx5 = $('#' + _0xdc4bx3),
                                            _0xdc4bx6 = $('#' + _0xdc4bx3)['data']('menu-effect'),
                                            _0xdc4bx8 = _0xdc4bx5['data']('menu-width'),
                                            _0xdc4bx9 = _0xdc4bx5['data']('menu-height');
                                        if ($('body')['addClass']('modal-open'),
                                            _0xdc4bx5['hasClass']('menu-header-clear') && _0xdc4bx1['addClass']('menu-active-clear'),
                                            _0xdc4bx5['hasClass']('menu-box-bottom') && $('#footer-bar')['addClass']('footer-menu-hidden'),
                                            'menu-parallax' === _0xdc4bx6 && (_0xdc4bx5['hasClass']('menu-box-bottom') && _0xdc4bx7['css']('transform', 'translateY(' + _0xdc4bx9 / 5 * -1 + 'px)'),
                                                _0xdc4bx5['hasClass']('menu-box-top') && _0xdc4bx7['css']('transform', 'translateY(' + _0xdc4bx9 / 5 + 'px)'),
                                                _0xdc4bx5['hasClass']('menu-box-left') && _0xdc4bx7['css']('transform', 'translateX(' + _0xdc4bx8 / 5 + 'px)'),
                                                _0xdc4bx5['hasClass']('menu-box-right') && _0xdc4bx7['css']('transform', 'translateX(' + _0xdc4bx8 / 5 * -1 + 'px)')),
                                            'menu-push' === _0xdc4bx6 && (_0xdc4bx5['hasClass']('menu-box-bottom') && _0xdc4bx7['css']('transform', 'translateY(' + -1 * _0xdc4bx9 + 'px)'),
                                                _0xdc4bx5['hasClass']('menu-box-top') && _0xdc4bx7['css']('transform', 'translateY(' + _0xdc4bx9 + 'px)'),
                                                _0xdc4bx5['hasClass']('menu-box-left') && _0xdc4bx7['css']('transform', 'translateX(' + _0xdc4bx8 + 'px)'),
                                                _0xdc4bx5['hasClass']('menu-box-right') && _0xdc4bx7['css']('transform', 'translateX(' + -1 * _0xdc4bx8 + 'px)')),
                                            'menu-push-full' === _0xdc4bx6 && (_0xdc4bx5['hasClass']('menu-box-left') && _0xdc4bx7['css']('transform', 'translateX(100%)'),
                                                _0xdc4bx5['hasClass']('menu-box-right') && _0xdc4bx7['css']('transform', 'translateX(-100%)')),
                                            _0xdc4bx5['data']('menu-hide')) {
                                            $(this)['addClass']('no-click'),
                                                $('.menu-hider')['addClass']('no-click');
                                            var _0xdc4bxa = _0xdc4bx5['data']('menu-hide');
                                            $(this)['addClass']('menu-active'),
                                                _0xdc4bx1['addClass']('menu-active'),
                                                setTimeout(function() {
                                                    _0xdc4bx2['removeClass']('no-click'),
                                                        _0xdc4bx4['removeClass']('menu-active'),
                                                        _0xdc4bx1['removeClass']('menu-active menu-active-clear no-click'),
                                                        _0xdc4bx7['css']('transform', 'translate(0,0)'),
                                                        _0xdc4bx1['css']('transform', 'translate(0,0)'),
                                                        $('#footer-bar')['removeClass']('footer-menu-hidden'),
                                                        $('body')['removeClass']('modal-open')
                                                }, _0xdc4bxa)
                                        };
                                        return _0xdc4bx5 = _0xdc4bx5['addClass']('menu-active'),
                                            !1
                                    });
                                var _0xdc4bx3 = $('[data-auto-activate]');
                                if (_0xdc4bx3['length']) {
                                    var _0xdc4bx5 = 1e3 * _0xdc4bx3['data']('auto-activate');
                                    console['log'](_0xdc4bx5),
                                        _0xdc4bx5 ? setTimeout(function() {
                                            _0xdc4bx3['addClass']('menu-active'),
                                                _0xdc4bx1['addClass']('menu-active')
                                        }, _0xdc4bx5) : (_0xdc4bx3['addClass']('menu-active'),
                                            _0xdc4bx1['addClass']('menu-active'))
                                };
                                if ($('.menu-hider, .close-menu, .menu-close')['on']('click', function() {
                                        return _0xdc4bx4['removeClass']('menu-active'),
                                            _0xdc4bx1['removeClass']('menu-active menu-active-clear'),
                                            _0xdc4bx7['css']('transform', 'translate(0,0)'),
                                            _0xdc4bx1['css']('transform', 'translate(0,0)'),
                                            $('#footer-bar')['removeClass']('footer-menu-hidden'),
                                            $('body')['removeClass']('modal-open'),
                                            !1
                                    }),
                                    $('#menu-main')['length']) {
                                    var _0xdc4bx6 = $('#menu-main')['data']('menu-active');
                                    $('#' + _0xdc4bx6)['addClass']('menu-active')
                                };
                                setTimeout(function() {
                                    var _0xdc4bx1 = $('#menu-main')['data']('menu-active');
                                    if ($('#' + _0xdc4bx1)['addClass']('nav-item-active'),
                                        $('[data-submenu]')['on']('click', function() {
                                            $(this)['toggleClass']('nav-item-active'),
                                                $(this)['find']('.fa-chevron-right')['toggleClass']('rotate-90');
                                            var _0xdc4bx1 = $(this)['data']('submenu');
                                            return $('#' + _0xdc4bx1)['slideToggle'](250),
                                                !1
                                        }),
                                        $('[data-submenu]')['each'](function() {
                                            var _0xdc4bx1 = $(this)['data']('submenu'),
                                                _0xdc4bx2 = $('#' + _0xdc4bx1)['children']()['length'];
                                            $(this)['find']('strong')['html'](_0xdc4bx2)
                                        }),
                                        $('.nav-item-active')['data']('submenu')) {
                                        $('.nav-item-active')['find']('.fa-chevron-right')['toggleClass']('rotate-90');
                                        var _0xdc4bx2 = $('.nav-item-active')['data']('submenu');
                                        $('#' + _0xdc4bx2)['slideDown'](250)
                                    };
                                    $('.nav-item-active')['parent']()['hasClass']('submenu') && $('.nav-item-active')['parent']()['slideDown'](250)
                                }, 250)
                            }(),
                            _0xdc4bx2b(),
                            _0xdc4bx18(),
                            _0xdc4bxc()
                    }, 500)
                }),
                'file:' === window['location']['protocol'] && $('a')['on']('mouseover', function() {
                    
                })
        }
        $['fn']['showMenu'] = function() {
                $(this)['addClass']('menu-active'),
                    $('#footer-bar')['addClass']('footer-menu-hidden'),
                    setTimeout(function() {
                        $('.menu-hider')['addClass']('menu-active')
                    }, 250)
            },
            $['fn']['hideMenu'] = function() {
                $(this)['removeClass']('menu-active'),
                    $('#footer-bar')['removeClass']('footer-menu-hidden'),
                    $('.menu-hider')['removeClass']('menu-active')
            },
            setTimeout(_0xdc4bx4, 0),
            $(function() {
                var _0xdc4bx1 = {
                    prefetch: !0,
                    prefetchOn: 'mouseover',
                    cacheLength: 100,
                    scroll: !0,
                    blacklist: '.default-link',
                    forms: 'contactForm',
                    onStart: {
                        duration: 180,
                        render: function(_0xdc4bx1) {
                            return _0xdc4bx1['addClass']('is-exiting'),
                                $('.menu, .menu-hider')['removeClass']('menu-active'),
                                $('#preloader')['removeClass']('preloader-hide'),
                                !1
                        }
                    },
                    onReady: {
                        duration: 30,
                        render: function(_0xdc4bx1, _0xdc4bx2) {
                            _0xdc4bx1['removeClass']('is-exiting'),
                                _0xdc4bx1['html'](_0xdc4bx2),
                                setTimeout(_0xdc4bx4, 0),
                                $('#preloader')['removeClass']('preloader-hide')
                        }
                    },
                    onAfter: function(_0xdc4bx1, _0xdc4bx2) {
                        'scrollRestoration' in history && (history['scrollRestoration'] = 'manual'),
                            setTimeout(function() {
                                $('.menu')['css']('display', 'block'),
                                    $('#preloader')['addClass']('preloader-hide')
                            }, 180)
                    }
                };
                // $('#page')['smoothState'](_0xdc4bx1)['data']('smoothState')['clear']()
            })
            // }),
            // !0 === _0xdc4bx1 && 'serviceWorker' in navigator && window['addEventListener']('load', function() {
            //     navigator['serviceWorker']['register']('/products/appkit/_service-worker.js', {
            //         scope: '/products/appkit/'
            //     })
            // })
    })