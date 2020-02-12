import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    // the state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // 'phrase' is the text entered by the user - right now there are some test words hard coded to make the process of testing your code a bit faster and easier
      // ACTION ITEM: when you are ready for your full user experience, delete the test words so phrase is assigned an empty string
      phrase: 'bacon tip corned rib capicola yeehaw',
      // 'phraseTranslated' is what the user will see appear on the page as Pig Latin, it starts as the preset message and updates when your user clicks the 'submit' button
      phraseTranslated: 'This is where your translated sentence will appear.'
    }
  }

  // The 'myPigLatinCodeHere' function is where you will put your logic to convert the sentence entered by the user to Pig Latin.

  myPigLatinCodeHere = () => {
    // the variable 'userInput' will contain the text input from the user
    // no need to change this variable
    let userInput = this.state.phrase

    // as you modify and create Pig Latin-ified words, push them into 'translatedWordsArray'
    // no need to change this variable
    let translatedWordsArray = []

    // taking the user input and spliting the text into an array of words
    let splitUserInput = userInput.toLowerCase().split(" ")

    // now that we have an array of words, we can map over the array and access each word
    splitUserInput.map(currentWord => {
      // ACTION ITEM: use 'currentWord' as a starting point for your code
        //Variable to check for vowels
        let regVowels = /[aeiou]/gi
        //Variable to check for QU
        let regQU = /qu/gi
        //Variable to store characters
        let ending = ""
        //Variable to find Y's
        let regY = /y/gi
        //Variable to split our word into an array
        let splitWord = ""
        //Variable for consonants
        let regConst = /[^aeiouy]+/gi
        //compare first letter to our vowels
        if (currentWord === "") {
            return translatedWordsArray.push("You did not enter anything.")
        }
        else if (currentWord[0].match(regVowels)) {
            //Replace the word with the ending added
            currentWord += "way";
            //send word to translated array
            return translatedWordsArray.push(currentWord)
        }
        //Our condition for QU
        else if (currentWord.match(regQU)){
            for (let i = 0; i < currentWord.length; i++){
                //Write the letters before U to a variable
                ending += currentWord[i];
                    //Finds Q
                    if (currentWord[i] === "q"){
                        //Adds U to our variable
                        ending += currentWord[i+1];
                        //Breaks us out of the loop
                        i = currentWord.length;
                    }
            }
            //Split the word
            let splitWord = currentWord.split("")
              //Loop to remove the first few letters
              for (let i=0; i < ending.length; i++) {
                  splitWord.shift();
              }
              //Add the beggining of the word to the end and add ay
              splitWord.push(ending + "ay")
              //Set current word to the reassembled word for the final copy
              currentWord=splitWord.join("")
              return translatedWordsArray.push(currentWord)
        }
        //Enter if we have a Y in the word
        else if (currentWord.match(regY)) {
            //Checks if Y is the first letter
            if (currentWord[0] === "y") {
                //Splits the word into an array
                splitWord=currentWord.split("")
                //Removes the first letter
                splitWord.shift()
                //Reassembles the word
                splitWord.push("yay")
                //Set the current word to the reassembled word for the final copy
                currentWord=splitWord.join("")
                return translatedWordsArray.push(currentWord)
            } else {
            //Resetting ending to blank string
                ending = ""
                //Loop is writing the letters before y to the ending variable
                for (let i = 0; i<currentWord.length; i++){
                    if(currentWord[i] !== "y"){
                        //writes the letter to the end
                        ending += currentWord[i]

                    } else {
                        //if the letter is Y, break the loop
                        i = currentWord.length
                    }

                }
                //Turns our word into an array
                splitWord = currentWord.split("")
                //Removes the letters that we need from the word
                for(let i = 0; i<ending.length; i++){
                    splitWord.shift()
                }
                // Reassembles word
                splitWord.push(ending + "ay")
                //Joins word back together and sends it to the final copy
                currentWord = splitWord.join("")
                return translatedWordsArray.push(currentWord)
            }
                //Enter if we have a consonant
        } else if (currentWord.match(regConst)){
                //Resets ending string
            ending = ""
                //Loop will go through and add consonants to ending string until hits vowel
            for ( let i = 0; i<currentWord.length; i++){
                if(currentWord[i].match(regVowels)){
                    //if it is a vowel it breaks the loop
                    i = currentWord.length
                } else {
                    //writes consonant to ending
                    ending += currentWord[i]
                }
            }
            //splitting the current word into an array
            splitWord = currentWord.split("")
            //for loop is to remove the letters that we do not need
            for(let i = 0; i<ending.length; i++){
                //remove letter
                splitWord.shift()
            }
            //add ending to the end of it and add "ay"
            splitWord.push(ending + "ay")
            //reassembles the word for final print
            currentWord = splitWord.join("")

            return translatedWordsArray.push(currentWord)
        }




            //
          // your code here!

          // Remember: console.log is your friend :)


      // ACTION ITEM: change the value of currentWord in the push method to the name of whatever variable you made containing your Pig Latin'd word
      // return translatedWordsArray.push(currentWord)
    })


    // joining the array back to a string of translated words
    // no need to change this variable
    let translatedWords = translatedWordsArray.join(" ")

    // the setState method will take your information from 'translatedWords' and update the state object that is displayed to the user
    // no need to change this method
    this.setState({ phraseTranslated: translatedWords })
    // done!
  }

  setUpPreventDefault = (e) => {
    // this method prevents react from refreshing the page unnecessarily
    // no need to modify this method
    e.preventDefault()
    this.myPigLatinCodeHere()
  }

  handleChange = (e) => {
    // this method takes the input and saves the value in this.state.phrase so we can use the input in our program
    // no need to modify this method
    this.setState({ phrase: e.target.value })
  }

  restartGame = () => {
    // this method restarts the game by setting the original state
    // ACTION ITEM: when you are ready for your full user experience, delete the test words in phrase so that is assigned an empty string
    this.setState({
      phrase: 'bacon tip corned rib capicola yeehaw',
      phraseTranslated: 'This is where your translated sentence will appear.'
    })
  }

  render() {
    // the render method is where we put information on the page
    // inside the return is all our JSX tags
    return (
        
      <div>
        <h1>Happy Piggy Pig Latin Translator</h1>
          <div id="pigImage">
            <img
              src="https://cdn.pixabay.com/photo/2019/06/27/21/14/logo-4303138_960_720.png"
              alt="Piggy lookin' really cute as a logo"
              id="butcherPig"
            />
          </div>
          <div className="box">
            <h4>Enter a delicious phrase to be translated:</h4>
            <div className="info">
            {/* user input field - every DOM event that happens in the input will call the handleChange method and update state */}
              <input
                id="inputPhrase"
                onChange={ this.handleChange }
                value={ this.state.phrase }
              />
              <br />
              {/* button that called the setUpPreventDefault method */}
              <button onClick={ this.setUpPreventDefault }>Oink me</button>
              {/* button that resets the game */}
              <button onClick={ this.restartGame }>Git that text outta here</button>
            </div>
            {/* where the translated phrase will display */}
            <p className="output">Piggy sez, "{ this.state.phraseTranslated }"</p>
          </div>
        <footer>
          <a href= "https://www.youtube.com/watch?v=4_2Dgn-CgYw" >Coded by Cruz, Rudy and Andee </a>
        </footer>
      </div>
    );
  }
}

export default App;
