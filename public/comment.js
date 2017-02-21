$(document).ready(()=>{
  const link = $('#link').attr('data');


  console.log('the dom is loaded',link);
  $.ajax({
       type: "GET",
        dataType: "json",
        url: `/comments/${link}`,

     })
     .then((data)=>{
        // console.log('this is the data', data)
        $('.comment').html(data.comments.comment)
        $('.voting').html(data.comments.voting)
     })

});

