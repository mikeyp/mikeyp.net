--- 
layout: post
title: "Why default escaping makes sense"
date: 2012-04-10 15:25:47 -0700
tags:
  - templates
  - php
  - drupal
---

Lately there has been a [discussion](http://drupal.org/node/1499460) in the Drupal community about reworking the theme system and possibly switching to the [TWIG template engine](http://twig.sensiolabs.org/). There are tons of reasons why this makes sense, but one member of the community commented:

>Again, I don't see how that's more secure than our current system; in our current system, we generally don't ask the person coding HTML in a template file to make these kinds of security decisions at all, but rather we pre-sanitize all common/documented variables for them.

In my recent work with node.js/jade and Rails 3 (with either ERB, HAML, or Slim) I've used quite a few auto-escaping template systems, and its one of the things I miss the most when coming back to Drupal work. To explain why I fid it so valuable I've prepared a couple of short examples, that although somewhat contrived, adequately demonstrate the issue.

Say I've got a straight PHP template that looks something like this:

{% highlight php %}
<h1>My article about: <?php print $random_variable ?></h1>
<p><?php print $another_variable; ?></p>
{% endhighlight %}

and it produces some output that looks like this:

{% highlight html %}
<h1>My article about: Fluffy kittens</h1>
<p>Bacon ipsum dolor sit amet shank meatloaf consequat ex,</p>
{% endhighlight %}

Now imagine you inherit this code or find this in a snippet somewhere online, and copy and paste it to your template. Do you know if those variables are escaped? Do you know where to look in some buried preprocess function to see if those variables are safe? Do you know what one of the most common security problems in contributed Drupal modules is? (Hint 15 of the 20 most recent [security announcements](http://drupal.org/security/contrib) mention something called [Cross-site scripting](http://en.wikipedia.org/wiki/Cross-site_scripting))

Imagine the same template in TWIG:

{% highlight html %}
{% raw %}
<h1>My article about: {% random_variable %}</h1>
<p>{% another_variable %}</p>
{% endraw %}
{% endhighlight %}

And the following output (assuming global auto-escape is enabled):

{% highlight html %}
<h1>My article about: Fluffy kittens<script type="text/javascript">alert("pwned!");
  </script></h1>
<p>Bacon ipsum dolor <span class="highlight">sit amet</span> shank meatloaf consequat
  ex,</p>
{% endhighlight %}

Now it's clear which items should be escaped, filtered, and which ones should be output raw. This is a simple example of [Fail-safe](http://en.wikipedia.org/wiki/Fail-safe) operation, something that errors on the side of safety, and the user explicitly sets any variables that should allow HTML, or specific tags using [filters](http://twig.sensiolabs.org/documentation). Which would you rather work with?