window.APP = window.APP || {};

$(function() {
  'use strict';
  // Global config
  APP.config = {
    breakpoint: {
      xsMax: '767',
      smMin: '768',
      smMax: '991',
      mdMin: '992',
      mdMax: '1199',
      lgMin: '1200',
      max: '3000'
    },
    animationSpeed: {
      slow: 600,
      moderate: 400,
      fast: 200
    }
    };


  APP.autoplayCheck.init();
  APP.homepageHero.init();
  APP.consoleErrors.init();
  //APP.cookiePolicy.init();
  APP.polyfills.init();
  APP.equalHeights.init();
  APP.gallery.init();
  APP.panorama.init();
  APP.newsletterValidation.init();
  APP.accordion.init();
  APP.responsiveVideo.init();
  APP.mobileAccordion.init();
  APP.listingGallery.init();
  APP.siteNavigation.init();
  APP.forms.init();
  APP.animations.init();
  APP.homepage.init();
  APP.socialShare.init();
  APP.modal.init();
  APP.responsiveTable.init();
  APP.scrollDown.init();
  APP.scrollbar.init('.js-site-menu');
  APP.scrollTop.init();
  APP.detectDevice.init();
    APP.siteWideBanner.init();

  if ($('#payment-form-page').length) {
    APP.paymentPage.init();
  }

  if ($('#restaurant-booking').length) {
    APP.restaurantBooking.init();
  }

  if ($('#room-booking').length) {
    APP.roomBooking.init();
  }

  if ($('#generic-listing').length) {
    APP.genericListing.init();
  }

  if ($('#video').length) {
    APP.video.init();
  }


  if ($('.box-out').length) {
    APP.boxOutContent.init();
  }

  // Vue Inits
  // if ($('#jobListing').length) {
  //   APP.jobListing.init();
  // }

  if ($('#articles').length) {
    APP.articleListing.init();
  }


  if ($('#looping-video').length) {
    APP.loopingVideo.init();
  }

  if ($('#app').length) {
    APP.roomCompare.init();
  }


  if( $('.room-pod-wrapper').length ) {
    APP.roomCompare.tempHeight();
  }

  if ($('#jobListing').length) {
    APP.jobListing.init();
    }

   
APP.bookingMenuTabs.init();
APP.availabilityChecker.init();
APP.carouselAccessibility.init();
APP.select2Accessibility.init();

  // object-fit polyfill for images
  objectFitImages('img.object-fit-cover');

  if ('ontouchstart' in window) {
    $(document).on('focus', 'textarea,input,select', function() {
      $('#btnScrollTop').css('position', 'absolute');
    }).on('blur', 'textarea,input,select', function() {
      $('#btnScrollTop').css('position', '');
    });
  }


  var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
  if (isIE11) {
    document.documentElement.classList.add('oldBrowser');
  }
  else {
    document.documentElement.classList.add('newBrowser');
  }

    $(document).ready(function () {
      //$('.site-logo').focus();
      setTimeout(function() {
          $('html').addClass('delayedLoad');
      }, 500);

      function setDocHeight() {
          $('.maybourne #hotel-menu').css('height', window.innerHeight - $('.booking-menu__header').outerHeight());
      };
      setDocHeight();
      addEventListener('resize', setDocHeight);
        addEventListener('orientationchange', setDocHeight);

        // event listener for keyup
        function checkTabPress(e) {
            "use strict";
            // pick passed event of global event object
            e = e || event;
            var activeElement;
            if (e.keyCode == 9) {
                // Here read the active selected link.
                activeElement = document.activeElement;
                // If HTML element is and anchor
                //if (activeElement.tagName.toLowerCase() == 'a')
                    // get it's hyperlink
            }
        }

        var body = document.querySelector('body');
        body.addEventListener('keyup', checkTabPress);

        

  });
});


APP.accordion = (function ($) {
  'use strict';

  var options = {
    accordionTrigger: '.js-accordion-trigger',
    accordionContent: '.js-accordion-content'
  };

  var init = function() {

    $(options.accordionTrigger).each(function(index) {

      // create IDs for the heading and content for each accordion item to associate each heading with its content
      var $this = $(this);
      var buttonID = 'heading-' + index;
      var contentID = 'accordion-' + index;

      // Add a button and span inside the <h2>
      $this.wrapInner('<button id="' + buttonID + '" class="accordion-panel__button" aria-expanded="false" aria-controls="'+ contentID +'"><span>');

      // wrap the accordion content and add ARIA attributes
      var $accordionContent = $this.next();

      $accordionContent.attr('ID', contentID);
      $accordionContent.attr('aria-labelledby', buttonID);
      $accordionContent.attr('aria-hidden', 'true');

      var $button = $this.find('button');

      // Make first item open on page load
      if( index === 0 ) {
        $button.attr('aria-expanded', true);
        $accordionContent.attr('aria-hidden', false);
        $button.addClass('is-active');
        $accordionContent.show();
      }

      $button.on('click', function() {

        // Open clicked item
        var state = $(this).attr('aria-expanded') === 'false' ? true : false;
        $(this).attr('aria-expanded', state);
        $accordionContent.attr('aria-hidden', !state);

        // add 'is-active' class to the button for styling purposes
        $(this).toggleClass('is-active');

        // show/hide the content
        $accordionContent.slideToggle();

      });

    });

  };

  return {
    init: init
  };

})(jQuery);
APP.animations = (function($) {
  'use strict';

  // Uses the revealing module pattern
  // All functions now have direct access to each other

  var init = function() {
    //Just to let us know that page loaded to start doing js stuff


    // if(!sessionStorage.getItem('loaded')) {
    //   document.documentElement.classList.add('page-loaded');
    //   sessionStorage.setItem('loaded' , 'sessionLoaded');
    // }

    // if(sessionStorage.getItem('loaded')) {
    //   $('body').addClass('page-loaded-again');
    // }

    enquire.register('screen and (min-width:' + APP.config.breakpoint.mdMin + 'px)', {
      match: function() {
        $(window).scroll(function() {

          if ($(this).scrollTop() > 100) {
            $(header).addClass('animated');
          } else {
            $(header).removeClass('animated');
          }

        });
      }
    });

    var waypoints = $('.animate').waypoint({
      handler: function(direction) {
        //console.log(this);
        if (direction === 'down') {
          $(this.element).addClass('animated');
        }

        //this.classList.add("anotherclass");
      },
      offset: '90%',
    });
  };



  // Return the object that is assigned to the module
  return {
    init: init
  };

})(jQuery);
APP.articleListing = (function ($) {
  'use strict';

  var init = function () {
    var articles = new Vue({

      el: '#articles',
      data: {
        pageType: null,
        currentPage: 1,
        pageSize: 9,
        totalPages: 0,
        totalArticles: 0,
        dateFilterKey: 'Month',
        categoryFilterKey: 'Tags',
        moreArticles: true,
        selectedArticles: [],
        selectedCategories: [],
        selectedDates: [],
        filterMonthOpen: false,
        filterCategoryOpen: false,
        maskVisible: null,
        dates: [],
        categories: [],
        documents: []
      },

      mounted: function () {

        this.getData();
      },

      updated: function () {
        this.ieWin7Fix();
      },

      //LOOK AT THE TAGS BEING PASSED THROUGH AND THE URL ITS CALLING

      methods: {

        getData: function () {
          var dataUrl = 'search';
          axios.get(dataUrl, {
              params: {
                page: this.currentPage,
                pagesize: this.pageSize,
                tags: this.selectedCategories.toString(),
                month: this.selectedDates.toString()
              },
            }).then(function (response) {
              if (articles.currentPage === 1) {
                articles.loadData(response);
                articles.showMore();
              }
              // if any further page, append new results
              else {
                articles.loadMore(response);
              }
            })
            .catch(function (error) {
              console.log(error);
            });

        },

        ieWin7Fix: function () {
          if ($('.post-list-item').length) {
            $('.last-pod').removeClass('last-pod');
            $('.pod-list-even').removeClass('pod-list-even');
            var postListItems = $('.post-list-item').length;
            var remainder = postListItems % 3;

            if (remainder === 2) {
              $('.post-list-item').last().addClass('last-pod');
            }

            if (remainder === 0) {
              $('.post-list-item:nth-last-child(2)').addClass('pod-list-even');
              $('.post-list-item:nth-last-child(3)').addClass('pod-list-even');
            }
          }
        },

        loadData: function (response) {
          articles.totalArticles = response.data.Total;
          articles.documents = response.data.Documents;

          for (var i = 0, len = response.data.Filters.length; i < len; i++) {
            //console.log(response.data.Filters[i].Key.toLowerCase())
            if (response.data.Filters[i].Key.toLowerCase() == this.categoryFilterKey.toLowerCase()) {
              articles.categories = response.data.Filters[i];
            }

            if (response.data.Filters[i].Key.toLowerCase() == this.dateFilterKey.toLowerCase()) {
              articles.dates = response.data.Filters[i];
            }
          }

          this.ieWin7Fix();
        },

        loadMore: function (response) {
          articles.documents.push.apply(articles.documents, response.data.Documents);
          articles.showMore();
        },

        showMore: function () {
          if (this.totalArticles === this.documents.length) {
            this.moreArticles = false;
          } else {
            this.moreArticles = true;
          }
        },

        nextPage: function () {
          this.currentPage++;
          this.getData();
        },

        getArticles: function ($event) {
          this.currentPage = 1;
          this.getData();
        },

        clearCategories: function () {
          this.selectedCategories = [];
          this.currentPage = 1;
          this.getData();
        },

        clearDates: function () {
          this.selectedDates = [];
          this.currentPage = 1;
          this.getData();
        },

        // closeAll: function($event) {
        //   this.toggleFilter($event);
        // },

        // <transition-group>
        // Sets initial state of each `pod`
        beforeEnterArticle: function (el, done) {
          el.style.opacity = 0;
        },

        // <transition-group>
        // On enter of pod, applies the following
        enterArticle: function (el, done) {
          var delay = el.dataset.index - (this.pageSize * (this.currentPage - 1)) * 300;
          setTimeout(function () {
            $(el).fadeTo(800, 1);
          }, delay)
        },

        // <transition-group>
        // On leave of pod
        leaveArticle: function (el, done) {
          $(el).remove();
        },

        toggleFilter: function ($event) {
          console.log($event);
          // toggle classes
          // $event.currentTarget.classList.toggle('dropdown-filter__open--open');
          // $event.currentTarget.nextElementSibling.classList.toggle('dropdown-filter__checkbox-wrapper--open');

          //toggle data
          if ($event.currentTarget.dataset.filterKey == this.dateFilterKey) {
            this.filterMonthOpen = !this.filterMonthOpen;
          }

          if ($event.currentTarget.dataset.filterKey == this.categoryFilterKey) {
            this.filterCategoryOpen = !this.filterCategoryOpen;
          }


          if (this.filterMonthOpen === true || this.filterCategoryOpen === true) {
            // console.log(this.filterMonthOpen);
            // console.log(this.filterCategoryOpen);

            this.maskVisible = true;
            console.log(this.maskVisible)
          } else {
            this.maskVisible = false;
            console.log(this.maskVisible)
          }

          //this.toggleMask();
        },

        closeFilters: function () {
          //different as this is the function to close both filters.
          console.log('maskVisible clicked')
          this.maskVisible = false;
          this.filterMonthOpen = false;
          this.filterCategoryOpen = false;
        },


        toggleMask: function () {
          //create mask


          enquire.register('screen and (min-width:' + APP.config.breakpoint.smMin + 'px)', {

            match: function () {

              if (articles.filterMonthOpen === true || articles.filterCategoryOpen === true) {
                articles.maskVisible = true;
                // if (document.getElementsByClassName('mask').length === 0) {
                //   mask.addEventListener('click', articles.closeAll, false);
                // }

              } else {
                articles.maskVisible = false;
                // mask = document.getElementsByClassName('mask')[0];
                // document.getElementsByClassName('main')[0].removeChild(mask);

              }
            }
          });
        },

        closeMobileFilter: function ($event) {
          $event.currentTarget.offsetParent.classList.remove('dropdown-filter__checkbox-wrapper--open');

          var ddBtn = document.getElementsByClassName('dropdown-filter__open');

          for (var i = 0, len = ddBtn.length; i < len; i++) {
            ddBtn[i].classList.remove('dropdown-filter__open--open');

          }
        }
      }
    });
  };

  return {
    init: init
  };

})(jQuery);
APP.autoplayCheck = (function($) {

  'use strict';

  var init = function() {
    //alert(this.options.autoplay)
    isAutoplaySupported();

  };

  // isAutoplaySupported(callback);
// Test if HTML5 video autoplay is supported
var isAutoplaySupported = function(callback) {
  // Is the callback a function?
  if (typeof callback !== 'function') {
    return false;
  }
  // Check if sessionStorage exist for autoplaySupported,
  // if so we don't need to check for support again
  if (!sessionStorage.autoplaySupported) {
    // Create video element to test autoplay
    var video = document.createElement('video');
    video.autoplay = true;
    video.src = 'data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDJtcDQxaXNvbWF2YzEAAATKbW9vdgAAAGxtdmhkAAAAANLEP5XSxD+VAAB1MAAAdU4AAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAACFpb2RzAAAAABCAgIAQAE////9//w6AgIAEAAAAAQAABDV0cmFrAAAAXHRraGQAAAAH0sQ/ldLEP5UAAAABAAAAAAAAdU4AAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAoAAAAFoAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAHVOAAAH0gABAAAAAAOtbWRpYQAAACBtZGhkAAAAANLEP5XSxD+VAAB1MAAAdU5VxAAAAAAANmhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABMLVNNQVNIIFZpZGVvIEhhbmRsZXIAAAADT21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAw9zdGJsAAAAwXN0c2QAAAAAAAAAAQAAALFhdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAoABaABIAAAASAAAAAAAAAABCkFWQyBDb2RpbmcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAAAOGF2Y0MBZAAf/+EAHGdkAB+s2UCgL/lwFqCgoKgAAB9IAAdTAHjBjLABAAVo6+yyLP34+AAAAAATY29scm5jbHgABQAFAAUAAAAAEHBhc3AAAAABAAAAAQAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAAQBjdHRzAAAAAAAAAB4AAAABAAAH0gAAAAEAABONAAAAAQAAB9IAAAABAAAAAAAAAAEAAAPpAAAAAQAAE40AAAABAAAH0gAAAAEAAAAAAAAAAQAAA+kAAAABAAATjQAAAAEAAAfSAAAAAQAAAAAAAAABAAAD6QAAAAEAABONAAAAAQAAB9IAAAABAAAAAAAAAAEAAAPpAAAAAQAAE40AAAABAAAH0gAAAAEAAAAAAAAAAQAAA+kAAAABAAATjQAAAAEAAAfSAAAAAQAAAAAAAAABAAAD6QAAAAEAABONAAAAAQAAB9IAAAABAAAAAAAAAAEAAAPpAAAAAQAAB9IAAAAUc3RzcwAAAAAAAAABAAAAAQAAACpzZHRwAAAAAKaWlpqalpaampaWmpqWlpqalpaampaWmpqWlpqalgAAABxzdHNjAAAAAAAAAAEAAAABAAAAHgAAAAEAAACMc3RzegAAAAAAAAAAAAAAHgAAA5YAAAAVAAAAEwAAABMAAAATAAAAGwAAABUAAAATAAAAEwAAABsAAAAVAAAAEwAAABMAAAAbAAAAFQAAABMAAAATAAAAGwAAABUAAAATAAAAEwAAABsAAAAVAAAAEwAAABMAAAAbAAAAFQAAABMAAAATAAAAGwAAABRzdGNvAAAAAAAAAAEAAAT6AAAAGHNncGQBAAAAcm9sbAAAAAIAAAAAAAAAHHNiZ3AAAAAAcm9sbAAAAAEAAAAeAAAAAAAAAAhmcmVlAAAGC21kYXQAAAMfBgX///8b3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMTEgNzU5OTIxMCAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTUgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0xIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDM6MHgxMTMgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTEgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz0xMSBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgc3RpdGNoYWJsZT0xIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PWluZmluaXRlIGtleWludF9taW49Mjkgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD00MCByYz0ycGFzcyBtYnRyZWU9MSBiaXRyYXRlPTExMiByYXRldG9sPTEuMCBxY29tcD0wLjYwIHFwbWluPTUgcXBtYXg9NjkgcXBzdGVwPTQgY3BseGJsdXI9MjAuMCBxYmx1cj0wLjUgdmJ2X21heHJhdGU9ODI1IHZidl9idWZzaXplPTkwMCBuYWxfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAG9liIQAFf/+963fgU3DKzVrulc4tMurlDQ9UfaUpni2SAAAAwAAAwAAD/DNvp9RFdeXpgAAAwB+ABHAWYLWHUFwGoHeKCOoUwgBAAADAAADAAADAAADAAAHgvugkks0lyOD2SZ76WaUEkznLgAAFFEAAAARQZokbEFf/rUqgAAAAwAAHVAAAAAPQZ5CeIK/AAADAAADAA6ZAAAADwGeYXRBXwAAAwAAAwAOmAAAAA8BnmNqQV8AAAMAAAMADpkAAAAXQZpoSahBaJlMCCv//rUqgAAAAwAAHVEAAAARQZ6GRREsFf8AAAMAAAMADpkAAAAPAZ6ldEFfAAADAAADAA6ZAAAADwGep2pBXwAAAwAAAwAOmAAAABdBmqxJqEFsmUwIK//+tSqAAAADAAAdUAAAABFBnspFFSwV/wAAAwAAAwAOmQAAAA8Bnul0QV8AAAMAAAMADpgAAAAPAZ7rakFfAAADAAADAA6YAAAAF0Ga8EmoQWyZTAgr//61KoAAAAMAAB1RAAAAEUGfDkUVLBX/AAADAAADAA6ZAAAADwGfLXRBXwAAAwAAAwAOmQAAAA8Bny9qQV8AAAMAAAMADpgAAAAXQZs0SahBbJlMCCv//rUqgAAAAwAAHVAAAAARQZ9SRRUsFf8AAAMAAAMADpkAAAAPAZ9xdEFfAAADAAADAA6YAAAADwGfc2pBXwAAAwAAAwAOmAAAABdBm3hJqEFsmUwIK//+tSqAAAADAAAdUQAAABFBn5ZFFSwV/wAAAwAAAwAOmAAAAA8Bn7V0QV8AAAMAAAMADpkAAAAPAZ+3akFfAAADAAADAA6ZAAAAF0GbvEmoQWyZTAgr//61KoAAAAMAAB1QAAAAEUGf2kUVLBX/AAADAAADAA6ZAAAADwGf+XRBXwAAAwAAAwAOmAAAAA8Bn/tqQV8AAAMAAAMADpkAAAAXQZv9SahBbJlMCCv//rUqgAAAAwAAHVE=';
    video.load();
    video.style.display = 'none';
    video.playing = false;
    video.play();
    // Check if video plays
    video.onplay = function() {
      this.playing = true;
    };
    // Video has loaded, check autoplay support
    video.oncanplay = function() {
      if (video.playing) {
        sessionStorage.autoplaySupported = 'true';
        callback(true);
      } else {
        sessionStorage.autoplaySupported = 'false';
        callback(false);
      }
    };
  } else {
    // We've already tested for support
    // use sessionStorage.autoplaySupported
    if (sessionStorage.autoplaySupported === 'true') {
      callback(true);
    } else {
      callback(false);
    }
  }
}



  // Return the object that is assigned to the module
  return {
    init: init,
    isAutoplaySupported: isAutoplaySupported
  };

})(jQuery);

