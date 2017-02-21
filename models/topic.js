const db = require('../config/db');
const Topic = {};
Topic.findAll=()=>{
  return db.manyOrNone(`
    select * from topics
    inner join comments
    on topics.id=comments.topic_id
    order by voting DESC`);
};

Topic.findById=(id)=>{
  return db.one(`
    select * from topics
    where id=$1;`,
    [id])
    console.log(id)
    ;
};

// Topic.findCommentById=(id)=>{
//   console.log('topic_id in models:',id)
//   return db.none(`
//     select * from comments
//     where topic_id=$1`,
//     [id]
//     );
// };

Topic.save=(topic)=>{
  return db.none(`
    insert into topics
    (title,description,url)
    values
    ($1,$2,$3);`,
    [topics.title,topics.description,topics.url]
    );
};


module.exports = Topic;
