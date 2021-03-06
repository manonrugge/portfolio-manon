// creating our main empty object where our app functionality will live inside of
const myPortfolio = {};


//creating a skills variable that is an object, to hold my data

myPortfolio.skills = {

}

// this function gets fired on page load

let mainOffset = $('.seeMore').on('click', function () {
    $('html').animate({
        scrollTop: $('#main-scroll').offset().top
    }, 1000);
});



myPortfolio.ActiveMenuOnScroll = function() {
   
    const links = $('.side-menu a')
    // console.log(links)

    // console.log('hello');
    // console.log(this);

    // event listener for everytime the user scrolls on the page.
    // when scroll callback function gets fired on the page.
    $(window).scroll(function () {

        // I loop through the array which contains all my links
        for (let index = 0; index < links.length; index++) {

            // I get the attr href to target every section
            const sectionSelector = $(links[index]).attr('href')
            // console.log(sectionSelector)

            // I target the section selector to get the top of the section (set minus the 500)
            
            let sectionOffset = $(sectionSelector).offset().top
            sectionOffset -= 500
            // console.log(sectionOffset)

            // variable which stores the userScrollLocation top of the window
            const userScrollLocation = $(window).scrollTop()
            // console.log(scroll)

            // if the location is bigger then one of the items all the other elements will 
            if (userScrollLocation >= sectionOffset) {
                $('.active').removeClass('active');
                $(`[href="${sectionSelector}"]`).addClass('active');
            }
        }
    });
};

myPortfolio.sectionToggleDisplay =  function() {
   
    $(`.button-content`).click(function() {
        // console.log('hello')
        $('.button-content').toggleClass('disabled')
        $('.webDev').toggleClass('hidden')
        $('.graphic').toggleClass('hidden')
    })
}

myPortfolio.addClass = function (target) {
   $(`.${target}`).addClass('hoverOn');
}

myPortfolio.removeClass = function (target) {
    $(`.${target}`).removeClass('hoverOn');
}

myPortfolio.events = function () {
    const $mainCarousel = $('.main-carousel').flickity({
        // initialIndex: 2,
        cellAlign: 'left',
        wrapAround: true,
        autoPlay: 1500
    });
}


// init function will initialize the display the events
// this function is what kicks everything off on page load. 

myPortfolio.init = function () {
    myPortfolio.events();
    myPortfolio.addClass();
    myPortfolio.removeClass();
    myPortfolio.sectionToggleDisplay();
    myPortfolio.ActiveMenuOnScroll();
}

// calls our init function on page load
$(function () {
    myPortfolio.init();
});
