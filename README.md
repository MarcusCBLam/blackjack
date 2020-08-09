# Welcome to my Blackjack React app.

The objective here is to create a simple Blackjack app that will allow the user to challenge the dealer to a game of a Blackjack using basic rules.

#############################################

To run the app:

1. 'NPM INSTALL' to install all the dependencies.
2. 'NPM RUN START' to launch the app in the browser.

3. 'NPM TEST' to run the unit tests - here, I've only added a few due to time constraints. Ideally, I would like a unit test for every function.

#############################################

SIMPLE RULES:

There is a standard set of 52 cards. The player is given 2 random cards when the game
begins and the dealer is given a single card, which the player can see:

- Numbered cards are worth their face value - 4 of clubs is worth 4, 10 of
  spades is worth 10, and so on
- The ace can be either 1 or 11
- Picture cards are worth 10 points.
- The player is given the following 2 options:

- Hit - The player is dealt another card and it’s value is added to the total
- Stick - The player does not want another card at that point

- The player can “hit” until they are either happy with the sum of their cards’ values or the
  total of their cards is equal to or greater than 21. If the player’s total exceeds 21, they lose.
- If the player chooses to “stick” the dealer will start drawing cards until they either have a
  total greater than the player’s total or the dealer’s total is greater than 21. If the dealer’s total
  exceeds 21, the dealer loses. If the dealer sticks on a total greater than the player’s, the
  dealer wins.

# APP SOLUTION

We will be using React here to create the UI with Redux as the store for the states.

Pages in app:
Homepage page - the 'welcome' page with 2 buttons to - 1. let user go to play game and 2. go to instructions page.
'Play Game' page - this is the main page where you can blackjack.
How To Play - simple instructions for the user to get the jest of how to play blackjack.
Show cards - this is just a quick test page to make sure all the cards are looking ok.

# 'Play Game' page

This is the main app with the page divided into 3 main areas:

1. Game score to keep tab of the score tally between the dealer and the player
   This will tallying the scores between the dealer and the player as long as the browser session is still active. Have not applied storage persistent so it's more fun to refresh browser if you want to reset the scores.

2. The Game Table -
   Top left part is the dealer area, bottom right part is player area.
   When in play, the table will the cards and the total of the cards. The cards will always be calculated on the highest score possible without going over 21. Recalculation will be applied the total is more then 21 until it is no longer possible.
   A messsage board is visible in the middle of the table to provide feedback on status of game.

3. The controls of the game:
   START NEW GAME - this button will start a new game, as well as resetting the table after each game and allocating points to the winner of each round.
   HIT - Get the dealer to deal the player another card.
   STICK - Holding the cards and passing the turn over to the dealer.
   Note: Buttons will be disabled accordingly if the buttons are not appliable, defining the user's CTA.

# To play

Click 'START NEW GAME' to start the game where the player will be dealt 2 cards and the dealer dealt 1 card.
(I have also included the codes fot the usual game where the dealer is dealt 2 cards but with 1 covered. This has been commented out as the requirment for this task is to only deal 1 card to the dealer.)
You can HIT as many times as you like. You will no longer be given this option if your total score is over 21 or if you have achieved a 5 card charlie i.e. 5 cards and not going over 21.
You can STICK if you are happy with your score and pass the turn over to the dealer.
Dealer will deal himself a card one at a time until he either beats your score or goes bust.
Once the game concludes with either user going bust or winning, click 'START NEW GAME' to issue the point to the winner and reset for another game.

Enjoy the game!
