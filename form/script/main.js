$(function(){
 $("#phone").mask('+38(000) 000-0000');
 
 $('#applyForm').submit(function(e){
 	e.preventDefault();
 	var studentName = $("#name").val();
 	var phone = $("#phone").val();
 	var email = $("#email").val();
 	var course = $('#applyForm').data('course');
 	Email.send({
    	SecureToken : "e0a4b5a1-6709-4ad1-a4dc-75e08dc9fb2c ",
    	To : 'jasminebrod117@gmail.com',
    	From : "bodya1599@gmail.com",
    	Subject : "Test subject",
    	Body : "And this is the body"
	}).then(
  		message => alert("thanks")
	);
 	$("#modal").removeClass("show-my");
 	$("#thanks").addClass("show-my");
 });
 
 $(".showModal").click(function(e){
 	$('#modal').addClass("show-my");
 	$('#applyForm').data('course',$(this).attr('id'));
 });
 
 $('#closeModal').click(function(e){
 	$('#modal').removeClass("show-my");
 });

$('#closeThanks').click(function(e){
 	$('#thanks').removeClass("show-my");
 });



});


