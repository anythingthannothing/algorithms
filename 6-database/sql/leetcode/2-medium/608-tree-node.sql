SELECT DISTINCT a.id, CASE
                        WHEN a.p_id IS NULL  THEN 'Root'
                        WHEN a.p_id IS NOT NULL AND b.id IS NOT NULL THEN 'Inner'
                        WHEN a.p_id IS NOT NULL AND b.id IS NULL THEN 'Leaf' END AS 'type' 
FROM Tree a
LEFT JOIN Tree b
ON a.id = b.p_id;