### Steven Shoemaker
### CSE 110 Lab 4 - Part 4 (expand)

1. Asynchronous features are relatively difficult to debug (even with Chrome's built in debugging system) and can often cause issues with the event queue (as we saw with setTimeout moving a 0ms event to run AFTER synchroneous code). Certian operations (like yield and await) can also have confusing syntax that's an extra burden to learn.

As for loose typing, there's a reason that "lower level" languages still exist. While the language itself manages quite a bit, this is often at the cost of a machine taking on extra computational burden. That, and this can often lead to unexpected behavior or behavior that would be checked in a compiler (IE false + null doesn't really make sense in any other language)

Finally, the Web Platform has already been discussed. Node helps, but needing to launch a browser every time a developer wants to run or test their code can be overly time consuming.

2. Loose typing helps to avoid errors, which is an essential point in JavaScript. It runs on webpages along with both CSS and HTML, so being able to "play nice" and load the page even when the developer made a mistake is a big deal. Asynchonous features are also pivotal to a good user experience - a user should be able to look around a page while waiting for a form to submit, for example.

3. An interpereted language is fed into an interpereter (in our case, a browser) at runtime, and therefore is not checked for errors and converted to machine code beforehand. JavaScript is an interpereted language. This makes it easier to run and test code - and it enforces that most code fed into a webpage can be understood by anyone who visits/downloads that webpage.

4. In all honesty, these labs are already really work intensive, and yet I feel that if this was my first time doing web development I'd only know the bare minimum. We don't have time to go through an entire framework. Even if we did, our base JavaScript would be so bare bones I doubt we could actually make use of much of the framework efficiently. The time and team size we have for this class doesn't really mandate use of one anyways.

5. This lab was more about debugging than JavaScript in my opinion. There's a 0% chance a web app built by ~8 people is going to work first try. We're going to need to debug constantly, it's an important skill to have.