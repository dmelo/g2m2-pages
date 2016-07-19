/*
Title: Get Drupal installed in 10 very easy steps.
Description: After do some drupal installations I decided to create a small HowTo about it. What I'm assuming...
Date: 2009/09/18
*/

# Get Drupal installed in 10 very easy steps.

After do some drupal installations I decided to create a small HowTo about it.

What I'm assuming:

- You are using Linux;
- Apache is installed and running;
- You have a MySQL database clean and ready to be used;
- You want to install drupal into http://localhost/drupal and your Apache is reading the files from /var/www/ (if you're installing drupal somewhere else and/or Apache is reading the files from another place just replace those information during this tutorial.

Ready to get started? Here we go...

1. download drupal from http://drupal.org/project/drupal
2. unpack drupal and move the files to /var/www/drupal. Don't forget to move .htaccess too.
3. cd /var/www/projectname/sites/default
4. mkdir files
5. chmod -c 777 files
6. cp default.settings.php settings.php
7. vim settings.php (or any text editor)
8. Insert your database information according with the line the starts like "$db_url = 'mysql://" . Drupal will use this information to connect to the database.
9. If apache is running and /var/www/ corresponds to http://localhost/ then access http://localhost/drupal/install.php
10. Proceed according with drupal instructions.

That's it. Your new drupal site is at [http://localhost/drupal](http://localhost/drupal)

Please, leave comments.
