SELECT name
FROM SalesPerson
WHERE sales_id NOT IN (
  SELECT sales_id
  FROM Orders a
  JOIN Company b
  ON b.name = 'RED' and a.com_id = b.com_id
);