const OPERAS = ["La Bohème", "Carmen", "The Barber of Seville", "La Traviata", "Turandot"]

let myOpera = OPERAS[Math.floor(Math.random() * OPERAS.length)]

const SUSPECTS = ["Elsa", "Bobby", "Skipper", "Viola"]
const DOG = "Skipper"
const MURDERER = SUSPECTS[Math.floor(Math.random() * SUSPECTS.length)]

let detective;
let suspectInterview;
let interviewTechnique;
let nextSuspect;
let remainingSuspects;
let lastRemainingSuspects;

const gameIntroduction = () => {
  alert(`Welcome to the game: The murder at the opera!`)
  alert(`You, a detective, are going to the royal opera for the first time to watch ${myOpera}. 
The first act has started when the lights suddenly goes out.
A loud gunshot is heard! 
The lights come back on and the conductor is laying dead on the stage. 
You put on your detective hat, and start your quest on finding the murderer.`)

}

const chooseName = () => {
  let validName = false;

  while (!validName) {
    detective = prompt(`Choose a name for your detective`)

    if (detective === null) {
      const confirmCancel = confirm(`Are you sure you want to quit the game, detective?`)
      if (confirmCancel) {
        alert(`Goodbye!`)
        return false;
      } else {
        continue;
      }
    }

    detective = detective.trim();

    if (detective.length === 0) {
      alert(`Please enter a name, detective!`)
    } else {
      validName = true;
    }
  }
  alert(`"Thank god you're here detective ${detective}!" Says the whole audience. 
    "We have 4 suspects you should take a closer look at!"

   Elsa  - The star violinist. She treats her violin like it's an extension of her own body — or perhaps, her weapon of choice.

   Bobby - the janitor. He is quiet and moves through the halls like a shadow, noticing everything others ignore. He knows every key, every creak in the floorboards, and perhaps every secret too.

   Skipper - the conductors dog. Loyal, alert, and surprisingly perceptive. Skipper growls at strangers but wags his tail at those he trusts. Some say he understands more than any dog should.

   Viola - the operasinger. Dramatic, emotional, and a diva. Viola never simply talks — she performs. She craves attention and can fill an entire room with her voice — and sometimes, with her ego too. `)

  return true;

}

const firstInterview = () => {

  do {
    suspectInterview = prompt(`Select your first suspect to interview. Enter: Elsa, Bobby, Skipper or Viola`)
  } while (!SUSPECTS.includes(suspectInterview));

  interviewTechnique = parseInt(prompt(`And how do you want to interview ${suspectInterview}? 1; By holding ${suspectInterview} at gunpoint or 2; by whispering in ${suspectInterview}s ear? 
  Enter 1 or 2.`))

  const gunResponse = `You grab your gun from your holster and point it at ${suspectInterview}. "Did you do it!? Did you kill the conductor!?" ${suspectInterview} starts crying. 
  "No i didn't! Please stop!" 
  You realize this wasn't the best method to get an answer... It's time to leave crying ${suspectInterview} alone and conduct another interview...`

  const whisperResponse = `You whisper softly in ${suspectInterview}s ear: "What happened". ${suspectInterview} quietly answers: I'm not sure, everything happened so fast. 
  Maybe interview someone else detective ${detective}...`


  if (interviewTechnique === 1) {
    if (suspectInterview === "Skipper") {
      alert(`You grab your gun from your holster and point it at ${suspectInterview}. "Did you do it!? Did you kill the conductor!?" ${suspectInterview} starts howling. ${suspectInterview} is a dog you idiot. He can't speak... 
        It's time to leave ${suspectInterview} alone and conduct another interview.`)
    } else {
      alert(gunResponse)
    }
  } else if (interviewTechnique === 2) {
    if (suspectInterview === "Skipper") {
      alert(`You whisper softly in ${suspectInterview}s ear: "What happened?". ${suspectInterview} starts to wiggle his tail and lays on his back for tummy scratches. 
        Maybe interview someone else detective ${detective}...`)
    } else {
      alert(whisperResponse)
    }
  } else {
    suspectInterview = undefined;
  }
  if (typeof suspectInterview === "undefined") {
    alert(`Did you spell that correctly? Try again...`)
  }
}