APP.availabilityChecker = (function ($) {
    'use strict';

    var AVAILABILITY_CHECKER = '.availability-checker';

    var RESTAURANT_DROPDOWN_DATE = '.js-availability-checker-date';
    var RESTAURANT_DROPDOWN_SITTING = '.js-availability-checker-sitting';
    var RESTAURANT_DROPDOWN_GUESTS = '.js-availability-checker-guests';

    var MAKE_BOOKING_BTN = '.js-make-reservation';

    var DINING_EXCEEDED_FUTURE = 'dining-date-exceededFuture';

    var UNAVAILABLE_CALENDAR_HOVER = 'This date cannot be selected';
    var AVAILABLE_CALENDAR_HOVER = 'Choose this date';

    if (typeof window.availableDates === 'undefined') {
        window.availableDates = [true];
    }

    var startingDate = new Date();

    // Reset startingDate to first thing in the morning
    startingDate.setHours(0);
    startingDate.setMilliseconds(0);
    startingDate.setSeconds(0);
    startingDate.setMinutes(0);

    var endDate = new Date();

    // If the valid booking period has been set then update endDate to include that period
    if (typeof window.validBookingPeriod !== 'undefined' && window.validBookingPeriod !== null) {
        endDate.setDate(endDate.getDate() + parseInt(window.validBookingPeriod, 10));
    } else {
        endDate.setDate(endDate.getDate() + 90);
        window.validBookingPeriod = 90;
    }

    var init = function () {
        $(document).ready(function () {
            initialiseCalendars();
            initialiseDiningDropdowns();

            $('body').on('click', MAKE_BOOKING_BTN, onMakeBookingBtn);

            //$('#DesiredDate').on('focus', function (e) {
            //    e.preventDefault();
            //    e.stopPropagation();
            //    document.body.scrollTop = 0;
            //});
        });
    };

    function initialiseCalendars() {
        $(RESTAURANT_DROPDOWN_DATE).datepicker({
            dateFormat: 'dd/mm/yy',
            dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            minDate: startingDate,
            maxDate: endDate,
            firstDay: 1,
            beforeShow: function (input, inst) {
                inst.dpDiv.addClass('availability-checker-date themed-calendar');
            },
            beforeShowDay: checkDateInBounds,
            onChangeMonthYear: function (year, month, obj) {
                // Check if new month is 3 both existing
                setTimeout(function () {
                    if (month === (endDate.getMonth() + 1)) {
                        showValidBookingPeriodMessage(obj.dpDiv);
                    } else {
                        hideValidBookingPeriodMessage(obj.dpDiv);
                    }
                }, 100);
            }
        });

        //$('#mobileCalendar').datepicker({
        //    dateFormat: 'dd/mm/yy',
        //    dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        //    minDate: startingDate,
        //    maxDate: endDate,
        //    firstDay: 1,
        //    beforeShow: function (input, inst) {
        //        console.log(inst);
        //        inst.dpDiv.addClass('availability-checker-date themed-calendar');
        //    },
        //    beforeShowDay: checkDateInBounds,
        //    onChangeMonthYear: function (year, month, obj) {
        //        // Check if new month is 3 both existing
        //        setTimeout(function () {
        //            if (month === (endDate.getMonth() + 1)) {
        //                showValidBookingPeriodMessage(obj.dpDiv);
        //            } else {
        //                hideValidBookingPeriodMessage(obj.dpDiv);
        //            }
        //        }, 100);
        //    },
        //    onSelect: function (selectedDate) {
        //        var selectedDate = $('#mobileCalendar').datepicker('getDate');
        //        console.log(selectedDate);

        //        var strDate = prefixZeroDate(selectedDate.getDate()) + '/' + prefixZeroDate(selectedDate.getMonth() + 1)  + '/' + selectedDate.getFullYear();
        //        $('#DesiredDate').val(strDate);
        //    }
        //});

        // Remove currently selected date, feels a bit messy
        $(RESTAURANT_DROPDOWN_DATE).datepicker('setDate', null);
        $(RESTAURANT_DROPDOWN_DATE).find('a.ui-state-highlight.ui-state-active').removeClass('ui-state-highlight ui-state-active').parents('.ui-datepicker-current-day').removeClass('ui-datepicker-current-day');
    }


    function prefixZeroDate(val) {
        return (val < 10) ? "0" + val : val;
    }

    function initialiseDiningDropdowns() {
        $(RESTAURANT_DROPDOWN_SITTING).select2({
            dropdownParent: $('body'),
            minimumResultsForSearch: -1,
            allowClear: false,
            placeholder: 'Your sitting'
        });

        $(RESTAURANT_DROPDOWN_GUESTS).select2({
            dropdownParent: $('body'),
            minimumResultsForSearch: -1,
            allowClear: false,
            placeholder: 'Number of guests'
        });
    }

    function onMakeBookingBtn(e) {
        e.preventDefault();

        // Calculate size of header so we can avoid scrolling over it
        var headerOffset = 0;

        if ($('.site-wide-banner').length > 0) headerOffset += $('.site-wide-banner').height();
        if ($('header.header').length > 0) headerOffset += $('header.header').height();

        if ($('.availability-checker').length > 0) {
            $('html, body').animate({
                scrollTop: ($('.availability-checker').offset().top - headerOffset)
            }, 800);
        }
    }

    function showValidBookingPeriodMessage($elem) {
        $elem.find('.ui-datepicker-header:last').addClass(DINING_EXCEEDED_FUTURE).attr('data-validBookingPeriod', "Availability is limited to " + window.validBookingPeriod + " days in advance");
    }

    function hideValidBookingPeriodMessage($elem) {
        $elem.find('.ui-datepicker-header:last').removeClass(DINING_EXCEEDED_FUTURE);
    }

    function checkDateInBounds(date) {       
        if (date >= startingDate && date < endDate) {
            return [true, "", AVAILABLE_CALENDAR_HOVER];
        } else {
            return [false, "", UNAVAILABLE_CALENDAR_HOVER];
        }
    }

    return {
        init: init
    };

})(jQuery);

APP.bookingMenuTabs = (function ($) {
    'use strict';

    var BOOKING_MENU = '.booking-menu';
    var TAB_LINK = '.booking-menu-tabs__link';
    var TAB_BODY = '.booking-menu-tabs__body';
    var ACTIVE_CLASS = 'is-active';
    var ACTIVE_SELECTOR = '.is-active';
    var AVAILABILITY_BTN = '.js-check-availability';
    var DISABLED_BTN_CLASS = 'js-disabled';

    var RESTAURANT_DROPDOWN_RESTAURANT = '.js-restaurant-booking-restaurant';
    var RESTAURANT_DROPDOWN_SITTING = '.js-restaurant-booking-sitting';
    var RESTAURANT_DROPDOWN_GUESTS = '.js-restaurant-booking-guests';
    var RESTAURANT_CHECK_AVAILABILIY = '.js-check-availability';

    var RESTAURANT_DATA_ENDPOINT = '/RestaurantBookingHeaderChecker/GetRestaurantData';
    var RESTAURANT_SUBMIT_URL = '/RestaurantBookingHeaderChecker/SubmitForm';

    var RESTAURANT_SIMPLECHECKER_BOOKABLE_DATES_ENDPOINT = '/RestaurantBookingSimpleChecker/GetBookableDates';

    var DINING_EXCEEDED_FUTURE = 'dining-date-exceededFuture';

    var UNAVAILABLE_CALENDAR_HOVER = 'This date cannot be selected';
    var AVAILABLE_CALENDAR_HOVER = 'Choose this date';

    var isDateSelected = false;

    var startingDate = new Date();
    var endDate = new Date();

    if (typeof window.validBookingPeriod !== 'undefined' && window.validBookingPeriod !== null) {
        endDate.setDate(endDate.getDate() + parseInt(window.validBookingPeriod, 10));
    } else {
        endDate.setDate(endDate.getDate() + 90);
        window.validBookingPeriod = 90; 
    }

    var init = function () {
        $(document).ready(function () {
            $('body').on('click', TAB_LINK, onBookingTabClick);
            $('body').on('click', RESTAURANT_CHECK_AVAILABILIY, onCheckAvailability);

            initialiseCalendars();
            initialiseDiningDropdowns();

            checkForDefaultBookingTab();

            checkForSimpleChecker();

            $(TAB_LINK).matchHeight();
        });
    };

    function checkForDefaultBookingTab() {
        if (typeof window.bookingMenuSelectedTab !== 'undefined') {
            showTab(window.bookingMenuSelectedTab);
        }
    }

    if (typeof window.availableDates === 'undefined') {
        window.availableDates = [true];
    }

    // To check availability we run an ajax method to return available dates
    // Update the window.availableDates array with the new dates
    // Refresh the calendar - $('#dining-date').datepicker('refresh');

    function initialiseCalendars() {

        $('#dining-date').datepicker({
            dateFormat: 'dd/mm/yy',
            dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            minDate: startingDate,
            maxDate: endDate,
            firstDay: 1,
            beforeShowDay: checkAvailableDates, // Comment to not filter dates,
            onSelect: function (selectedDate) {
                isDateSelected = true;
                checkForValidateBooking();
                console.log(selectedDate)
                var splitDate = selectedDate.split('/');
                var formattedDate = splitDate[1] + '/' + splitDate[0] + '/' + splitDate[2];
                APP.calendarAccessibility.createStatusMessage(formattedDate, null, 'diningreservation-booking__status-message', $('#dining-date').parent());
                setTimeout(function () {
                    APP.calendarAccessibility.initDateAttributes('dining-date');
                }, 50);
            },
            onChangeMonthYear: function (year, month, obj) {
                checkCalendarBounds(year, month, obj);
                setTimeout(function () {
                    APP.calendarAccessibility.initDateAttributes('dining-date');
                    APP.calendarAccessibility.setTabIndexes('dining-date');
                }, 10);
            }
        });

        // Remove currently selected date, feels a bit messy
        $('#dining-date').datepicker('setDate', null);
        $('#dining-date').find('a.ui-state-highlight.ui-state-active').removeClass('ui-state-highlight ui-state-active').parents('.ui-datepicker-current-day').removeClass('ui-datepicker-current-day');
        APP.calendarAccessibility.initPresentationMode('dining-date');
        APP.calendarAccessibility.initDateAttributes('dining-date');
        APP.calendarAccessibility.initKeyboardNavigation('dining-date'); 
    }


    function getCalendarAmountToShow() {
        return (window.innerWidth > 1200) ? 2 : 1;
    }

    function checkCalendarBounds(year, month, obj) {
        // Check to see whether the new date on the calendar is far in the future, if so show warning message
        // Timeout is to allow month to have updated in time
        setTimeout(function () {
            if (year === endDate.getFullYear() && month === endDate.getMonth() + 1) {
                showValidBookingPeriodMessage(obj.dpDiv);
            } else {
                hideValidBookingPeriodMessage(obj.dpDiv);
            }
        }, 100);
    } 

    function initialiseDiningDropdowns() {
        $(RESTAURANT_DROPDOWN_RESTAURANT).select2({
            dropdownParent: $('.booking-menu-tabs__content'),
            minimumResultsForSearch: -1,
            allowClear: false,
            placeholder: 'Choose a restaurant'
        });

        $(RESTAURANT_DROPDOWN_SITTING).select2({
            dropdownParent: $('.booking-menu-tabs__content'),
            minimumResultsForSearch: -1,
            allowClear: true,
            placeholder: 'Your sitting'
        });

        $(RESTAURANT_DROPDOWN_GUESTS).select2({
            dropdownParent: $('.booking-menu-tabs__content'),
            minimumResultsForSearch: -1,
            allowClear: true,
            placeholder: 'Number of guests'
        });

        $(RESTAURANT_DROPDOWN_RESTAURANT).on('select2:select', function (e) {
            var data = e.params.data;

            if (data) {
                populatesittingOptions(data.id);
                checkForValidateBooking();
            }
        });

        $(RESTAURANT_DROPDOWN_SITTING).on('select2:select', function (e) {
            checkForValidateBooking();
        });

        $(RESTAURANT_DROPDOWN_GUESTS).on('select2:select', function (e) {
            checkForValidateBooking();
        });

        // Check for prepopulated restaurant dropdown
        var restaurantSelection = $(RESTAURANT_DROPDOWN_RESTAURANT).val();
        if (typeof restaurantSelection !== 'undefined' && restaurantSelection !== '') {
            populatesittingOptions(restaurantSelection);
            checkForValidateBooking();
        }
    }

    function checkForValidateBooking() {
        // Get all selects for checker
        var errors = false;

        if (isDateSelected === false) {
            errors = true;
        } else {
            var $selects = $('.headerChecker select');

            // Loop through all selects and see if any are empty values, if so return out
            $selects.each(function () {
                var val = $(this).val();
                if (typeof val === 'undefined' || val === '') {
                    errors = true;
                    return false;
                }
            });
        }

        if (errors) {
            $(AVAILABILITY_BTN).addClass(DISABLED_BTN_CLASS).attr('disabled', true);
        } else {
            $(AVAILABILITY_BTN).removeClass(DISABLED_BTN_CLASS).removeAttr('disabled');
        }
    }

    function showValidBookingPeriodMessage($elem) {
        $elem.find('.ui-datepicker-header:last').addClass(DINING_EXCEEDED_FUTURE).attr('data-validBookingPeriod', "Availability is limited to " + window.validBookingPeriod + " days in advance");
    }

    function hideValidBookingPeriodMessage($elem) {
        $elem.find('.ui-datepicker-header:last').removeClass(DINING_EXCEEDED_FUTURE);
    }

    function populatesittingOptions(restaurantID) {
        var dataParam = {
            'SelectedRestaurant': restaurantID
        };


        $.ajax({
            type: 'POST',
            url: RESTAURANT_DATA_ENDPOINT,
            data: JSON.stringify(dataParam),
            dataType: 'json',
            contentType: 'application/json charset=utf-8',
            async: true,
            error: function (xhr, text, err) {
                console.error(xhr, text, err);
            },
            success: function (data, status, xhr) {
                parseRestaurantData(data);
            }
        });
    }

    function parseRestaurantData(data) {
        // Clear existing dropdowns
        $(RESTAURANT_DROPDOWN_SITTING).empty().trigger('change');
        $(RESTAURANT_DROPDOWN_GUESTS).empty().trigger('change');

        // Add sitting options
        for (var item in data.SittingOptions) {
            var opt = new Option(data.SittingOptions[item].Text, data.SittingOptions[item].Value, data.SittingOptions[item].Selected, data.SittingOptions[item].Selected);
            $(RESTAURANT_DROPDOWN_SITTING).append(opt);
        }
        $(RESTAURANT_DROPDOWN_SITTING).prop('disabled', false).trigger('change');

        if (data.SittingOptions.length === 0) {
            $(RESTAURANT_DROPDOWN_SITTING).next(".select2-container").hide();
            window.preselectedSitting = data.SelectedSitting;
        } else {
            $(RESTAURANT_DROPDOWN_SITTING).next(".select2-container").show();
        }


        // Updating Guests
        for (var item in data.GuestOptions) {
            var opt = new Option(data.GuestOptions[item].Text, data.GuestOptions[item].Value, data.GuestOptions[item].Selected, data.GuestOptions[item].Selected);
            $(RESTAURANT_DROPDOWN_GUESTS).append(opt);
        }
        $(RESTAURANT_DROPDOWN_GUESTS).prop('disabled', false).trigger('change');

        // Update booking dates
        if (typeof data.BookableDates === 'undefined') {
            //console.error('No bookable dates returned');
        } else {
            window.availableDates = data.BookableDates;
            $('#dining-date').datepicker('refresh');

            // Remove currently selected date, feels a bit messy
            $('#dining-date').datepicker('setDate', null);
            $('#dining-date').find('a.ui-state-highlight.ui-state-active').removeClass('ui-state-highlight ui-state-active').parents('.ui-datepicker-current-day').removeClass('ui-datepicker-current-day');
            isDateSelected = false;
        }

        // Display additional text
        $('.js-additionaltext').html();
        var additionalMarkup = '';

        if (typeof data.MaximumTableSizeText !== 'undefined' && data.MaximumTableSizeText !== null) additionalMarkup += data.MaximumTableSizeText;
        if (typeof data.PrivateDiningText !== 'undefined' && data.PrivateDiningText !== null) additionalMarkup += data.PrivateDiningText;

        if (additionalMarkup !== '') {
            $('.js-additionaltext').html(additionalMarkup);
        }

        // Update Valid Booking Period
        if (typeof data.ValidBookingPeriod !== 'undefined') {
            window.validBookingPeriod = data.ValidBookingPeriod;
            endDate = new Date();
            endDate.setDate(endDate.getDate() + parseInt(window.validBookingPeriod, 10));
            $('#dining-date').datepicker('option', 'maxDate', endDate);
            $('#dining-date').datepicker('refresh');

            // Remove currently selected date, feels a bit messy
            $('#dining-date').datepicker('setDate', null);
            $('#dining-date').find('a.ui-state-highlight.ui-state-active').removeClass('ui-state-highlight ui-state-active').parents('.ui-datepicker-current-day').removeClass('ui-datepicker-current-day');
            isDateSelected = false;
        }

        checkForValidateBooking();
    }

    function onCheckAvailability() {
        var restaurant = $(RESTAURANT_DROPDOWN_RESTAURANT).find(':selected').val();
        var sitting = $(RESTAURANT_DROPDOWN_SITTING).find(':selected').val();
        var guests = $(RESTAURANT_DROPDOWN_GUESTS).find(':selected').val();
        var date = $('#dining-date').datepicker('getDate');

        if (typeof sitting === 'undefined') {
            sitting = window.preselectedSitting;
        }

        var formatedDate = new Date(date);
        var strDate = formatedDate.getFullYear() + '-' + (formatedDate.getMonth() + 1) + '-' + formatedDate.getDate();

        window.location = RESTAURANT_SUBMIT_URL + '?SelectedRestaurant=' + restaurant + '&SelectedSitting=' + sitting + '&SelectedGuests=' + guests + '&SelectedDate=' + strDate;
    }

    function checkForSimpleChecker() {
        if ($('#availability_checker_form').length > 0) {
            getBookableDates($('#availability_checker_form #DesiredDate'));
        }
    }

    function getBookableDates($calendarElem) {
        $.ajax({
            type: 'POST',
            url: RESTAURANT_SIMPLECHECKER_BOOKABLE_DATES_ENDPOINT,
            dataType: 'json',
            contentType: 'application/json charset=utf-8',
            async: true,
            error: function (xhr, text, err) {
                console.error(xhr, text, err);
            },
            success: function (data, status, xhr) {
                if (typeof data.BookableDates == 'undefined') {
                    //console.error('No bookable dates returned');
                } else {
                    window.availableDates = data.BookableDates;
                    $calendarElem.datepicker('refresh');
                }
            }
        });
    }

    function checkAvailableDates(date) {
        if (availableDates[0] === true) { // If the first item is true show all dates
            return [true, "", AVAILABLE_CALENDAR_HOVER];
        } else if (availableDates[0] === false) {
            return [false, "", UNAVAILABLE_CALENDAR_HOVER];
        }

        var dmy = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
        if ($.inArray(dmy, availableDates) != -1) {
            return [true, "", AVAILABLE_CALENDAR_HOVER];
        } else {
            return [false, "", UNAVAILABLE_CALENDAR_HOVER];
        }
    }

    function onBookingTabClick(e) {
        e.preventDefault();

        var ind = $(this).index();
        showTab(ind);
    }

    var showTab = function (index) {
        // Remove active classes
        $(TAB_LINK + ACTIVE_SELECTOR).removeClass(ACTIVE_CLASS).attr('aria-expanded', 'false');
        $(TAB_BODY + ACTIVE_SELECTOR).removeClass(ACTIVE_CLASS);

        // Show single active tab
        $(TAB_LINK).eq(index).addClass(ACTIVE_CLASS).attr('aria-expanded', 'true');
        $(TAB_BODY).eq(index).addClass(ACTIVE_CLASS);
    }

    return {
        init: init,
        showTab: showTab
    };

})(jQuery);

