# COVD19TT

A simple applicaiton to help users find health care centers and hospitals nearby

* Searchable Healthcare Directory (Call/Get Directions)
* Hospital Map
* User Questionnare
* COVID-19 Hotline
* Push Notifications
* Latest News/Resources

![COVD-19 APP DEMO](https://github.com/aaronbesson/covid19tt/blob/master/example.gif)

Todo

* User Profiles (Firebase)

## Run

yarn (or npm install)

expo start

You can test push notification when running on your mobile device (DO NOT USE WITH LIVE APP)

https://expo-notifications-tool.now.sh

To setup and configure your own push notifications:

https://dev.to/josedonato/minimalist-approach-to-send-push-notifications-with-expo-4m7h

## Configuration

There are several JSON files that can be confgured

https://github.com/aaronbesson/covid19tt/tree/master/examplejsonfiles


### Build for Android

expo build:android -t app-bundle  

### Build for IOS

expo build:ios


