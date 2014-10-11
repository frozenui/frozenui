# One Theme

The One Theme for [nico](http://lab.lepture.com/nico/)

This theme requires nico 0.4.6+ now.

## Configuration

The basic configuration for a blog:

```
{
    "source": "content",
    "output": "_site",
    "theme": "_themes/one",
    "sitename": "Nico",
    "siteurl": "http://lab.lepture.com/nico/",
    "permalink": "{{directory}}/{{filename}}.html",
    "writers": [
        "nico.PostWriter",
        "nico.PageWriter",
        "nico.FileWriter",
        "nico.StaticWriter",
        "nico.ArchiveWriter",
        "nico.YearWriter",
        "nico.TagWriter",
        "nico.DirectoryWriter",
        "nico.FeedWriter"
    ]
}
```

Additional configuration this theme:

- tagline: A description of your site.
- touchIcon: Link of Apple Touch Icon.
- hideNico: Hide nico copyright at bottom.
- github: Github link, a github fork badge will display.
- navigation: A array of items of navigation.

Navigation example:

```
{
    "navigation": [
        {"title": "Life", "link": "/life/"},
        {"title": "Work", "link": "/work/"}
    ]
}
```

## Comment

Comment is available for posts. This theme support disqus and duoshuo.

Configure a disqus short name:

```
{
    "disqus": "short name"
}
```

If you prefer duoshuo:

```
{
    "duoshuo": "short name"
}
```
