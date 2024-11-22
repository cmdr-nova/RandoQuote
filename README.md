# RandoQuote
A friend on Mastodon saw that I had put a random quote generator onto my website, and wanted to mess with it / use it for a project, so I simplified it (by removing the requirement of only showing a quote once per day, and storing it locally), and handed it over. I'm putting it here on the Hub so that it can be used by others as well. And, also, as a backup (back everything up, all of the time).

Just place it into your website's JS directory (wherever that may be), and then reference it with
```
<script src="randomQuote.js"></script>
```
And you're golden (use a css element to customize the way it's displayed).

This script doesn't actually *generate* any quotes *for you*. You have to actually put some quotes into the script itself, but that's easy peasy, right? Just gather up a bunch of quotes you like, and write them into the file like this:
```
"John was a ploppy boy. -His mom",
"Stuff is hard, and stuff is easy. -Captain Obvious"
```