APP.calendarAccessibility = (function ($) {
    'use strict';


    /**
     * Insert the presentational aria attribute to the calendar
     * @param {any} calendarID - calendar ID 
     */
    function initPresentationMode(calendarID) {
        $('#' + calendarID).find('.ui-datepicker-calendar').attr('role', 'presentation');
    }

    /**
     * Creates status message and updates the DOM
     * @param {string} startDate - start date
     * @param {string} endDate - end date
     * @param {string} messageId - ID assigned to the status message
     * @param {HTMLElement} appendTo - element to which to append the status message
     */
    function createStatusMessage(startDate, endDate, messageId, $appendTo) {
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        var start = new Date(startDate);
        var end = new Date(endDate);
        console.log(start);
        var statusMessage = "";
        var startDateFormatted = days[start.getDay()] + ' ' + start.getDate() + getSuffix(start.getDate()) + ' ' + months[start.getMonth()];

        if (endDate == null) {
            statusMessage = "Date selected, " + startDateFormatted;
        } else {
            var endDateFormatted = days[end.getDay()] + ' ' + end.getDate() + getSuffix(end.getDate()) + ' ' + months[end.getMonth()];
            var dateDifference = Math.ceil(Math.abs(end - start) / (1000 * 3600 * 24));

            var dateDifferenceSuffix = (dateDifference == 1) ? 'night' : 'nights';

            statusMessage = dateDifference + ' ' + dateDifferenceSuffix + ' selected, from ' + startDateFormatted + ' to ' + endDateFormatted + ' ' + end.getFullYear();
        }

        var statusMessageElement = $('#' + messageId);

        statusMessageElement.text(statusMessage);

        function getSuffix(day) {
            var daySuffix = "";

            switch (day) {
                case "1":
                    daySuffix = "st";
                    break;
                case "2":
                    daySuffix = "nd";
                    break;
                case "3":
                    daySuffix = "rd";
                    break;
                default:
                    daySuffix = "th";
                    break;
            }

            return daySuffix;
        }
    }

    function setTabIndexes(datePickerId) {

        var prev = $('#' + datePickerId + ' .ui-datepicker-prev'),
            next = $('#' + datePickerId + ' .ui-datepicker-next');

        next.attr('tabindex', '0');
        prev.attr('tabindex', '0');
    }

    /**
     * Initializes accessible calendar day links
     * @param {any} calendarId - calendar ID
     */
    function initDateAttributes(calendarId) {
        $('#' + calendarId + ' .ui-datepicker-calendar tbody td:has(a)').each(function (index) {
            var $link = $(this).find('a');

            var year = $(this).attr('data-year');
            var month = $(this).attr('data-month');
            var day = $link.text();

            var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

            var daySuffix = "";

            switch (day) {
                case "1":
                    daySuffix = "st";
                    break;
                case "2":
                    daySuffix = "nd";
                    break;
                case "3":
                    daySuffix = "rd";
                    break;
                default:
                    daySuffix = "th";
                    break;
            }

            var linkDate = new Date(+year, +month, +day);

            var linkDateFormatted = days[linkDate.getDay()] + ' ' + day + daySuffix + ' ' + months[linkDate.getMonth()];

            $link.attr('role', 'button');
            $link.attr('aria-pressed', false);
            $link.attr('aria-label', linkDateFormatted);
            //$link.attr('tabindex', '-1');

        });

        $('.ui-state-active').attr('aria-pressed', true);
        $('.ui-individual-date > a').attr('aria-pressed', true);
    }

    function initKeyboardNavigation(id) {
        var container = document.getElementById(id);
        var datepickerId = id;
        var isMultiColumn = $(container).find('.ui-datepicker-group').length > 0;

        initArrowNavigation();

        function initArrowNavigation() {
            // the top controls:
            var prev = $('.ui-datepicker-prev', container)[0],
                next = $('.ui-datepicker-next', container)[0];
            
            setTabIndexes(datepickerId);

            $('#' + datepickerId).on('keydown', function calendarKeyboardListener(keyVent) {
                var which = keyVent.which;
                var target = keyVent.target;
                var dateCurrent = getCurrentDate('#' + datepickerId);


                if (!dateCurrent) {
                    dateCurrent = $('a.ui-state-default')[0];
                    setHighlightState(dateCurrent, container);
                }

                if (27 === which) {
                    keyVent.stopPropagation();
                    return closeCalendar();
                } else if (which === 9 && keyVent.shiftKey) { // SHIFT + TAB
                    //keyVent.preventDefault();
                    //if ($(target).hasClass('ui-datepicker-close')) { // close button
                    //    $('.ui-datepicker-prev')[0].focus();
                    //} else if ($(target).hasClass('ui-state-default')) { // a date link
                    //    $('.ui-datepicker-close')[0].focus();
                    //} else if ($(target).hasClass('ui-datepicker-prev')) { // the prev link
                    //    $('.ui-datepicker-next')[0].focus();
                    //} else if ($(target).hasClass('ui-datepicker-next')) { // the next link
                    //    activeDate = $('.ui-state-highlight') ||
                    //        $('.ui-state-active')[0];
                    //    if (activeDate) {
                    //        activeDate.focus();
                    //    }
                    //}
                } else if (which === 9) { // TAB
                    //keyVent.stopPropagation();
                    //keyVent.preventDefault();
                    //setTimeout(function () {
                    //    $('.ui-datepicker-next').focus();
                    //    console.log("TEST TAB", $(target));
                    //}, 50);

                    //if ($(target).is(":focus") && ($(target).hasClass("ui-datepicker-next") || $(target).hasClass("ui-datepicker-prev"))) {
                    //    $('.ui-datepicker-next').focus();
                    //}

                    //if ($(target).hasClass('ui-datepicker-close')) { // close button
                    //    activeDate = $('.ui-state-highlight') ||
                    //        $('.ui-state-active')[0];
                    //    if (activeDate) {
                    //        activeDate.focus();
                    //    }
                    //} else if ($(target).hasClass('ui-state-default')) {
                    //    $('.ui-datepicker-next', container)[0].focus();
                    //} else if ($(target).hasClass('ui-datepicker-next')) {
                    //    $('.ui-datepicker-prev', container)[0].focus();
                    //} else if ($(target).hasClass('ui-datepicker-prev')) {
                    //    $('.ui-datepicker-close', container)[0].focus();
                    //}
                } else if (which === 37) { // LEFT arrow key
                    // if we're on a date link...
                    if (!$(target).hasClass('ui-datepicker-close') && $(target).hasClass('ui-state-default')) {
                        keyVent.preventDefault();
                        previousDay(target);
                    }
                } else if (which === 39) { // RIGHT arrow key
                    // if we're on a date link...
                    if (!$(target).hasClass('ui-datepicker-close') && $(target).hasClass('ui-state-default')) {
                        keyVent.preventDefault();
                        nextDay(target);
                    }
                } else if (which === 38) { // UP arrow key
                    if (!$(target).hasClass('ui-datepicker-close') && $(target).hasClass('ui-state-default')) {
                        keyVent.preventDefault();
                        upHandler(target, container, prev);
                    }
                } else if (which === 40) { // DOWN arrow key
                    if (!$(target).hasClass('ui-datepicker-close') && $(target).hasClass('ui-state-default')) {
                        keyVent.preventDefault();
                        downHandler(target, container, next);
                    }
                } else if (which === 13) { // ENTER
                    if ($(target).hasClass('ui-state-default')) {
                        setTimeout(function () {
                            console.log('Target item', $(target));
                            $('#' + datepickerId + ' .ui-state-active').focus();
                        }, 50);
                    } else if ($(target).hasClass('ui-datepicker-prev')) {
                        handlePrevClicks();
                    } else if ($(target).hasClass('ui-datepicker-next')) {
                        handleNextClicks();
                    }
                } else if (32 === which) {
                    if ($(target).hasClass('ui-datepicker-prev') || $(target).hasClass('ui-datepicker-next')) {
                        target.click();
                    }
                } else if (33 === which) { // PAGE UP
                    console.log('test');
                    moveOneMonth(target, 'prev');
                } else if (34 === which) { // PAGE DOWN
                    moveOneMonth(target, 'next');
                } else if (36 === which) { // HOME
                    var firstOfMonth = $(target).closest('tbody').find('.ui-state-default')[0];
                    if (firstOfMonth) {
                        firstOfMonth.focus();
                        setHighlightState(firstOfMonth, $('#' + datepickerId)[0]);
                    }
                } else if (35 === which) { // END
                    var $daysOfMonth = $(target).closest('tbody').find('.ui-state-default');
                    var lastDay = $daysOfMonth[$daysOfMonth.length - 1];
                    if (lastDay) {
                        lastDay.focus();
                        setHighlightState(lastDay, $('#' + datepickerId)[0]);
                    }
                }
                //$(".ui-datepicker-current").hide();
            });

        }

        function closeCalendar() {
            var container = $('#' + datepickerId);
            $(container).off('keydown');
            var input = $('#' + datepickerId)[0];
            $(input).datepicker('hide');

            input.focus();
        }

        ///////////////////////////////
        //////////////////////////// //
        ///////////////////////// // //
        // UTILITY-LIKE THINGS // // //
        ///////////////////////// // //
        //////////////////////////// //
        ///////////////////////////////

        function moveOneMonth(currentDate, dir) {
            var button = (dir === 'next')
                ? $('.ui-datepicker-next', container)[0]
                : $('.ui-datepicker-prev', container)[0];

            if (!button) {
                return;
            }
            
            var ENABLED_SELECTOR = '#' + datepickerId + ' tbody td:not(.ui-state-disabled)';
            var $currentCells = $(ENABLED_SELECTOR);
            var currentIdx = $.inArray(currentDate.parentNode, $currentCells);

            button.click();
            setTimeout(function () {
                updateHeaderElements();

                var $newCells = $(ENABLED_SELECTOR);
                var newTd = $newCells[currentIdx];
                var newAnchor = newTd && $(newTd).find('a')[0];

                while (!newAnchor) {
                    currentIdx--;
                    newTd = $newCells[currentIdx];
                    newAnchor = newTd && $(newTd).find('a')[0];
                }

                setHighlightState(newAnchor, $('#' + datepickerId)[0]);
                newAnchor.focus();

            }, 0);

        }

        function handleNextClicks() {
            setTimeout(function () {
                updateHeaderElements();
                prepHighlightState();
                $('.ui-datepicker-next').focus();
                $(".ui-datepicker-current").hide();
            }, 0);
        }

        function handlePrevClicks() {
            setTimeout(function () {
                updateHeaderElements();
                prepHighlightState();
                $('.ui-datepicker-prev').focus();
                $(".ui-datepicker-current").hide();
            }, 0);
        }

        function previousDay(dateLink) {
            var container = document.getElementById(datepickerId);
            if (!dateLink) {
                return;
            }
            var td = $(dateLink).closest('td');
            if (!td) {
                return;
            }

            var prevTd = $(td).prev(),
                prevDateLink = $('a.ui-state-default', prevTd)[0];
           
            if (prevTd && prevDateLink) {
                setHighlightState(prevDateLink, container);
                prevDateLink.focus();
            } else {
                handlePrevious(dateLink);
            }
        }

        function handlePrevious(target) {
            var container = document.getElementById(datepickerId);
            if (!target) {
                return;
            }
            var currentRow = $(target).closest('tr');
            if (!currentRow) {
                return;
            }
            var previousRow = $(currentRow).prev();

            var isFirstCol = currentRow.parents('.ui-datepicker-group').hasClass('ui-datepicker-group-first');

            var filteredPrevRowCount = previousRow.find('td').filter(':not(.ui-datepicker-unselectable)').length;

            if (!previousRow || previousRow.length === 0 || filteredPrevRowCount === 0) {
              
                // there is not previous row, so we go to previous month...
                if (isFirstCol || !isMultiColumn) {
                    previousMonth();
                } else {
                    var trs = $('.ui-datepicker-group-first tr', container),
                        lastRowTdLinks = $('td a.ui-state-default', trs[trs.length - 1]),
                        lastDate = lastRowTdLinks[lastRowTdLinks.length - 1];

                    setHighlightState(lastDate, container);
                    lastDate.focus();
                }
            } else {
                var prevRowDates = $('td a.ui-state-default', previousRow);
                var prevRowDate = prevRowDates[prevRowDates.length - 1];

                if (prevRowDate) {
                    setTimeout(function () {
                        setHighlightState(prevRowDate, container);
                        prevRowDate.focus();
                    }, 0);
                }
            }
        }

        function previousMonth() {
            var prevLink = $('#' + datepickerId + ' .ui-datepicker-prev')[0];

            if (!$(prevLink).hasClass('ui-state-disabled')) {
                var container = document.getElementById(datepickerId);
                prevLink.click();
                // focus last day of new month
                setTimeout(function () {
                    var dates;

                    if (isMultiColumn) {
                        dates = $('.ui-datepicker-group-last td:not(.ui-datepicker-unselectable)')
                    } else {
                        dates = $('#' + datepickerId + ' td:not(.ui-datepicker-unselectable)')
                    }

                    var lastDate = $(dates[dates.length - 1]).find('a');
                   
                    // updating the cached header elements
                    updateHeaderElements();

                    setHighlightState(lastDate, container);
                    lastDate.focus();

                }, 0);
            }

        }

        ///////////////// NEXT /////////////////
        /**
         * Handles right arrow key navigation
         * @param  {HTMLElement} dateLink The target of the keyboard event
         */
        function nextDay(dateLink) {
            var container = document.getElementById(datepickerId);
            if (!dateLink) {
                return;
            }
            var td = $(dateLink).closest('td');
            if (!td) {
                return;
            }
            var nextTd = $(td).next(),
                nextDateLink = $('a.ui-state-default', nextTd)[0];

            if (nextTd && nextDateLink) {
                setHighlightState(nextDateLink, container);
                nextDateLink.focus(); // the next day (same row)
            } else {
                handleNext(dateLink);
            }
        }

        function handleNext(target) {
            var container = document.getElementById(datepickerId);
            if (!target) {
                return;
            }
            var currentRow = $(target).closest('tr'),
                nextRow = $(currentRow).next();

            var isFirstCol = currentRow.parents('.ui-datepicker-group').hasClass('ui-datepicker-group-first');

            var filteredNextRowCount = nextRow.find('td').filter(':not(.ui-datepicker-unselectable)').length;
            console.log(isMultiColumn);
            if (!nextRow || nextRow.length === 0 || filteredNextRowCount === 0) {
                if (!isFirstCol || !isMultiColumn) {
                    nextMonth();
                } else {
                    var firstDate = $('.ui-datepicker-group-last a.ui-state-default', container)[0];
                    console.log('FIRST DATE', firstDate);
                    setHighlightState(firstDate, container);
                    firstDate.focus();
                }
            } else {
                var nextRowFirstDate = $('a.ui-state-default', nextRow)[0];
                if (nextRowFirstDate) {
                    setHighlightState(nextRowFirstDate, container);
                    nextRowFirstDate.focus();
                }
            }
        }

        function nextMonth() {
            var nextMon = $('#' + datepickerId + ' .ui-datepicker-next')[0];
            var container = document.getElementById(datepickerId);

            nextMon.click();

            // focus the first day of the new month
            setTimeout(function () {
                // updating the cached header elements
                updateHeaderElements();
                nextMon.click();
                var firstDate = $('a.ui-state-default', container)[0];


                setHighlightState(firstDate, container);
                firstDate.focus();
            }, 0);
        }

        /////////// UP ///////////
        /**
         * Handle the up arrow navigation through dates
         * @param  {HTMLElement} target   The target of the keyboard event (day)
         * @param  {HTMLElement} cont     The calendar container
         * @param  {HTMLElement} prevLink Link to navigate to previous month
         */
        function upHandler(target, cont, prevLink) {
            prevLink = $('.ui-datepicker-prev', container)[0];
            var rowContext = $(target).closest('tr');
            if (!rowContext) {
                return;
            }
            var rowTds = $('td', rowContext),
                rowLinks = $('a.ui-state-default', rowContext),
                targetIndex = $.inArray(target, rowLinks),
                prevRow = $(rowContext).prev(),
                prevRowTds = $('td', prevRow),
                parallel = prevRowTds[targetIndex],
                linkCheck = $('a.ui-state-default', parallel)[0];

            if (prevRow && parallel && linkCheck) {
                // there is a previous row, a td at the same index
                // of the target AND theres a link in that td
                setHighlightState(linkCheck, cont);
                linkCheck.focus();
            } else {
                // we're either on the first row of a month, or we're on the
                // second and there is not a date link directly above the target
                prevLink.click();
                setTimeout(function () {
                    // updating the cached header elements
                    updateHeaderElements();
                    var newRows = $('tr', cont),
                        lastRow = newRows[newRows.length - 1],
                        lastRowTds = $('td', lastRow),
                        tdParallelIndex = $.inArray(target.parentNode, rowTds),
                        newParallel = lastRowTds[tdParallelIndex],
                        newCheck = $('a.ui-state-default', newParallel)[0];

                    if (lastRow && newParallel && newCheck) {
                        setHighlightState(newCheck, cont);
                        newCheck.focus();
                    } else {
                        // theres no date link on the last week (row) of the new month
                        // meaning its an empty cell, so we'll try the 2nd to last week
                        var secondLastRow = newRows[newRows.length - 2],
                            secondTds = $('td', secondLastRow),
                            targetTd = secondTds[tdParallelIndex],
                            linkCheck = $('a.ui-state-default', targetTd)[0];

                        if (linkCheck) {
                            setHighlightState(linkCheck, cont);
                            linkCheck.focus();
                        }

                    }
                }, 0);
            }
        }

        //////////////// DOWN ////////////////
        /**
         * Handles down arrow navigation through dates in calendar
         * @param  {HTMLElement} target   The target of the keyboard event (day)
         * @param  {HTMLElement} cont     The calendar container
         * @param  {HTMLElement} nextLink Link to navigate to next month
         */
        function downHandler(target, cont, nextLink) {
            nextLink = $('.ui-datepicker-next')[0];
            var targetRow = $(target).closest('tr');
            if (!targetRow) {
                return;
            }
            var targetCells = $('td', targetRow),
                cellIndex = $.inArray(target.parentNode, targetCells), // the td (parent of target) index
                nextRow = $(targetRow).next(),
                nextRowCells = $('td', nextRow),
                nextWeekTd = nextRowCells[cellIndex],
                nextWeekCheck = $('a.ui-state-default', nextWeekTd)[0];

            if (nextRow && nextWeekTd && nextWeekCheck) {
                // theres a next row, a TD at the same index of `target`,
                // and theres an anchor within that td
                setHighlightState(nextWeekCheck, cont);
                nextWeekCheck.focus();
            } else {
                nextLink.click();

                setTimeout(function () {
                    // updating the cached header elements
                    updateHeaderElements();

                    var nextMonthTrs = $('tbody tr', cont),
                        firstTds = $('td', nextMonthTrs[0]),
                        firstParallel = firstTds[cellIndex],
                        firstCheck = $('a.ui-state-default', firstParallel)[0];

                    if (firstParallel && firstCheck) {
                        setHighlightState(firstCheck, cont);
                        firstCheck.focus();
                    } else {
                        // lets try the second row b/c we didnt find a
                        // date link in the first row at the target's index
                        var secondRow = nextMonthTrs[1],
                            secondTds = $('td', secondRow),
                            secondRowTd = secondTds[cellIndex],
                            secondCheck = $('a.ui-state-default', secondRowTd)[0];

                        if (secondRow && secondCheck) {
                            setHighlightState(secondCheck, cont);
                            secondCheck.focus();
                        }
                    }
                }, 0);
            }
        }

        function prepHighlightState() {
            var highlight;
            var cage = document.getElementById(datepickerId);
            highlight = $('.ui-state-highlight', cage)[0] ||
                $('.ui-state-default', cage)[0];
            if (highlight && cage) {
                setHighlightState(highlight, cage);
            }
        }

        // Set the highlighted class to date elements, when focus is received
        function setHighlightState(newHighlight, container) {
            var prevHighlight = getCurrentDate(container);
            // remove the highlight state from previously
            // highlighted date and add it to our newly active date
            $(prevHighlight).removeClass('ui-state-highlight');
            $(newHighlight).addClass('ui-state-highlight');
        }

        // grabs the current date based on the highlight class
        function getCurrentDate(container) {
            var currentDate = $('.ui-state-highlight', container)[0];
            return currentDate;
        }

        function updateHeaderElements() {
            var context = document.getElementById(datepickerId);
            if (!context) {
                return;
            }

            //  $(context).find('table').first().attr('role', 'grid');

            var prev = $('.ui-datepicker-prev', context)[0];
            var next = $('.ui-datepicker-next', context)[0];

            next.setAttribute('role', 'button');
            prev.setAttribute('role', 'button');
            //appendOffscreenMonthText(next);
            //appendOffscreenMonthText(prev);

            $(next).on('click', handleNextClicks);
            $(prev).on('click', handlePrevClicks);

            // add month day year text
            //monthDayYearText();
        }
    }


    return {
        createStatusMessage: createStatusMessage,
        initDateAttributes: initDateAttributes,
        initKeyboardNavigation: initKeyboardNavigation,
        initPresentationMode: initPresentationMode,
        setTabIndexes: setTabIndexes,
    };

})(jQuery);


APP.carouselAccessibility = (function ($) {
    'use strict';

    var init = function () {
        $('.listing-block__gallery .slick-track').each(function () {
            $(this).attr('role', 'list');
            var $slides = $(this).find('> [data-slick-index]');

            $slides.attr('role', 'listitem');
        });
    };

    return {
        init: init,
    };

})(jQuery);


APP.consoleErrors = (function() {
  'use strict';

  var init = function() {
    var method;
    /* eslint-disable no-empty-function */
    var noop = function() {};
    /* eslint-disable no-empty-function */
    var methods = [
      'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
      'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
      'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
      'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
      method = methods[length];

      // Only stub undefined methods.
      if (!console[method]) {
        console[method] = noop;
      }
    }
  };

  return {
    init: init
  };

})();
APP.cookiePolicy = (function($) {
  'use strict';

  var options = {
    animateSpeed: 800,
    $cookieEl: $('.cookie'),
  };

  var init = function() {
    
    // $.removeCookie('cookiepolicy'); // delete cookie
    _showCookie();
    _hideCookie();

  };

  var _showCookie = function() {

    if (!$.cookie('cookiepolicy')) {

      setTimeout(function() {
        options.$cookieEl.fadeIn(options.animateSpeed).animate({ bottom: 0 }, options.animateSpeed);
      }, 1700);

    }

  };

  var _hideCookie = function() {

    $('.js-cookie-btn').click(function() {
      _setCookie();
      options.$cookieEl.animate({ bottom: '-50%' }, options.animateSpeed).fadeOut(options.animateSpeed);
    });

  };

  var _setCookie = function() {
    $.cookie('cookiepolicy', 1, {
      expires: 365,
      path: '/'
    });
  }

  return {
    init: init
  };

})(jQuery);
// var APP = APP || {};

