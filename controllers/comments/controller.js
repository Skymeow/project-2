const Comment = require('../../models/comment');
let controller = {};
// controller.index = (req,res)=>{
//   Comment
//   .findAll()
//   .then((data) => {
//     console.log('data:', data)
//     res.render('./show', {
//       comments: data
//     })
//   })
//   .catch(err=>console.log('error:',err));
// };

controller.newcomment=(req,res)=>{
   Comment
   .findById(req.params.id)
   .then(()=>{
    res.render('./new comment')
  })

   .catch(err=>console.log('error:',err));
}

controller.updatecomment=(req,res)=>{
  Comment
  .updatecomment(req.body.comments,req.params.id)
  .then(()=>res.redirect('/comments'))
  .catch(err=>console.log('error:',err));
}

controller.vote =(req,res)=>{
  Comment
  .vote(req.params.id)
  .then(()=>{
    res.redirect('/topics/${req.params.id}')
  })
   .catch(err => console.log('ERROR:', err));

}


module.exports = controller;
