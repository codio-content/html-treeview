# HTML Tree View

A little tool to visualize the structure of an html document as a tree.

## Usage :

In order to use this tool you have to view the `tree.html` page in a web browser.

You have to at least give it one hash argument `#url=` like this :

`tree.html#url=some_file.html'

Otherwise it doesn't know the structure of which document to display.

If some_file.html has this content :

'''html
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
'''

The result will look like this :

![](https://bitbucket.org/codiocontent/html-treeview/raw/master/img/example1.png)


You can also give it one additionnal argument : `&querySelector=jquery_selector`

Which will highlight (in green) all the node that match the `jquery_selector` (which has to be valid jquery selector) argument.
(You can url_encode the jquery_selector argument if you have trouble with it)

Here is an example result, with the following query :

`tree.html#url=some_file.html&querySelector=ul`

![](https://bitbucket.org/codiocontent/html-treeview/raw/master/img/example2.png)


### TO DO :

- Add possibility to focus only on one part of the html (like from the body or lower..)
