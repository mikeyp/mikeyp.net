task :default => :server
 
desc 'Build site with Jekyll'
task :build do
  jekyll
end
 
desc 'Build and start server with --auto'
task :server do
  jekyll '--server --auto'
end

desc 'Build and deploy'
task :publish => :build do
  sh 'rsync -rzh --delete _site/ zoidberg.shomeya.com:/var/www/mikeyp.net/'
end

desc 'create new post or bit. args: title, future (# of days)'
# rake new type=(bit|post) future=0 title="New post title goes here" slug="slug-override-title"
task :new do
  require 'rubygems'
  require 'chronic'
  
  title = ENV["title"] || "New Title"
  future = ENV["future"] || 0
  if ENV["slug"]
    slug = ENV["slug"].gsub(' ','-').downcase
  else 
    slug = title.gsub(' ','-').downcase
  end

  if future.to_i < 3
    TARGET_DIR = "_posts"
  else
    TARGET_DIR = "_drafts"
  end

  if future.to_i.zero?
    filename = "#{Time.new.strftime('%Y-%m-%d')}-#{slug}.md"
  else
    stamp = Chronic.parse("in #{future} days").strftime('%Y-%m-%d')
    filename = "#{stamp}-#{slug}.md"
  end
  path = File.join(TARGET_DIR, filename)
  post = <<-HTML
--- 
layout: post
title: "TITLE"
date: DATE
tags:
---

HTML
  post.gsub!('TITLE', title).gsub!('DATE', Time.new.to_s)
  File.open(path, 'w') do |file|
    file.puts post
  end
  puts "new post generated in #{path}"
  system "open -a textmate #{path}"
end

def jekyll(opts = '')
  sh 'rm -rf _site'
  sh 'jekyll ' + opts
end
