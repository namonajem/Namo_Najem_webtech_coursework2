


/**
 * Same JS for encoding messages but dulled down and decoding is gone
 */

function encoderot13(d)
{
  //declaring our variables
  var plain_text = d.toLowerCase(); //input string
  var cypher_text = []; //output string
  var alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' ']

var words = plain_text.split(' '); //splitting words by spaces

for (var i = 0; i < words.length; i++) { //itterating over each word

  var word = words[i];

  for(var idx=0; idx<word.length; idx++)
  {
    input = alphabet.indexOf(word[idx]);
    if(input == -1)
    {
      cypher_text.push(word[idx]+' ');
    }
    else
    {
      var coded = (input+13)%26; //adding 13 to the value
      var letter = alphabet[coded];
      cypher_text.push(letter); //pushing the substitute to the output string
    }
  }
}
  //for loop that replaces each letter with one 13 letters after it

  return cypher_text.join(""); //outputing to html element
}

function encodecaesar(b)
{
  //declaring our variables
  var plain_text = b.toLowerCase(); //input string
  var length = plain_text.length;
  var cypher_text = '';



	for (var i = 0; i < plain_text.length; i ++) {

		var l = plain_text[i];

		if (l.match(/[a-z]/i)) { //checking if letters match that of the alphabet

			var value = plain_text.charCodeAt(i);

			if ((value >= 65) && (value <= 90)) //encoding for uppercase
				l = plain_texting.fromCharCode(((value - 65 + length) % 26) + 65);

			else if ((value >= 97) && (value <= 122)) //encoding for lowercase
				l = String.fromCharCode(((value - 97 + length) % 26) + 97);
		}
		cypher_text += l; //adding letter to output string
	}
  return cypher_text; //outputing to html element

}

function encodemorse(b)
{
  var alphabet = [ ' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
  //two arrays with values in corresponding positions
  var morse = [ "\xa0\xa0\xa0\xa0", "._", "_...", "_._.", "_..", ".", ".._.", "__.", "....", "..", ".___", "_._", "._..", "__", "_.", "___", ".__.", "__._", "._.", "...", "_", ".._", "..._", ".__", "_.._", "_.__", "__..", ".____", "..___", "...__", "...._", ".....", "_....", "__...", "___..", "____.", "_____", " ", "" ];

  //declaring our variables
  var plain_text = b.toLowerCase(); //input string lowercased immediately
  var cypher_text = '';

  //if statement to check if we decode or encode
  if (b)
  {
    for (var i = 0; i < plain_text.length; i++) {   // for loop and if statement responsible for returning when non letters are asked to be encoded

      if (!plain_text[i].match(/[a-z]/i) && !plain_text[i].match(" ")) {

        cypher_text = "Incorrect Input";
        document.getElementById("output").innerHTML = cypher_text;
        return;

      }
    }
  var words = plain_text.split(" "); //splitting input into words

  for (var j=0; j < words.length; j ++)
  {
    var word = words[j]; //selecting one word from the words


    for (var i = 0; i < word.length; i ++) {

      var l = alphabet.indexOf(word[i]); //finding what index in the alphabet array our letter corresponds to

        cypher_text += morse[l] + " "; //using the index we got above to choose the morsecode for that letter and adding it to our output string
      }
      cypher_text += "/"; // adding / to seperate words
    }
  }
  else
  {
    for (var i = 0; i < plain_text.length; i++) {   // for loop and if statement responsible for breaking when non morse is asked to be decoded

      if (plain_text[i].match(/[a-z]/i)) {

        cypher_text = "Incorrect Input";
        document.getElementById("output").innerHTML = cypher_text;
        return;

      }
    }

    var words = plain_text.split("/"); //splitting input into words

    for (var j=0; j < words.length; j++)
    {
      var word = words[j]; //selecting one word from the word

      var letters = word.split(" "); //splitting again into letters of morsecode


      for (var i = 0; i < letters.length-1; i++) {

        var letter = letters[i]; //selecting one letter

          var l = morse.indexOf(letter);   //finding what index in the morsecode array our letter corresponds to
          cypher_text += alphabet[l]; //adding the letter equivalent to our output string

    }
         cypher_text += " ";

        }
      }

return cypher_text; //outputing to html element
}

function encodepig(b) {

  var plain_text = b.toLowerCase(); //input string lowercased immediately
  var cypher_text = '';
  var vowels = /[aeiou]/gi;

if (b) {

    var words = plain_text.split(" "); //splitting into words

    for (var i = 0; i < words.length; i++) {

        var word = words[i];

        if (word[0].match(vowels)){ //if word starts with a vowel we just add way

          cypher_text += word + "way ";
        }
        else {
          var firstvowel = word.indexOf(word.match(vowels)[0]);

          cypher_text += word.substr(firstvowel) + "-" + word.substr(0, firstvowel) + 'ay '; //otherwise we take all constanants before the first vowel, add them to the end of our word followed by "ay"
        }
    }
  }

  return cypher_text; //outputing to html element
}
