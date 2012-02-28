--- 
layout: post
title: Has Mollom's CAPTCHA been cracked?
created: 1218560425
tags: 
- Drupal
- Mollom
- captcha
---
I've been wondering for awhile now if Mollom's captcha has been cracked, and recent evidence would seem to support that. In the last few days, the amount of spam I've seen getting through has increased from none, to between 6-10 messages a day on this low traffic site. Mollom is also reporting that it is blocking about twice as much spam as it has been on average as well.

![Mollom captcha chart](/images/mollom_captcha.png)

<em>Note that all of the ham in that chart turned out to in fact be spam.</em>

<a href="http://develoop.be/mollom_100_protection_against_spam_attacks">Roel De Meester</a> and <a href="http://realize.be/spam-n">Kristof De Jaeger</a> have both blogged about massive increases in the amount of spam that Mollom is blocking. Has this increase signaled a large scale attempt to crack the captcha? I believe that is a strong possibility after seeing comment spam reappear on this site, in the past week.

I am considering a switch to recaptcha, if this continues, as I've heard very little about it being compromised. It would be great if the captcha that Mollom uses could be configured to use recaptcha, however I don't think this is currently possible with the existing Mollom module, however one could certainly write another module, or a patch to the Mollom module to provide such functionality.

<strong>UPDATES</strong>

1 hour after posting this, I have received 4 more comment spam, that were not blocked by Mollom.

5 hours after posting this, I have received another 14 comment spam, I have isolated about half of it to 1 IP, and while I could block it, I feel that kinda defeats the purpose of using a service like Mollom.

24 hours after posting this I have only received 4 more comment spam, all from the same IP as mentioned above.

36 hours and running...seems to have cleared up now.

