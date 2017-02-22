const db = require('../config/db');
const Comment = {};

Comment.findAll = (id)=>{
  return db.manyOrNone(`
    select * from comments
    where topic_id=$1
    ;`,
    [id]
  );
};

Comment.new=(data, topic_id)=>{
  return db.none(`
    insert into comments
    (comment, voting, topic_id)
    values
    ($1,$2,$3);`,
    [data.comment, data.voting, topic_id]
    );
};

Comment.vote = (id)=>{
  return db.none(`
    update comments
    set voting=voting+1
    where id=$1`,
    [id]
    );
};


module.exports = Comment;
