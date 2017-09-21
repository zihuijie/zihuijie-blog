---
path: "/no-need-ghpages"
date: "2017-08-30"
title: "gh-pages need to be under master branch ?"
tags: ["gh-pages", "github", "reactjs","gatsby"]
---

I am using Gatsby to build my blog. It's a great tool. I was trying to deploy the site through gh-pages. However, on github it only allows to use master branches to serve the site for personal pages.

I did search on stackoverflow. I think I got the same answer.

According to <a href="https://stackoverflow.com/questions/35978862/github-pages-why-do-i-need-a-gh-pages" target="_blank">Github pages: Why do I need a gh-pages</a>. I don't really need to upload my blog in gh-pages. Everything should be under master.

According to <a href="http://jakewiesler.com/surge-vs-github-pages-deploying-a-create-react-app-project/" target="_blank">Surge vs Github</a> I will try Surge instead.

Finally, what I did with my blog is push everything under firebase, then only push the files under build folder to github pages master branch. Then I got my gh-pages.