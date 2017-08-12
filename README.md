# About this repo

This is a very minimalistic starter kit I usually used in my several projects. It uses redux architecture with realm database. This starter kit fit best with any RESTful API backend.

Libraries used are:

### Native dependencies ###
| Package                   | Description
|---------------------------|--------------
| [react-native-navigation](https://github.com/wix/react-native-navigation) | Navigator library
| [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) | Vector Icons (FontAwesome, Ionicons, etc.)
| [realm](https://realm.io/docs/javascript/latest/) | Row-type local database
| [react-native-config](https://github.com/luggit/react-native-config) | Configurations (.env.staging, .env.prod, etc.) 

### JS libraries ###
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
