page ('/', homeController.reveal);

$(".tab").click(function(event) {
page($(this).attr('href'), $(this).reveal);
}


page();
