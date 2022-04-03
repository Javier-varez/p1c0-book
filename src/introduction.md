# Introduction

I am sure we can all agree that it would not be a great idea to just start an operating system 
without any goals or direction in mind, right? Well, that's what I did when I started [`p1c0`].

`p1c0` was born in late November 2021 when I got a new 14" MacBook Pro with the `M1 Pro` chipset 
on it. I was quite thrilled by the refreshing direction these new Apple Silicon macs where 
taking. At the same time, I was amazed by the reverse-engineering efforts being done by the 
[`Asahi Linux Team`]. So I decided to try to run custom code on my Mac, and then I created `p1c0` 
as a smaller version of [`m1n1`] (a reverse-engineering and development tool for Apple Silicon 
macs).

After playing around for a while, I decided to turn `p1c0` into a new OS that would run on my 
Mac with no third-party code (within reason, since I would still need firmware blobs for all 
coprocessors).

This book talks about the design decisions and philosophy behind [`p1c0`] and will hopefully 
serve to document and clarify my own ideas as the development goes on.

[`p1c0`]: https://github.com/Javier-varez/p1c0
[`Asahi Linux Team`]: http://asahilinux.org
[`m1n1`]: https://github.com/asahiLinux/m1n1
