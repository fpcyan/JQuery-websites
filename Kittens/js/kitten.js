(function () {
  $.Carousel = function (el) {
    this.$el = $(el);
    this.activeIdx = 0
    this.$pics = $($(".items li"));
    this.$pics.eq(this.activeIdx).addClass("active");
    this.$pics.eq((this.activeIdx-1) % 6).addClass("active left");
    this.$pics.eq((this.activeIdx+1) % 6).addClass("active right");
    this.transitioning = false;
    // this.clickHandlers();
    this.slideDir();
  }

  $.fn.carousel = function () {
    return this.each(function () {
      new $.Carousel(this);
    });
  };


  $.Carousel.prototype.clickHandlers = function() {
    $(".slide-left").on("click", function(event) {
      event.preventDefault();
      // $(".items li").eq(this.activeIdx).removeClass("active");
      $(".items li").eq(this.activeIdx).addClass("left")
      this.activeIdx = (this.activeIdx-1) % 6;
      console.log(this.activeIdx)
      $(".items li").eq(this.activeIdx).addClass("active");

    }.bind(this));

    $(".slide-right").on("click", function(event) {

      event.preventDefault();
      // $(".items li").eq(this.activeIdx).removeClass("active");
      this.activeIdx = (this.activeIdx+1) % 6;
      console.log(this.activeIdx)
      // $(".items li").eq(this.activeIdx).addClass("active");

    }.bind(this));
  }


  $.Carousel.prototype.slideDir = function() {

    $(".slide-right").on("click", function(event) {
      if (this.transitioning === true) {
        return;
      };

      this.transitioning = true;
      this.activeIdx = (this.activeIdx + 1) % 6;
      this.$pics.eq(this.activeIdx).addClass("active");
      this.$pics.eq((this.activeIdx-1) % 6).addClass("left");
      this.$pics.eq((this.activeIdx+1) % 6).addClass("active right");


      this.$pics.eq((this.activeIdx) % 6).removeClass("right");

      $(".items li").one("transitionend", function () {
        this.$pics.eq((this.activeIdx - 2) % 6).removeClass("active left");
        this.transitioning = false;
      }.bind(this));

    }.bind(this));

    $(".slide-left").on("click", function(event) {
      if (this.transitioning === true) {
        return;
      };

      this.transitioning = true;
      this.activeIdx = (this.activeIdx - 1) % 6;
      this.$pics.eq(this.activeIdx).addClass("active");
      this.$pics.eq((this.activeIdx+1) % 6).addClass("right");
      this.$pics.eq((this.activeIdx-1) % 6).addClass("active left");

      this.$pics.eq((this.activeIdx) % 6).removeClass("left");

      $(".items li").one("transitionend", function () {
        this.$pics.eq((this.activeIdx + 2) % 6).removeClass("active right");
        this.transitioning = false;
      }.bind(this));
    }.bind(this));
  }


})();
