# p1c0 Design Goals

`p1c0` is an operating system for Apple Silicon machines.

At this stage, p1c0 does not currently fulfill most of these design goals. These goals are defined 
for the long-term and drive the development ideas and implementation.

  * Stability above convenience.
    * Kernel and drivers writen in [Rust]. Rust provides the stability and safety guarantees 
      needed for the most privileged functionality.
    * Userspace code might be written in C/C++ or other languages. To this end, `p1c0` will provide 
      a C and C++ standard library implementation.
    * Processes and drivers isolation. 
      * Drivers run in userspace and declare their capabilities statically. 
      * Faults in drivers do not escalate to overall kernel privileges. 
      * Drivers can be restarted by the kernel upon failure without impacting the rest of the 
        system.
  * [Unix]/[POSIX] compatible with a minimalistic approach. 
    * Only those features that we actually need will be implemented as time goes on.
  * Support multiple architectures by decoupling the M1 boot process from [iBoot] (The Apple 
    bootloader that normally loads [XNU]).
    * We aim to support Apple Silicon as first-class citizens, but that shall not prevent other 
      architectures from being supported.
    * This implies the need for a first-stage bootloader before handing the boot process over to 
      `p1c0`. The interfaces are _TBD_.
  * Little to no third party code.
    * All production code should be located in the [`p1c0` repository]. 
    * There are currently some dependencies that will be removed in the future.

As with any project, we might update the goals as the system grows. We will keep this guide up 
to date with the current design philosophy.

[Rust]: https://rust-lang.org
[Unix]: https://en.wikipedia.org/wiki/Unix
[POSIX]: https://en.wikipedia.org/wiki/POSIX
[iBoot]: https://www.theiphonewiki.com/wiki/IBoot_(Bootloader)
[XNU]: https://en.wikipedia.org/wiki/XNU
[`p1c0` repository]: https://github.com/Javier-varez/p1c0
