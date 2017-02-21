const Comment = require('../../models/comment');

let controller = {};
// controller.index = (req,res)=>{
//   console.log(req.params.id)
//   Comment
//   .findById(req.params.id)
//   .then((data) => {
//     console.log('data:', data)
//     res.json({comments: data})
//   })
//   .catch(err=>console.log('error:',err));
// };

controller.newcomment=(req,res)=>{
    res.render('new_comment');
  }



controller.update=(req,res)=>{
  Comment
  .update(req.body.comments)
  .then(()=>res.redirect('/topics/req.params.id'))
  .catch(err=>console.log('error:',err));
}

// controller.vote =(req,res)=>{
//   Comment
//   .vote(req.params.id)
//   .then(()=>{
//     res.redirect('/topics/${req.params.id}')
//   })
//    .catch(err => console.log('ERROR:', err));

// }


module.exports = controller;
