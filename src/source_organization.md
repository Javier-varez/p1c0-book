# Source files organization

The sources are currently organized in multiple crates and libraries as follows:
  * `fw/p1c0` - Library for the FW build of p1c0. This is mainly all sources that are built for the 
    m1 mac with the `aarch64-unknown-none-softfloat` target. This depends on `p1c0-kernel`.
  * `fw/tests/` - These are all on-target integration tests that can be run with qemu. They use the 
    `test-fwk`.
  * `fw/p1c0-bin` - The actual binary we run on the m1 mac.
  * `p1c0-kernel` - These are the sources of the kernel that can be built for other targets and 
    tested on the host. All unit tests are in this library package.
  * `p1c0-macros` - This is a proc-macro crate which defines helpers for the `p1c0` OS.
  * `test-fwk` - Contains the test framework that uses arm-semihosting to create test runners and 
    perform I/O on the host, as well as exit with error codes in order to fail a test or not.
  * `test-fwk/m1-runner` - This is a binary that can take a `mach-o` file wrapped in an `elf` file 
    and run it. The `mach-o` to `elf` conversion dance is a bit of a hack because the toolchain does 
    not support macho files.
    The m1-runner can be used as a custom cargo runner for `fw/p1c0-bin`. It reads configuration 
    from the CARGO_MANIFEST_DIR to show display or standard output.
  * `userspace` - CMake package for all userspace packages.
  * `xtask` - Helpers for running, testing and setting up the environment.

In the future, I would like to separate some bits and pieces from `p1c0-kernel` that would 
complement the core rust library for no-std targets.

In addition, it might make sense to start creating a driver API crate so that drivers can be loaded 
externally. This fits well with a microkernel architecture and should make it easy to isolate 
drivers and other kernel extensions from the core system.

Finally, a C and C++ standard library will probably belong in `userspace` as things develop and 
userspace grows. For now it is fine since all we have is a userspace test application that is 
actually relocatable (There is no dynamic loading of libraries so far).
