# Calculator
https://github.com/dpflr0714/Calculator

Project created using HTML, CSS, and Javascript as part of the Odin Project

[Live Page](https://dpflr0714.dpflr0714.github.io/Calculator/)

## Functionality
- A very simple scientific calculator that can handle simple operations such as addition, subtraction, multiplication, and division.
- Users can either click on the buttons or use their keyboard for inputs.

## Problems I faced during the project:
- Using Flexbox in order to order and design the buttons exactly the way I want it to be.
- Figuring out the logic of if and else when tied with multiple events. The hardest part of this project was when I was trying to figure out how to make sure
that the calculator would store the numbers whenever operator was called and make sure that when the user inputs a new number, the old variable would be referenced to a new
variable.

## What I learned:
- How to add keyboard support for browsers and the differences between Keyboard methods that are decprecated. Initially, when adding keyboard support, I used keypress event to call
the functions but I later had to change my method of calling since keypress was deprecated but also realized that backspace did not have any unicode. I switched to keydown for my keyboardEvent
and had much easier time.