APP.detectDevice = (function ($) {
  'use strict';

  var ver = '';

  //generic device landscape
  var horizontalDetect = function() {
    if ($(window).innerWidth() < 992) {
      var viewHeight = $(window).height();
      var viewWidth = $(window).width();

      if (viewWidth > viewHeight) {
        if (!$('body').hasClass('landscape')) {
          $('body').addClass('landscape');
        }
      }
      else {
        if ($('body').hasClass('landscape')) {
          $('body').removeClass('landscape');
        }
      }
    }
  };

  // iDevices -- Return boolean TRUE/FALSE
  var isiPhone = function() {
    return (
      (navigator.platform.indexOf('iPhone') != -1) ||
      (navigator.platform.indexOf('iPod') != -1)
      );
  };
  var isiPad = function() {
    return (
      (navigator.platform.indexOf('iPad') != -1)
      );
  };
  var iOSversion = function() {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
      // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
      var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
      return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
    }
  };
  var init = function() {


    //Detect Device Script
    if (!$('body').hasClass('IE8')) {
      // Listen for orientation changes
      //fixes bug on ipad
      // setTimeout(function() {
      //         window.addEventListener('orientationchange',
      //             function() {
      //                 $('body').fadeOut(1, function () {
      //                   $('body').fadeIn(1);
      //                 });
      //             });
      //     },
      //     1000);

      horizontalDetect();

      $(window).resize(function () {
        horizontalDetect();
      });

      ver = iOSversion();

      ver = parseInt(ver);


      var uagent = navigator.userAgent.toLowerCase();
      if(/safari/.test(uagent) && !/chrome/.test(uagent))
      {
        $('body').addClass('safari');
      }


      if (isiPad()) {
        if (ver < 8) {
          $('body').addClass('ios7-');
        }

        else if (ver == 8) {
          $('body').addClass('ios8');
        }

        else if (ver == 9) {
          $('body').addClass('ios9');
        }

        else {
          $('body').addClass('ios10+');
        }

        $('body').addClass('iPad');

        if ((window.orientation) === 90) {
          $('body').addClass('iPad-horizontal');
          $('body').removeClass('iPad-vertical');
        }
        else {
          $('body').removeClass('iPad-horizontal');
          $('body').addClass('iPad-vertical');
        }

        // Listen for orientation changes
        window.addEventListener('orientationchange', function () {
          // Announce the new orientation number
          if ((window.orientation) === 90) {
            $('body').addClass('iPad-horizontal');
          }
          else {
            $('body').removeClass('iPad-horizontal');
          }
        }, false);
      }
    }

    if (isiPhone()) {

     if (ver < 8) {
       $('body').addClass('ios7-');
     }

     else if (ver == 8) {
       $('body').addClass('ios8');
     }

     else if (ver == 9) {
       $('body').addClass('ios9');
     }

     else {
       $('body').addClass('ios10+');
     }

     $('body').addClass('iPhone');

     if ((window.orientation) === 90) {
      $('body').addClass('iPhone-horizontal');
    }
    else {
      $('body').removeClass('iPhone-horizontal');
    }


      // Listen for orientation changes
      window.addEventListener('orientationchange', function () {
        // Announce the new orientation number
        if ((window.orientation) === 90) {
          $('body').addClass('iPhone-horizontal');
        }
        else {
          $('body').removeClass('iPhone-horizontal');
        }


      }, false);

    }

    $(window).resize(function () {
      if ($(window).innerWidth() > 767) {
        if ($('body').hasClass('iPhone-horizontal')) {
          $('body').removeClass('iPhone-horizontal');
        }
        if ($('body').hasClass('iPad-horizontal')) {
          $('body').removeClass('iPad-horizontal');
        }
      }
      else {
        if (isiPhone()) {
          if (!$('body').hasClass('iPhone')) {
            $('body').addClass('iPhone');
          }

          if ((window.orientation) === 90) {
            $('body').addClass('iPhone-horizontal');
          }
          else {
            $('body').removeClass('iPhone-horizontal');
          }
        }

        if (isiPad()) {
          if (!$('body').hasClass('iPad')) {
            $('body').addClass('iPad');
          }

          if ((window.orientation) === 90) {
            $('body').addClass('iPad-horizontal');
            $('body').removeClass('iPad-vertical');
          }
          else {
            $('body').removeClass('iPad-horizontal');
            $('body').addClass('iPad-vertical');


          }
        }
      }

    });

  };

  return {
    init: init
  };

})(jQuery);

APP.equalHeights = (function($) {
  'use strict';

  var init = function() {

    // match content heights, md+
    // .js-match-height = parent div wrapper
    // .js-match-height-target = child element to match height
    enquire.register('screen and (min-width:' + APP.config.breakpoint.mdMin + 'px)', {
      match: function() {
        if ($('.js-match-height .js-match-height-target').length) {
          $('.js-match-height .js-match-height-target').matchHeight();
        }
      }
    });

  };

  return {
    init: init
  };

})(jQuery);
APP.forms = (function () {
  'use strict';

  var init = function () {
    _initSelect2();
    _initLanguageSelector();
    _datePicker();

    if ($('.time-picker').length) {
      _timePicker();
    }

    _initFileUplaod();
    //_emailPrepopulate();
    _scrollToValidationError();
      _dataLayer();
  };

  var _initSelect2 = function () {
    $('.EPiServerForms select, .js-language-selector').select2({
      minimumResultsForSearch: Infinity
    });

  }

  var _initLanguageSelector = function () {

    // Download document
    $('.js-language-selector').change(function (e) {
        var href = $(e.target).select2('val');
        if (typeof href !== 'undefined' && href !== '' && href !== null && href !== 'SELECT LANGUAGE') {
            window.open(href, '_blank');
            $('.js-language-selector').val('SELECT LANGUAGE').trigger('change');
        }
    });

  };


  var _datePicker = function () {
    $('.date-picker').datepicker({
      dateFormat: 'dd/mm/yy',
      dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      minDate: 0,
      firstDay: 1
    });
  };

  var _timePicker = function () {
    $('.time-picker').timepicker();
  };

  // Customised episerver forms file upload
  // Copies file name from input into span
  var _initFileUplaod = function () {

    $('.FormFileUpload__Input').change(function (e) {

      var fileName = e.target.value.split('\\').pop();
      $(this).next('label').find('span').text(fileName);

      $('<button class="js-cancel-file-upload cancel-file-upload btn btn--primary">&#x2715</button>').insertBefore($(this));

      _cancelFileUpload();

    });

  };

  var _cancelFileUpload = function () {

    $('.js-cancel-file-upload').click(function (e) {
      e.preventDefault();

      var button = $(this);
      var $input = button.next('.FormFileUpload__Input');

      button.remove(); // remove close icon

      $input.val(''); // set value to empty
      $input.next('label').find('span').text(''); // remove filename within input
      $input[0].dispatchEvent(new Event("removed")); // needed for vue forms. can't use changed or i re-trigger _initFileUplaod
    });

  };

  //var _getUrlParameter = function(name) {
  //  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  //  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  //  var results = regex.exec(location.search);
  //  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  //};

  //var _emailPrepopulate = function () {
  //  var txtEmailField = $('.FormTextbox__EmailPrePopulate');
  //  if (txtEmailField.length != 0) {
  //    var querystringPattern = txtEmailField.data('querystring-param');
  //    var newsletterEmailValue = _getUrlParameter(querystringPattern);
  //    if (newsletterEmailValue != null && newsletterEmailValue !== '') {
  //      txtEmailField.val(newsletterEmailValue);
  //    }
  //  }
  //};

    //gather all the validation errors from the form 
    //and group them in a section above the form
    var gatherErrors = function ($formEl) {

        $('.Form__error-notice').remove();
        $('.Form__error-list').remove();

        $formEl.find('.Form__Status').after('<p class="Form__error-notice">Please make these changes in order to submit your enquiry</p><ul class="Form__error-list"></ul>'); 

        $('.Form__Element__ValidationError:visible').each(function () {

            var errorMessage = $(this).text();
            var errorField = $(this).closest('.Form__Element').find('.Form__Element__Caption').text();
            
            $formEl.find('.Form__error-list').append('<li role="alert">' + errorField + ' - ' + errorMessage + '</li>');

        });
    } 

  var _scrollToValidationError = function () {

    // Episerver form on submit
    $('.FormSubmitButton').click(function () {

      var $formEl = $(this).closest('form'),
        headerHeight = $('.header').height();

      // setTimout needed to wait for validation to fire and add appropriate CSS class
      setTimeout(function () {
          if ($formEl.hasClass('ValidationFail')) {

              gatherErrors($formEl);     

              headerHeight = parseInt(headerHeight + $('.fixed-header').height() + 20);

          $('html, body').animate({
              scrollTop: ($($formEl).find('.Form__error-notice').offset().top - headerHeight)
          }, 800);

              

            // Update select2 items to fix safari ios bug #
            if ($('body').hasClass('safari')) {
                var $dropdowns = $($formEl).find('select');
                
                $dropdowns.each(function () {
                    $(this).trigger('change');
                });
            }
        }
      }, 10);

    });

  };

  var _dataLayer = function () {
    function episerverFormSubmitted(event, param1, param2) {  
        dataLayer.push({
          event: 'formSubmit',
          formID: event.target.id
        });
    }

    if (typeof($$epiforms) !== "undefined") {
        $$epiforms(document).ready(function () {
            $$epiforms(".EPiServerForms").on("formsSubmitted", episerverFormSubmitted);
        });
    }
    };

  //Demo = function(config) {
  //    this.config = config;
  //    this.config.development = config.development || false;

  //    this.paymentForm = $('#' + config.formID);
  //    this.inputs = $('input[type=text], input[type=email], input[type=tel]');
  //    this.button = this.paymentForm.find('.button');

  //    this.states = {
  //        'show': 'active',
  //        'wait': 'loading'
  //    };
  //    this.focusClass = "has-focus";
  //    this.valueClass = "has-value";

  //    this.initialize();
  //}

  //Demo.prototype.initialize = function () {
  //    var self = this;

  //    this.events();
  //    this.inputs.each(function (index, element) {
  //        self.labelHander($(element));
  //    });
  //    this.notify('error');
  //};


  //Demo.prototype.events = function () {
  //    var self = this;

  //    this.inputs.on('focus', function () {
  //        $(this).closest('label').addClass(self.focusClass);
  //        self.labelHander($(this));
  //    }).on('keydown', function () {
  //        self.labelHander($(this));
  //    }).on('blur', function () {
  //        $(this).closest('label').removeClass(self.focusClass);
  //        self.labelHander($(this));
  //    });
  //};


  //Demo.prototype.labelHander = function (element) {
  //    var self = this;
  //    var input = element;
  //    var label = input.closest('label');

  //    window.setTimeout(function () {
  //        var hasValue = (input.val().length > 0) ? true : false;

  //        if (hasValue) {
  //            label.addClass(self.valueClass);
  //        } else {
  //            label.removeClass(self.valueClass);
  //        }
  //    }, 10);
  //};


  //Demo.prototype.notify = function (status) {
  //    var self = this;
  //    var notice = $('.notice-' + status);
  //    var delay = (this.config.development === true) ? 4000 : 2000;

  //    notice.show()

  //    window.setTimeout(function () {
  //        notice.addClass('show');
  //        self.button.removeClass(self.states.wait);

  //        window.setTimeout(function () {
  //            notice.removeClass('show');
  //            window.setTimeout(function () {
  //                notice.hide();
  //            }, 310);
  //        }, delay);
  //    }, 10);
  //};


  return {
    init: init
  };

})();
APP.gallery = (function($) {
  'use strict';

  var $container = $('.gallery');

  var init = function() {
    _initGallery();
  };

  var _initGallery = function() {

    $('.gallery')
      .on('init', _appendCustomUI)
      .on('afterChange', _customPagination).slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      });

  };

  var _appendCustomUI = function(ev, slick) {
    $('.gallery').append('<div class="gallery__pagination"><div class="gallery__pagination-inner"><p class="gallery__counter"><span class="gallery__current-item"></span><span class="gallery__divider">/</span><span class="gallery__total-items"></span></p></div></div>');

    _updateResult('.gallery__total-items', slick.slideCount);
    _updateResult('.gallery__current-item', slick.currentSlide + 1);
  };

  var _updateResult = function(selector, value) {
    $(selector).text(value);
  };

  var _customPagination = function(ev, slick, currentSlide) {

    if (slick.slideCount >= 1) {
      _updateResult('.gallery__total-items', slick.slideCount);
      _updateResult('.gallery__current-item', slick.currentSlide + 1);
    }
  };

  return {
    init: init
  };

})(jQuery);
APP.gallery = (function($) {
    'use strict';

    var $container = $('.gallery');
    var translatableText = $container.data('text');

     /**
      * Gallery carousel initialisation function
      */
     var _initGallery = function() {

        $container.each(function() {
            var slickOptions = {
                infinite: true,
                slidesToShow: 1,
                adaptiveHeight: true,
                nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" tabindex="0" role="button"><svg class="gallery__next-icon" role="img" aria-label="next" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Next</title><use xlink:href="/Static/images/sprites/symbol.svg#arrow-next"></use></svg></button>',
                prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Next" tabindex="0" role="button"><svg class="gallery__prev-icon" role="img" aria-label="previous" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Previous</title><use xlink:href="/Static/images/sprites/symbol.svg#arrow-back"></use></svg></button>',
                slidesToScroll: 1,
                dots: false,
                fade: true,
                cssEase: 'linear',
                arrows: false
            }

            if ($(this).find('.gallery__slide').length > 1) {
                $(this)
                    .on('init', appendCustomUI)
                    .on('afterChange', customPagination)
                    .slick(slickOptions);
            }
        });

        _addPanorama();
    };

    /**
     * Appends custom white strip below the carousel
     * @param {any} ev - event
     * @param {any} slick - slick reference
     */
    var appendCustomUI = function(ev, slick) {
        if ($(this).find('.gallery__slide').length > 1) {
            var $carousel = $(this);

            if ($(window).width() < 768) {
                $($container).append('\
               <div class="gallery__control-strip">\
                    <div class="gallery__control-strip-wrapper">\
                        <button class="gallery__control-arrow-left" tabindex="0" aria-label="Previous slide" tabindex="0" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 14" width="8" height="15">\
	                        <path id="-e-carouselArrowPrevious" class="shp0" d="M7.44 14L0 7L7.44 0" />\
                        </svg></button>\
                        <div class="gallery__control-pagination">\
                            <span class="gallery__current-item"></span>\
                            <span class="gallery__pagination-divider">of</span>\
                            <span class="gallery__total-items"></span>\
                        </div>\
                        <button class="gallery__control-arrow-right" tabindex="0"  tabindex="0" aria-label="Next slide"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 14" width="8" height="15">\
	                        <path id="-e-carouselArrowNext" class="shp0" d="M0.56 0L8 7L0.56 14" />\
                        </svg></button>\
                    </div>\
                </div>');

                $($container).find('.gallery__total-items').text(slick.slideCount);
                $($container).find('.gallery__current-item').text(slick.currentSlide + 1);
            } else {
                $($container).append('\
                <div class="gallery__control-strip">\
                    <div class="gallery__control-strip-wrapper">\
                        <button class="gallery__control-arrow-left" tabindex="0"  tabindex="0" aria-label="Previous slide"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 14" width="8" height="15">\
	                        <path id="-e-carouselArrowPrevious" class="shp0" d="M7.44 14L0 7L7.44 0" />\
                        </svg></button>\
                        <div class="gallery__control-pagination gallery__control-pagination--dots"></div>\
                        <button class="gallery__control-arrow-right tabindex="0" tabindex="0" aria-label="Next slide"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 14" width="8" height="15">\
	                        <path id="-e-carouselArrowNext" class="shp0" d="M0.56 0L8 7L0.56 14" />\
                        </svg></button>\
                    </div>\
                </div>');

                for (var slideIndex = 1; slideIndex <= slick.slideCount; slideIndex++) {
                    if (slideIndex == 1) {
                        $(this).find('.gallery__control-pagination').append('<button aria-label="Go to slide ' + slideIndex + '" class="gallery__control-dot gallery__control-dot--active" data-index="' + slideIndex + '"></button>');
                    } else {
                        $(this).find('.gallery__control-pagination').append('<button aria-label="Go to slide '+ slideIndex +'" class="gallery__control-dot" data-index="' + slideIndex + '"></button>');
                    }
                }

                $('.gallery__control-dot').click(function () {
                    $carousel.slick('slickGoTo', $(this).attr('data-index') - 1);
                });
            }

            initArrows($carousel);
        }

        $('.slick-slide').each(function () {
          var $slide = $(this)
          if ($slide.attr('aria-describedby') != undefined || null) { // ignore extra/cloned slides
            $(this).removeAttr('aria-describedby');
          }
        });
    };

    /**
    * Function responsible for initalising carousel arrow buttons
    * @param {any} carousel - carousel element
    */
    var initArrows = function (carousel) {
        $('.gallery__control-arrow-left').click(function () {
            carousel.slick('slickPrev');
        });

        $('.gallery__control-arrow-right').click(function () {
            carousel.slick('slickNext');
        });
    }

    /**
     * Function which adds in a virtual tour button
     * */
    var _addPanorama = function() {
        $container.each(function() {
            if ($(this).hasClass('panorama')) {
                $($container).find('.gallery__control-strip').append('<button class="panorama-box"><span class="panorama-box__symbol"><span class="panorama-box__360">360<span class="panorama-box__360-deg">&deg;</span></span><svg role="img" aria-label="View panorama" class="icon icon-360"><title>Panorama</title><use xlink:href="/Static/images/sprites/symbol.svg#icon-panorama" /></svg></span><span class="panorama-box__tour-text">' + translatableText + '</span></button>').addClass('gallery__control-strip--panorama-box');

                if ($(this).find('.gallery__slide').length <= 1 || $(this).find('.video').length > 1) {

                    $(this).find('.panorama-box').addClass('panorama-box--single');
                    // if is a galery
                    // else add class name to panorama
                }

            }
        });
    };

    /**
     * Handle automatic slide change
     * @param {any} ev - event object 
     * @param {any} slick - slick slider instance
     */
    var customPagination = function (ev, slick) {
        if (slick.slideCount >= 1) {
            if ($(window).width() < 768) {
                $(this).find('.gallery__total-items').text(slick.slideCount);
                $(this).find('.gallery__current-item').text(slick.currentSlide + 1);
            } else {
                $(this).find('.gallery__control-pagination .gallery__control-dot').removeClass('gallery__control-dot--active');
                $(this).find('.gallery__control-pagination .gallery__control-dot[data-index="' + (slick.currentSlide + 1) + '"]').addClass('gallery__control-dot--active');

            }
        }
    }

    return {
        init: _initGallery
    };

})(jQuery);

//Generic Listing



APP.genericListing = (function($) {
  'use strict';

  var init = function() {

    var genericListing = new Vue ({
      el: '#generic-listing',
      data: {
        apiKey: 1408,
        heading: null,
        documents: [],
        overwriteTitle: null,
      },


      mounted: function() {
        this.getData();
        // look across the dom for the buttons
      },

      updated: function() {
        if ($('.post-list-item').length) {
          $('.last-pod').removeClass('last-pod');
          var genericListItem = $('.post-list-item').length;
          var remainder = genericListItem % 3;

          if (remainder === 2) {
            $('.post-list-item').last().addClass('last-pod');
          }

          if (remainder === 0) {
            $('.post-list-item:nth-last-child(2)').addClass('pod-list-even');
            $('.post-list-item:nth-last-child(3)').addClass('pod-list-even');
          }
        }
      },

      methods: {
        getData: function() {

          var dataUrl = 'search';

          axios.get(dataUrl)
          .then(function(response) {
            genericListing.documents = response.data.Documents

          })
          .catch(function(error) {
            console.log(error);
          });
        },
        // <transition-group>
        // Sets initial state of each `.room-pod`
        beforeEnterArticle: function(el,done) {
          el.style.opacity = 0;
        },

        // <transition-group>
        // On enter of pod, applies the following
        enterArticle: function(el, done) {

          var delay = el.dataset.index * 300

          setTimeout(function() {
            $(el).fadeTo(800, 1);
          }, delay)
        },

        // <transition-group>
        // On leave of room pod
        leaveArticle: function(el, done) {
          $(el).hide();
        },
      }
    });
  };

  return {
    init: init
  };

})(jQuery);

APP.responsiveTable = (function($) {
  'use strict';

  var init = function() {
    $('table:not([class])').wrap('<div class="responsive-table" />');
  };

  return {
    init: init
  };

})(jQuery);


APP.boxOutContent = (function($) {
  'use strict';

  var init = function() {

    $('.btn--primary').each(function() {
      if($(this).prev().hasClass('box-out')) {
        $(this).addClass('box-out');
      }

    })

    $('.box-out').not('.box-out + .box-out').each(function() {
      $(this).nextUntil(':not(.box-out)').addBack().wrapAll('<div class="box-out-wrapper" />');
    });

  };

  return {
    init: init
  };

})(jQuery);


APP.scrollDown = (function($) {
  'use strict';

  var init = function() {
    $('.btn--arrow-down').on('click', function() {
      $('html, body').animate({
        scrollTop: ($('#scroll-to-flag').offset().top)
      }, 800);


    });
  };

  return {
    init: init
  };

})(jQuery);



APP.homepageHero = (function($) {

  'use strict';

  var init = function() {
    // Usage: isAutoplaySupported(callback);
    // Using a callback assures that support
    // has been properly checked
    var supported = true;

    sessionStorage.autoplaySupported = true ? supported = true : supported = false;

    if (!supported) {
      $('.image-promo__video').each(function(i) {
        var video = $(this).find('video');
        $(video).attr( 'poster' , video[i].dataset.poster ).attr( 'autoplay' , false );
      })
      // HTML5 Video Autoplay Supported!
    }
  }

  return {
    init: init
  };

})(jQuery);



