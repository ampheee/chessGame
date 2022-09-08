# Build Directory

The build directory is used to house all the build files and assets.
The structure is:

  * bin - Output directory
  * mac - MacOS specific files
  * windows - Windows specific files

## Mac

The `darwin` directory holds files specific to Mac builds, such as `Info.plist`. 
These may be customised and used as part of the build. To return these files to the default state, simply delete them and
build with the `-package` flag.

## Windows 

The `windows` directory contains the manifest and rc files used when building with the `-package` flag. 
These may be customised for your application. To return these files to the default state, simply delete them and
build with the `-package` flag.