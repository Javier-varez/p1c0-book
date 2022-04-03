Object.assign(window.search, {"doc_urls":["introduction.html#introduction","design_goals.html#p1c0-design-goals"],"index":{"documentStore":{"docInfo":{"0":{"body":96,"breadcrumbs":2,"title":1},"1":{"body":147,"breadcrumbs":5,"title":3}},"docs":{"0":{"body":"I am sure we can all agree that it would not be a great idea to just start an operating system without any goals or direction in mind, right? Well, that's what I did when I started p1c0 . p1c0 was born in late November 2021 when I got a new 14\" MacBook Pro with the M1 Pro chipset on it. I was quite thrilled by the refreshing direction these new Apple Silicon macs where taking and driven by the amazing research being done by the Asahi Linux Team . So I decided to try to run custom code on my Mac, and then I created p1c0 as a smaller version of m1n1 (a reverse-engineering and development tool for Apple Silicon macs). After playing around for a while, I decided to turn p1c0 into a new OS that would be run on my Mac with no third-party code (within reason, since I would still need firmware blobs for all coprocessors). This book talks about the design decisions and philosophy behind p1c0 and will hopefully serve to document and clarify my own ideas as the development goes on.","breadcrumbs":"Introduction » Introduction","id":"0","title":"Introduction"},"1":{"body":"p1c0 is an operating system for Apple Silicon machines. At this stage, p1c0 does not currently fulfill most of these design goals. These goals are defined for the long-term and drive the development ideas and implementation. Stability above convenience. Kernel and drivers writen in Rust . Rust provides the stability and safety guarantees needed for the most privileged functionality. Userspace code might be written in C/C++ or other languages. To this end, p1c0 will provide a C and C++ standard library implementation. Processes and drivers isolation. Drivers run in userspace and declare their capabilities statically. Faults in drivers do not escalate to overall kernel privileges. Drivers can be restarted by the kernel upon failure without impacting the rest of the system. Unix / POSIX compatible with a minimalistic approach. Only those features that we actually need will be implemented as time goes on. Support multiple architectures by decoupling the M1 boot process from iBoot (The Apple bootloader that normally loads XNU ). We aim to support Apple Silicon as first-class citizens, but that shall not prevent other architectures from being supported. This implies the need for a first-stage bootloader before handing the boot process over to p1c0. The interfaces are TBD . Little to no third party code. All production code should be located in the p1c0 repository . There are currently some dependencies that will be removed in the future. As with any project, we might update the goals as the system grows. We will keep this guide up to date with the current design philosophy.","breadcrumbs":"Design Goals » p1c0 Design Goals","id":"1","title":"p1c0 Design Goals"}},"length":2,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"1":{"4":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"2":{"0":{"2":{"1":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"1":{"tf":1.0}}}}},"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}},"m":{"a":{"df":0,"docs":{},"z":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.7320508075688772}}},"r":{"df":0,"docs":{},"o":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"s":{"a":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"b":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"l":{"df":0,"docs":{},"o":{"b":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}},"t":{"df":1,"docs":{"1":{"tf":1.4142135623730951}},"l":{"df":0,"docs":{},"o":{"a":{"d":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"c":{"/":{"c":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"a":{"df":0,"docs":{},"p":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":1,"docs":{"1":{"tf":1.4142135623730951}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"z":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"l":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}},"o":{"d":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.7320508075688772}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}},"l":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.7320508075688772}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"o":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}},"n":{"df":1,"docs":{"0":{"tf":1.0}}},"r":{"df":1,"docs":{"1":{"tf":2.23606797749979}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"s":{"c":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"f":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"n":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"g":{"df":0,"docs":{},"o":{"a":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":2.0}}}},"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"1":{"tf":1.0}}}}},"u":{"a":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}},"h":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}},"i":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"d":{"df":0,"docs":{},"e":{"a":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}}}}},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"a":{"c":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.0}}}},"r":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}}}}}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{"df":1,"docs":{"0":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"o":{"a":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"c":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"m":{"1":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}},"n":{"1":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"a":{"c":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":1,"docs":{"0":{"tf":2.0}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"w":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"b":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}},"s":{"df":1,"docs":{"0":{"tf":1.0}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":1,"docs":{"1":{"tf":1.0}}}}}},"p":{"1":{"c":{"0":{"df":2,"docs":{"0":{"tf":2.23606797749979},"1":{"tf":2.449489742783178}}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}}}}}}},"l":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}}},"o":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}}}},"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"df":1,"docs":{"0":{"tf":1.4142135623730951}},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"v":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"1":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}},"s":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":1,"docs":{"1":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"n":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"s":{"a":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}}},"h":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}},"m":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}},"t":{"a":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}},"n":{"d":{"a":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"t":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}}}}},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.7320508075688772}}}}}}}},"t":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}},"l":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}},"b":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}}},"h":{"a":{"df":0,"docs":{},"t":{"'":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"d":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"1":{"tf":1.0}}}}},"p":{"d":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":1,"docs":{"1":{"tf":1.0}},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"a":{"c":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}},"x":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"breadcrumbs":{"root":{"1":{"4":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"2":{"0":{"2":{"1":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"1":{"tf":1.0}}}}},"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}},"m":{"a":{"df":0,"docs":{},"z":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.7320508075688772}}},"r":{"df":0,"docs":{},"o":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"s":{"a":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"b":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"l":{"df":0,"docs":{},"o":{"b":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}},"t":{"df":1,"docs":{"1":{"tf":1.4142135623730951}},"l":{"df":0,"docs":{},"o":{"a":{"d":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"c":{"/":{"c":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"a":{"df":0,"docs":{},"p":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":1,"docs":{"1":{"tf":1.4142135623730951}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"z":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"l":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}},"o":{"d":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.7320508075688772}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}}}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}},"l":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":2.23606797749979}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"o":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}},"n":{"df":1,"docs":{"0":{"tf":1.0}}},"r":{"df":1,"docs":{"1":{"tf":2.23606797749979}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"s":{"c":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"f":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"n":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"g":{"df":0,"docs":{},"o":{"a":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":2.449489742783178}}}},"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"1":{"tf":1.0}}}}},"u":{"a":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}},"h":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}},"i":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"d":{"df":0,"docs":{},"e":{"a":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}}}}},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"a":{"c":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.0}}}},"r":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}}}}}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{"df":1,"docs":{"0":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"o":{"a":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"c":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"m":{"1":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}},"n":{"1":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"a":{"c":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":1,"docs":{"0":{"tf":2.0}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"w":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"b":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}},"s":{"df":1,"docs":{"0":{"tf":1.0}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":1,"docs":{"1":{"tf":1.0}}}}}},"p":{"1":{"c":{"0":{"df":2,"docs":{"0":{"tf":2.23606797749979},"1":{"tf":2.6457513110645907}}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}}}}}}},"l":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}}},"o":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}}}},"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"df":1,"docs":{"0":{"tf":1.4142135623730951}},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"v":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"1":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}},"s":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":1,"docs":{"1":{"tf":1.0}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"n":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"s":{"a":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}}},"h":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}},"m":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}},"t":{"a":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}},"n":{"d":{"a":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"t":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}}}}},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.7320508075688772}}}}}}}},"t":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}},"l":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}},"b":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}}},"h":{"a":{"df":0,"docs":{},"t":{"'":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"d":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"1":{"tf":1.0}}}}},"p":{"d":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":1,"docs":{"1":{"tf":1.0}},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"a":{"c":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}},"x":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"title":{"root":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"p":{"1":{"c":{"0":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});