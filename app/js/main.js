(function () {
    function initSwiper() {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 6,
    
            pagination: {
                el:'.swiper-pagination'
            },
            navigation: {
                nextEl:'.swiper-button-next',
                prevEl:'.swiper-button-prev',
            }
        });
            
        var swiper2 = new Swiper('.banner-container',{
            slidesPerView: 1,
    
            pagination: {
                el:'.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            navigation: {
                nextEl:'.banner-button-next',
                prevEl:'.banner-button-prev',
            }
        })
        var swiper3 = new Swiper('.catalog', {
            slidesPerView: 5, //Display 4 in a row
            slidesPerColumn: 1.5, //Display 2 lines
            slidesPerColumnFill: 'row', //Line layout
            pagination: {
                el: '.cat_paginator',
                type: 'bullets',
                clickable: true
            },
            navigation:{
                nextEl:'.banner-button-next2',
                prevEl:'.banner-button-prev2',
            }
        })
    }
    try {
        initSwiper();
    } catch (e) {
        
    }
})()
$(function($){
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
        $('.modal').css("transform","scale(1)");
    })
    $(".modal").click(function(e){
        if(e.target == e.currentTarget){
            $('.modal').css("transform","scale(0)")
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