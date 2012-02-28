--- 
layout: post
title: "Using markdown with variable input in Jade"
date: 2012-02-09 19:56:15 -0800
tags:
 - node.js
 - jade
 - markdown
 - express
---

Say you're using markdown for your user generated content in an Express app and you want to parse certain fields in your templates. It turns out that [Jade](https://github.com/visionmedia/jade#a7) has support for filters, but I've never figured out how to pass a variable into that. To be wholly honest, I didn't know that feature existed when I first implemented the following code, but this still seem to be the cleanest way to handle this, and allows you to setup custom helpers with different markdown flags should you need it.

First, make sure you have [discount](http://www.pell.portland.or.us/~orc/Code/discount/) installed, and then either add the [discount package](http://search.npmjs.org/#/discount) to your package.json or ``npm install discount``.

In your app.js:
{% highlight javascript %}
var express = require('express'),
         md = require('discount');

var app = module.exports = express.createServer();

// Typical express boilerplate here....

app.helpers({
  md: md.parse
});
{% endhighlight %}

Then in your template:
{% highlight jade %}
h2= post.title
p.post_body!= md(post.body)
{% endhighlight %}

That's pretty much all there is to it unless you want to use some flags, then you'll need to provide a function to wrap ``md.parse``:

{% highlight javascript %}
app.helpers({
  md: function (markdown) {
    return md.parse(markdown, md.flags.noHTML)
  }
});
{% endhighlight %}
