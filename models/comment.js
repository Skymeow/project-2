const db = require('../config/db');
const Comment = {};

Comment.findAll = (id)=>{
  return db.manyOrNone(`
    select * from comments
    where topic_id=$1
    order by voting DESC;`,
    [id]
  );
};

Comment.update=(data,id)=>{
  return db.none(`
    insert into comments
    (comment)
    values
    ($1);`
    [comments.comment]
    );
};

// Comment.vote = (id)=>{
//   return db.none(`
//     update comments
//     set voting=voting+1
//     where id=$1`,
//     [id]
//     );
// };


module.exports = Comment;
