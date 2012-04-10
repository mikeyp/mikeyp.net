--- 
layout: post
title: "Using Xcode for iOS web testing"
date: 2012-03-17 13:08:19 -0700
tags:
 - Xcode
 - iOS
---
One of the common questions I hear from other people now that I own an iPad is "How does *my* website look on the iPad? Is it okay? Does the layout break? Does the responsive stuff work right?" and so on. Every time I ask that person if they have a Mac and if so, I suggest checking out Xcode and the iOS Simulator. Even with that, getting setup isn't super obvious, so here's a short guide to getting everything setup and how to start testing. 

The first step is to install Xcode via the App Store. Just click install and go get some coffee and grab a good book since it will take while to download. If you already have it installed, keep in mind that you may need to update to keep up to date with the latest iOS devices and OS. For example 4.3 does not include the iPad 3 with retina display, but 4.3.1 does. These updates alone range from 1&ndash;1.5 GB each.

![Xcode in the App Store](/images/xcode-app-store.png)

After installing and launching Xcode you may see a dialog about installing the Mobile Device Framework, if so, authenticate and install whatever it asks. Luckily, no additional download is required.

Next you'll see a welcome window offering to let you create a new project. Before we get to that, under the File menu, go to Preferences, and click on Downloads. Here we need to select install for any version of of iOS that we want to test. If you're the type of person who uses Homebrew or does lots of software development, I highly recommend installing the Command Line Tools as well:

![Xcode Download preferences](/images/xcode-preferences.png)

After this is finished, close the Preferences window and under the File menu, under New, select Project... I don't yet know of a way to run the simulator without having a project to run. The good news is that the iOS Empty Application template will work fine, and we don't need to change it at all, other than the name and identifier:

![Xcode new application settings](/images/xcode-new-application.png)

After specifying a directory to save the project in, you'll be presented with a window showing you an overview of your project. Don't change a thing here! All you need to do is hit the run button in the top left corner, or select Run under the Project menu. It doesn't matter which device you select, as you can switch devices once the simulator is running by choosing Device under the Hardware menu. After the simulator is up, hit the home button (or cmd-shift-H) and select Safari and you're on your way to mobile testing your website from your desktop.