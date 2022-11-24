### Numbers to words

_"The OakNorth engineering team has 3 tribes and five squads. 26 is the current number of engineers, soon to be 28.
1 part of the engineering team is in India and one part of the team is in the UK."_
...

Rosie has been inconsistent with her writing - she's got numbers as words in some places and numbers as numbers in others!
Let's improve the text following these rules:

- **Numbers beginning a sentence should be written as words.**
- **Hyphenate all compound numbers from twenty-one to ninety-nine.**

Write a function which takes an input of numbers and returns them spelt out.
For simplicity, let's assume we have already extracted the numbers we want to change from the paragraph.

**Only worry about numbers up to 4 digits long.**

**Assume all numbers are positive.**

### Examples

**1 digit**

0 = zero, 5 = five, 8 = eight

**2 digits**

10 = ten, 21 = twenty-one, 77 = seventy-seven

**3 digits**

100 = one hundred, 303 = three hundred three, 555 = five hundred fifty-five

**4 digits**

2000 = two thousand, 3466 = three thousand four hundred sixty-six, 2400 = two thousand four hundred

### Bonus

Express your large numbers in the simplest way possible.
Instead of 1300 being equal to one thousand three hundred it should return thirteen hundred, and instead of 5300, it should be fifty-three hundred.




_(Kata taken from http
