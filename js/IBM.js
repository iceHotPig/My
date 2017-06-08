//top nav hover后出现下划线的效果；
$(function() {
    $('.topSon1').mouseover(function() {
        $('.topSon1 .topP').stop().animate({
            'padding-bottom': 6 + 'px'
        }, 'slow');
    })
    $('.topSon1').mouseleave(function() {
        $('.topSon1 .topP').stop().animate({
            'padding-bottom': 10 + 'px'
        }, 'slow');
    })
})
$(function() {
        $('.topSon2 ul li').mouseover(function(event) {
            $(this).not('li:last-child').stop().animate({
                'padding-bottom': 13 + 'px'
            }, 'slow');
        })
        $('.topSon2 ul li').mouseleave(function(event) {
            $(this).not('li:last-child').stop().animate({
                'padding-bottom': 24 + 'px'
            }, 'slow');
        })
        $('.topSon2 ul li:last-child').mouseover(function() {
            $(this).css({
                'background': '#4178be',
                'color': 'white'
            });
        });
        $('.topSon2 ul li:last-child').mouseleave(function() {
            $(this).css({
                'background': 'none',
                'color': '#4178be'
            });
        });
    })
    //hover 后出现shadow的效果；
$(function() {
    var sta = false;
    $('.topSon3').mouseover(function() {
        if (!sta) {
            $(this).addClass('shadow').css('color', '#4178be');
        }
    })
    $('.topSon3').mouseleave(function() {
        $(this).removeClass('shadow').css('color', 'black');
    })
    $('.icTop').hover(function() {
        sta = true;
        $(this).addClass('shadow').css('color', '#4178be');
        $('.topSon3').removeClass('shadow')
    }, function() {
        sta = false;
    })
    $('.icTop').mouseleave(function() {
        $(this).removeClass('shadow').css('color', 'black');
    })
})
$(function() {
        $('.icTop4-1').mouseover(function() {
            $(this).stop().animate({
                'padding-bottom': 3 + 'px'
            }, 'slow').css('color', '#4178be');
        })
        $('.icTop4-1').mouseleave(function() {
            $(this).stop().animate({
                'padding-bottom': 7 + 'px'
            }, 'slow').css('color', 'black');
        })
        $('.icTop4-2').mouseover(function() {
            $(this).stop().animate({
                'padding-bottom': 3 + 'px'
            }, 'slow').css('color', '#4178be');
        })
        $('.icTop4-2').mouseleave(function() {
            $(this).stop().animate({
                'padding-bottom': 7 + 'px'
            }, 'slow').css('color', 'black');
        })
    })
    //头部下拉效果
$(function() {
    var sta = false;
    if (!sta) {
        $('.topSon2 ul li:nth-child(2)').mouseover(function() {
            $('.hideTop').stop().slideDown(1000)
        });
        $('.topSon2 ul li:nth-child(2)').mouseleave(function() {
            $('.hideTop').stop().slideUp(1000)
        });
    }
    sta = true;
    $('.topSon2 ul li:nth-child(2)').hover(function() {
        $('.hideTop').stop().slideDown(1000)
    }, function() {
        $('.hideTop').stop().slideUp(1000)
    });
    $('.hideTop').hover(function() {
        $('.hideTop').stop().slideDown(1000)
    }, function() {
        $('.hideTop').stop().slideUp(1000)
    });
})
$(function() {
    $('.hideTopL p').mouseover(function() {
        $(this).addClass('bg')
    });
    $('.hideTopL p').mouseleave(function() {
        $(this).removeClass('bg')
    });
})
$(function() {
    $('.hideTopL p').mouseover(function() {
        // var _index = $(this).index();
        // console.error(_index);
        var index = $(this).index();
        console.log(index);
        $('.hideTopR ul li').eq(index).fadeIn().siblings().fadeOut();
    });
})

//鼠标滚动头部下拉的效果；
//jQuery判断鼠标上下滚动的方法；
$(function() {
        var n = $(window).scrollTop();
        $(window).scroll(function() {
            var m = $(this).scrollTop();
            if (m - n > 0) { //鼠标下滚
                $('.top').slideUp(0)
                $('.hideTop').css({
                    'top': 0 + 'px'
                })
            } else { //鼠标上滚
                $('.top').slideDown(0);
                $('.hideTop').css({
                    'top': 50 + 'px'
                })
            }
            n = m;
        })
    })
    //js判断鼠标上下滚动的方法；
    // var scrollFunc = function (e) {
    //     e = e || window.event;
    //     if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
    //         if (e.wheelDelta > 0) { //当滑轮向上滚动时
    //             // alert("滑轮向上滚动");
    //             $('.top').slideDown();
    //             $('.hideTop').css({'top':50+'px'})
    //         }
    //         if (e.wheelDelta < 0) { //当滑轮向下滚动时
    //             // alert("滑轮向下滚动");
    //             $('.top').slideUp();
    //             $('.hideTop').css({'top':0+'px'})
    //         }
    //     } else if (e.detail) {  //Firefox滑轮事件
    //         if (e.detail> 0) { //当滑轮向上滚动时
    //             // alert("滑轮向上滚动");
    //             $('.top').slideDown(500);
    //         }
    //         if (e.detail< 0) { //当滑轮向下滚动时
    //             // alert("滑轮向下滚动");
    //             $('.top').slideUp(500)
    //         }
    //     }
    // }
    // //给页面绑定滑轮滚动事件
    // if (document.addEventListener) {//firefox
    //     document.addEventListener('DOMMouseScroll', scrollFunc, false);
    // }
    // $(window).scroll(function(){


