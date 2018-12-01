var myobj;

$.getJSON('message.json', function(data) {
})
.done(function(response){
    myobj=response;
    console.log(myobj.comment.answer);
});
