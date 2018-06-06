cordova-plugin-share
====================

Cordova Plugin to open native "share" popup in Android and iOS with W3C Web Share API support

### Install

In your phonegap/cordova project, type:

`cordova plugins add https://github.com/keilyn3d/cordova-plugin-share.git`

### Usage

`navigator.share({
  title: document.title,
  text: 'Hello World',
  url: 'https://developer.mozilla.org',
});`

`navigator.share(text,title,mimetype)`


* text: Text to share, i.e. "Incredible plugin"
* title: Title of popup, i.e. "Share this quote" (android only, default: "Share")
* mimetype: Mimetype, i.e. "image/jpeg" (android only, default: "plain/text")

### More info

* iOS share code from [stack overflow](http://stackoverflow.com/questions/12546574/using-apple-icons-with-ios-6)
* Android share code from [here](http://developer.android.com/training/sharing/send.html). Read if you want to understand *mimetype* options.
* Check out the more elaborate [Social Share plugin from Eddy Verbruggen](https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin/)

### License

MIT license

