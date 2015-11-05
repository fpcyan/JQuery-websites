
(function() {

  $.Tabs = function (el) {
    this.$el = $(el);
    this.$contentTabs = $(this.$el.data("content-tabs"));
    this.$activeTab = this.$contentTabs.find(".active");

    this.clickTab();
  };

  $.fn.tabs = function () {
    return this.each(function () {
      new $.Tabs(this);
    });
  };

  $.Tabs.prototype.clickTab = function () {
    $(this.$el).on("click", function (event) {
      event.preventDefault();
      $(this.$el.find(".active")).removeClass("active")
      this.$activeTab.removeClass("active");

      var $currentTarget = $(event.target);

      this.$activeTab = this.$contentTabs.find($currentTarget.attr("href"));
      $currentTarget.addClass("active");
      this.$activeTab.addClass("active");
    }.bind(this));
  }

})();
