/**
 * @author Todd Shelton
 */
$(document).ready(function(){
	
	
	$("nav p").click(function(e){
		var linkName = $(this).html().toLowerCase();
		var url = "http://mypage.iu.edu/~trshelto/ecoSite/scripts/php/func.php";
		
		var posting = $.post(url, {func: "nav", navName: linkName});

		
		posting.fail(function(e){
			$.get("content/" + linkName + ".html", function(data){
			   $('#content').html(data);
			});
		});
		
        posting.done(function(data) {
            $('#content').html(data);
        });
		
	});
});
