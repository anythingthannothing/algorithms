SELECT b.name, a.balance
FROM (
    SELECT account, SUM(amount) as balance
    FROM Transactions
    GROUP BY account
    HAVING SUM(amount) > 10000
) a
JOIN Users b
ON a.account = b.account;