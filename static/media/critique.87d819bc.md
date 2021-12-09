# Cookie Clicker

[The hit web game](https://orteil.dashnet.org/cookieclicker/) from the peak of the idle game era is nearing its 10 year anniversary. It's a satire of sorts, mocking (simultaneously, ironically, feeding) the insatiable greed of players and society at large for intangible, incomprehensible, and purely virtual numbers.

The game has a lot of staying power; its recent re-release has [topped the charts](https://www.gaming.net/cookie-clicker-continues-to-dominate-the-steam-charts/) of the most popular game distribution platform Steam. Yet its premise and its gameplay are so simple and plain, so uncomplicated that it plays itself. No human interaction required. [Researchers have dubbed this](https://pixl.nmsu.edu/files/2018/02/2018-chi-idle.pdf) the "zero-player game".

## What is it?

The idea is dead simple: you click on a cookie, you get a cookie (not real, of course). You convert clicks into worthless points, and your valuable time into regret. Who could find pleasure in that?

Once you click a few times, you'll be given an opportunity to increase your production rate autonomously, so you can continue being a productive member of society and leave the silly game aside. Unless, of course, you want more (you do).

Many have covered this phenomenon ad nauseum, so I will give links for further reading on the psychology of the game and why some of us get hooked on it: [Destructoid](https://www.destructoid.com/cookie-clicker-gets-inside-your-psychological-kitchen/), [Vice](https://www.vice.com/en/article/n7bypk/cookie-clicker-wasnt-meant-to-be-fun-why-is-it-so-popular-8-years-later), [DailyDot](https://www.dailydot.com/parsec/cookie-clicker-julien-thiennot-incremental-games/). I strongly suggest you don't open the game if you don't have days of free time to spare, you've been warned.

## My Take

The very concept is a timesink incarnate. To prove it, I boiled it down to its core and made a stripped down version you can play [here](/#/game) (again, you've been warned).

This version cuts all the bells and whistles, even the cookies. One click = one..., well, you decide what it represents. In the end it doesn't matter. Once you earn 5 you'll unlock a level, which costs 10 and pays out +1/s. You can buy multiple of a certain level for maximum accretion, but the price (and payout) will creep up accordingly.

I built it on a simple set of parameters to make it endless, here's how it works. If you're halfway to a power of 10, you'll unlock that level (e.g. you have 500, unlock level 3, since log10(500\*2) = 3). That level pays out one lower power of 8 (level 3 pays a base rate of +64/s, which is 8^2). Every time you buy a level, its price creeps by an additional +15%, and its payout gains an extra +11% (both exponential growth).

It's based on the design of the original game, allowing the lower levels to stay relevant to gameplay as you continue, and giving you an increasing number of options as you play. But if you noticed, the growth in cost will consistently outpace the growth in payout, for both the base rate (power of 10 vs power of 8) and the incremental rate (+15% vs +11%), naturally slowing down the frequency at which you make progress, like the original. In Cookie Clicker, you have an abundance of other means to continue accelerating your cookie production, which also take a [considerable amount of planning and optimization](https://cookieclicker.fandom.com/wiki/Cookie_Clicker_Wiki:Strategy) to make full use of.

I have personally played hundreds of hours of Cookie Clicker (passively), and enjoy it immensely. I wanted to see if the magic was all in this simple game design, so I made my own. For better or for worse, I spent an inordinate amount of time playing my own version as well. In case you're not as hooked on this concept as I am (or if you desperately need to make that number bigger), there's a surprise around the 20,000 mark that allows you to experience the unfettered power of endless exponential growth.