APP.homepage = (function($) {
  'use strict';

  // Uses the revealing module pattern
  // All functions now have direct access to each other

  var init = function() {
    if($('.homepage .full-page-panel').length) {
      enquire.register('screen and (min-width:' + APP.config.breakpoint.mdMin + 'px) and (min-height: ' + APP.config.breakpoint.smMin + 'px)', {
        match: function() {
          // Disabled due to bug #70612
          // $.scrollify({
          //   section : '.homepage .full-page-panel',
          //   scrollSpeed: 800,
          //   updateHash: false
          // });
        },
        unmatch: function() { 
          // $.scrollify.destroy(); // TODO: destroy not working, height of panels not being removed

          // temp fix
          setTimeout(function() {
            $('.homepage .full-page-panel').css({height: ''});
          }, 500);

        }
      });
    }

    if ($('#home-video').length) {
      //TODO remove this if once the other sites are in
      if ($('body').hasClass('connaught')) {

        var imagePromo = $('#home-video').parent('.image-promo__video');
        var vid = document.getElementById("home-video");

        vid.addEventListener('timeupdate', function() {
        //Change this number if video changes - use console.log below to get timings
        // console.log(this.currentTime);
        if (this.currentTime >= 79.5) {
          if (!imagePromo.hasClass('image-overlay')) {
            imagePromo.addClass('image-overlay');

            if ($('body').hasClass('connaught')) {
              $('.connaught-image').attr('src', '/Static/images/connaught.gif');
            }
          }
        }
        else {
          if (imagePromo.hasClass('image-overlay')) {
            //TODO swap these timeouts for fadein/out and remove css animation
            setTimeout(function() {
              imagePromo.removeClass('image-overlay');
            }, 1000);
            setTimeout(function() {
              if ($('body').hasClass('connaught')) {
                $('.connaught-image').attr('src', '/Static/images/connaught.png');
              }
            }, 2000);
          }
        }
      });
      }
    }




    if($('.homepage .hero').length) {
      enquire.register('screen and (max-width:' + APP.config.breakpoint.xsMax + 'px)', {
        match: function() {
          _moveArrowBtnForMobile();
        },
        unmatch: function() {
          _moveArrowBtnForDesktop();
        }
      });
    }



    _moveScrollFlag();
  };

  var _moveScrollFlag = function() {
    // if the scroll flag is first child, it messes with some crucial CSS,
    // move it into the first child if that's the case.
    var $scrollFlag = $('#scroll-to-flag');
    if($scrollFlag.index() === 0) {
      $scrollFlag
      .next()
      .prepend($scrollFlag);
    }
  };

  var _moveArrowBtnForDesktop = function() {
    $('.hero .btn--arrow-down').each(function() {
      $(this).appendTo($(this).closest('.hero'));
    });
  };

  var _moveArrowBtnForMobile = function() {
    $('.hero .btn--arrow-down').each(function() {
      var $this = $(this);
      var $hero = $this.closest('.hero');
      var $media = $hero.find('.image-promo__img').length ? $hero.find('.image-promo__img') : $hero.find('.image-promo__video');

      $this.appendTo($media);
    });
  };

  // Return the object that is assigned to the module
  return {
    init: init
  };

})(jQuery);

APP.jobListing = (function ($) {
  'use strict';
  var init = function () {
    console.log('init job listing');

    var jobListing = new Vue({
      el: '#jobListing',
      data: {
        departments: [],
        sites: []
      },

      computed: {
        showAll: function() {
          var scope = this;
          return _.every(scope.sites, {active: false});
        }
      },

      mounted: function () {
        this.getData();
      },

      methods: {
        getData: function () {
          var _this = this;

          axios.get('/api/careers/').then(function (response) {
            _this.departments = _.map(response.data, function(department) {
              _.each(department.value, function(role) {
                role.visible = true;
              });
              return department;
            });;
          }).catch(function (error) {
            console.log(error);
          });

          axios.get('/api/careers/sites/').then(function (response) {
            _this.sites = _.map(response.data, function(i) {
                i.active = false;
                i.id = parseInt(i.id);
                return i;
            });;
          }).catch(function (error) {
            console.log(error);
          });
        },

        arrayIncludes: function (collection, value, index) {
          return _.includes(collection, value, index);
        },

        accordionToggle: function ($event) {
          var target = $event.target || $event.srcElement;
          $(target.parentNode.nextElementSibling).slideToggle();
          $(target).toggleClass('is-active')
        },

        // <transition-group>
        // Sets initial state of each `pod`
        beforeEnterJob: function (el, done) {
          el.style.opacity = 0;
        },

        // <transition-group>
        // On enter of pod, applies the following
        enterJob: function (el, done) {
          var delay = el.dataset.index - (this.pageSize * (this.currentPage - 1)) * 300;
          setTimeout(function () {
            $(el).fadeTo(800, 1);
          }, delay)
        },

        // <transition-group>
        // On leave of pod
        leaveJob: function (el, done) {
          $(el).hide();
        },

        // Used on mobile only
        toggleFilterVisibility: function () {

          $('.job-filter-overlay').toggleClass('is-active');
          $('body').toggleClass('overflow-hidden');
          $('header').toggleClass('low-z-index');

          enquire.register('screen and (min-width:' + APP.config.breakpoint.mdMin + 'px)', {
            match: function () {
              $('.job-filter-overlay').removeClass('is-active');
              $('body').removeClass('overflow-hidden');
              $('header').removeClass('low-z-index');
            }
          });

        },
        clearFilter: function () {
          this.sites = _.map(this.sites, function(i) {
            i.active = false;
            return i;
          })
          this.filterJobs();
        },
        showDepartment: function(department) {
          var visible = _.sumBy(department.value, function(i) {
            return i.visible ? 1 : 0;
          });
          return visible > 0;
        },
        filterJobs: function () {
          var scope = this;

          var departments = this.departments;

          _.each(departments, function(department) {
            department.value = _.map(department.value, function(role) {
              var siteId = role.site.value;
              role.visible = scope.showAll || _.find(scope.sites, {id: siteId}).active;
              return role;
            });
          });

          this.departments = departments;
        }
      }
    });
  };


  return {
    init: init
  };

})(jQuery);
APP.listingGallery = (function($) {
  'use strict';

    var $container = $('.listing-block');
  /**
  * Gallery carousel initialisation function
  */
  var _initGallery = function() {
      $container.each(function () {
          var slickOptions = {
              infinite: false,
              slidesToShow: 3,
              slidesToScroll: 3,
              nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" tabindex="0" role="button"><svg class="listing__next-icon" role="img" aria-label="next" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Mute</title><use xlink:href="/Static/images/sprites/symbol.svg#arrow-next"></use></svg></button>',
              prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" tabindex="0" role="button"><svg class="listing__prev-icon" role="img" aria-label="next" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Mute</title><use xlink:href="/Static/images/sprites/symbol.svg#arrow-back"></use></svg></button>',
              arrows: false,
              responsive: [
                  {
                      breakpoint: APP.config.breakpoint.mdMax, // Tablet
                      settings: {
                          arrows: false,
                          slidesToShow: 2,
                          slidesToScroll: 2
                      }
                  },
                  {
                      breakpoint: APP.config.breakpoint.xsMax, // Mobile
                      settings: {
                          arrows: false,
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  }
              ]
          }

          $(this).find('.js-listing-gallery')
              .on('init', appendCustomUI)
              .on('afterChange', customPagination)
              .slick(slickOptions);
      });


    };

    /**
    * Appends custom white strip below the carousel
    * @param {any} ev - event
    * @param {any} slick - slick reference
    */
    var appendCustomUI = function (ev, slick) {
        var slideCount = slick.slideCount / 3;
        var slideJump = 3;

        if ($(window).width() <= Number(APP.config.breakpoint.mdMax)) {
            slideCount = slick.slideCount / 2;
            slideJump = 2;
        }

        if ($(window).width() < Number(APP.config.breakpoint.xsMax)) {
            slideJump = 1;
            slideCount = slick.slideCount;
        }

        slideCount = Math.ceil(slideCount);
    
        if (slideCount > 1) {
            var $carousel = $(this);

            if ($(window).width() < 768) {
                $carousel.closest('.listing-block').find('.listing-block__controls').prepend('\
                <div class="gallery__control-strip">\
                    <div class="gallery__control-strip-wrapper">\
                        <button class="gallery__control-arrow-left" tabindex="0" aria-label="Previous slide"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 14" width="12" height="19">\
	                        <path id="-e-carouselArrowPrevious" class="shp0" d="M7.44 14L0 7L7.44 0" />\
                        </svg></button>\
                        <div class="gallery__control-pagination">\
                            <span class="gallery__current-item"></span>\
                            <span class="gallery__pagination-divider">of</span>\
                            <span class="gallery__total-items"></span>\
                        </div>\
                        <button class="gallery__control-arrow-right" tabindex="0" aria-label="Next slide"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 14" width="12" height="19">\
	                        <path id="-e-carouselArrowNext" class="shp0" d="M0.56 0L8 7L0.56 14" />\
                        </svg></button>\
                    </div>\
                </div>');

                $($container).find('.gallery__total-items').text(slick.slideCount);
                $($container).find('.gallery__current-item').text(slick.currentSlide + 1);
            } else {
                $carousel.closest('.listing-block').find('.listing-block__controls').prepend('\
                <div class="gallery__control-strip">\
                    <div class="gallery__control-strip-wrapper">\
                        <button class="gallery__control-arrow-left" tabindex="0" aria-label="Previous slide"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 14" width="12" height="19">\
	                        <path id="-e-carouselArrowPrevious" class="shp0" d="M7.44 14L0 7L7.44 0" />\
                        </svg></button>\
                        <div class="gallery__control-pagination gallery__control-pagination--dots"></div>\
                        <button class="gallery__control-arrow-right" tabindex="0" aria-label="Next slide"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 14" width="12" height="19">\
	                        <path id="-e-carouselArrowNext" class="shp0" d="M0.56 0L8 7L0.56 14" />\
                        </svg></button>\
                    </div>\
                </div>');

                for (var slideIndex = 1; slideIndex <= slick.slideCount; slideIndex+=slideJump) {
          
                    if (slideIndex == 1) {
                        $(this).closest('.listing-block').find('.gallery__control-pagination').append('<button aria-label="Go to slide ' + slideIndex + '" class="gallery__control-dot gallery__control-dot--active" data-index="' + slideIndex + '"></button>');
                    } else {
                        $(this).closest('.listing-block').find('.gallery__control-pagination').append('<button aria-label="Go to slide ' + slideIndex + '" class="gallery__control-dot" data-index="' + (slideIndex) + '"></button>');
                    }   
                }

                $('.gallery__control-dot').click(function () {
                    $carousel.slick('slickGoTo', $(this).attr('data-index') - 1);
                });
            }

            initArrows($carousel);
        }
    };

    /**
    * Function responsible for initalising carousel arrow buttons
    * @param {any} carousel - carousel element
    */
    var initArrows = function (carousel) {
        $('.gallery__control-arrow-left').click(function () {
            carousel.slick('slickPrev');
        });

        $('.gallery__control-arrow-right').click(function () {
            carousel.slick('slickNext');
        });
    }

    /**
     * Handle automatic slide change
     * @param {any} ev - event object 
     * @param {any} slick - slick slider instance
     */
    var customPagination = function (ev, slick) {
        if (slick.slideCount >= 1) {
            if ($(window).width() < 768) {
                $(this).closest('.listing-block').find('.gallery__total-items').text(slick.slideCount);
                $(this).closest('.listing-block').find('.gallery__current-item').text(slick.currentSlide + 1);
            } else {
                $(this).closest('.listing-block').find('.gallery__control-pagination .gallery__control-dot').removeClass('gallery__control-dot--active');
                $(this).closest('.listing-block').find('.gallery__control-pagination .gallery__control-dot[data-index="' + (slick.currentSlide + 1) + '"]').addClass('gallery__control-dot--active');

            }
        }
    }

    return {
        init: _initGallery
    };

})(jQuery);

APP.loopingVideo = (function($) {

  'use strict';

  var init = function() {
    var mouseEnterTime;

    var loopingVideo = new Vue({
      el: '#looping-video',
      data: {
        $video: null,
        autoplaySupported: true,
        controlsShowing: false,
        counter: 0,
        video: {
          $videoSlider: null,
          len: 0,
          current: 0,
          loaded: 0,
          autoplaySupported: true,
          moving: false,
          pos: {
            start: 0,
            width: 0,
            innerWidth: 0,
            current: 0
          }
        },
        sources: [{
          src: '',
          type: 'video/mp4'
        }],
        options: {
          autoplay: true,
          poster: '/Static/images/content/fallback-image.jpg'
        },
        volume: {
          muted: false,
        },
        player: {
          $player: null,
          pos: null
        },
        tmp: {
          contrlHideTimer: null
        },
        state: {
          mobileBehaviour: false,
          contrlShow: true,
          vol: 0.9,
          currentTime: 0,
          fullScreen: false,
          playing: false,
          hasPlayed: false,
          mouseOverMoving: true,
          currentIntervalled: 0,
          firstPlayDone: false
        }


      },
      computed: {
        playbackPositionStyle: function () {
          return {
            left: this.video.pos.current + '%'
          }
        }
      },

      mounted: function() {
        var self = this;

        //fill in some data
        this.$video = this.$el.getElementsByTagName('video')[0];
        this.sources[0].src = this.$video.getAttribute('data-src');

        this.options.poster = this.$video.getAttribute('data-poster');
        this.init();

        setInterval(function () {
          self.state.currentIntervalled = self.video.pos.current;
        }, 250);

        //if autoplay - play video
        if ($(this.$el).hasClass('video-container--autoplay')) {

          var self = this;
          this.counter = this.counter + 1;
          this.state.playing = !this.state.playing;
          this.state.hasPlayed = true;
          this.toggleContrlShow();

          this.$video.play();
          this.state.playing = true;
          this.mouseLeaveVideo();
          this.timeline();
          this.$video.addEventListener('timeupdate', this.timeline);
          this.$video.addEventListener('ended', function (e) {
            self.state.playing = false;
            self.video.pos.current = 0;
            self.$video.currentTime = 0;

            dataLayer.push({
              event: 'videoEnded',
              name: self.sources[0].src
            });
          });

          dataLayer.push({
            event: 'videoPlay',
            name: this.sources[0].src
          });

          //Added default click to autoplay videos as IOS9 doesn't support autoplay.
          //This just shows the controls rather than playing the video
          if ($('body').hasClass('ios9')) {
            $('.video-container--autoplay .video__start-play-btn').click();
          }

        }

      },


      beforeDestroy: function () {
        document.body.removeEventListener('mousemove', this.mouseMoveAction);
        document.body.removeEventListener('mouseup', this.mouseUpAction);
      },



      // methods: {
      //   play: function() {
      //     this.state.playing ? this.$video.pause() : this.$video.play();
      //     this.state.playing = !this.state.playing;
      //   },


      //   mouseLeaveVideo: function() {
      //    this.controlsShowing = false;
      //   },

      //   mouseEnterVideo: function() {
      //     this.controlsShowing = true;
      //   }

      // }

      methods: {
        init: function () {
          var self = this;
          sessionStorage.autoplaySupported = true ? this.state.playing = true : this.state.playing = false;
          sessionStorage.autoplaySupported = true ? this.autoplaySupported = true : this.autoplaySupported = false;


          if (!this.autoplaySupported) {
            $(this.$video).attr('poster', this.$video.dataset.poster).attr('autoplay', false);
          }


          this.initVideo();
          // this.initPlayer();

          document.body.addEventListener('mousemove', this.mouseMoveAction, false);
          document.body.addEventListener('mouseup', this.mouseUpAction, false);

          //mute video
          var element = document.getElementById('muted');
          element.muted = "muted";

        },

        initVideo: function () {
          var $videoSlider = this.$el.getElementsByClassName('video__slider')[0];
          var $videoInner = $videoSlider.getElementsByClassName('video__playhead')[0];
          this.$videoSlider = $videoSlider;
          this.video.pos.start = $videoSlider.getBoundingClientRect().left;
          this.video.pos.innerWidth = $videoInner.getBoundingClientRect().width;
          this.video.pos.width = $videoSlider.getBoundingClientRect().width - this.video.pos.innerWidth;
          this.getTime();
        },

        initPlayer: function () {
          var $player = this.$el;
          this.player.pos = $player.getBoundingClientRect();
          this.player.$player = $player;
        },

          mouseEnterVideo: function () {
              if (this.state.playing == true) {
                  var self = this;

                  if (this.tmp.contrlHideTimer) {
                      clearTimeout(this.tmp.contrlHideTimer);
                      this.tmp.contrlHideTimer = null;
                  }

                  $(self.$video).parent().on('mousemove', function (e) {
                      clearTimeout(mouseEnterTime);
                      //mouse moving
                      self.state.mouseOverMoving = true;

                      mouseEnterTime = setTimeout(function () {
                          //mouse not moving
                          self.state.mouseOverMoving = false;
                      }, 1500);

                  });

                  if (this.state.hasPlayed) {
                      this.state.contrlShow = true;
                  }
              }
       },

        mouseLeaveVideo: function (e) {
            if (this.state.playing == true) {
                this.state.contrlShow = false;
                this.state.mouseOverMoving = false;

                clearTimeout(mouseEnterTime);

                if (this.tmp.contrlHideTimer) {
                    clearTimeout(this.tmp.contrlHideTimer);
                }

                this.tmp.contrlHideTimer = setTimeout(this.setControlView, 2000);
            }
       },

       setControlView: function () {

        if (this.state.playing) {
          this.state.contrlShow = false;
          this.tmp.contrlHideTimer = null;
        }
        else {
          this.state.contrlShow = true;
        }
      },

      toggleContrlShow: function () {
        this.state.contrlShow = !this.state.contrlShow;
      },

      getTime: function () {
        var self = this;
        this.$video.addEventListener('progress', function (e) {
          if (self.video.readyState === 4) {
            self.video.loaded = (-1 + (self.$video.buffered.end(0) / self.$video.duration)) * 100;
          }
        });

        this.video.len = this.$video.duration;
      },

      setVideoByTime: function (percent) {
        this.$video.currentTime = Math.floor(percent * this.video.len);
      },

      play: function () {
        var self = this;
        this.counter = this.counter + 1;
        this.state.playing = !this.state.playing;
        this.state.hasPlayed = true;
        this.toggleContrlShow();

        if (this.$video) {
          if (this.state.playing) {

            this.$video.play();
            this.mouseLeaveVideo();
            this.timeline();
            this.$video.addEventListener('timeupdate', this.timeline);
            this.$video.addEventListener('ended', function (e) {
              self.state.playing = false;
              self.video.pos.current = 0;
              self.$video.currentTime = 0;

              dataLayer.push({
                event: 'videoEnded',
                name: self.sources[0].src
              });
            });

            dataLayer.push({
              event: 'videoPlay',
              name: this.sources[0].src
            });
          }
          else {
            this.$video.pause();
            dataLayer.push({
              event: 'videoPaused',
              name: this.sources[0].src
            });
          }
        }
    },
    videoClickIOS9: function () {
        this.state.firstPlayDone = true;
        this.videoClick();
    },
      videoClick: function() {
        var self = this;

        if(this.state.mobileBehaviour) {
          this.toggleContrlShow();
          this.play();
        }
        else {
          this.play();
          // this.state.contrlShow = true;
          setTimeout(function(){
            self.state.contrlShow = true;
              self.state.mouseOverMoving = true;
              self.mouseEnterVideo();
          }, 10);
        }
      },

      timeline: function () {
        var percent = (this.$video.currentTime / this.$video.duration) * 100;
        this.video.pos.current = percent.toFixed(3);
      },

      videoMove: function (e) {
        this.initVideo();
        this.video.moving = true;
      },

      slideClick: function (e) {
        this.videoSlideMove(e);
      },

      volMuted: function () {
        this.$video.muted = !this.$video.muted;
        this.volume.muted = this.$video.muted;
      },

      fullScreen: function () {
        if (!this.state.fullScreen) {
          this.state.fullScreen = true;
          if (document.documentElement.requestFullscreen) {
            this.$video.requestFullscreen();
          } else if (document.documentElement.mozRequestFullScreen) {
              this.$video.mozRequestFullScreen(); // Firefox
            } else if (document.documentElement.webkitRequestFullscreen) {
              this.$video.webkitRequestFullscreen(); // Chrome and Safari
            } else if (document.documentElement.msRequestFullscreen) {
              this.$video.msRequestFullscreen(); // IE
            } else if (this.$video.webkitSupportsFullscreen) {
              this.$video.webkitEnterFullscreen();
            }

          }
          else {
            this.state.fullScreen = false;
            document.webkitExitFullScreen();
            document.msExitFullScreen();
            document.mozExitFullScreen();
          }

          setTimeout(this.initVideo, 200);
        },

        mouseMoveAction: function (e) {
          if (this.video.moving) {
            this.videoSlideMove(e);
          }
          this.contrlHider(e);
        },

        contrlHider: function (e) {
          var x = _getMousePosition(e, 'x');
          var y = _getMousePosition(e, 'y');
          if (!this.player.pos) return;
          if (x > this.player.pos.left &&
            x < this.player.pos.left + this.player.pos.width
            ) {
            if (
              y > this.player.pos.top + this.player.pos.height * 0.6 &&
              y < this.player.pos.top + this.player.pos.height
              ) {
              return this.mouseEnterVideo();
          }
        }
        return this.mouseLeaveVideo();
      },

      videoSlideMove: function (e) {
        var x = _getMousePosition(e) - this.video.pos.start;
        if (x > 0 && x < this.video.pos.width) {
          this.video.pos.current = x;
          this.setVideoByTime(x / this.video.pos.width);
        }
      },

      mouseUpAction: function (e) {
        this.video.moving = false;
      }

    }

  })

}

var _getMousePosition = function (e, type) {
  var type = 'x';
  if (type === 'x') {
    return e.pageX;
  }
  return e.pageY;
};

var _pad = function (val) {
  val = Math.floor(val);
  if (val < 10) {
    return '0' + val;
  }
  return val + '';
};
return {
  init: init
};

})(jQuery);



APP.mobileAccordion = (function($) {
  'use strict';

  var options = {
    mobileAccordionTrigger: '.js-mobile-accordion-trigger',
    mobileAccordionContent: '.js-mobile-accordion-content'
  };

  var init = function() {

    enquire.register('screen and (max-width:' + APP.config.breakpoint.smMax + 'px)', {
      match: function() {
        createMobileAccordion();
      },
      unmatch: function() {
        destroyMobileAccordion();
      }
    });

  };

  var createMobileAccordion = function() {

    // reset some properties
    $(options.mobileAccordionContent).hide();
    $(options.mobileAccordionTrigger).removeClass('is-active');
    $(options.mobileAccordionTrigger).css('cursor', 'pointer');
    $(options.mobileAccordionTrigger).unbind('click');

    $(options.mobileAccordionTrigger).each(function(index) {

      // create IDs for the heading and content for each accordion item to associate each heading with its content
      var $this = $(this);
      var buttonID = 'heading-' + index;
      var contentID = 'accordion-' + index;

      // Add a button inside the <h2>
      $this.wrapInner('<button id="' + buttonID + '" class="mobile-accordion__button" aria-expanded="false" aria-controls="' + contentID + '">');

      // wrap the accordion content and add ARIA attributes
      var $accordionContent = $this.next();

      $accordionContent.attr('ID', contentID);
      $accordionContent.attr('aria-labelledby', buttonID);
      $accordionContent.attr('aria-hidden', 'true');

      var $button = $this.find('button');

      $button.on('click', function() {
        var state = $(this).attr('aria-expanded') === 'false' ? true : false;
        $(this).attr('aria-expanded', state);
        $accordionContent.attr('aria-hidden', !state);

        // add 'is-active' class to the button for styling purposes
        $(this).toggleClass('is-active');

        // show/hide the content
        $accordionContent.slideToggle();

      });

    });

  };

  var destroyMobileAccordion = function() {

    // reset some properties
    $(options.mobileAccordionTrigger).css('cursor', 'default');
    $(options.mobileAccordionTrigger).unbind('click');
    $(options.mobileAccordionTrigger).removeClass('is-active');
    $(options.mobileAccordionContent).css('display', 'block');

    $(options.mobileAccordionTrigger).each(function() {

      // remove the button and replace the heading text
      var $this = $(this);
      var $button = $this.find('button');
      $(this).append($button.text());
      $button.remove();

    });

  };

  return {
    init: init,
    createMobileAccordion: createMobileAccordion,
    destroyMobileAccordion: destroyMobileAccordion
  };

})(jQuery);

APP.modal = (function($) {
  'use strict';

  var init = function() {

    _modalGallery();

  };

  var _modalGallery = function() {

    // Trigger
    $('.js-modal-gallery-trigger').on('click', function () {
      $(this).next('.modal-gallery').magnificPopup('open');
    });

    // Gallery
    $('.js-modal-gallery').each(function () {

      $(this).magnificPopup({
        delegate: 'a',
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        callbacks: {
          change: function() {
            if (this.isOpen) {
              this.wrap.addClass('mfp-open'); // allows for animations to be added
            }
          },
          open: function() {

            enquire.register('screen and (max-width:' + APP.config.breakpoint.xsMax + 'px)', {
              match: function() {
                $('.header').css('position', 'relative');
                $('.quick-links').css('display' , 'none');
              },
              unmatch: function() {
                $('.header').css('position', '');
                $('.quick-links').css('display' , 'flex')
              }
            });

            enquire.register('screen and (max-width:' + APP.config.breakpoint.smMax + 'px)', {
              match: function () {
                $('.header').css('position', 'relative');
              },
              unmatch: function () {
                $('.header').css('position', '');
              }
            });

          },
          close: function() {
            enquire.register('screen and (max-width:' + APP.config.breakpoint.xsMax + 'px)', {
              match: function() {
                $('.header').css('position', '');
                $('.quick-links').css('display' , 'flex')
              },
              unmatch: function() {
                $('.header').css('position', 'relative');

               $('.quick-links').css('display' , 'none');
              }
            });

            enquire.register('screen and (max-width:' + APP.config.breakpoint.smMax + 'px)', {
              match: function () {
                $('.header').css('position', '');
              },
              unmatch: function () {
                $('.header').css('position', 'relative');
              }
            });
          }
        },
        image: {
          titleSrc: function(item) {
            var url = item.img.context.src,
              fileName = url.substring(url.lastIndexOf('/') + 1);

            var a = document.createElement('a');

            if (typeof a.download != 'undefined') {
              return '<a href="' + url +'" download>' + item.el.attr('title') + '</a>';
            }

            else {
              var linkTitle = $('.js-modal-gallery').data('linkText');
              return '<a href="' + url +'" download="' + fileName + '" target="_blank" title="open in a new tab">' + linkTitle + '</a>';
            }
          }
        },
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          tCounter: '<span class="mfp-counter">%curr% / %total%</span>' // markup of counter
        },
        fixedContentPos: false,
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"' + 'viewBox="0 0 20 20" class="icon-close">' +
              '<path d="M20 .7l-.7-.7L10 9.3.7 0 0 .7 9.3 10 0 19.3l.7.7 9.3-9.3 9.3 9.3.7-.7-9.3-9.3z" />' +
            '</svg>' +
          '</button>'
      });
    });

  };

  return {
    init: init
  };

})(jQuery);
APP.newsletterValidation = (function ($) {
    'use strict';

    /**
     * Initializes newsletter text validation
     * */
    function init() {
        var $newsletterField = $('#newsletter-email');
        var $form = $newsletterField.closest('form');
        var $submitButton = $form.find('input[type="submit"]');

        $submitButton.click(function (event) {
            event.preventDefault();

            var emailSubmitted = $newsletterField.val();

            $('.newsletter-signup__validation-error').remove();

            if (isValidEmailAddress(emailSubmitted)) {
                $form.removeClass('newsletter-signup--error');

                $form.submit();
                return false;
            } 

            $form.addClass('newsletter-signup--error');

            var $error = $('<span></span>');

            $error.addClass('newsletter-signup__validation-error');

            var validationMessage = '';

            if (emailSubmitted == '') {
                validationMessage = "Please add an email address to sign up";
            } else {
                validationMessage = "Please add a valid email address";
            }

            $error.text(validationMessage);

            $form.closest('.newsletter-signup__wrapper').append($error);
        });

    }

    /**
     * Determines whether the email address is valid
     * @param {string} emailAddress - email address
     */
    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        // alert( pattern.test(emailAddress) );
        return pattern.test(emailAddress);
    };

    return {
        init: init
    }

})(jQuery);

