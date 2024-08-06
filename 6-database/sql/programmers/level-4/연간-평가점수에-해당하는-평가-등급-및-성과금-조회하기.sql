SELECT a.EMP_NO AS EMP_NO, 
    b.EMP_NAME AS EMP_NAME,
    a.GRADE AS GRADE,
    CASE WHEN a.GRADE = 'S' THEN b.SAL * 0.2
        WHEN a.GRADE = 'A' THEN b.SAL * 0.15
        WHEN a.GRADE = 'B' THEN b.SAL * 0.1
        ELSE 0
    END AS BONUS
FROM (
    SELECT MAX(EMP_NO) AS EMP_NO, 
            MAX(YEAR) AS YEAR, 
            CASE WHEN AVG(SCORE) >= 96 THEN 'S'
                WHEN AVG(SCORE) >= 90 THEN 'A'
                WHEN AVG(SCORE) >= 80 THEN 'B'
                ELSE 'C'
            END AS GRADE
    FROM HR_GRADE
    GROUP BY EMP_NO, YEAR
) a
JOIN HR_EMPLOYEES b
ON a.EMP_NO = b.EMP_NO
ORDER BY 1 ASC;