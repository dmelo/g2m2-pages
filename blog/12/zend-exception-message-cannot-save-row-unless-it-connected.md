/*
Title: Zend Exception Message: Cannot save a Row unless it is connected
Description: Accordingly with this blog, this is an exception related to Zend_Db_Table_Row. It arises because the object that is being saved lost (somehow) it's reference to the the table it belongs. To restore it's reference (and solve this issue) you just have to call setTable before saving the object...
Date: 2012/01/10
*/

# Zend Exception Message: Cannot save a Row unless it is connected

Accordingly with [this blog](http://gustavostraube.wordpress.com/2010/05/11/zend-framework-cannot-save-a-row-unless-it-is-connected/) this is an exception related to `Zend_Db_Table_Row`. It arises because the object that is being saved lost (somehow) it's reference to the the table it belongs.

To restore it's reference (and solve this issue) you just have to call `setTable` before saving the object:

    $row->setTable(new DbTable_User());
    $row->save();



In my case, I'm losing the reference to the table because I'm storing the object on a session (with *Zend_Session_Namespace*). Since there is, at least, three places where I have to save the row stored by the session, I decided to rewrite the save method, just like this:

<div class="vim"><pre><span class="lnr"> 1 </span><span class="Special">&lt;?php</span>

<span class="lnr"> 2 </span>

<span class="lnr"> 3 </span><span class="Type">class</span> DbTable_UserRow <span class="Type">extends</span> Zend_Db_Table_Row_Abstract

<span class="lnr"> 4 </span><span class="Special">{</span>

<span class="lnr"> 5 </span>    <span class="Type">public</span> <span class="PreProc">function</span> save<span class="Special">()</span>

<span class="lnr"> 6 </span>    <span class="Special">{</span>

<span class="lnr"> 7 </span>        <span class="Statement">$</span><span class="Identifier">this</span><span class="Type">-&gt;</span>setTable<span class="Special">(</span><span class="PreProc">new</span> DbTable_User<span class="Special">())</span>;

<span class="lnr"> 8 </span>        <span class="Type">parent</span><span class="Statement">::</span>save<span class="Special">()</span>;

<span class="lnr"> 9 </span>    <span class="Special">}</span>

<span class="lnr">10 </span><span class="Special">}</span></pre></div>





<p>And then, at the DbTable_User.php I just have to set the class DbTable_UserRow as being the row class for the table user:</p>





<div class="vim">

<pre>

<span class="lnr"> 1 </span><span class="Special">&lt;?php</span>

<span class="lnr"> 2 </span>

<span class="lnr"> 3 </span><span class="Type">class</span> DbTable_User <span class="Type">extends</span> Zend_Db_Table_Abstract

<span class="lnr"> 4 </span><span class="Special">{</span>

<span class="lnr"> 5 </span>    <span class="Type">protected</span> <span class="Statement">$</span><span class="Identifier">_name</span> <span class="Statement">=</span> '<span class="Constant">user</span>';

<span class="lnr"> 6 </span>    <span class="Type">protected</span> <span class="Statement">$</span><span class="Identifier">_rowClass</span> <span class="Statement">=</span> '<span class="Constant">DbTable_UserRow</span>';

<span class="lnr"> 7 </span></pre></div>



<p>Now, whenever I save my user, it makes sure the table is set, avoiding the exception mentioned on this blog post.</p>
