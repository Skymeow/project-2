const Topic = require('../../models/topic');

let controller = {};

controller.index = (req,res)=>{
  Topic
  .findAll()
  .then((data) => {
    // console.log('data:', data)
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
    res.render('./show',{
       topics:topicdata
    })
     res.render('./new comment',{
       topics:topicdata
    })
  })

  .findCommentById(req.params.id)
  .then((data) => {
    res.render('./show', {
      comments: data
    })
  })
  .catch(err=>console.log('error:',err));
};

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
