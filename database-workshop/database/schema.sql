BEGIN;

CREATE TABLE IF NOT EXISTS tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  content TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

COMMIT;
-- tasks TABLE:
-- id  content          created_at
-- 1   'asdfjasdf'      date.timeSubmitted
-- 2   'kjflaskdfjlka'  date.timeSubmitted
-- 3   'alksdjfklasdf'  date.timeSubmitted
