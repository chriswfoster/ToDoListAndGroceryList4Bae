DELETE FROM todos WHERE type_is = $1;
SELECT *
FROM todos;