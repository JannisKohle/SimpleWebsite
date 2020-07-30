# SimpleWebsite

A template simple websites without any backend with normal HTML.

## How to use it:

1. Clone this Repo
2. Run ```npm install```
3. Create html files for all the pages of your website in ```html/```
4. Open ```index.js``` and add Route Handlers for all the pages:
```javascript
app.get("/random/url", (req, res) => {
  fs.readFile("./html/fileName.html", "utf8", (err, content) => {
      if (err) {
          res.send(err);
      };
      res.send(content);
  });
});
```
5. To run the app, use ```npm start```. If you want the app to update automatically after you've made changes to it, use ```npm test```.
