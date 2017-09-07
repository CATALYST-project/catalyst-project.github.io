$DOC.mod('theme-switcher');

// example of using $DOC.parseContent function to create sections
$DOC.parseContent(function(){/*

<!--fixed-top-bar
[navbar]
[Home]({{=$DOC.root}}index.html)
***
* [Guides]({{=$DOC.root}}index.html)
 * [Concatenation]({{=$DOC.root}}guides/guide-concatenation.html)
 * [Normalization]({{=$DOC.root}}guides/guide-normalization.html)
 * [Compensation]({{=$DOC.root}}guides/guide-compensation.html)
 * [Debarcoding]({{=$DOC.root}}guides/guide-debarcoding.html)
[/navbar]
-->

<!--header-panel
-->

*/});

// another example of creating a named section
$DOC.sections['footer-panel'] =
'[footer-layout scheme=line]\
* © 2013 [aplib on GitHub](https://github.com/aplib/markdown-site-template) MIT\n\
***\n\
* [Free download template from GitHub](http://aplib.github.io/markdown-site-template/markdown-site-template.zip)\
[/footer-layout]';
