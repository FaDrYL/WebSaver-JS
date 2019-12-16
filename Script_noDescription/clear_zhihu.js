Javascript:
    var delay_whole = 700;
    var delay_click = 10;
    var block_classes = ['MobileAppHeader-downloadLink', 'MobileAppHeader-authLink', 'HotBanner AdHotBanner', 'OpenInAppButton OpenInApp is-shown',
          'Button ViewAllInappButton Button--primary Button--blue', 'Button Button--primary Button--blue',
          'Input', 'MobileAppHeader-searchBox MobileAppHeader-searchBoxWithUnlogin Input-wrapper', 
          'Card RelatedReadings', 'Card HotQuestions',
          'HotQuestionsItem', 'HotQuestions-content', 'HotQuestions-title', 'HotQuestionsItem HotQuestionsItem-mul', 'HotQuestions-bottomButton',
          'MHotFeedAd-content', 'MHotFeedAd', 'MBannerAd'];

    setTimeout(function () {
      for(var i = 0; i < block_classes.length; i++){
          var block_elements = document.getElementsByClassName(block_classes[i]);
          if(block_elements != null){
              for(var j = 0; j < block_elements.length; j++){
                  block_elements[j].style.display='none';
              }
          }
      }

      document.getElementsByClassName('Button ContentItem-rightButton ContentItem-expandButton Button--plain')[0].click();
      setTimeout(function(){
          document.getElementsByClassName('MobileModal-backdrop')[0].click();
      }, delay_click);
    }, delay_whole);
