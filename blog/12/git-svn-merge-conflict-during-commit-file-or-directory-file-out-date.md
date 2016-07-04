/*
Title: Git SVN: Merge conflict during commit: File or directory file is out of date
Description: Using git to work on a SVN repository is really great. Recently I ran into the following error while trying to run git svn dcommit:
Date: 2012/05/11
*/

Using git to work on a SVN repository is really great. Recently I ran into the following error while trying to run git svn dcommit:

Merge conflict during commit: File or directory 'Monitor/public' is out of date; try updating: The version resource does not correspond to the resource within the transaction.  Either the requested version resource is out of date (needs to be updated), or the requested version resource is newer than the transaction root (restart the commit). at /usr/lib/git-core/git-svn line 579



<p>It happened because there is a conflict between the svn repo file and your local changes. What you have to do is fetch this changes and run rabase to solve the conflicts. After that, you will be able to perform dcommit. So, the commands are:</p>

    git svn fetch<br/>
    git svn rebase<br/>
# solve all the conflicts like you normally do on git<br/>
    git svn dcommit<br/>



<p>And that's it, end of problems (at least for me it was...). If someone knows more conditions on which this error appears, plase make a comment.</p>
