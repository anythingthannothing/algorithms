SELECT 
    ROUND(AVG(a.order_date = a.customer_pref_delivery_date) * 100, 2) AS immediate_precentage                            ELSE 0 END) AS total_im
FROM Delivery a
JOIN (
    SELECT customer_id, MIN(order_date) AS first_order_date
    FROM Delivery
    GROUP BY customer_id
) AS b
ON a.customer_id = b.customer_id AND a.order_date = b.first_order_date;
