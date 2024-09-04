SELECT 
    id,
    SUM(CASE WHEN month = 'Jan' then revenue END) AS Jan_Revenue,
    SUM(CASE WHEN month = 'Feb' then revenue END) AS Feb_Revenue,
    SUM(CASE WHEN month = 'Mar' then revenue END) AS Mar_Revenue,
    SUM(CASE WHEN month = 'Apr' then revenue END) AS Apr_Revenue,
    SUM(CASE WHEN month = 'May' then revenue END) AS May_Revenue,
    SUM(CASE WHEN month = 'Jun' then revenue END) AS Jun_Revenue,
    SUM(CASE WHEN month = 'Jul' then revenue END) AS Jul_Revenue,
    SUM(CASE WHEN month = 'Aug' then revenue END) AS Aug_Revenue,
    SUM(CASE WHEN month = 'Sep' then revenue END) AS Sep_Revenue,
    SUM(CASE WHEN month = 'Oct' then revenue END) AS Oct_Revenue,
    SUM(CASE WHEN month = 'Nov' then revenue END) AS Nov_Revenue,
    SUM(CASE WHEN month = 'Dec' then revenue END) AS Dec_Revenue
FROM Department
GROUP BY id;