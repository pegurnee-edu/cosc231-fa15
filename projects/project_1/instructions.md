# How Awesome Is Marvel?

- **Distributed:** *October 15th*
- **Deliverable 1:** *October 22nd*
- **Final Project:** *October 27th*

### Description:

As the president of your fan club you realized the need to increase your web presence, you are hoping that by building a fancy website promoting your club you will be able to increase recruit new members and increase awareness in your club, which of course is a fan club for your favorite Marvel character.

### Spec:

- Create a website in Honor of your favorite Marvel character
- There should be at least 5 interconnected web pages:
  - Homepage (index.html)
    - basic page, sets standard for the rest of the pages to follow
    - at least one image of your chosen character
    - the name and slogan of the club
    - 'upcoming events'
  - About the club (about.html)
    - some information about the club (years in service, founding)
    - what the club hopes to accomplish
    - list some of the club members with images (if available) and links to their accomplishments
  - About the character (${characterName}.html)
    - highlights of some the character's backstory
    - powers/strengths/accomplishments - why is this character the best?
    - trivia - is she an accomplished hammered dulcimer player? does he prefer caramel to chocolate? do they sleep with one eye open because when they were seven a rabbit bit off part of their eyelid?
  - Register new users (join.html)
    - a page holding a form for visitors to join
    - must require a user to register with a valid
      - username
      - password
      - first name/last name
      - e-mail
      - date of birth
      - gender
      - requested title
      - Credit card number
      - favorite type of apple (something in a select box)
    - if the user is already logged in, the page says thanks for supporting
  - Sitemap (sitemap.html)
    - a simple page listing all of the websites pages that can be reached
- Each page should use one general style sheet (club-general.css) that applies a thematic flow to the pages
  - i.e. If I choose to have a fan club for The Flash my club-general.css would apply to all of my pages:
    - a reddish background
    - skinny lightning-bolty font
    - yellow font for exciting headings
    - maybe some cool electric looking :hover for my links
    - *obviously, you won't be able to use The Flash, he's from DC*
  - the club-general.css will be linked by every page, give it broad enough rules that will be used everywhere
  - pages may have individual stylesheets (i.e. club-about.css), but no in-line style attributes

## Expectations:

- work in groups of up to 3 people
- html pages will be html5 compliant (tested [here][html5])
- css pages will be css3 compliant (tested [here][css3])
- all source code will show proper/consistent formatting
- no erroneous red code in firefox html preview
- respect the minor SEO techniques we've discussed (external libraries whenever possible, generate html with javascript when appropriate)
- web site will be hosted on people.emich

## Deliverables:

- Deliverable 1 (written course of action):
  1. Names of group members
  1. Outline of responsibilities for group members
  1. General/abstract explanation of planned theme (colors, font, layout)
    - this is not a binding contract, I just want to know you're thinking about it
  1. Choice of marvel character

- Final Project:
  1. Print out of all source code due 2pm on the 27th
  1. Demo/walkthrough in class

## Requirements for success:

- Regex validation on registration form
- Cookie store for registered users

### Legal Notice

*Please appropriately cite text/images taken straight from wikipedia and other sites*

[html5]: https://validator.w3.org/
[css3]: https://jigsaw.w3.org/css-validator/
