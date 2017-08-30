(function () {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
        onInit: function (swiper) { 
           swiperAnimateCache(swiper); 
            swiperAnimate(swiper);
        },
        onSlideNextStart:function(swiper){
            swiperAnimate(swiper);
        },
        onSlideNextEnd: function (swiper) {
            swiperAnimate(swiper); 
        }
    });
    document.getElementById("musical").onclick = function () {
        var musicAudio= document.getElementById("music-audio");
        if (this.getAttribute("class").indexOf("musical-stop") == -1) {
            //暂停播放音乐
            musicAudio.pause();
            this.setAttribute("class", "musical musical-stop");
        }
        else {
            this.setAttribute("class", "musical");
            //继续播放夤夜
            musicAudio.play();
        }
    }
})();