---
posttype: 'blog'
title: "My Basic Front-end Development Git Flow Routine"
description: "How my basic front-end git flow routine"
date: 08-01-21
draft: false
---

At the start of every project, most managers generally ask the same basic setup question, "how should we establish the git flow?" At most large-scale teams and companies, there is a pretty rigorous method set in place in order to prevent stepping over each other's toes. But having only been a front-end developer for the most part of my time, I can only account for the issues that I faced and how my flow works from a day-to-day basis.

There are senior engineers and other backend developers who are tasked with the extra work of wrangling bug issues and branch management. This article won't cover those steps, I will only highlight the brief steps I take when managing my local system and then when I need to deliver them.

Below are the commands I usually type in from start to finish when working by myself. My current site follows this specific method. 

***
Let's begin with the basic git commands.
***

The following commands are what I usually type in (*in this order specifically*) when getting a new branch up and running on my local machine.

###### `git branch`
- More often than not, you'll be working on a separate local branch other than master (one should not work on master as a general practice). When you walk away from the computer, you may still be on that working branch. To ensure you don't overwrite the master branch, double-check by typing in `git branch`. If you find yourself on a working branch, type `git checkout master` in order to switch back.

###### `git status`
- Check if the current branch you are on has any changes that have not been tracked or committed. Make sure you do so before switching over to the master branch. A good tip if you haven't committed a change is to use `git stash`. This holds your current progress in place and puts your branch back at to the last commit. If you want to bring it back up, simply type `git stash pop`.

###### `git fetch && git pull`
- Once you made the switch back over to your master branch. Check and see if there are any new updates from upstream. If you're working with a large team or global team there will usually be work to pull down. `git fetch` is a safe way to check if there are any changes incoming from master/main before you do a pull.`git pull` will allow you to grab the latest code from master/main.

###### `git checkout -b < name of new branch >`
- Once you are ready to start your new branch you will need to checkout from master. `-b` will no only make a new branch for you, but it will switch you over to that branch automatically. (*note: do not add the open and close brackets in your code*)

***
Alright, let's say you are ready to commit some changes and deliver them to your team. I usually type the following commands.
***

###### `git status`
- We'll start by checking the status. See if there are any uncommitted or untracked changes. If there are changes, visit the files in question and fix what needs to be fixed or completed before adding your changes for a commit.

###### `git add -A` or `git add <name of file>` 
- Normally I use this command because I know the files I use from my local copy are *all* going to be pushed up, hence the `-A` syntax. There are instances where I need to only commit specific changes from my local, say a specific CSS file, a few selected JavaScript files. In the past, for example, working in Drupal I had to make sure I didn't unload unnecessary modules. These files were changes I needed in order to get my local running properly, but I didn't need to push them back upstream, the team already has them.

###### `git commit -m " < your commit message here > "`
- This is where you are ready to commit your changes. Makes sure to keep your commit message concise. They are generally messages or titles that will show up in GitHub, GitLab, Bit Bucket. You want your team members to quickly skim through and see what it is that you worked on. In the past, when I worked at larger companies I was required to track the ticket name/number in my commit messages. Once they are pushed up, the number is actually clickable and it will take you to the origin ticketed issue.

###### `git checkout master`
- Switch to the master branch

###### `git merge < name of latest committed branch >`
- Once you have switched over to the master branch you can now merge your most recent committed branch to master. 

###### `git push origin master`
- Once you have merged your changes and other changes from other team members (if you are lead), you may now push the merged changes up to staging servers or up to production.

***
Well, this is it. I hope this has been helpful for you. Again, these are the steps and commands I have grown accustomed to. But feel free to go in between and add additional commands as needed for your project.

Happy coding!