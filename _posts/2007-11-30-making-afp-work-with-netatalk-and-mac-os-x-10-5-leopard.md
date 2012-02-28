--- 
layout: post
title: Making afp work with netatalk and Mac OS X 10.5 Leopard
created: 1196491810
tags: 
- Drupal
---
So when I do alot of my development, I prefer to use something to mount a remote servers filesystem directly for editing and such. For this job I usually reach for afp via netatalk on my server, vs. samba, although many times I enable samba with similar shares for my non-Mac OS X enabled friends. Turns out that Apple disabled the ability to use clear text passwords in 10.5 and the default Debian and Ubuntu packages for netatalk doesn't include any other option. There are ways to setup Leopard to allow this again, but I figured the better way to fix this would be to actually enable encrypted passwords, so I did, after finding the following link:

[Secure passwords with Netatalk](http://www.hellinga.org/index.php?id=2&tx_ttnews%5Btt_news%5D=4&tx_ttnews%5Byear%5D=2007&tx_ttnews%5Bmonth%5D=05&tx_ttnews%5Bday%5D=26&cHash=12028cb059)

I didn't even know what the problem was, since OS X 10.5 was giving an extremely unhelpful error -5002. I had to google around to find [this](http://blog.wearesakuzaku.com/making-netatalk-work-on-debian-with-leopard/) page which pointed me in the right direction.

