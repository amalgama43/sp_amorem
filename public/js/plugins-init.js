$(document).ready(function() {
    (function(){
        var tabsHead = $('[data-tabhead]');
        var tabsBody = $('[data-tabcontent]');
        $(document).on('click', '[data-tabhead]', function() {
            var $this = $(this);
            if(!$this.hasClass('this-active')) {
                onTabActivate($this);
            }
        });

        function onTabActivate(curTrigger) {
            tabsHead.removeClass('this-active');
            curTrigger.addClass('this-active');

            // destroy slider in hidden tab
            var curSlider = $('.this-active-tab').find('.js-sp-slider');
            if(curSlider.length) {destroySlider(curSlider);}

            // activate slider in new active tab
            var newActiveTab = tabsBody.filter('[data-tabcontent="' + curTrigger.data('tabhead') + '"]');
            tabsBody.hide().removeClass('this-active-tab')
            newActiveTab.fadeIn(300).addClass('this-active-tab');
            var newSlider = newActiveTab.find('.js-sp-slider');
            if(newSlider.length) {activateSlider(newSlider);}


        }


        function activateSlider(slider) {
            slider.slick({
                adaptiveHeight: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: '<span class="slick-left"></span>',
                nextArrow: '<span class="slick-right"></span>',
                speed: 150,
                infinite: false,
                swipeToSlide: true,
                dots: false,
                edgeFriction: 0.1,
                responsive: [
                    {
                        breakpoint: 1400,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 700,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }
        function destroySlider(slider) {
            slider.slick('unslick');
        }

    })();


	

    $('[data-targetpopup]').click(function(e) {
        e.preventDefault();
        var target = $('.' + $(this).data('targetpopup'));
        target.bPopup({
            speed: 450,
            transition: 'fadeIn',
            closeClass: 'js-close-popup',
            positionStyle: 'absolute',
            follow: [true,false],
            modal: true,
            modalClose: true,
            modalColor: '#000000',
            opacity: 0.5
        });
    });
});