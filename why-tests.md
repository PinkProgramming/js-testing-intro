# Why Tests

A short introduction. Credit to Marie Birde & Olga Stern and you can read more in their book _Ettor och nollors hemliga liv_ (Volante 2019)

### Tests

"Computers are known to crash at times you really need them to work. One may call it bugs. Software is buggy because humans are buggy. And a computer is just too stupid to fix their own faults."

#### Unit tests

Bugs can be reduced by writing tiny pieces of code that tests a specific part of a program.

![Icons made by photo3idea_studio from www.flaticon.com](img/anti-flea.svg)

The unit test works like a simulator, that put your own to test in various ways.

![Icon made by Smashicons from www.flaticon.com](img/simulator.svg)

#### UI tests

Compare the graphics of a user interface with how it looks in a specification. Compare using various screen sizes and hardware.

![Icon made by Freepik from www.flaticon.com](img/responsive.svg)

#### Integration tests

When different parts of the software is tested in how it works together. Eg: Can it connect to database and then list the content in a nice user interface?

![Icon made by Vectors market from www.flaticon.com](img/settings.svg)

### When to test

- Tests can be written when new code is added
- Old tests continue to validate that the new code didn’t break the old code

In this way, a higher level of code quality is obtained.

Some programmers prefer to reverse the order, this is known as TDD - Test Driven Development, making the programming easier.

### ~~User testing~~

Still being an important aspect of programmer’s life, tests are not written as a replacement for user testing.

User testing is done by creating prototypes, for which is for designers and the whole development team to understand and support.
