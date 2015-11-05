
(function() {

  $.Tabs = function (el) {
    this.$el = $(el);
    this.$contentTabs = $(this.$el.data("content-tabs"));
    this.$activeTab = this.$contentTabs.find(".active");

    this.$el.on("click", this.clickTab.bind(this));
  };

  $.fn.tabs = function () {
    return this.each(function () {
      new $.Tabs(this);
    });
  };

  $.Tabs.prototype.clickTab = function () {
      event.preventDefault();
      this.$activeTab.addClass("transitioning");

    // debugger
      var $currentTarget = $(event.target);
      $(".content-tabs article").one("transitionend", this.activateTab.bind(this, $currentTarget));
  }

  $.Tabs.prototype.activateTab = function ($currentTarget) {
    // debugger
    this.$activeTab.removeClass("transitioning");
    this.$activeTab.removeClass("active");
    $(this.$el.find(".active")).removeClass("active")
    this.$activeTab = this.$contentTabs.find($currentTarget.attr("href"));
    $currentTarget.addClass("active");
    this.$activeTab.addClass("active");
    this.$activeTab.addClass("transitioning");

    setTimeout(function (){
      this.$activeTab.removeClass("transitioning");
    }.bind(this), 0);

  }

})();
