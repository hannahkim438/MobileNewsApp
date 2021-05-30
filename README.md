

1. Install all packages:

$ cd TestProject1
$ npm install

2. Edit blacklist.js file at node_modules\metro-config\src\defaults:

/node_modules[/\\]react[/\\]dist[/\\].*/, -> /node_modules[\/\\]react[\/\\]dist[\/\\].*/,

3. Edit local.properties file at android:

sdk.dir=C\:\\Users\\asuss\\AppData\\Local\\Android\\Sdk -> sdk.dir=C\:\\Users\\<your useranem>\\AppData\\Local\\Android\\Sdk

4. Run:

$ react-native run-android
