$( document ).ready(function() {

// console.log("Wiki This!")

// $('').on(){

// };

$(document).on('keypress', function(e) {
            if(e.keyCode==13){
                 $('#search').trigger('click');
             }
        });


$("#search").click(function(){
	//get search input
	var searchTerm= $("#searchTerm").val();
	//api url with searchTerm
	var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";

	$.ajax({
		type:"GET",
		url:url,
		async:false,
		dataType:"json",
		success:function(data){
			//console.log(data[1][0]);
			//console.log(data[2][0]);
			//console.log(data[3][0]);
			$('.output').html(' ');
			$('.wiki').css('width', '150rem')
			for(var i=0; i<data[1].length; i++){
			$('.output').prepend("<li><a  href= "+ data[3][i]+ ">" + data[1][i]+ "</a><p>" +data[2][i]+ "</p></li>");
			$('a').attr('target', '_blank');
			$('.wiki-box').css('height', '32rem');
			}
		},
		error:function(errorMessage){
			alert("Error");
		}


	});

})


});