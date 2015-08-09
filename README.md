# HTML Tree View

A little tool to visualize the structure of an html document as a tree.

## Usage :

Either you can open `tree.html` and use the tool by filling the boxes text fields.

Enter a url, a jquery selector and click.Enter

## Url parameters

You can give a hash argument `#url=` like this :

`tree.html#url=some_file.html`

And it will preload the tool so you don't have to do it manually.

If some_file.html has this content :

```html
<html>
<head>
    <title></title>
</head>
<body>
  
<ul id="header-nav">
  <li> item1 
    <ul>
    <li> subitem 1</li>
    <li> subitem 2</li>
    </ul>
  </li>
  <li class="selected"> item2 </li>
  <li> item3 </li>
</ul>

<ul id="footer-nav">
  <li> item1 
    <ul>
    <li> subitem 1</li>
    <li> subitem 2</li>
    </ul>
  </li>
  <li> item2 </li>
  <li class="selected"> item3 </li>
</ul>

</body>
</html>
```

The result will look like this :

![](https://bitbucket.org/codiocontent/html-treeview/raw/master/img/example1.png)


You can also give it one additionnal argument : `&querySelector=jquery_selector`

Which will highlight (in green) all the node that match the `jquery_selector` (which has to be valid jquery selector) argument.
(You can url_encode the jquery_selector argument if you have trouble with it)

Here is an example result, with the following query :

`tree.html#url=some_file.html&querySelector=ul`

![](https://bitbucket.org/codiocontent/html-treeview/raw/master/img/example2.png)


### TO DO :

- Instead of just loading the html raw via url-fetcher when it's external, might want to use something like phantomjs (otherwise the displayed html structure doesn't take into account any changes made by js when the page loads, it will just display the raw structure of the page as returned by server)
- Add possibility to focus only on one part of the html (like from the body or lower..)
