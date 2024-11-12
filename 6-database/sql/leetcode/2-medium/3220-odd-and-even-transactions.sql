SELECT transaction_date, 
    SUM(IF(amount % 2 = 1, 1, 0) * amount) AS odd_sum,
    SUM(IF(amount % 2 = 0, 1, 0) * amount) AS even_sum
FROM transactions
GROUP BY transaction_date
ORDER BY 1 ASC;