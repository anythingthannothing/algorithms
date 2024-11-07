(SELECT b.name as results
FROM (
    SELECT user_id, COUNT(*) as count
    FROM MovieRating
    GROUP BY user_id
    ORDER BY 2 DESC
) a
JOIN Users b
ON a.user_id = b.user_id
ORDER BY a.count DESC, b.name ASC
LIMIT 1)
UNION ALL
(SELECT b.title as results
FROM (
    SELECT movie_id, AVG(rating) avg_rating
    FROM MovieRating
    WHERE YEAR(created_at) = 2020 AND MONTH(created_at) = 2
    GROUP BY movie_id
) a
JOIN Movies b
ON a.movie_id = b.movie_id
ORDER BY a.avg_rating DESC, b.title ASC
LIMIT 1)