const nextInterview = () => {

  remainingSuspects = SUSPECTS.filter(suspect => suspect !== suspectInterview);

  nextSuspect = prompt(`You interviewed ${suspectInterview}, without any luck. Who do you want to interview next? Choose between: ${remainingSuspects.join(`, `)}`)

  let suspectLocation;

  while (suspectLocation !== 1) {
    suspectLocation = parseInt(prompt(`Hmm, you can't find ${nextSuspect}... Where is ${nextSuspect}? 
  Enter 1 to look on the stage. 
  Enter 2 to look backstage. 
  Enter 3 to look outside.`))
    if (suspectLocation === 1) {
      alert(`As you're walking on to the stage you suddenly feel the floor beneath you dissapear! WAAAAAAAAHHHHHHHhhhhhhhh!
  Oh no... You've fallen into a trapdoor! The air rushes past your ears as you tumble down a narrow chute until you land on the hard concrete floor. You look up to see that someone closes the trapdoor shut!`)
    } else if (suspectLocation === 2 || suspectLocation === 3) {
      alert(`${nextSuspect} is not here.... look somewhere else...`)
    } else {
      alert(`Read the instructions!`)
    }
  }

  alert(`But wait, there is something shiny on the floor.... KEYS! Yes! Now you just need to find the right key to the trapdoor!
  Enter a number between 1 - 5 to try a key.`)

  let targetNumber = Math.floor(Math.random() * 5 + 1)
  let result = false;
  let counter = 0;

  while (!result) {
    let userNumber = parseInt(prompt(`Enter a number between 1 - 5`))

    while (userNumber < 1 || userNumber > 5) {
      userNumber = parseInt(prompt(`Please enter a number betewwn 1 - 5.`))
    }

    if (userNumber === targetNumber) {
      alert(`Yay! The key fit! Freedom!`)
      result = true;
    } else {
      alert(`Damn, wrong key. Guess again.`)
    }
    counter++;
  }

  alert(`You got the right key in ${counter} guesses! Now lets continue the murder mystery!`)

}

const findNote = () => {

  lastRemainingSuspects = SUSPECTS.filter(suspect => suspect !== suspectInterview && suspect !== nextSuspect);

  lastRemainingSuspects = prompt(`Who do you want to interview next? Choose between ${lastRemainingSuspects.join(", ")}.`);

  if (lastRemainingSuspects === lastRemainingSuspects) {
    alert(`Good choice detevtive ${detective}! You found ${lastRemainingSuspects} sitting calmly on a chair in the corner of the stage. "So ${lastRemainingSuspects}, tell me what you saw tonight?" 
      But before ${lastRemainingSuspects} answered you found something laying under the chair. When you look closer you see that it's a written handnote saying: "You will pay for what you did..."`)
  }

  for (let i = 0; i < 2; i++) {
    let chooseClue = parseInt(prompt(`This was way more exciting than interviewing ${lastRemainingSuspects}. Enter 1 to check out the handwriting on the note, or 2 to look at the marks on the floor`))

    if (chooseClue === 1) {
      if (MURDERER === DOG) {
        alert(`Hmmm, there is a big paw-print on the note...`)
      } else {
        alert(`The writing is kind of ugly... `)
      }
    } else if (chooseClue === 2) {
      if (MURDERER === DOG) {
        alert(`There is a big paw-print on the floor... it looks like blood!`)
      } else {
        alert(`There is a footprint on the floor next to the chair - in blood.`)
      }
    } else {
      alert(`Please enter 1 or 2.`)
    }
  }

}

const chooseMurderer = () => {

  alert(`It's getting dark outside and you really want to go home to your bed. It's time to decide who murdered the conductor.`)

  let guessMurderer = prompt(`Alright detective ${detective}, who do you think murdered the conductor? Enter Elsa, Bobby, Skipper or Viola.`)

  if (guessMurderer === MURDERER) {
    alert(`That's correct detective ${detective}, ${MURDERER} is the one who murdered the conductor in cold blood! Well done! Now you can go home to your warm nice bed.`)
  } else {
    alert(`That's wrong... ${guessMurderer} did not murder the conductor... 
    The right answer was ${MURDERER}, who is running out of the door to never be seen again...`)
  }

  alert(`Thank's for playing "The Murder at the Opera"!`)

  console.log(`The murderer was: ${MURDERER}`)
  console.log(`Your guess: ${guessMurderer}`)

}

const playGame = () => {

  gameIntroduction()
  if (!chooseName()) return;
  firstInterview()
  nextInterview()
  findNote()
  chooseMurderer()
}

let playButton = document.querySelector(".play-game")

playButton.onclick = () => playGame()