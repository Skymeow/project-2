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
    where id=$1`,
    [id]
    );
};

Topic.findCommentById=(topic_id)=>{
  return db.none(`
    select * from comments
    where topic_id=$1`,
    [topic_id]
    );
};

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