// //滚动滑轮触发scrollFunc方法  //ie 谷歌
// window.onmousewheel = document.onmousewheel = scrollFunc;
// })
// })



//边框动画效果
$(function() {
        $('.topSon4 p:nth-child(2)').click(function() {
            $('.layout').fadeIn();
            $('.hideSide').stop().animate({
                right: 0 + 'px'
            }, 500)
            $('body').css({
                height: '100%',
                overflowY: 'hidden'
            })
        });
        $('.layout').click(function(event) {
            $(this).fadeOut();
            $('body').css({
                height: 'auto',
                overflowY: 'auto'
            })
        });
        $('.hideSide b .first').click(function() {
            $('.layout').fadeOut();
            $('body').css({
                height: 'auto',
                overflowY: 'auto'
            })
        })
        $('.hideSide').click(function(event) {
            event.stopPropagation()
        })
    })
    //边框二级菜单点击效果
$(function() {
    //点击span的效果；
    // $('.hideDiv3 .hideSpan:first-child ').click(function() {
    //     $('.hideDiv3 ul li').css('display', 'none');
    //     $(this).css('display', 'none').siblings().css('display', 'block')
    // })
    // $('.hideDiv3 .hideSpan:last-child ').click(function() {
    //     $('.hideDiv3 ul li').css('display', 'block');
    //     $(this).css('display', 'none').siblings().css('display', 'block')
    // })
    // $('.hideDiv4 .hideSpan:first-child ').click(function() {
    //     $('.hideDiv4 ul li').css('display', 'none');
    //     $(this).css('display', 'none').siblings().css('display', 'block')
    // })
    // $('.hideDiv4 .hideSpan:last-child ').click(function() {
    //     $('.hideDiv4 ul li').css('display', 'block');
    //     $(this).css('display', 'none').siblings().css('display', 'block')
    // })
    // $('.hideDiv6 .hideSpan:first-child ').click(function() {
    //     $('.hideDiv6 ul li').css('display', 'none');
    //     $(this).css('display', 'none').siblings().css('display', 'block')
    // })
    // $('.hideDiv6 .hideSpan:last-child ').click(function() {
    //     $('.hideDiv6 ul li').css('display', 'block');
    //     $(this).css('display', 'none').siblings().css('display', 'block')
    // })



    //点击整个p的效果；点击同一个事件出现不同的效果；
    var sta1 = false;
    // var sta1=0;
    $('.hideDiv3 b').click(function() {
        if (!sta1) {
            $('.hideDiv3 ul li').stop().slideUp();
            $('.hideDiv3 .hideSpan:first-child').css('display', 'none').siblings().css('display', 'block')
            sta1 = true;
            // sta1=true;
        } else {
            // $('.hideDiv3 b ').click(function() {
            $('.hideDiv3 ul li').stop().slideDown();
            $('.hideDiv3 .hideSpan:last-child ').css('display', 'none').siblings().css('display', 'block')
            sta1 = false;
        }
        // })
        // sta1=false;
    })
    var sta1 = 0;
    $('.hideDiv4 b').click(function() {
        if (sta1 == 0) {
            $('.hideDiv4 ul li').stop().slideUp();
            $('.hideDiv4 .hideSpan:first-child').css('display', 'none').siblings().css('display', 'block')
            sta1 = 1;
            // sta1=true;
        } else {
            // $('.hideDiv3 b ').click(function() {
            $('.hideDiv4 ul li').stop().slideDown();
            $('.hideDiv4 .hideSpan:last-child ').css('display', 'none').siblings().css('display', 'block')
            sta1 = 0;
        }
        // })
        // sta1=false;
    })
    var sta1 = 0;
    $('.hideDiv6 b').click(function() {
        if (sta1 == 0) {
            $('.hideDiv6 ul li').stop().slideUp();
            $('.hideDiv6 .hideSpan:first-child').css('display', 'none').siblings().css('display', 'block')
            sta1 = 1;
            // sta1=true;
        } else {
            // $('.hideDiv3 b ').click(function() {
            $('.hideDiv6 ul li').stop().slideDown();
            $('.hideDiv6 .hideSpan:last-child ').css('display', 'none').siblings().css('display', 'block')
            sta1 = 0;
        }
        // })
        // sta1=false;
    })
})

//banner的动画效果；
$(function() {
    var index = 0;
    var length = $('.banLeft p').length
    var set = function() {
        if (index < length) {
            $('.banLeft p').eq(index).css({
                'color': '#4178be'
            }).siblings().css('color', 'white');
            index++;
        } else {
            index = 0;
        }
    }
    var time = setInterval(set, 500)
        //用hover停止定时器
        // $('.banLeft p').hover(function() {
        //     clearInterval(time);
        //     $(this).css('color', '#4178be').siblings().css('color', 'white');
        // }, function() {
        //     setInterval(set,500)
        // });
        //用mouseover & mouseleave停止定时器；
    $('.banLeft p').mouseover(function() {
        clearInterval(time);
        $(this).css('color', '#4178be').siblings().css('color', 'white');
    })
    $('.banLeft p').mouseleave(function() {
        time = setInterval(set, 500);
    })
})