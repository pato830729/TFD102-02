$(function() {
	let $carousel = $(".banner-carousel");

	$carousel.flickity({
		cellAlign: "left",
		contain: true,
		lazyLoad: 2,
		wrapAround: true,
		autoPlay: true
	});

	$carousel.find("a").on("focus", function(e) {
		let $this = $(this);
		let $item = $this.parent(".banner-item");
		let $slider = $item.parents(".flickity-slider");
		let index = $item.index();

		$slider.addClass("disable-transform");
		$item
			.siblings(".banner-item")
			.removeClass("is-focus")
			.addClass("focusItem");
		$item.addClass("is-focus");

		$carousel.flickity("select", index);
	});

	$carousel.find("a").on("blur", function() {
		let $this = $(this);
		let $item = $this.parent(".banner-item");
		let $slider = $item.parents(".flickity-slider");
		$slider.removeClass("disable-transform");
		$item.removeClass("is-focus");
		$item.siblings(".banner-item").removeClass("is-focus focusItem");
	});
});
