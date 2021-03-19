# Psuedo Code

## Password Generator
- create 4 arrays with the possible characters
    - lowercase[]
    - uppercase[]
    - numeric[]
    - special[]
* use customer prompt to create an array of length = to password length with a check that it's greater than 7 characters and less than 129
    * prompt- how many characters? 
    * password[] with length = prompt
* Use the customer prompts to determine which arrays to combine into the available number generator.
    * If 3 of the 4 arrays are selected, create new array combining the 3 selected
    * available[]= lowercase.concat(uppercase, numeric)
* Randomly fill the empty array with the values from available[] using a getRandom function
