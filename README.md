# About this repo

This is a very minimalistic starter kit I usually used in my several projects. It uses redux architecture with realm database. This starter kit fit best with any RESTful API backend.

Libraries used are:

** Native dependencies **
* react-native-navigation
* react-native-vector-icons
* realm
* react-native-config

** JS libraries **
* react-native-style-tachyons
* react-native-responsive-dimensions
* react-native-tab-view
* react-intl
* redux
* react-redux
* redux-logger
* redux-thunk
* redux-promise

# Installation

## 1. Change the package name to yours.

### Android
For Android, you must change the package name in the following files:
```
android/app/src/main/java/com/reactNativeSampleApp/MainActivity.java
android/app/src/main/java/com/reactNativeSampleApp/MainApplication.java
android/app/src/main/AndroidManifest.xml
android/app/build.gradle
```
also in the `/android/app/BUCK` file (optionally, but the best practice is also rename the package name in this file).
```
android_build_config(
    name = "build_config",
    package = "app.new.name",
)

android_resource(
    name = "res",
    package = "app.new.name",
    res = "src/main/res",
)
```
Finally, run command `cd android && ./gradlew clean`

### iOS
For iOS, you just need to change BundleID with Xcode.
