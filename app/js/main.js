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
        rows: 2,
        slidesPerRow: 8,
        variableWidth: false,
        touchThreshold: 10,
        centerMode: false,
        appendDots: $('.cat_paginator'),
        dots: true,
        arrows: true,
        prevArrow: $('.banner-button-prev2'),
        nextArrow: $('.banner-button-next2')
    })

    const states = {
        clickedFilter: false,
        clickCategories: $('.click_categories'),
        underCategories: $('.under_categories'),
        clickHash: [],
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
        states.clickHash.push(false)
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
})