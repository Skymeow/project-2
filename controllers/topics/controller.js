const Topic = require('../../models/topic');
const Comment = require('../../models/comment');
let controller = {};

controller.index = (req,res)=>{
  Topic
  .findAll()
  .then((data) => {
    console.log('data:', data)
    res.render('./index', {
      topics: data
    })
  })
  .catch(err=>console.log('error:',err));
};
controller.show=(req,res)=>{
  Topic
  .findById(req.params.id)
  .then((topicdata)=>{
    // Now call your Comments.FindById Here. Don't forget to require it!
      Comment.findAll(req.params.id)
      .then((commentdata) =>{
        res.render('./show',{
        topics:topicdata,
        comments:commentdata
        })
      })
  })
  .catch(err=>console.log('error:',err));
};

controller.updatecomment=(req,res)=>{
  Topic
    .findById(req.params.id)
    .then((topicdata)=>{
    Comment
      .update(req.body.comments)
      .then()=>res.redirect('/topics/topicdata.id')
      .catch(err=>console.log('error:',err));

  })
}


controller.new=(req,res)=>{
  res.render('./new topic')
}
controller.save=(req,res)=>{
  Topic
  .save(req.body.topics)
  .then(()=>res.redirect('/topics'))
  .catch(err=>console.log('error:',err));
};
module.exports = controller;
