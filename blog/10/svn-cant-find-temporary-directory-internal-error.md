/*
Title: SVN Can't Find a Temporary Directory Internal Error
Description: Subversion is quite stable but it does not operate miracles. In case you do something that access the SVN server and it returns the error message "can't find a temporary directory internal error", it probably means that the server ran out of disk. SVN write log files on each operation, if there is no space left on disk something will be missing and svn won't be able to write some files. The consequence is that it'll show this error on the next operations.
Date: 2010/01/09
*/

# SVN Can't Find a Temporary Directory Internal Error

Subversion is quite stable but it does not operate miracles. In case you do something that access the SVN server and it returns the error message "can't find a temporary directory internal error", __it probably means that the server ran out of disk__.

SVN write log files on each operation, if there is no space left on disk something will be missing and svn won't be able to write some files. The consequence is that it'll show this error on the next operations.
