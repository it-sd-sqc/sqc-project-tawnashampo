DROP TABLE IF EXISTS chapters;
DROP TABLE IF EXISTS pages;

CREATE TABLE chapters (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  chapter_num INT NOT NULL
);

 CREATE TABLE pages {
 id SERIAL Primary KEY,
 page_num INT NOT NULL
 };
