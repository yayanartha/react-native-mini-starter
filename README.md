# React Native Mini Starter

This is a very minimalistic starter kit I usually used in my several projects. It uses redux architecture with realm database. This starter kit fit best with any RESTful API backend.

Libraries used are:

### Native dependencies ###
| Package | Description
|---------|--------------
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

# Installation

First thing to do of course running `npm install` command. Then follow below instructions step by step.

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

## 2. Fill up the .env files.

Put every configurations for staging environment in .env.staging and env.prod for your production.
For detailed explanation please refer to this [article](https://medium.com/differential/managing-configuration-in-react-native-cd2dfb5e6f7b).

# Running The App

Once everything are configured properly, run one of these commands:

| Command | Functionality |
|---------|---------------|
| `npm run android-staging` | To run Android app in staging environment |
| `npm run ios-staging` | To run iOS app in staging environtment |
| `npm run android-prod` | To run Android app in production environtment |
| `npm run ios-prod` | To run iOS app in production environtment |
| `npm run build-android-staging` | To build Android APK file in staging environtment |
| `npm run build-android-prod` | To build Android APK file in production environtment |
| `npm run release-android-staging` | To install recently released APK in staging environtment |
| `npm run release-android-prod` | To install recently released APK in production environtment |

These commands are listed at `package.json` file.
