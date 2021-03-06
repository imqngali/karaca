jQuery(document).ready(function($){
    $('.images_contents').slick({
        arrows: true,
        // dots: true,
        slidesToShow: 8,
        slidesToScroll: 4,
        prevArrow: $($('.arrs img')[0]),
        nextArrow: $($('.arrs img')[1]),
        infinite: true,
        responsive:[
            {
                breakpoint: 1024,
                settings:{
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 766,
                settings:{
                    slidesToShow: 3
                }
            }
        ]
    })
    $('.banner_slider').slick({
        arrows: true,
        slidesToShow: 1,
        infinite: true,
        prevArrow: $('.banner-button-prev'),
        nextArrow: $('.banner-button-next'),
        dots: true,
        appendDots: $('.swiper-pagination')
    })
    $('.multiple_slider').slick({
        infinite: false,
        rows: 3,
        slidesPerRow: 4,
        variableWidth: false,
        touchThreshold: 10,
        centerMode: false,
        appendDots: $('.cat_paginator'),
        dots: true,
        arrows: true,
        prevArrow: $('.banner-button-prev2'),
        nextArrow: $('.banner-button-next2'),
        responsive: [
            {
                breakpoint: 1199,
                settings:{
                    slidesPerRow: 3
                }
            },
            {
                breakpoint: 990,
                settings:{
                    slidesPerRow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesPerRow: 2
                }
            }
        ]
    })
    $('.multiple_slider2').slick({
        infinite: false,
        rows: 2,
        slidesPerRow: 4,
        variableWidth: false,
        touchThreshold: 10,
        centerMode: false,
        appendDots: $('.cat_paginator2'),
        dots: true,
        arrows: true,
        prevArrow: $('.banner-button-prev3'),
        nextArrow: $('.banner-button-next3'),
        responsive: [
            {
                breakpoint: 1199,
                settings:{
                    slidesPerRow: 3
                }
            },
            {
                breakpoint: 990,
                settings:{
                    slidesPerRow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesPerRow: 2
                }
            }
        ]
    })
    $('.multiple_slider3').slick({
        infinite: false,
        rows: 2,
        slidesPerRow: 4,
        variableWidth: false,
        touchThreshold: 10,
        centerMode: false,
        appendDots: $('.cat_paginator3'),
        dots: true,
        arrows: true,   
        prevArrow: $('.banner-button-prev4'),
        nextArrow: $('.banner-button-next4'),
        responsive: [
            {
                breakpoint: 1199,
                settings:{
                    slidesPerRow: 3
                }
            },
            {
                breakpoint: 990,
                settings:{
                    slidesPerRow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesPerRow: 2
                }
            }
        ]
    })

    const states = {
        clickedFilter: false,
        clickCategories: $('.click_categories'),
        underCategories: $('.under_categories'),
        clickHash: [],
        clickedTabs: 0,
        tabs: $('.tabs a'),
        tabContents: $('.tab_content'),
        currentTab: 0
    }
    $('.product-card_buttons').click(function(e){
        $('.custom_modal').css("transform","scale(1)");
    })
    $(".custom_modal").click(function(e){
        if(e.target == e.currentTarget){
            $('.custom_modal').css("transform","scale(0)")
        }
    })
    $('.filter_btns_filter').click(function(e){
        states.clickedFilter ? $('.filter_btns_hidden').css("max-height","0"):$('.filter_btns_hidden').css("max-height","1000px");
        states.clickedFilter = !states.clickedFilter
    })
    
    for (let index = 0; index < states.clickCategories.length; index++) {
        const element = states.clickCategories[index];
        states.clickHash.push(true)
        $(element).click(function(e){
            const rotateEl = (target) => {
                target.removeClass(`${states.clickHash[index] ? '' : '-'}rotate-90`)
                target.addClass(`${states.clickHash[index] ? '-' : ''}rotate-90`)

                $($(states.underCategories)[index]).css("max-height",`${states.clickHash[index] ? "0" : "100%"}`);
            }
            rotateEl($(this).find('img'));  

            states.clickHash[index] = !states.clickHash[index];
        })
    }

    for (let x = 0; x < states.tabs.length; x++) {
        const element = states.tabs[x];
        states.clickHash.push(x)
        $(element).click(function(e){
            e.preventDefault();
            $(states.tabContents[x]).css("display","block");
            $(states.tabContents[states.currentTab]).css("display","none");
            $(states.tabs[states.currentTab]).removeClass("active")
            $(element).addClass("active")

            states.clickHash[x] = !states.clickHash[x];
            states.currentTab = x;
        })
    }
    $('textarea').val("");  

    $('.modal_auth').click(function(e){
        if(e.currentTarget == e.target){
            $('.modal_auth').css("transform",'scale(0)')
        }
    })
    $('.login_btn').click(function(e){
        $('.modal_auth').css("transform","scale(1)");
    })
    $('.modal_auth_inner_tab div').click(function(e) {
        const cur_index = $('.modal_auth_inner_tab div').index(this);
        $($('.modal_auth_inner_content .tab1')[states.clickedTabs]).css("display","none");
        $($('.modal_auth_inner_tab div')[states.clickedTabs]).removeClass('current');
        $($('.modal_auth_inner_tab div')[cur_index]).addClass('current');
        $($('.modal_auth_inner_content .tab1')[cur_index]).css("display","block");
        states.clickedTabs = cur_index; 
    })
    $('.filter_mobile').click(function(){
        $('.filter__top').toggle()
    })

    $('.pay_next').click(function (e) {
        e.preventDefault()
        const cur_index = $('.pay_next').index(this);
        $('.payment_tabs').eq(cur_index + 1).toggle()
        $('.payment_tabs').eq(cur_index).toggle()
    })
})

$(document).ready(function(){
    $('.profile_info_arrow').click(function(event) {
        $('.profile_textarea').toggleClass('activeEl');
    });
});

$(document).ready(function(){
    $('.about_slider').slick({
        arrows:true,
        prevArrow:$('.about_slider_left_arrow'),
        nextArrow:$('.about_slider_right_arrow'),
        dots:true,
        appendDots:$('.about_slider_dots'),
    });
});