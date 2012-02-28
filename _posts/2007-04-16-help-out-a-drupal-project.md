--- 
layout: post
title: Help out a Drupal project
created: 1176776478
tags: 
- Drupal
---
<object width="250" height="250" align="right" vspace="10" hspace="10"><param name="movie" value="http://widget.chipin.com/widget/id/fd70241e3b0ae4d4"></param><param name="wmode" value="transparent"></param><embed allowScriptAccess="never" src="http://widget.chipin.com/widget/id/fd70241e3b0ae4d4" flashVars="" type="application/x-shockwave-flash" wmode="transparent" width="250" height="250"></embed></object>
  
From [over on Bryght](http://www.bryght.com/blog/boris-mann/reverse-bounty-backport-configurable-watchdog-logging-to-drupal-5) I caught this post about a major new feature for those out there doing major Drupal deployments. It is designed to provide new logging features and notification for the watchdog module. I can't fully describe all the features, check the post on Bryght or check the [original issue on drupal.org](http://drupal.org/node/63881) for more info. From [Bryght's blog](http://www.bryght.com/blog/boris-mann/reverse-bounty-backport-configurable-watchdog-logging-to-drupal-5):

> Today, the watchdog table logs regular system events (e.g. users logging in, creating new accounts, or posting content) as well as error conditions and other explanatory notes. On a high traffic site, the watchdog table must be pruned on a regular basis so that the database table doesn't grow wildly out of control. There is also no way to archive this information.  Enter Khalid's ([2bits.com](http://www.2bits.com/)) [patch for Drupal 6](http://drupal.org/node/63881): instead of only logging to the database, the patch will enable the destination of logging to be configurable. Raw text file, syslog, and email logging are all modules that have been implemented as proof of concept using this new system.

Anyway, the folks over at Bryght have started gathering money to backport the features as a module to Drupal 5, for those of us that can't wait for Drupal 6 to come out, or can't update to 6 right away. To donate, use the Chipin widget to the right, or [grab the code](http://www.chipin.com/mywidgets/id/fd70241e3b0ae4d4) for it and put it on your own site.

