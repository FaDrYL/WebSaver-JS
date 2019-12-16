/*
 * Script Name: clear_zhihu.js
 * Author: FaDr_YL (_YL_)
 * Last Modified: 2019/12/16
 * Description: Block some useless element to make mobile website version of "zhihu" more clearly.
 */


// Delay for whole script. It can be customed by current network speed. (unit: millisecond)
// 脚本运行的延迟，可以根据网速进行自定义。（单位：毫秒）
var delay_whole = 700;
// Delay for click button to display all content. (delay_whole + delay_click) (unit: millisecond)
var delay_click = 10;
// All classes that need to clear
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
            // clear all element that with "this" class name.
            for(var j = 0; j < block_elements.length; j++){
                // clear, unshown
                block_elements[j].style.display='none';
            }
        }
    }
    
    // click button to display all content.
    document.getElementsByClassName('Button ContentItem-rightButton ContentItem-expandButton Button--plain')[0].click();
    setTimeout(function(){
        // click button to hide the pop-up dialog.
        document.getElementsByClassName('MobileModal-backdrop')[0].click();
    }, delay_click);
}, delay_whole);
