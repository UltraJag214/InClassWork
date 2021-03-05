-- Rental information for customer 1 and 2 using OR and =

select 
	rental_id, 
	customer_id, 
	return_date 
from 
	rental 
where 
	customer_id = 1 
	or customer_id = 2;
​
-- Rental information for customer 1 and 2 using IN

select 
	rental_id, 
	customer_id, 
	return_date 
from 
	rental 
where 
	customer_id in (1, 2);
	
-- Rental information for all customers except 1 and 2 using NOT IN

select 
	rental_id, 
	customer_id, 
	return_date 
from 
	rental 
where 
	customer_id not in (1, 2);
	
-- Names of customers who have a rental return date on 2005-05-27 using IN in a sub-query	Have to cast return_date because it is stored as a timestamp which includes time
​
select
	first_name,
	last_name
from
	customer
where
	customer_id in (
		select
			customer_id
		from
			rental
		where
--			cast (return_date as date) = '2005-05-27');
			return_date::date = '2005-05-27');

-- All payments whose amount is between $8 and $9 using BETWEEN

select 
	*
from 
	payment
where
	amount between 8 and 9 order by amount;
​
-- All payments not in the range $8-$9 using NOT and BETWEEN

select 
	*
from 
	payment
where
	amount not between 8 and 9 order by amount;
​
-- All payments made between dates using BETWEEN

select
    *
from
    payment
where
    payment_date between '2007-02-07' and '2007-02-15';
​
-- Customers who have at least one payment whose amount is greater than 11 using EXISTS

select
    first_name,
    last_name
from
    customer
where EXISTS
    (select
        1
    from
        payment
    where
        payment.customer_id = customer.customer_id
    and
        amount > 11
    );
​
-- Customers that have not made any payments that are greater than 11 using NOT EXISTS:

select
    first_name,
    last_name
from
    customer
where not EXISTS
    (select
        1
    from
        payment
    where
        payment.customer_id = customer.customer_id
    and
        amount > 11
    );
​
-- GROUP BY acting like DISTINCT with no AGGREGATE function

select
    customer_id
from
    payment
group by
    customer_id;
​
-- Sum total each customer has paid using GROUP BY and SUM

select
    customer_id,
    sum(amount)
from
    payment
group by
    customer_id;
​
-- ORDER BY comes after GROUP BY and can be used to order the aggregate results

select
    customer_id,
    sum(amount)
from
    payment
group by
    customer_id
order by
    sum (amount) desc;
​
-- Number of transactions each staff has processed using GROUP BY and COUNT

select
    staff_id,
    count(payment_id)
from
    payment
group by
    staff_id;
​
-- Only customers who have spend more than $200 by adding the HAVING clause

select
    customer_id,
    sum(amount)
from
    payment
group by
    customer_id;
HAVING
    sum (amount) > 200;
​
-- Number of customers per store using GROUP BY and COUNT

select
    store_id,
    count(customer_id)
from
    customer
group by
    store_id;
​
-- Only Stores with more than 300 customers by adding HAVING clause

select
    store_id,
    count(customer_id)
from
    customer
group by
    store_id;
HAVING
    count(customer_id) > 300;

-- Customers whose first name begins with Jen

select
    first_name,
    last_name
from
    customer
where
    first_name like 'Jen%';
​
-- Customers whose first name contains 'er' using LIKE

select
    first_name,
    last_name
from
    customer
where
    first_name like '%er%';
​
-- Customers whose first name begins with any single character, is followed by the literal string 'her', and ends with any number of characters
​
select
    first_name,
    last_name
from
    customer
where
    first_name like '_her%';

-- Search case-insensitive using ILIKE

select
    first_name,
    last_name
from
    customer
where
    first_name ILIKE '%BAR%';
​
-- All addresses that end in Way or Street using SIMILAR TO

select
	address
from
	address
where
	address similar to '%(Way|Street)';
​
​
​
​
-- JOINS
-- INNER JOIN
-- Each customer may have zero or more payments. Each payment belongs to one and only one customer. The customer_id field establishes the link between two tables.


​
-- INNER JOIN with a where clause, selecting on payments for customer 2


​
-- LEFT JOIN
-- Each row in the film table may have zero or many rows in the inventory table. Each row in the inventory table has one and only one

select
    film.film_id,
    film.title,
    inventory_id
from
    film LEFT JOIN inventory ON inventory.film_id = film.film_id order by film_id;
