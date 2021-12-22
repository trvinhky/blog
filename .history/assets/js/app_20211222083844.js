document.getElementById('date').innerText = (new Date()).getFullYear()

$(window).scroll(function(e) {
    const pos_body = $('html,body').scrollTop()
    if (pos_body > 100) $('#header').addClass('scroll-top')
    else $('#header').removeClass('scroll-top')
})

// Xử lý sự kiện click vào mục cần đến trên pc
function scrollThis(event, element) {
    event.preventDefault()
    $('html,body').animate({ scrollTop: $(element).offset().top - $('#header').outerHeight() }, 500, 'linear')
}

function returnTop(e) {
    e.preventDefault()
    $('html,body').animate({ scrollTop: 0 }, 500, 'linear')
}

$('.nav-logo__link').click(returnTop)
$('.nav-list__link:first-child').click(returnTop)
$('.nav-list__link:nth-child(2)').click((e) => {
    scrollThis(e, '#about')
})
$('.nav-list__link:nth-child(3)').click((e) => {
    scrollThis(e, '#work')
})
$('.nav-list__link:last-child').click((e) => {
    scrollThis(e, '#blog')
})

function hideNav() {
    $('.list-item').removeClass('active')
}

$('.list-link__item:first-child').click((e) => {
    hideNav()
    returnTop(e)
})
$('.list-link__item:nth-child(2)').click((e) => {
    hideNav()
    scrollThis(e, '#about')
})
$('.list-link__item:nth-child(3)').click((e) => {
    hideNav()
    scrollThis(e, '#work')
})
$('.list-link__item:last-child').click((e) => {
    hideNav()
    scrollThis(e, '#blog')
})

$('#box-hire').click(function(e) {
    const test1 = e.target.closest('.hire')
    const test2 = e.target.closest('.hire-title__close')
    if(!test1 || test2) {
        $('.box-background').animate({ opacity: '0'}, '300')
        $('.hire').animate({ 
            opacity: '0', 
            width: '300px'
        },{
            duration: 500,
            easing: 'linear',
            complete: () => {
                $(this).css('display', 'none')
            }
        })
    }
})

$('.btn--hire').click(() => {
    $('#box-hire').css('display', 'flex')
    $('.box-background').animate({ opacity: '1'}, '300')
    $('.hire').animate({ 
            opacity: '1', 
            width: '500px'
    }, '500')
})

$('.btn--about').click(() => {
    $('.group-about__one').animate({ opacity: '0'}, {
        duration: 300,
        easing: 'linear',
        complete: () => {
            $('.group-about__one').css('display', 'none')
            $('.group-about__two').css('display', 'block')
            $('.group-about__two').animate({opacity: '1'}, 500)
        }
    })
})

$('.btn--connect').click(function() {
    document.querySelector('.control').innerHTML = `Zalo: 0947468740 <br> Gmail: vinhky26032002@gmail.com`
    $(this).css({
        'user-select': 'none', 
        'pointer-events': 'none', 
        'opacity': '0.5'
    })
})

const isElInViewPort = (el) => {
    const rect = el.getBoundingClientRect()
    const viewHeight = window.innerHeight || document.documentElement.clientHeight
    return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >= viewHeight && rect.top <= viewHeight) ||
        (rect.top >= 0 && rect.bottom <= viewHeight)
    )
}

function handleScroll() {
    [...$('.scroll-show')].forEach((item) => {
        if(isElInViewPort(item)) {
            $(item).addClass('start')
        } else {
            $(item).removeClass('start')
        }
    })
}

window.addEventListener('scroll', handleScroll)