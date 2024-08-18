SELECT a.firstName, a.lastName, b.city
FROM Person a
LEFT JOIN Address b
ON a.personId = b.personId;