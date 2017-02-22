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

controller.newcomment=(req,res)=>{
  console.log(req.body, req.params.id);
  Comment
  .new(req.body.comments, req.params.id)
  .then( data => res.redirect(`/topics/${req.params.id}`));
    // Comment
    // .new(req.body.comments)
    // .then((data)=>{
    //     res.render('show',{
    //      comments:data
    //     })
    //   })

    //   .catch(err=>console.log('error:',err));
}

controller.newtopic=(req,res)=>{
  res.render('new_topic');
};

controller.vote = (req, res) => {
  Comment
    .vote(req.params.id)
    .then(() => {
      if (req.query.show) {
        res.redirect(`/topics/${req.params.id}`)
      } else {
        res.redirect('/topics')
      }
    })
    .catch(err => console.log('ERROR:', err));
}


controller.save=(req,res)=>{
  console.log('savedata',req.body)
  Topic
  .save(req.body.topics)
  .then(()=>{

    res.redirect('/topics/')
   })
  .catch(err=>console.log('error:',err));
};
module.exports = controller;
