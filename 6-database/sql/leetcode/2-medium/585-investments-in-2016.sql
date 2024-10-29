SELECT ROUND(SUM(tiv_2016), 2) AS tiv_2016
FROM (
    SELECT *,
    COUNT(*) OVER (PARTITION BY tiv_2015) AS tiv_cnt,
    COUNT(*) OVER (PARTITION BY lat, lon) AS location_cnt
    FROM Insurance
) a
WHERE tiv_cnt >= 2 AND location_cnt = 1;