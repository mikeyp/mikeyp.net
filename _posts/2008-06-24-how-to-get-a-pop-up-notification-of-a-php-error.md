--- 
layout: post
title: How to get a pop up notification of a PHP error
created: 1214333307
tags: 
- Drupal
- Growl
- OS X
- tail
- logging
- logs
---
So for sometime now, I've been doing Drupal/PHP development on my local machine. I'm a Mac user, and I use Growl quite a bit to keep aware of whats going on. Honestly at times its probably a productivity killer to know that I have 22 new emails, I was pinged in IRC, and my feeds were just updated, and the latest track in iTunes is something that I probably don't want to hear. So I've been spending some time thinking about how to best put this cool tool to work for me, and I kept coming back to [growlnotify](http://growl.info/documentation/growlnotify.php), a command line tool to post notifications.</p><p class="rteleft">My first though was, how to get this to tail some server logs for me, and how to take care of letting me know when servers had issues. But then I got to thinking that isn't really all that useful. Servers shouldn't go down, and if they do, they should notify me by email (which if I'm at the computer, Growl will pick up) and server logs? I just don't need that. The next logical conclusion was maybe to do some local tasks, like I don't know...say the PHP error log while I&quot;m developing? That might actually be useful when I do something stupid, like get tired and call $node['body'] (PHP Fatal error: &nbsp;Cannot use object of type stdClass as array).
  
Anyway, lo and behold, someone else has already done this for me. Check out the snippets [here](http://forums.cocoaforge.com/viewtopic.php?f=6&amp;t=3032&amp;p=23314&amp;hilit=growlnotify+tail#p23314) for more info on how to make this work. It's a bit tricky since growl won't send a notify until an end of file is reached, and tail -f just sends newline characters. The solution is to use a small python script to read the stdin, and then convert that into a full growlnotify command, and execute it.

Thanks to this tip I now get notifications like this:

![popup php error with growl](/images/growl_php.png)

You may need to play with your error level to keep from getting splattered with notices, but I find this quite useful (especially for catching notices with Drupal 6).

