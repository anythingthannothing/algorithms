DELETE a
FROM Person a, Person b
WHERE a.email = b.email AND a.id > b.id;