/*
Title: SQL Query To Get Descendants And Ancestors From A Tree, With CTE
Description: Using CTEs
Date: 2017/04/18
Tags: sql,mariadb,cte,tree,docker
*/

# SQL Query To Get Descendants And Ancestors From A Tree, With CTE

CTEs are comming to MariaDB and most likely will arrive on MySQL soon as well.
Its is alreay implemented on MariaDB 10.2, development code. The easiest way to
get MariaDB 10.2 running, if you have Docker is using:

```bash
docker run -i -p 127.0.0.1:3307:3306 -e MYSQL_ROOT_PASSWORD=my-secret-pw -t cytopia/mariadb-10.2
```

Handling trees on SQL is elusive, without CTEs (or Oracle's CONNECTED BY) there
is no data type that performs well for all cases. This is well documented on 
Bill Karwin's [SQL Antipatters](https://pragprog.com/book/bksqla/sql-antipatterns).
With CTEs, it is possible to recusively define a temporary table. This way, it
is easy to handle SQL trees using the naive data structure:

```sql
CREATE TABLE `node` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `parent_id` INT UNSIGNED,
    PRIMARY KEY(`id`),
    CONSTRAINT `fk_parent_id` FOREIGN KEY(`parent_id`) REFERENCES `node`(`id`)
) Engine=InnoDB;
```

We can populate the table with some silly test data:

```
INSERT INTO `node`(`parent_id`) VALUES
        (NULL), -- parent of 1
        (1),    -- parent of 2
        (1),    -- parent of 3
        (2),    -- parent of 4
        (2),    -- parent of 5
        (3),    -- parent of 6
        (3),    -- parent of 7
        (4),    -- parent of 8
        (4),    -- parent of 9
        (5),    -- parent of 10
        (5),    -- parent of 11
        (6),    -- parent of 12
        (7);    -- parent of 13
```

Now I can query the descendants and ancestors of specific nodes:


```sql
-- All the children of 3
with recursive n(id, parent_id) as (
    select id, parent_id from node where id = 3
    union all
    select n1.id, n1.parent_id from node n1 join n n2 on n1.parent_id = n2.id

) select * from n;

-- All ancestors of 13
with recursive n(id, parent_id) as (
    select id, parent_id from node where id = 13
    union all
    select n1.id, n1.parent_id from node n1 join n n2 on n1.id = n2.parent_id

) select * from n;
```

The last two queries will return the following results:

```
+----+-----------+
| id | parent_id |
+----+-----------+
|  3 |         1 |
|  6 |         3 |
|  7 |         3 |
| 12 |         6 |
| 13 |         7 |
+----+-----------+
5 rows in set (0.00 sec)

+----+-----------+
| id | parent_id |
+----+-----------+
| 13 |         7 |
|  7 |         3 |
|  3 |         1 |
|  1 |      NULL |
+----+-----------+
4 rows in set (0.00 sec)
```