APP.panorama = (function($) {
  'use strict';

  var init = function() {

    $('.panorama-box').on('click', function(e) {
      e.preventDefault();
      e.stopPropagation();

      // get data source
      var source = $('.panorama').data('src');
      // add iframe and load data source
      $('.page-wrapper').append('<div class="pano-iframe--visible"><button class="btn btn--close" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class="icon-close"><path d="M20 .7l-.7-.7L10 9.3.7 0 0 .7 9.3 10 0 19.3l.7.7 9.3-9.3 9.3 9.3.7-.7-9.3-9.3z" /></svg><span class="visually-hidden">Close</span></button>  <iframe class="pano-iframe" src="' + source + '"  allowFullScreen="true" mozallowfullscreen="true" webkitAllowFullScreen="true"></iframe></div>');
      //add close and remove event
      $('.btn--close').on('click', function(e) {
        e.preventDefault();

        $('.pano-iframe--visible').remove();
      });

      dataLayer.push({
        event: 'virtualTour',
        name: source
      });
    });

  };

  return {
    init: init
  };

})(jQuery);

// Payment Page

APP.paymentPage = (function ($) {
    'use strict';

    var init = function () {

        var form = document.getElementById("payment_form");
        var button = document.querySelector('#btnSubmitPaymentForm');
        var loadingElement = $("#panLoader");

        $(form).find('input').attr('autocomplete', 'off');

        braintree.dropin.create({
            authorization: client_token,
            container: '#braintree-element',
            threeDSecure: true,
            translations: { //https://github.com/braintree/braintree-web-drop-in/blob/master/src/translations/en_US.js
                payWithCard: drpinheader,
                cardNumberLabel: "Card number",
                fieldEmptyForNumber: "Card number is required",
                fieldInvalidForNumber: "Card number is invalid",
                expirationDateLabel: "Expiry date",
                expirationDateLabelSubheading: "(MM/YY)",
                fieldEmptyForExpirationDate: "Expiry date is required",
                fieldInvalidForExpirationDate: "Expiry date is invalid",
                cvvLabel: "Security code/CVV",
                cvvThreeDigitLabelSubheading: "(3 digits)",
                cvvFourDigitLabelSubheading: "(4 digits)",
                fieldEmptyForCvv: "Security code/CVV is required",
                fieldInvalidForCvv: "Security code/CVV is invalid",
                postalCodeLabel: "Postcode/Zip code",
                fieldEmptyForPostalCode: "Postcode/Zip code is required",
                fieldInvalidForPostalCode: "Postcode/Zip code is invalid"
            }
        }, function (createErr, instance) {
            if (createErr) {
                // An error in the create call is likely due to
                // incorrect configuration values or network issues.
                // An appropriate error will be shown in the UI.
                $("#pan-error").text(createErr).show();
                return;
            }

            button.addEventListener('click', function (e) {
                e.preventDefault();
                $(button).prop('disabled', true);

                loadingElement.show();

                if ($("#payment_form").valid()) {

                    var countryDropDown = form.elements.namedItem("CountrySelection");

                    var threeDSecureParameters = {
                        amount: '0',
                        email: form.elements.namedItem("CardHolderEmail").value,
                        billingAddress: {
                            givenName: form.elements.namedItem("CardHolderFirstName").value.replace(/[^\x20-\x7E]+/g, ''), // ASCII-printable characters required, else will throw a validation error
                            surname: form.elements.namedItem("CardHolderLastName").value.replace(/[^\x20-\x7E]+/g, ''), // ASCII-printable characters required, else will throw a validation error 
                            phoneNumber: form.elements.namedItem("CardHolderPhoneNumber").value.replace(/[\(\)\s\-]/g, ''), // remove (), spaces, and - from phone number
                            streetAddress: form.elements.namedItem("Address1").value,
                            extendedAddress: form.elements.namedItem("Address2").value,
                            locality: form.elements.namedItem("Town").value,
                            countryCodeAlpha2: countryDropDown.options[countryDropDown.selectedIndex].value
                        }
                    };

                    instance.requestPaymentMethod({ threeDSecure: threeDSecureParameters }, function (requestPaymentMethodErr, payload) {
                        if (requestPaymentMethodErr) {
                            console.log("Dropin response:", requestPaymentMethodErr);

                            $(button).prop('disabled', false);
                            loadingElement.hide();

                            instance.clearSelectedPaymentMethod();
                            $("#pan-error").text("There was a problem submitting your card details. Please select a different payment method.").show();
                            $('html, body').animate({
                                scrollTop: ($("#pan-error").offset().top - 200)
                            }, 500);

                            return;
                        }

                        // Submit payload.nonce to your server, add the nonce into the hidden field before submitting the form collection
                        $("input[name=payment_method_nonce]").val(payload.nonce);

                        // the data is serialized and passed into the controller as key value pairs
                        var formdata = $('#payment_form').serialize();

                        // "BraintreeForm" route added in routeconfig.cs
                        var url = '/pageapi/payment/SubmitForm';

                        $.ajax({
                            url: url,
                            type: 'POST',
                            data: formdata,
                            success: function (data) {
                                if (data.IsValid) {
                                    $("#pan-success").text(data.Message).show();
                                    $('#payment_form').hide();
                                    $('#panIntro').hide();
                                    $('#panConfirmation').show();
                                    $('html, body').scrollTop(0);
                                } else {
                                    instance.clearSelectedPaymentMethod();
                                    $("#pan-error").text(data.Message).show();
                                    $('html, body').animate({
                                        scrollTop: ($("#pan-error").offset().top - 200)
                                    }, 500);
                                }
                                $(button).prop('disabled', false);
                                loadingElement.hide();
                            },
                            error: function (e) {
                                $("#pan-error").text(genericPaymentErrorText).show();
                                $(button).prop('disabled', false);
                                loadingElement.hide();
                            }
                        });

                        // if we want to do a normal postback uncomment and add the necessary controller action
                        // $('#payment_form').submit();
                    });
                } else {
                    $(button).prop('disabled', false);
                    loadingElement.hide();
                    $('html, body').animate({
                        scrollTop: ($('.field-validation-error').offset().top - 200)
                    }, 500);
                }
            });
        });
    };

    return {
        init: init
    };

})(jQuery);
APP.polyfills = (function($) {
  'use strict';

  var init = function() {

    //  ===========================================
    //  = Load scripts based on modernizer tests  =
    //  ===========================================

    // list of polyfills https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills

    /* eslint-disable indent */
    yepnope([
      {
        test: Modernizr.input.placeholder,
        nope: '/Static/build/js/jquery.placeholder.min.js', // this and the css above are the only required files
        complete: function() {
          if (!Modernizr.input.placeholder) {
            $('input, textarea').placeholder();
          }
        }
      },
      {
        test: Modernizr.picture,
        nope: '/Static/build/js/picturefill.min.js'
      },
      {
        test: document.querySelectorAll('.image-promo__video').length > 0,
        yep: '/Static/build/js/iphone-inline-video.js',
        complete: function() {
          $('.image-promo__video video').each(function () {
            enableInlineVideo(this, {
              iPad: true
            });
          });
        }
      },
      {
        test: Modernizr.objectfit,
        nope: '/Static/build/js/objectFitPolyfill.basic.min.js',
        complete: function() {

          var isEdge = navigator.userAgent.indexOf('Edge/') >= 0;

          if (isEdge === true) {
            $('html').addClass('isEdge');
          }

          if( !Modernizr.objectfit && $('video').length ) {
            objectFitPolyfill( $('.image-promo__video video') );
           objectFitPolyfill( $('.gallery-slide video') );
          }

          if ( ! Modernizr.objectfit ) {
            $('.video-container').each(function () {
              var $container = $(this),
                  imgUrl = $container.find('video').prop('poster');
              if (imgUrl) {
                $container
                  .css('backgroundImage', 'url(' + imgUrl + ')')
                  .addClass('compat-object-fit');
                }

                setTimeout(function () {
                    $('body').addClass('video-container-loaded');
                    objectFitPolyfill();
                }, 15);

            });
          }
        }
      }
    ]);
    /* eslint-disable indent */

  };

  return {
    init: init
  };

})(jQuery, Modernizr);

//
APP.responsiveVideo = (function($) {
  'use strict';

  var init = function() {
    $('.js-responsive-video').fitVids();
    _setEvents();
    _posterSizes();
  };


  var _setEvents = function() {
    $('.js-responsive-video video').on('click', function(e) {
      if (this.paused) {
        this.play();
        $('.js-responsive-video .btn--video').fadeOut(APP.config.animationSpeed.moderate);

      } else {
        this.pause();
        $('.js-responsive-video .btn--video').fadeIn(APP.config.animationSpeed.moderate);
      }

    });
    $('.js-responsive-video .btn--video').on('click', function(e) {
      var theVideo = $(this).siblings('video').get(0);
      theVideo.play();
      $(this).fadeOut(APP.config.animationSpeed.moderate);
    });
  };


  var _posterSizes = function() {

    enquire.register('screen and (min-width:768px)', {
      match: function() {
        var videoPoster = $('.js-responsive-video video').data('posterMd');
        $('.js-responsive-video video').attr('poster', videoPoster);
      }
    });

    enquire.register('screen and (min-width:900px)', {
      match: function() {
        var videoPoster = $('.js-responsive-video video').data('posterlG');
        $('.js-responsive-video video').attr('poster', videoPoster);
      }
    });

    enquire.register('screen and (max-width:767px)', {
      match: function() {
        var videoPoster = $('.js-responsive-video video').data('posterSm');
        $('.js-responsive-video video').attr('poster', videoPoster);
      }
    });

  };

  return {
    init: init
  };

})(jQuery);
// Room Booking Menu



APP.restaurantBooking = (function($) {
  'use strict';

  var init = function() {

    var bookingMenu = new Vue ({
      el: '#restaurant-booking',
      data: {
        apiKey: 1408,
        altHeading: null,
        restaurantBookingInfo: [],
        overwriteTitle: null,
      },


      mounted: function() {

        // look across the dom for the buttons
        $('.js-restaurant-button').each(function(btn) {

          $(this).on('click', function(ev) {
            console.log(this.dataset)
            bookingMenu.apiKey = this.dataset.apikey;
            bookingMenu.altHeading = this.dataset.heading;
            console.log(bookingMenu.altHeading)
            bookingMenu.getData();
            $('.booking-menu').addClass('booking-menu--open').removeClass('booking-menu--close');
            $('body').addClass('booking-menu-is-open');

            $('#room-booking').addClass('hide'); 
            $('#hotel-menu').addClass('hide');

            $('#restaurant-booking').removeClass('hide');
            setTimeout(function(){
              $('body').addClass('overflow-hidden fixed-position');
            }, 1000);

            APP.scrollbar.init('#restaurant-booking');

          })
        });


        $('.js-booking-close').on('click' , function() {
          $('.booking-menu').addClass('booking-menu--close').removeClass('booking-menu--open');
          $('body').removeClass('overflow-hidden fixed-position booking-menu-is-open');
        });

      },

      methods: {
        getData: function() {

          var dataUrl = '/booking/restaurant/' + this.apiKey;

          axios.get(dataUrl)
          .then(function(response) {
            console.log(response)
            bookingMenu.restaurantBookingInfo = response.data
          })
          .catch(function(error) {
            console.log(error);
          });
        },
      }
    });
  };

  return {
    init: init
  };

})(jQuery);

// Room Booking Menu

