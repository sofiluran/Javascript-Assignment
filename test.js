/* Måste va med
const -
arrays -
A random selection of an array index - 
A dynamic assignment of a variable (ie using prompt) - 
while loop - 
for loop - 
Comparison with user entered data - att man väljer vem som är mördaren - 
A final won/lost message. User input MUST be the determining factor in whether the user wins or loses - 
VG: 
Comparison with an array - ie comparing user input to what is stored within an array. ?
Nested logic. Loops within loops. - 
Input validation - att man skriver in rätt, annars får man ett typ "skriv rätt" ? 
Cancel Button handling ?
Semantic variable naming - 
Consistent code style ?
Logical use of conditionals, if, else if, osv. -

att göra:
validation 
button knapp 
cancel button
förenkla koden 
turnary
loopa så man inte kan gå vidare? 
kolla att koden är snygg 

*/


const OPERAS = ["La Bohème", "Carmen", "The Barber of Seville", "La Traviata", "Turandot"]

let myOpera = OPERAS[Math.floor(Math.random() * OPERAS.length)]


// introduction 

alert(`Welcome to the game: The murder at the opera!`)
alert(`You, a detective, are going to the royal opera for the first time to watch ${myOpera}. 
The first act has started when the lights suddenly goes out.
A loud gunshot is heard! 
The lights come back on and the conductor is laying dead on the stage. 
You put on your detective hat, and start your quest on finding the murderer.`)

//name 

let detective = prompt(`Choose a name for your detective`)

alert(`"Thank god you're here detective ${detective}!" Says the whole audience. 
"We have 4 suspects you should take a closer look at!"

Elsa - The star violinist. She treats her violin like it's an extension of her own body — or perhaps, her weapon of choice.

Bobby - the janitor. He is quiet and moves through the halls like a shadow, noticing everything others ignore. He knows every key, every creak in the floorboards, and perhaps every secret too.

Skipper - the conductors dog. Loyal, alert, and surprisingly perceptive. Skipper growls at strangers but wags his tail at those he trusts. Some say he understands more than any dog should.

Viola - the operasinger. Dramatic, emotional, and a diva. Viola never simply talks — she performs. She craves attention and can fill an entire room with her voice — and sometimes, with her ego too. `)

const SUSPECTS = ["Elsa", "Bobby", "Skipper", "Viola"]
const DOG = "Skipper"

// Slumpa mördare 

const MURDERER = SUSPECTS[Math.floor(Math.random() * SUSPECTS.length)]

let suspectInterview = prompt(`Select your first suspect to interview. Enter: Elsa, Bobby, Skipper or Viola`)

let interviewTechnique = parseInt(prompt(`And how do you want to interview ${suspectInterview}? 1; By holding ${suspectInterview} at gunpoint or 2; by whispering in ${suspectInterview}s ear? 
  Enter 1 or 2.`))



const gunResponse = `You grab your gun from your holster and point it at ${suspectInterview}. "Did you do it!? Did you kill the conductor!?" ${suspectInterview} starts crying. "No i didn't!" You realize this wasn't the best method to get an answer... It's time to leave crying ${suspectInterview} alone and conduct another interview...`

const whisperResponse = `You whisper softly in ${suspectInterview}s ear: "What happened". ${suspectInterview} quietly answers: I'm not sure, everything happened so fast. Maybe interview someone else detective ${detective}...`



if (interviewTechnique === 1) {
  if (suspectInterview === "Skipper"){
  alert(`You grab your gun from your holster and point it at ${suspectInterview}. "Did you do it!? Did you kill the conductor!?" ${suspectInterview} starts howling. ${suspectInterview} is a dog you idiot. He can't speak... It's time to leave ${suspectInterview} alone and conduct another interview.`)
  } else {
    alert(gunResponse)
  }
} else if (interviewTechnique === 2) {
  if (suspectInterview === "Skipper") {
    alert(`You whisper softly in ${suspectInterview}s ear: "What happened?". ${suspectInterview} starts to wiggle his tail and lays on his back for tummyscratches. Maybe interview someone else detective ${detective}...`)
  } else {
    alert(whisperResponse)
  }
} else {
  suspectInterview = undefined;
}
if (typeof suspectInterview === "undefined") {
  alert(`Did you spell that correctly? Try again...`)
}

