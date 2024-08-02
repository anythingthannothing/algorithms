SELECT a.ID AS ID, CASE
                WHEN a.RANK / a.TOTAL <= 0.25 THEN 'CRITICAL'
                WHEN a.RANK / a.TOTAL <= 0.5 THEN 'HIGH'
                WHEN a.RANK / a.TOTAL <= 0.75 THEN 'MEDIUM'
                ELSE 'LOW' END AS COLONY_NAME
FROM (
    SELECT 
        ID,
        RANK() OVER(ORDER BY SIZE_OF_COLONY DESC) AS `RANK`,
        COUNT(*) OVER () AS `TOTAL` 
    FROM ECOLI_DATA
) a
ORDER BY 1 ASC;