APP.roomBooking = (function ($) {
    'use strict';

    var init = function () {
        var currentPosition;

        $('.js-room-button').each(function (btn) {
            $(this).on('click', function (ev) {
                currentPosition = $(document).scrollTop();

                // get distance to top
                var distToTop = document.documentElement.scrollTop || document.body.scrollTop;
                // set document to that distance on click
                // document.documentElement.scrollTop = document.body.scrollTop = distToTop;

                $(document).scrollTop();

                // currently a fixed property
                //roomMenu.url[0].chainId = this.dataset.chainId;
                
                if (this.dataset.hotelId) {
                    // show menu wrapper
               
                    $('.booking-menu').removeClass('booking-menu--hideAccessibility').addClass('booking-menu--open').removeClass('booking-menu--close');
                    $('body').addClass('booking-menu-is-open');

                    // show room booking
                    $('#room-booking').removeClass('hide');
                    // ensure restraunt and hotel menu hidden
                    $('#restaurant-booking').addClass('hide');
                    $('.booking-menu-tabs').removeClass('hide');

                    $('#hotel-menu').addClass('hide');

                    setTimeout(function () {
                        $('body').addClass('overflow-hidden fixed-position');
                        $('.js-booking-close').trigger('focus');
                    }, 1000);

                } else {
                    // show menu wrapper
                    $('.booking-menu').removeClass('booking-menu--hideAccessibility').addClass('booking-menu--open').removeClass('booking-menu--close');
                    // how hotel menu
                    $('#hotel-menu').removeClass('hide');
                    // ensure restraunt and room booking hidden

                    $('#restaurant-booking').addClass('hide');
                    $('#room-booking').addClass('hide');
                    $('.booking-menu-tabs').addClass('hide');

                    $('body').removeClass('overflow-hidden fixed-position');
                    $('body').removeClass('booking-menu-is-open');
                }
         
                

                if ($('body').hasClass('maybourne')) {
                    if ($('.booking-menu--open').length) {
                        setTimeout(function () {
                            $('body').addClass('overflow-hidden fixed-position');
                        }, 1000);
                        $('body').addClass('booking-menu-is-open');
                    }
                    else {
                        $('body').removeClass('overflow-hidden fixed-position');
                        $('body').removeClass('booking-menu-is-open');
                    }
                }                           
            });

            $('.room-booking__calendar').find('.ui-datepicker-days-cell-over').removeClass('ui-datepicker-current-day');
        });

        $('.js-booking-close').on('click', function () {
            closeRoomBookingPopup();
        });
        
        $(document).on('keydown', function (event) {
         
            if (event.keyCode == 27 && $('.booking-menu--open').length ) {
         
                closeRoomBookingPopup();
                $('.js-room-button').focus(); 
            }
        });

        function closeRoomBookingPopup() {
            $('.booking-menu').addClass('booking-menu--close').removeClass('booking-menu--open');

            setTimeout(function () {
                $('.booking-menu').addClass('booking-menu--hideAccessibility');
            }, 1000);

            $('body').removeClass('overflow-hidden fixed-position');
            $('body').removeClass('booking-menu-is-open');
        }

        Vue.component('status-message', {
            template: '#status-message',

            props: {
                message: {
                    type: String,
                    required: true
                },

                visible: {
                    type: Boolean,
                    required: true
                },
            },

            computed: {
                statusMessage: function () {
                    return (this.visible) ? this.message : null;
                }
            }
        })

        Vue.component('date-picker', {

            template: '<div id="datepicker"></div>',
            props: ['dateFormat', 'date'],

            mounted: function () {
                var prv;
                var cur;
                var self = this;
                var monthsToShow = 1;
                if (window.innerWidth > 1200) {
                    var monthsToShow = 2;
                }

                // enquire.register('screen and (min-width:1200px)', {
                //   match: function() {
                //     monthsToShow = 2;
                //   },
                //   unmatch : function() {
                //     var monthsToShow = 1;
                //   },
                // });

                this.initDatePicker(prv, cur, self, monthsToShow)
            },
            
            beforeDestroy: function () {
                $(this.$el).datepicker('hide').datepicker('destroy');
            },

            methods: {
                sendDate: function () {
                    this.$emit(date)
                },
                
                initDatePicker: function (prv, cur, self, monthsToShow) {

                    $(this.$el).datepicker({
                        numberOfMonths: monthsToShow,
                        dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                        stepMonths: 1,
                        minDate: 0,
                        firstDay: 1,
                        dateFormat: this.dateFormat,


                        beforeShowDay: function (date) {
                            return [true, ((date.getTime() >= Math.min(prv, cur) && date.getTime() <= Math.max(prv, cur)) ? 'ui-individual-date' : '')];
                        },

                        onSelect: function (dateText, inst) {
                            var d1, d2, d3, d4;
                            console.log($(this), $('#datepicker .ui-state-active').text());

                            
                            var previousActiveDay = $('#datepicker .ui-state-active');

                            if (previousActiveDay.attr('aria-pressed') != false) {
                                previousActiveDay.attr('aria-pressed', false);
                            }


                            prv = cur;
                            cur = (new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay)).getTime();
                            d1 = $.datepicker.formatDate('DD d MM yy', new Date(cur), {});

                            if (prv == -1 || prv == cur) {
                                prv = cur;

                            } else {

                                if (isNaN(prv) == false && isNaN(cur) == false) {
                                    d1 = $.datepicker.formatDate('DD d MM yy', new Date(Math.min(prv, cur)), {});
                                    d2 = $.datepicker.formatDate('DD d MM yy', new Date(Math.max(prv, cur)), {});
                                    d3 = $.datepicker.formatDate('yymmdd', new Date(Math.min(prv, cur)), {});
                                    d4 = $.datepicker.formatDate('yymmdd', new Date(Math.max(prv, cur)), {});
                                }
                            }

                            $('#date__start-date').html(d1)
                            $('#date__end-date').html(d2)

                            APP.calendarAccessibility.createStatusMessage(d1, d2, 'room-booking__status-message', $('.room-booking__calendar'));

                            // update Dom
                            self.$emit('update-date', [d3, d4]);


                            //Manaully set active class if date click is current date
                            //It matches the start date selected to the current day. If they are the same it applies the manual current date class.
                            //This gets around a bizarre bug in jquery ui where if you clicked through a few months then went back to todays date you either couldn't select todays date or it was already selected
                            // Ticket MAYB-1928
                            var today = new Date();
                            var dd = today.getDate();
                            var mm = today.getMonth() + 1; //January is 0!
                            var yyyy = today.getFullYear();
                            var month;

                            today = yyyy + '-' + mm + '-' + dd;
                            var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                            var now = new Date();
                            var month = months[now.getMonth()]; // getMonth method returns the month of the date (0-January :: 11-December)
                            today = dd + ' ' + month + ' ' + yyyy;

                            setTimeout(function () {
                                var original = $('.date__start-date').html();
                                var result = original.substr(original.indexOf(" ") + 1);

                                if (today === result) {
                                    $('.ui-datepicker-today').addClass("ui-datepicker-manual-current-day");
                                }
                                else {
                                    $('.ui-datepicker-manual-current-day').removeClass("ui-datepicker-manual-current-day");
                                }

                                APP.calendarAccessibility.initDateAttributes('datepicker');

                                
                            }, 50);

                        },

                        onChangeMonthYear: function (year, month, inst) {
                            setTimeout(function () {
                                APP.calendarAccessibility.initDateAttributes('datepicker');
                                APP.calendarAccessibility.setTabIndexes('datepicker');
                            }, 10);
                        }
                    })

                    APP.calendarAccessibility.initPresentationMode('datepicker');
                    APP.calendarAccessibility.initDateAttributes('datepicker');
                    APP.calendarAccessibility.initKeyboardNavigation('datepicker');
                }
            }
        });

        const roombooking = Vue.component('roombooking', {
            props: {
                maxAdults: {
                    type: Number,
                    required: true,
                    default: 2
                },
                defaultAdults: {
                    type: Number,
                    required: false,
                    default: 2
                },
                maxChildren: {
                    type: Number,
                    required: true,
                    default: 2
                },
                defaultChildren: {
                    type: Number,
                    required: false,
                    default: 0
                },
                maxRooms: {
                    type: Number,
                    required: true,
                    default: 4
                },
                maxCapacity: {
                    type: Number,
                    required: true,
                    default: 3
                }
            },
            data: function () {
                return {
                    totalAdults: 0,
                    totalChildren: 0,
                    totalPeople: [],
                    showMaxRoomsInfo: false,
                    showMaxPeopleInfo: false,
                    disabledButton: false,
                    totalRooms: 1,
                    date: null,
                    defaultText: null,
                    startDate: null,
                    endDate: null,
                    altHeading: false,
                    rooms: [{
                        adult: this.defaultAdults,
                        children: this.defaultChildren
                    }],
                    url: [{
                        baseUrl: getIBEUrl(),
                        chainId: getIBEChainID(),
                        hotelId: 'H12214',
                        actualPage: 'ov.aspx?',
                        languageId: 'lg=1',
                        pageAnchor: '#teaser?',
                        checkInDate: null,
                        checkOutDate: null,
                        promoCode: null,
                    }]
                };
            },

            mounted: function () {
                var thisComp = this;
                var currentPosition;

                $('.js-room-button').each(function (btn) {
                    $(this).on('click', function (ev) {
                        currentPosition = $(document).scrollTop();
                        thisComp.url[0].hotelId = this.dataset.hotelId;
                        thisComp.altHeading = this.dataset.heading;
                        thisComp.url[0].promoCode = this.dataset.promo;
                        thisComp.defaultText = document.getElementById('date__start-date').innerHTML;
                    });
                });

                function iosBookingFix() {
                    //IOS 8 and 9 hack for booking form when you have todays date selected and start scrolling or click elsewhere it resets for some bizarre reason.
                    //This adds a active class again to make it look correct again
                    if ($('body').hasClass('ios8') || $('body').hasClass('ios9')) {
                        var original = $('.date__start-date').html();
                        var result = original.substr(original.indexOf(" ") + 1);
                        var today = new Date();
                        var dd = today.getDate();
                        var mm = today.getMonth(); //January is 0!
                        var yyyy = today.getFullYear();
                        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                        var month = monthNames[mm];
                        today = dd + ' ' + month + ' ' + yyyy;

                        setTimeout(function () {
                            if (today === result) {
                                if (!$('.ui-datepicker-today').hasClass("ui-datepicker-manual-current-day")) {
                                    $('.ui-datepicker-today').addClass("ui-datepicker-manual-current-day");
                                }
                            }
                            else {
                                $('.ui-datepicker-manual-current-day').removeClass("ui-datepicker-manual-current-day");
                            }
                        }, 50);
                    }
                }

                $('.room-booking').click(function () {
                    iosBookingFix();
                });

                $('#room-booking').scroll(function () {
                    iosBookingFix();
                });
            },

            methods: {

                onChange: function ($event) {

                    $('.room-booking__dropdown-options').removeClass('room-booking__dropdown-options--open');

                    $('.room-booking__dropdown-options').attr('aria-hidden', true);
                    $('.room-booking__form-group').attr('aria-expanded', false);

                    $('.room-booking__filter-btn').removeClass('room-booking__dropdown__open--open');

                    this.checkMaxPeople();
                },

                isMaxCapacity: function (element, index, array) {
                    // returns true or false
                    return element >= this.maxCapacity;
                },

                disableButton: function () {

                    if (this.showMaxRoomsInfo == true || this.showMaxPeopleInfo == true) {
                        this.disabledButton = true;
                    } else {
                        this.disabledButton = false
                    }
                },

                checkMaxPeople: function () {
                    this.totalPeople = [];
                    for (var i = 0, len = this.rooms.length; i < len; i++) {
                        var roomTotal = this.rooms[i].adult + this.rooms[i].children;
                        this.totalPeople.push(roomTotal);
                    }

                    this.showMaxPeopleInfo = this.totalPeople.some(this.isMaxCapacity);
                },

                updateDate: function (date) {
                    this.date = date;
                    this.startDate = date[0];
                    this.endDate = date[1];

                    if (date[1] == null) {
                        $('#date__end-date').html(this.defaultText);
                    }

                    this.url[0].checkInDate = date[0];
                    this.url[0].checkOutDate = date[1];
                },

                checkAvailability: function () {
                    //reset array

                    var roomsUrl = [];
                    var roomsString = '';

                    for (var i = 0, len = this.rooms.length; i < len; i++) {
                        roomsUrl.push('&pdadults_' + (i + 1) + '=' + this.rooms[i].adult + '&pdchildren_' + (i + 1) + '=' + this.rooms[i].children)
                        roomsString += '&pdadults_' + (i + 1) + '=' + this.rooms[i].adult + '&pdchildren_' + (i + 1) + '=' + this.rooms[i].children
                    }

                    var theUrl = this.url[0];
                    if (theUrl.promoCode != null) {
                        theUrl.promoCode = '&promocode=' + theUrl.promoCode;
                    }

                    var promocodevalue = theUrl.promoCode == null ? '' : theUrl.promoCode;
                    var url = theUrl.baseUrl + theUrl.chainId + theUrl.hotelId + '/' + theUrl.actualPage + theUrl.languageId + theUrl.pageAnchor + 'checkin=' + theUrl.checkInDate + '&checkout=' + theUrl.checkOutDate + '&pdrooms=' + this.totalRooms + roomsString + promocodevalue;

                    // append the ga object
                    var bookingUrl = url + '&' + this.getLinker();

                    window.open(bookingUrl);
                },

                getLinker: function () {
                    var ga = window[window['GoogleAnalyticsObject']];
                    if (ga && ga.getAll) {
                        return ga.getAll()[0].get('linkerParam');
                    }
                    return '';
                },

                addRoom: function () {

                    if ((this.rooms.length) == this.maxRooms) {
                        this.showMaxRoomsInfo = true
                    } else {

                        // set room with 0 as default
                        this.rooms.push({
                            adult: 2,
                            children: 0
                        });
                        // keep count of rooms
                        this.totalRooms = this.totalRooms + 1;
                    }

                    enquire.register('screen and (min-width:768px)', {
                        match: function () {
                            APP.scrollbar.init('#room-booking');
                        }
                    });
                },

                arrowNavigationToggle: function ($event) {
                    var currentElem = $event.currentTarget.closest('.room-booking__form-item');
                    
                    var elementToToggle = null;
                    
                    switch ($event.keyCode) {
                        // UP
                        case 38:
                            elementToToggle = $(currentElem).prev('.room-booking__form-item');
                            this.navigateToDropdownElement(elementToToggle);
                            $event.preventDefault();
                            break;

                        // DOWN
                        case 40:
                            elementToToggle = $(currentElem).next('.room-booking__form-item');
                            this.navigateToDropdownElement(elementToToggle);
                            $event.preventDefault();
                            break;

                        case 13:
                            $event.currentTarget.click();
                            $($event.currentTarget.closest('.room-booking__form-group')).attr('aria-expanded', false);
                            $($event.currentTarget.closest('.room-booking__dropdown-options')).removeClass('room-booking__dropdown-options--open');
                            $($event.currentTarget.closest('.room-booking__dropdown-options')).attr('aria-hidden', true);
                            $($event.currentTarget.closest('.room-booking__form-group')).find('.room-booking__filter-btn').focus();
                            $event.preventDefault();
                            break;
                    }
                    
                },

                navigateToDropdownElement: function (elementToToggle) {
                    var activeOptionClass = 'room-booking__radio-item--focus';

                    if (elementToToggle.length > 0) {
                        elementToToggle.closest('.room-booking__dropdown-options').find('.' + activeOptionClass).removeClass(activeOptionClass);
                        elementToToggle.find('label').addClass(activeOptionClass);
                        elementToToggle.find('input').focus();
                    } 
                },

                arrowNavigationInit: function ($event) {
                    var options = $event.currentTarget.parentNode.querySelectorAll('.room-booking__dropdown-options .room-booking__form-item');
                    var activeOptionClass = 'room-booking__radio-item--focus';

                    switch ($event.keyCode) {

                        // DOWN
                        case 40:
                            options[0].querySelector('label').classList.add(activeOptionClass);
                            options[0].querySelector('input').focus();
                            
                            break;
                    }
           
                    
                },
                
                toggleOpenFilter: function ($event) {
                  
                    $event.currentTarget.classList.toggle('room-booking__dropdown__open--open');
                    var isDropdownExpanded = $event.currentTarget.parentNode.getAttribute('aria-expanded');
                    if (isDropdownExpanded == "false") {
                        $event.currentTarget.parentNode.setAttribute('aria-expanded', 'true');
                    } else {
                        $event.currentTarget.parentNode.setAttribute('aria-expanded', 'false');

                    }

                    $event.currentTarget.nextElementSibling.classList.toggle('room-booking__dropdown-options--open');
                    var isDropdownHidden = $event.currentTarget.nextElementSibling.getAttribute('aria-hidden');
                    $event.currentTarget.nextElementSibling.setAttribute('aria-hidden', !isDropdownHidden);
                },

                removeRoom: function (room, key) {

                    if ((this.rooms.length) < this.maxRooms) {
                        this.showMaxRoomsInfo = false
                    }

                    this.rooms.splice(key, 1);

                    this.totalRooms = this.totalRooms - 1;

                    // recalc people once room removed
                    this.checkMaxPeople();
                }
            },
            template: '#roombooking'
        })

        var roomMenu = new Vue({
            el: '#room-booking',
        });
    };

    function getIBEUrl() {

        if (typeof window.pegasusIBEUrl !== 'undefined') {
            return pegasusIBEUrl;
        }
        return 'https://www.reservations-page.com/';
    }

    function getIBEChainID () {

        if (typeof window.pegasusIBEChainID !== 'undefined') {
            return pegasusIBEChainID + '/';
        }
        return 'C00769/';
    }

    return {
        init: init
    };

})(jQuery);
// Used on:
//   - Room & Suites Listing
//   - Function Room Listing

APP.roomCompare = (function ($) {
    'use strict';

    var init = function () {

        var rooms = new Vue({

            el: '#app',
            data: {
                isShown: true,
                allRooms: [],
                selectedRooms: [],
                selectedRoomTypes: [],
                sessionStorageName: '',
                roomTypes: [],
                itemsLoaded: false,
                compareButtonActive: false,
                initialLoad: true // first load of room pods, before being filtered
            },

            components: {
                'room-filter': {
                    data: function () {
                        return this.$root;
                    },
                    // due to two instances of the filter on one page, the checkbox name `checkboxName`
                    // needs to differ to avoid scrolling to first instance on check of checkbox
                    props: ['checkboxName', 'cssId']
                }
            },

            mounted: function () {
                this.generateSessionName();
                this.getData();
                this.sessionStorageCheck();
            },

            updated: function () {
                this.ieWin7Fix();
            },

            // created: function() {},

            computed: {

                filteredRooms: function () {

                    var _this = this,
                        retVal = [];


                    // Add room types to `roomTypes` array from `FiltersOrder` in API (but only if there's at least one item to be returned)
                    if (_this.roomTypes.length === 0) {
                        _.forEach(_this.allRooms.FiltersOrder, function (value, key) {
                            if (typeof _.find(_this.allRooms.Documents, { 'RoomType': value }) !== 'undefined') {
                                _this.roomTypes.push(value);
                            }
                        });
                    }


                    // Filter by room type
                    _.forEach(_this.selectedRoomTypes, function (value, key) {

                        var chosenRoomTypeExists = _.includes(_this.roomTypes, value),
                            chosenRoomType = value;

                        if (chosenRoomTypeExists) { // check if room type exists

                            _.forEach(_this.allRooms.Documents, function (_value, _key) {

                                if (_value.RoomType === chosenRoomType) {
                                    retVal.push(_value);
                                }

                            });

                        }

                    });


                    if (retVal.length === 0) {
                        return _this.allRooms.Documents;
                    } else {
                        return retVal;
                    }

                }
            },

            methods: {

                generateSessionName: function () {
                    this.sessionStorageName = $('body').attr('class').split(' ')[0];
                },

                sessionStorageCheck: function () {
                    //console.log(rooms.data);
                    if (sessionStorage.getItem(this.sessionStorageName) !== null) {
                        this.selectedRooms = JSON.parse(sessionStorage.getItem(this.sessionStorageName));

                        // if more than 4 rooms selected, go to scrollToCompare function
                        if (this.selectedRooms.length >= 4) {
                            this.scrollToElement('#compare-rooms');
                        }

                        this.compareButtonState(this.selectedRooms);
                    }
                },

                // <transition-group>
                // Sets initial state of each `.room-pod`
                beforeEnterRoomPod: function (el, done) {
                    el.style.opacity = 0;
                },

                // <transition-group>
                // On enter of pod, applies the following
                enterRoomPod: function (el, done) {
                    // console.log(el)
                    // console.log(this.allRooms.Documents.length)
                    if (this.initialLoad) {

                        var delay = el.dataset.index * 200;

                        setTimeout(function () {
                            $(el).fadeTo(800, 1);
                        }, delay)

                    } else {
                        el.style.opacity = 1;
                    }


                    setTimeout(function () {
                        rooms.checkItemsLoaded(el.dataset.index)
                    }, delay)

                },

                // <transition-group>
                // On leave of room pod
                leaveRoomPod: function (el, done) {
                    $(el).remove();
                },

                checkItemsLoaded: function (index) {

                    if ((parseInt(index) + 1) == this.allRooms.Documents.length) {

                        this.itemsLoaded = true;

                    }

                },

                // Check if room is selected
                activeRoom: function (roomId) {

                    var selectedRoomId = roomId,
                        roomActive;

                    this.selectedRooms.forEach(function (selectedRoom) {
                        (selectedRoom.Id === selectedRoomId) ? roomActive = true : '';
                    });

                    return roomActive;

                },

                addRoom: function (room, event) {
                    event.preventDefault();
                    event.stopPropagation();

                    var idx = rooms.selectedRooms.indexOf(room);
                    if (idx === -1 && rooms.selectedRooms.length < 4) {
                        rooms.selectedRooms.push(room);
                        sessionStorage.setItem(this.sessionStorageName, JSON.stringify(rooms.selectedRooms));
                    }

                    this.compareButtonState(rooms.selectedRooms);

                },

                removeRoom: function (room, event) {
                    event.preventDefault();
                    event.stopPropagation();

                    var itemToRemove = _.findIndex(this.selectedRooms, room),
                        isInRoomCompare = $(event.target).closest('.room-compare').length;


                    Vue.delete(this.selectedRooms, itemToRemove);
                    sessionStorage.setItem(this.sessionStorageName, JSON.stringify(rooms.selectedRooms));

                    // if 2nd to last item is remove from room compare, scroll to top
                    if (this.selectedRooms.length < 2 && isInRoomCompare) {
                        this.scrollToElement('#room-filter-1', 800);
                    }

                    this.compareButtonState(this.selectedRooms);
                },

                compareButtonState: function (room) {
                    return (room.length < 2) ? this.compareButtonActive = false : this.compareButtonActive = true;
                },

                goToComparisonTable: function(element, scrollSpeed) {
                    this.scrollToElement(element, scrollSpeed);
                    setTimeout(function () {
                        $('.room-compare').focus();
                    }, scrollSpeed);
                },

                scrollToElement: function (element, scrollSpeed) {
                    var scrollSpeed = scrollSpeed || 1,
                        headerHeight = $('.header').height(),
                        siteWideBanner = 0;

                    if ($('.site-wide-banner').length > 0) {
                        siteWideBanner = $('.site-wide-banner').height();
                    }

                    $('html, body').animate({
                        scrollTop: ($(element).offset().top - headerHeight - siteWideBanner)
                    }, scrollSpeed);
                },

                toggle: function (clicked) {
                    clicked = !clicked
                },

                ieWin7Fix: function () {
                    if ($('.post-list-item').length) {
                        $('.last-pod').removeClass('last-pod');
                        $('.pod-list-even').removeClass('pod-list-even');

                        var postListItems = $('.post-list-item').length;
                        var remainder = postListItems % 3;

                        if (remainder === 2) {
                            $('.post-list-item').last().addClass('last-pod');
                        }

                        if (remainder === 0) {
                            $('.post-list-item:nth-last-child(2)').addClass('pod-list-even');
                            $('.post-list-item:nth-last-child(3)').addClass('pod-list-even');
                        }
                    }
                },

                // Toggles `is-hovered` class when a room pod is clicked
                // Only occurs on tablet view
                toggleRoomHoverState: function (event) {

                    enquire.register('screen and (min-width:' + APP.config.breakpoint.smMin + 'px) and (max-width: ' + APP.config.breakpoint.smMax + 'px)', {
                        match: function () {

                            var $roomPod = $(event.target).closest('.room-pod');

                            if (!$roomPod.hasClass('is-hovered') && !$roomPod.hasClass('room-pod--compare')) {
                                event.preventDefault();
                            }

                            $roomPod.toggleClass('is-hovered');
                        }
                    });

                },

                arrayIncludes: function (collection, value, index) {
                    return _.includes(collection, value, index);
                },

                // Used on mobile only
                toggleFilterVisbility: function () {

                    $('.room-filter-overlay').toggleClass('is-active');
                    $('body').toggleClass('overflow-hidden');
                    $('header').toggleClass('low-z-index');

                    enquire.register('screen and (min-width:' + APP.config.breakpoint.smMin + 'px)', {
                        match: function () {
                            $('.room-filter-overlay').removeClass('is-active');
                            $('body').removeClass('overflow-hidden');
                            $('header').removeClass('low-z-index');
                        }
                    });

                },

                filterItemClicked: function (cssId) {
                    if (cssId === 'room-filter-2') {
                        this.scrollToElement('#room-filter-1', 800);
                    }

                    if (this.initialLoad) {
                        this.initialLoad = false;
                    }

                    $('.room-pod-wrapper').css('opacity', 0).delay(200).fadeTo(800, 1); // TODO: improve how fade of pod wrapper is done


                },

                clearFilter: function () {
                    this.selectedRoomTypes = [];
                },

                // Return a number of chunks, e.g. use for Bootstrap rows
                // chunks: function(value, size) {
                //   return _.chunk(value, size);
                // },

                getData: function () {

                    // var dataUrl = '/Static/src/js/data/GetSelectedRoomsFullNew.json'; // local static version
                    var dataUrl = 'search'; // API feed from CMS

                    $.ajax({
                        url: dataUrl
                    })
                        .done(function (data) {
                            rooms.allRooms = data;
                        })
                        .fail(function () {
                            console.log('error getting rooms API');
                        });
                },
            }
        });
    };

    // TODO: this is a temp fix
    // When more resource can be allocated, add better solution
    // Ticket: MAYB-737
    var tempHeight = function () {

        setTimeout(function () {
            $('.room-pod-wrapper').removeClass('room-pod-wrapper--temp-height');
        }, 1500);

    };

    return {
        init: init,
        tempHeight: tempHeight
    };

})(jQuery);

