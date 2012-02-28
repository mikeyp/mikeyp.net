--- 
layout: post
title: Setting up drupalorg testing profile
created: 1214426679
tags: 
- Drupal
- testing
- project
- cvs
---
So I was thinking about finding a way to help out the fine folks that maintain the [project_* family](http://drupal.org/project/project) of modules for [drupal.org](http://drupal.org) again and was chatting with the folks in IRC about the status of the [drupalorg_testing profile](http://drupal.org/project/drupalorg_testing) which is designed to help one mimic the setup of [drupal.org](http://drupal.org) and provide sample data for testing new features. In the process [aclight](http://drupal.org/user/86358) pointed out some patches to the profile that need to be applied (detailed below) to prepare it for use. I was surprised that these haven't been committed yet, only to find out it's due to a [small issue](http://drupal.org/node/267313) which I have been trying to get resolved for some time now. It's truly funny how things come back around to you after awhile sometimes.

Anyway, currently to test the drupalorg_testing profile, download it from [here](http://drupal.org/project/drupalorg_testing), and follow it's installation instructions on dependencies, but before installing the profile, check out the patches from [here](http://drupal.org/node/231640#comment-856488) and [here](http://drupal.org/node/231640#comment-788863). Then install the profile, and let it do it's thing. If your experience was anything like mine, you may be greated by some serious whitescreen issues when trying to check out your new installation. If so, check out the patch [here](http://drupal.org/node/273588) by [webchick](http://drupal.org/user/24967).

