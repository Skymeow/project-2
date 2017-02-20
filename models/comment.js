const db = require('../config/db');
const Comment = {};
// Comment.findAll=()=>{
//   return db.manyOrNone(`
//     select * from comments
//     order by voting DESC`);
// };

Comment.findById = (id)=>{
  return db.one(`
    select * from comments
    where id=$1`,
    [id]
  );
};

Comment.updatecomment=(data,id)=>{
  return db.none(`
    insert into comments
    (comment)
    values
    ($1);`
    [comments.comment]
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