APP.scrollTop = (function($) {
  'use strict';

  var $scrollBtn = $('#btnScrollTop');

  var init = function() {



    if ($(this).scrollTop() > 400) {
      $scrollBtn.addClass('is-active');
    } else {
      $scrollBtn.removeClass('is-active');
    }
    // if the window has been scrolled nore than a given amount, show the button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 400) {
        $scrollBtn.addClass('is-active');
      } else {
        $scrollBtn.removeClass('is-active');
      }
    });

    // click event to scroll the page to the top
    $scrollBtn.on('click', function(e) {
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    });
  };

  return {
    init: init
  };

})(jQuery);

APP.scrollbar = (function($) {
  'use strict';

  var init = function(el) {
    $(el).perfectScrollbar({
      wheelSpeed: 1,
      suppressScrollX: true
    });
  };

  return {
    init: init
  };

})(jQuery);

APP.select2Accessibility = (function ($) {
    'use strict';

    var init = function () {
        $("body").on('keyup', ".select2,.select2-dropdown", function (e) {
            var KEYS = { UP: 38, DOWN: 40 };
            var $sel2 = $(this).closest(".select2");

            if ($sel2.length == 0) {
                $sel2 = $(".select2.select2-container--open");
            }

            var $sel = $sel2.data("element")
            if ($sel.length) {
                var newValue

                if (e.keyCode === KEYS.DOWN && !e.altKey) {
                    newValue = $sel.find('option:selected').nextAll(":enabled").first().val();
                } else if (e.keyCode === KEYS.UP) {
                    newValue = $sel.find('option:selected').prevAll(":enabled").first().val();
                }

                if (newValue != undefined) {
                    $sel.val(newValue);
                    $sel.trigger('change');
                }
            }

        });
    };

    return {
        init: init,
    };

})(jQuery);


APP.siteNavigation = (function($) {
  'use strict';

  var options = {
    nav: '.js-site-menu-wrapper',
    navIcon: '.js-site-menu-btn',
    menu: '.js-site-menu'
  };

  var init = function() {
    createSiteNavigation();
  };

  var createSiteNavigation = function() {

    if ($(options.nav).length) {

      $(options.nav).on('click' , function() {
        toggleMenu();
      });

      $(options.navIcon).on('click', function() {
        toggleMenu();
      });

      // add ARIA attributes
      $(options.navIcon).attr('aria-controls', $(options.menu).attr('ID'));
      $(options.navIcon).attr('aria-expanded', 'false');
      $(options.menu).attr('aria-labelledby', $(options.navIcon).attr('ID'));
      $(options.menu).attr('aria-hidden', 'true');
      $(options.navIcon).attr('aria-label', "Open navigation menu");
        $(options.menu).find('a').each(function () {
            $(this).attr('tabindex', -1);
        })

    }
    };

    $(document).on('keydown', function (event) {

        if (event.keyCode == 27 && $('.js-site-menu-wrapper.is-active').length) {

            toggleMenu();
            $('.js-room-button').focus();
        }
    });

  var toggleMenu = function() {

    var state = $(options.navIcon).attr('aria-expanded') === 'false' ? true : false;
    $(options.navIcon).attr('aria-expanded', state);
    $(options.menu).attr('aria-hidden', !state);

    // Enable/disable panel scrolling when menu is open on homepage
    // Disabled due to bug #70612
    // if( $('body.homepage').length ) {
    //   if(state) {
    //     $.scrollify.disable();
    //   } else {
    //     $.scrollify.enable()
    //   }
    // }
    if (!state) {
        $(options.navIcon).attr('aria-label', "Open navigation menu");
        $(options.navIcon).removeAttr('aria-keyshortcuts');
    } else {
        $(options.navIcon).attr('aria-keyshortcuts', "Escape");
        $(options.navIcon).attr('aria-label', "Close navigation menu");
    }
    $(options.navIcon).toggleClass('open');
    $('html').toggleClass('overflow-hidden');


    // Enable / disable touchmove when menu is open
    document.ontouchmove = function(e) {
      if(state) {
        e.preventDefault();
      } else {
        return true;
      }
    };


    // Destroy and re-init gallery
    // Fixes issue around scrollbar show/hide when menu is open
    if( $('.gallery.slick-slider').length ) {
      var $currentSlideImg = $('.slick-current .gallery__image-slide');

      if(state) {
        $currentSlideImg.css('margin-right', '-17px'); // scrollbar width
      } else {
        $currentSlideImg.css('margin-right', '');
      }

    }

    // show/hide the content
    $(options.nav).toggleClass('is-active');
    $(options.menu).toggleClass('is-active');
     

      if ($(options.menu).hasClass('is-active')) {
          $(options.menu).find('a').each(function (index) {
              if (index == 0) {
                  $(this).focus();
              }
              $(this).removeAttr('tabindex');
          })
      } else {
          $(options.menu).find('a').each(function () {
              $(this).attr('tabindex', -1);
          })
      }

  };

  var destroySiteNavigation = function() {
    console.log('destroy')

    // remove ARIA attributes
    $(options.navIcon).removeAttr('aria-controls');
    $(options.navIcon).removeAttr('aria-expanded');
    $(options.menu).removeAttr('aria-labelledby');
    $(options.menu).removeAttr('aria-hidden');

    // unbind click function
    $(options.navIcon).off('click');

    // remove inline styles if mobile nav is closed
    if ($(options.menu).is(':hidden')) {
      $(options.menu).removeAttr('style');
    }

  };

  return {
    init: init,
    createSiteNavigation: createSiteNavigation,
    destroySiteNavigation: destroySiteNavigation
  };

})(jQuery);

APP.siteWideBanner = (function ($) {
    'use strict';


    var COOKIE_NAME = 'sitewidebanner';
    var CLOSE_BTN = '.site-wide-banner .close';
    var BODY_SITE_BANNER_CLASS = 'has-site-banner';

    var init = function () {

        $(document).ready(function () {
            //$('body').on('click', CLOSE_BTN, onCloseBtn);
        });
    };

    // Commented out due to COVID-19 banner usage, uncomment to re-enable functionality
    //var onCloseBtn = function (e) {
    //    e.preventDefault();

    //    var $this = $(this);

    //    $.cookie(COOKIE_NAME, 1, {
    //        path: '/'
    //    });

    //    $('body').removeClass(BODY_SITE_BANNER_CLASS);

    //    setTimeout(function() {
    //        $('.site-wide-banner').remove();
    //    }, 401);
    //};

    return {
        init: init
    };

})(jQuery);


APP.socialShare = (function () {
    'use strict';

    var init = function () {

        _toggleVisibility();
        _initShare();

    };

    var _toggleVisibility = function () {

        var options = {
            fadeSpeed: 300,
            delay: 300
        };

        $('.social-share-btn').on('click', function () {

            if ($(this).hasClass('is-active')) { // fade out
                $($(this).next('.social-share').find('.social-share__item').get().reverse()).each(function (index) {
                    $(this).delay(options.delay * index).fadeOut(options.fadeSpeed);
                }).promise().done(function () {
                    $(this).closest('.social-share').prev().removeClass('is-active');
                });
            } else { // fade in
                $(this).addClass('is-active');
                $(this).next('.social-share').find('.social-share__item').each(function (index) {
                    $(this).delay(options.delay * index).fadeIn(options.fadeSpeed);
                });
            }
        });
    };

    var _initShare = function () {

        $('.social-share__link').click(function (e) {
            var expr = $(this).attr('class'),
                thisUrl = encodeURIComponent(location.href),
                dataAttr = $(this).attr('data-account');

            e.preventDefault();

            _shareLink(expr, thisUrl, dataAttr);
        });

    };

    var _shareLink = function (expr, thisUrl, dataAttr) {

        switch (expr) {
            case 'social-share__link social-share__link--twitter':
                window.open(
                    'http://twitter.com/intent/tweet?source=webclient&text=' + thisUrl + ' ' + dataAttr,
                    '',
                    'width=626,height=436'
                );
                break;
            case 'social-share__link social-share__link--facebook':
                window.open(
                    'http://www.facebook.com/sharer.php?u=' + thisUrl + '',
                    '',
                    'width=626,height=436'
                );
                break;
            case 'social-share__link social-share__link--email':
                window.open(
                    'mailto:' + dataAttr + '?subject=I%20saw%20this%20and%20thought%20of%20you&body=' + thisUrl,
                    '_top',
                    ''
                );
                break;
            case 'social-share__link social-share__link--linkedin':
                window.open(
                    'http://www.linkedin.com/shareArticle?mini=true&url=' + thisUrl,
                    '',
                    'width=626,height=436'
                );
                break;
        }

    };

    return {
        init: init
    };

})();
// Vue.component('video-player', {
//   template: '<p>testing testing</p>'
// });

// new Vue({
//   el: '.testing'
// });
APP.video = (function($) {
  'use strict';

  var init = function() {
    // a little each loop to rewrite the video id's for
    // the purposes of vue individuality
    $('.video-container')
      .closest('.video') // needed this method to avoid the <htmL> tag being selected (modernizr .video class)
      .each(function(i, el) {
        var newId = 'video_' + i;
        $(el).attr('id', newId);
        _createVideoPlayer('#' + newId);
      });
    };



    var mouseEnterTime;

    var _createVideoPlayer = function(element) {
      new Vue({
        el: element,
        data: {
          $video: null,
          counter: 0,
          video: {
            $videoSlider: null,
            len: 0,
            current: 0,
            loaded: 0,
            autoplaySupported: null,
            moving: false,
            pos: {
              start: 0,
              width: 0,
              innerWidth: 0,
              current: 0
            }
          },
          sources: [{
            src: '',
            type: 'video/mp4'
          }],
          options: {
            autoplay: false,
            poster: '/Static/images/content/fallback-image.jpg'
          },
          volume: {
            muted: false,
          },
          player: {
            $player: null,
            pos: null
          },
          tmp: {
            contrlHideTimer: null
          },
          state: {
            mobileBehaviour: false,
            contrlShow: true,
            vol: 0.9,
            currentTime: 0,
            fullScreen: false,
            playing: false,
            hasPlayed: false,
            mouseOverMoving: true,
            currentIntervalled: 0
          }
        },
        computed: {
          playbackPositionStyle: function() {
            return {
              left: this.video.pos.current + '%'
            }
          }
        },
        mounted: function() {
          var self = this;

        //fill in some data
        this.$video = this.$el.getElementsByTagName('video')[0];
        this.sources[0].src = this.$video.getAttribute('data-src');
        this.options.poster = this.$video.getAttribute('data-poster');
        this.options.autoplay = this.$video.getAttribute('data-autoplay');


        //this.isAutoplaySupported()
        //initiate and if autoplay then go
        this.init();

        setInterval(function() {
          self.state.currentIntervalled = self.video.pos.current;
        }, 250);


      },

      beforeDestroy: function() {
        document.body.removeEventListener('mousemove', this.mouseMoveAction);
        document.body.removeEventListener('mouseup', this.mouseUpAction);
      },

      methods: {
        init: function() {
          var self = this;
          sessionStorage.autoplaySupported = false ? this.autoplaySupported = false : this.autoplaySupported = true;

          if (!this.autoplaySupported) {
            $(this.$video).attr('poster', this.$video.dataset.poster).attr('autoplay', false);
          }

          this.initVideo();
          //this.initPlayer();

          document.body.addEventListener('mousemove', this.mouseMoveAction, false);
          document.body.addEventListener('mouseup', this.mouseUpAction, false);

          enquire.register('screen and (max-width:' + APP.config.breakpoint.xsMax + 'px)', {
            match: function() {
              self.state.mobileBehaviour = true;
            },
            unmatch: function() {
              self.state.mobileBehaviour = false;
            }
          });


        },

        initVideo: function() {
          var $videoSlider = this.$el.getElementsByClassName('video__slider')[0];
          var $videoInner = $videoSlider.getElementsByClassName('video__playhead')[0];
          this.$videoSlider = $videoSlider;
          this.video.pos.start = $videoSlider.getBoundingClientRect().left;
          this.video.pos.innerWidth = $videoInner.getBoundingClientRect().width;
          this.video.pos.width = $videoSlider.getBoundingClientRect().width - this.video.pos.innerWidth;
          this.getTime();
        },

        // initPlayer: function() {
        //   var $player = this.$el.getElementsByClassName('video-container')[0];
        //   this.player.pos = $player.getBoundingClientRect();
        //   this.player.$player = $player;
        // },

        mouseEnterVideo: function() {
          var self = this;

          if (this.tmp.contrlHideTimer) {
            clearTimeout(this.tmp.contrlHideTimer);
            this.tmp.contrlHideTimer = null;
          }

          $(self.$video).parent().on('mousemove', function(e){
            clearTimeout(mouseEnterTime);
              //mouse moving
              self.state.mouseOverMoving = true;

              mouseEnterTime = setTimeout(function() {
                //mouse not moving
                self.state.mouseOverMoving = false;
              }, 1500);

            });

          if(this.state.hasPlayed) {
            this.state.contrlShow = true;
          }

        },

        mouseLeaveVideo: function(e) {
          this.state.contrlShow = false;
          this.state.mouseOverMoving = false;

          clearTimeout(mouseEnterTime);

          if (this.tmp.contrlHideTimer) {
            clearTimeout(this.tmp.contrlHideTimer);
          }

          this.tmp.contrlHideTimer = setTimeout(this.setControlView, 2000);
        },

        setControlView: function() {

          if(this.state.playing) {
            // this.state.contrlShow = false;
            this.tmp.contrlHideTimer = null;
          }
          else {
            this.state.contrlShow = true;
          }
        },

        toggleContrlShow: function() {
          this.state.contrlShow = !this.state.contrlShow;
        },

        getTime: function() {
          var self = this;
          this.$video.addEventListener('progress', function(e) {
            if (self.video.readyState === 4) {
              self.video.loaded = (-1 + (self.$video.buffered.end(0) / self.$video.duration)) * 100;
            }
          });

          this.video.len = this.$video.duration;
          this.$video.addEventListener('ended', function() {
            setTimeout(function(){
              self.$video.pause();
              self.$video.currentTime = self.$video.duration - 1;
            }, 1);
          });
        },

        setVideoByTime: function(percent) {
          this.$video.currentTime = Math.floor(percent * this.video.len);
        },

        play: function() {

          var self = this;
          this.counter = this.counter + 1;
          this.state.playing = !this.state.playing;
          this.state.hasPlayed = true;
          // this.toggleContrlShow();
          this.state.mouseOverMoving = true;
          $('body').trigger('mousemove');


          if (self.$video.currentTime === self.$video.duration - 1) {
            self.$video.currentTime = 0;
          }

          if (this.$video) {
            if (this.state.playing) {

              this.$video.play();
              this.mouseLeaveVideo();
              this.timeline();
              this.$video.addEventListener('timeupdate', this.timeline);
              this.$video.addEventListener('ended', function(e) {
                self.state.playing = false;
                self.video.pos.current = 0;
                self.$video.currentTime = 0;

                dataLayer.push({
                  event: 'videoEnded',
                  name: self.sources[0].src
                });
              });

              dataLayer.push({
                event: 'videoPlay',
                name: this.sources[0].src
              });
            }
            else {
              this.$video.pause();
              dataLayer.push({
                event: 'videoPaused',
                name: this.sources[0].src
              });
            }
          }
        },

        videoClick: function() {
          var self = this;

          if(this.state.mobileBehaviour) {
            this.toggleContrlShow();
            this.play();
          }
          else {
            this.play();
            // this.state.contrlShow = true;
            setTimeout(function(){
              self.state.contrlShow = true;
              self.state.mouseOverMoving = true;
            }, 10);
          }
        },

        timeline: function() {
          var percent = (this.$video.currentTime / this.$video.duration) * 100;
          this.video.pos.current = percent.toFixed(3);
        },

        videoMove: function(e) {
          this.initVideo();
          this.video.moving = true;
        },

        slideClick: function(e) {
          this.videoSlideMove(e);
        },

        volMuted: function() {
          this.$video.muted = !this.$video.muted;
          this.volume.muted = this.$video.muted;
        },

        fullScreen: function() {
          if (!this.state.fullScreen) {
            this.state.fullScreen = true;
            if (document.documentElement.requestFullscreen) {
              this.$video.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
              this.$video.mozRequestFullScreen(); // Firefox
            } else if (document.documentElement.webkitRequestFullscreen) {
              this.$video.webkitRequestFullscreen(); // Chrome and Safari
            } else if (document.documentElement.msRequestFullscreen) {
              this.$video.msRequestFullscreen(); // IE
            } else if(this.$video.webkitSupportsFullscreen) {
              this.$video.webkitEnterFullscreen();
            }

          }
          else {
            this.state.fullScreen = false;
            document.webkitExitFullScreen();
            document.msExitFullScreen();
            document.mozExitFullScreen();
          }

          setTimeout(this.initVideo, 200);
        },

        mouseMoveAction: function(e) {
          if (this.video.moving) {
            this.videoSlideMove(e);
          }
          this.contrlHider(e);
        },

        contrlHider: function(e) {
          var x = _getMousePosition(e, 'x');
          var y = _getMousePosition(e, 'y');
          if (!this.player.pos) return;
          if (x > this.player.pos.left &&
            x < this.player.pos.left + this.player.pos.width
            ) {
            if (
              y > this.player.pos.top + this.player.pos.height * 0.6 &&
              y < this.player.pos.top + this.player.pos.height
              ) {
              return this.mouseEnterVideo();
          }
        }
        return this.mouseLeaveVideo();
      },

      videoSlideMove: function(e) {
        var x = _getMousePosition(e) - this.video.pos.start;
        if (x > 0 && x < this.video.pos.width) {
          this.video.pos.current = x;
          this.setVideoByTime(x / this.video.pos.width);
        }
      },

      mouseUpAction: function(e) {
        this.video.moving = false;
      }

    }
  });
}

var _getMousePosition = function(e, type) {
  var type = 'x';
  if (type === 'x') {
    return e.pageX;
  }
  return e.pageY;
};

var _pad = function(val) {
  val = Math.floor(val);
  if (val < 10) {
    return '0' + val;
  }
  return val + '';
};

  // Return the object that is assigned to the module
  return {
    init: init
  };

})(jQuery);
