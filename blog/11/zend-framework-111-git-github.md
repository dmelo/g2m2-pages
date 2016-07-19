/*
Title: Zend Framework 1.11 on Git (GitHub)
Description: A while ago I started migrating my stuff to git. I use Zend Framework a lot. The Zend Framework team is migrating to git as well but they are starting by the version 2.0. Which means previous versions (like the 1.11 that I use) are not on git.Fortunately, there is other people also interested on getting 1.11 on git and mridgway created a repo in GitHub  that have this version https//github.com/mridgway/Zend-Framework-1.x-Mirror.git .
Date: 2012/02/09
*/

A while ago I started migrating my stuff to git. I use Zend Framework a lot. The Zend Framework team is migrating to git as well but they are starting by the version 2.0. Which means previous versions (like the 1.11 that I use) are not on git.

Fortunately, there is other people also interested on getting 1.11 on git and mridgway created a repo in GitHub  that have this version [https://github.com/mridgway/Zend-Framework-1.x-Mirror.git](https://github.com/mridgway/Zend-Framework-1.x-Mirror.git).

The problem for me is that I liked using svn:externals on my projects to bind with the library Directory of the framework and submodule just part of a git project is not possible.

Solution: I created a repo on GitHub ([https://github.com/dmelo/Zend-1.11](https://github.com/dmelo/Zend-1.11)) that only contains what matters to me, the library/Zend directory ([git://github.com/dmelo/Zend-1.11.git](git://github.com/dmelo/Zend-1.11.git)) . Now when I create a project I can just add the Zend as a submodule:

    git submodule add git://github.com/dmelo/Zend-1.11.git library/Zend

To create this repo, I used `git svn clone http://framework.zend.com/svn/framework/standard/branches/release-1.11/library/Zend`. I did it on my AWS server. To keep it updated, I put the following task to run every 24 hours on cron:

    git svn fetch
    git svn rebase
    git push origin master

With this I can still including the Zend library repo on my projects :D
