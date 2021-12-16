const cards = [
  //    EQUIPMENT CHALLENGES  //
  {
    challenge:
      "Shoe lace challenge: Your shoe lace broke from sliding, what do you do? You have 90 seconds before getting hit with a code violation for time delay.",

    proTip:
      "How did you handle this challenge? You never know when this will happen, so the easiest fix is to have a backup in your bag. If this happens often take the metal spring out of a mechanical pen ",

    surface: ["clay-court, hard-court"],
    challengeLevelMin: 7,
    challengeLevelMax: 12,
    gamestyle: [
      "undecided",
      "serve-and-volleyer",
      "agressive-baseliner",
      "counter-puncher",
      "all-around",
    ],
  },
  {
    challenge:
      "Broken strings challenge: The strings broke and you realize this was your last racquet. The tournament stringer can restring your racquet in 15 minutes. You must play the next 15 minutes with someone elses racquet.",

    proTip:
      "Borrow a racquet, any racquet. Your goal if the racquet is too different than yours is to do damage control first. Turn your attention to playing more conservative and stretching time. Play to big targets, force your opponent to stay in the rally, since they know you are not playing with your racquet they may rush to finsih the point and make more mistakes. Take the full 90 seconds at the change over, take the full 25 seconds between each point. In doing so you will have manaeged to slow the flow of play and diminish the likelyhood of your opponent running away with the score and possibly the match. Psychologically, your opponent may feel that he letting an opportunity slip through their fingers, leading to frustration and poor decision making",

    surface: [
      "clay-court",
      "grass-court",
      "fast-hard-court",
      "slow-hard-court",
      "indoor-hard-court",
      "indoor-clay-court",
    ],
    challengeLevelMin: 0,
    challengeLevelMax: 12,
    gamestyle: [
      "undecided",
      "serve-and-volleyer",
      "agressive-baseliner",
      "counter-puncher",
      "all-around",
    ],
  },
  // WEATHER CHALLENGES  //
  {
    challenge:
      "change of climate from cold to hot. You travel from Europe in the winter at near freezing temperatures (0 degrees Celcius) to the Australian summer, with temperatures above 40C (60C in court). Play for the next 10 min with extra layers to simulate the heat! How will you handle the heat?",

    proTip:
      "How did you do? Try to spend most of your time outise and away from the A/C. Buy lots of water to always have a bottle in hand through the day.Through proper hydration and exposure to higher temperatures your body will adapt quicker. Initially train at times when the temperature are lower. As you get closer to your tournament try practicing during the hottest time of the day. Take notes of things like how much water, changes of clothes (full set, undies and all, or just shirts and socks?), bring ice packs to cool off during change overs. ",

    surface: [
      "clay-court",
      "grass-court",
      "fast-hard-court",
      "slow-hard-court",
    ],
    challengeLevelMin: 0,
    challengeLevelMax: 12,
    gamestyle: [
      "undecided",
      "serve-and-volleyer",
      "agressive-baseliner",
      "counter-puncher",
      "all-around",
    ],
  },
  {
    challenge:
      "Sun in your eyes. The sun is in your eyes anytine you raise your head for a serve or an overhead. Serve 3 games on the sunny side of the court.",

    proTip:
      "Even though this challenge is for all levels, technically you will need to have good control over your ball toss. Try to alter your toss so that the ball spends the least amount of time in the sun. Often, a kick serve toss is enough to take care of things, but there are situations when the sun just seems to cover too much surface. In those rare cases, your objective is to get the point started and avoid giving away points with double faults. If it takes an underhand serve so be it. Be ready to defend on the first few shots and then work your way back into the point. on overheads, if possible, let the ball bounce to hit a more manageable overhead. Make sure to use the sun to your advantage by attacking the opponent's serve and using the lob when they are a the net. ",

    surface: [
      "clay-court",
      "grass-court",
      "fast-hard-court",
      "slow-hard-court",
    ],
    challengeLevelMin: 0,
    challengeLevelMax: 12,
    gamestyle: [
      "undecided",
      "serve-and-volleyer",
      "agressive-baseliner",
      "counter-puncher",
      "all-around",
    ],
  },
  // change of surface
  {
    challenge:
      "Going from Summer playing outdoors to Autumn/Winter indoors. Play the next 3 games trying to take the ball earlier than usual",

    proTip:
      "How did you do? Though open to all levels, technically you will need to have a solid foundation on your groundstrokes to really appreciate the value of this chanllenge. The change from outdoors to indoors usually means faster surfaces. Yes, even indoor clay. Some courts have limited space behind the baseline, forcing you to move in more than you'd want. Try shortening your backswings while keeping a long and explosive follow-through.  ",

    surface: [
      "clay-court",
      "grass-court",
      "fast-hard-court",
      "slow-hard-court",
      "indoor-hard-court",
      "indoor-clay-court",
    ],
    challengeLevelMin: 0,
    challengeLevelMax: 12,
    gamestyle: [
      "undecided",
      "serve-and-volleyer",
      "agressive-baseliner",
      "counter-puncher",
      "all-around",
    ],
  },
  {
    challenge:
      "It starts rainning in the middle of a game. For this challenge, try to find 2 things to focus on if it starts raining. ",

    proTip:
      " If there is no referee on court, the decision to continue or stop must be taken by the two players. If they disagree, the tournament referee decides. With an umpire, you need to be aware if he thinks ",

    surface: [
      "clay-court",
      "grass-court",
      "fast-hard-court",
      "slow-hard-court",
    ],
    challengeLevelMin: 0,
    challengeLevelMax: 12,
    gamestyle: [
      "undecided",
      "serve-and-volleyer",
      "agressive-baseliner",
      "counter-puncher",
      "all-around",
    ],
  },
];

//     {
// challenge : "Rain delay",

// proTip : " ",

// surface:  ["clay-court", "grass-court", "fast-hard-court", "slow-hard-court", "indoor-hard-court", "indoor-clay-court"],
// challengeLevelMin: 0,
// challengeLevelMax: 12,
// gamestyle: ["undecided", "serve-and-volleyer", "agressive-baseliner", "counter-puncher", "all-around"],

//     },
//     {
// challenge : "Windy conditions",

// proTip : " ",

// surface:  ["clay-court", "grass-court", "fast-hard-court", "slow-hard-court"],
// challengeLevelMin: ,
// challengeLevelMax: 12,
// gamestyle: ["undecided", "serve-and-volleyer", "agressive-baseliner", "counter-puncher", "all-around"],

//     },
//     {
// challenge : "Rain delay",

// proTip : " ",

// surface:  ["clay-court", "grass-court", "fast-hard-court", "slow-hard-court", "indoor-hard-court", "indoor-clay-court"],
// challengeLevelMin: ,
// challengeLevelMax: 12,
// gamestyle: ["undecided", "serve-and-volleyer", "agressive-baseliner", "counter-puncher", "all-around"],

//     },
//     {
// challenge : "Temperature drops overnight",

// proTip : " ",

// surface:  ["clay-court", "grass-court", "fast-hard-court", "slow-hard-court", "indoor-hard-court", "indoor-clay-court"],
// challengeLevelMin: ,
// challengeLevelMax: 12,
// gamestyle: ["undecided", "serve-and-volleyer", "agressive-baseliner", "counter-puncher", "all-around"],

//         },
//     {
// challenge : "Sun sets, poor visibility and no lights ",

// proTip : " ",

// surface:  ["clay-court", "grass-court", "fast-hard-court", "slow-hard-court", "indoor-hard-court", "indoor-clay-court"],
// challengeLevelMin: ,
// challengeLevelMax: 12,
// gamestyle: ["undecided", "serve-and-volleyer", "agressive-baseliner", "counter-puncher", "all-around"],

//         },
//     // OPPONENT CHALLENGES //
//     {
//         challenge : "Opponent tries to distract you by making noise with his feet, his racquet before you serve",

//         proTip : " ",

//         surface:  ["clay-court", "grass-court", "fast-hard-court", "slow-hard-court", "indoor-hard-court", "indoor-clay-court"],
//         challengeLevelMin: ,
//         challengeLevelMax: 12,
//         gamestyle: ["undecided", "serve-and-volleyer", "agressive-baseliner", "counter-puncher", "all-around"],

//         },
//     {
//         challenge : "",

//         proTip : " ",

//         surface:  ["clay-court", "grass-court", "fast-hard-court", "slow-hard-court", "indoor-hard-court", "indoor-clay-court"],
//         challengeLevelMin: ,
//         challengeLevelMax: 12,
//         gamestyle: ["undecided", "serve-and-volleyer", "agressive-baseliner", "counter-puncher", "all-around"],

//         },
//     {
//         challenge : "",

//         proTip : " ",

//         surface:  ["clay-court", "grass-court", "fast-hard-court", "slow-hard-court", "indoor-hard-court", "indoor-clay-court"],
//         challengeLevelMin: ,
//         challengeLevelMax: 12,
//         gamestyle: ["undecided", "serve-and-volleyer", "agressive-baseliner", "counter-puncher", "all-around"],

//         },
//     {
//         challenge : "Opponent leaves the court to go to the bathroom before you serve for the set at 5-4 or 6-5",

//         proTip : " ",

//         surface:  ["clay-court", "grass-court", "fast-hard-court", "slow-hard-court", "indoor-hard-court", "indoor-clay-court"],
//         challengeLevelMin: ,
//         challengeLevelMax: 12,
//         gamestyle: ["undecided", "serve-and-volleyer", "agressive-baseliner", "counter-puncher", "all-around"],

//         },
//     {
//         challenge : "Opponent is late to show up on court",

//         proTip : " ",

//         surface:  ["clay-court", "grass-court", "fast-hard-court", "slow-hard-court", "indoor-hard-court", "indoor-clay-court"],
//         challengeLevelMin: ,
//         challengeLevelMax: 12,
//         gamestyle: ["undecided", "serve-and-volleyer", "agressive-baseliner", "counter-puncher", "all-around"],

//         },
//     {
//         challenge : "Opponent gets injured and requests a medical time-out",

//         proTip : " ",

//         surface:  ["clay-court", "grass-court", "fast-hard-court", "slow-hard-court", "indoor-hard-court", "indoor-clay-court"],
//         challengeLevelMin: ,
//         challengeLevelMax: 12,
//         gamestyle: ["undecided", "serve-and-volleyer", "agressive-baseliner", "counter-puncher", "all-around"],

//         },
//     {
//         challenge : "Opponent cheating",

//         proTip : " ",

//         surface:  ["clay-court", "grass-court", "fast-hard-court", "slow-hard-court", "indoor-hard-court", "indoor-clay-court"],
//         challengeLevelMin: ,
//         challengeLevelMax: 12,
//         gamestyle: ["undecided", "serve-and-volleyer", "agressive-baseliner", "counter-puncher", "all-around"],

//         },
//     {
//         challenge : "Opponent taking too much time",

//         proTip : " ",

//         surface:  ["clay-court", "grass-court", "fast-hard-court", "slow-hard-court", "indoor-hard-court", "indoor-clay-court"],
//         challengeLevelMin: ,
//         challengeLevelMax: 12,
//         gamestyle: ["undecided", "serve-and-volleyer", "agressive-baseliner", "counter-puncher", "all-around"],

//         },
//     {
//         challenge : "Opponent is being coached by coach or parent",

//         proTip : " ",

//         surface:  ["clay-court", "grass-court", "fast-hard-court", "slow-hard-court", "indoor-hard-court", "indoor-clay-court"],
//         challengeLevelMin: ,
//         challengeLevelMax: 12,
//         gamestyle: ["undecided", "serve-and-volleyer", "agressive-baseliner", "counter-puncher", "all-around"],

//         },
//     {
//         challenge : "Opponent wants to chat with you at every change over",

//         proTip : " ",

//         surface:  ["clay-court", "grass-court", "fast-hard-court", "slow-hard-court", "indoor-hard-court", "indoor-clay-court"],
//         challengeLevelMin: ,
//         challengeLevelMax: 12,
//         gamestyle: ["undecided", "serve-and-volleyer", "agressive-baseliner", "counter-puncher", "all-around"],

//         },
//     {
//         challenge : "Opponent comes on your side of the court to check a mark",

//         proTip : " ",

//         surface:  ["clay-court", "grass-court", "fast-hard-court", "slow-hard-court", "indoor-hard-court", "indoor-clay-court"],
//         challengeLevelMin: ,
//         challengeLevelMax: 12,
//         gamestyle: ["undecided", "serve-and-volleyer", "agressive-baseliner", "counter-puncher", "all-around"],

//         },
//     {
//         challenge : "Opponent is being very aggressive in his celebrations after winning a point",

//         proTip : " ",

//         surface:  ["clay-court", "grass-court", "fast-hard-court", "slow-hard-court", "indoor-hard-court", "indoor-clay-court"],
//         challengeLevelMin: ,
//         challengeLevelMax: 12,
//         gamestyle: ["undecided", "serve-and-volleyer", "agressive-baseliner", "counter-puncher", "all-around"],

//         },
//         // PHYSICAL CHALLENGES //
//     {
//         challenge : "Your legs start cramping",

//         proTip : " ",

//         surface:  ["clay-court", "grass-court", "fast-hard-court", "slow-hard-court", "indoor-hard-court", "indoor-clay-court"],
//         challengeLevelMin: ,
//         challengeLevelMax: 12,
//         gamestyle: ["undecided", "serve-and-volleyer", "agressive-baseliner", "counter-puncher", "all-around"],

//         },
//     {
//         challenge : "Your arm starts cramping",

//         proTip : " ",

//         surface:  ["clay-court", "grass-court", "fast-hard-court", "slow-hard-court", "indoor-hard-court", "indoor-clay-court"],
//         challengeLevelMin: ,
//         challengeLevelMax: 12,
//         gamestyle: ["undecided", "serve-and-volleyer", "agressive-baseliner", "counter-puncher", "all-around"],

//         },
//     {
//         challenge : "Your energy drops",

//         proTip : " ",

//         surface:  ["clay-court", "grass-court", "fast-hard-court", "slow-hard-court", "indoor-hard-court", "indoor-clay-court"],
//         challengeLevelMin: ,
//         challengeLevelMax: 12,
//         gamestyle: ["undecided", "serve-and-volleyer", "agressive-baseliner", "counter-puncher", "all-around"],

//         },
//     {
//         challenge : "You feel sick on court",

//         proTip : " ",

//         surface:  ["clay-court", "grass-court", "fast-hard-court", "slow-hard-court", "indoor-hard-court", "indoor-clay-court"],
//         challengeLevelMin: ,
//         challengeLevelMax: 12,
//         gamestyle: ["undecided", "serve-and-volleyer", "agressive-baseliner", "counter-puncher", "all-around"],

//         },
//     {
//         challenge : "You fall on your non-dominant hand and cannot use it the rest of the match",

//         proTip : " ",

//         surface:  ["clay-court", "grass-court", "fast-hard-court", "slow-hard-court", "indoor-hard-court", "indoor-clay-court"],
//         challengeLevelMin: ,
//         challengeLevelMax: 12,
//         gamestyle: ["undecided", "serve-and-volleyer", "agressive-baseliner", "counter-puncher", "all-around"],

//         },
//     {
//         challenge : "You go into full body cramps",

//         proTip : " ",

//         surface:  ["clay-court", "grass-court", "fast-hard-court", "slow-hard-court", "indoor-hard-court", "indoor-clay-court"],
//         challengeLevelMin: ,
//         challengeLevelMax: 12,
//         gamestyle: ["undecided", "serve-and-volleyer", "agressive-baseliner", "counter-puncher", "all-around"],

//         },
//     {
//         challenge : "Spectators cheer all your mistakes",

//         proTip : " ",

//         surface:  ["clay-court", "grass-court", "fast-hard-court", "slow-hard-court", "indoor-hard-court", "indoor-clay-court"],
//         challengeLevelMin: ,
//         challengeLevelMax: 12,
//         gamestyle: ["undecided", "serve-and-volleyer", "agressive-baseliner", "counter-puncher", "all-around"],

//         },
//     // OFF-COURT CHALLENGES
//     {
//         challenge : "You left your bag unattended, someone stole it",

//         proTip : " ",

//         surface:  ["clay-court", "grass-court", "fast-hard-court", "slow-hard-court", "indoor-hard-court", "indoor-clay-court"],
//         challengeLevelMin: ,
//         challengeLevelMax: 12,
//         gamestyle: ["undecided", "serve-and-volleyer", "agressive-baseliner", "counter-puncher", "all-around"],

//         },
//     {
//         challenge : "You left your bag unattended and now all the strings have been cut",

//         proTip : " ",

//         surface:  ["clay-court", "grass-court", "fast-hard-court", "slow-hard-court", "indoor-hard-court", "indoor-clay-court"],
//         challengeLevelMin: ,
//         challengeLevelMax: 12,
//         gamestyle: ["undecided", "serve-and-volleyer", "agressive-baseliner", "counter-puncher", "all-around"],

//         },
//     {
//         challenge : "Some spectators start heckling you",

//         proTip : " ",

//         surface:  ["clay-court", "grass-court", "fast-hard-court", "slow-hard-court", "indoor-hard-court", "indoor-clay-court"],
//         challengeLevelMin: ,
//         challengeLevelMax: 12,
//         gamestyle: ["undecided", "serve-and-volleyer", "agressive-baseliner", "counter-puncher", "all-around"],

//         },
// ]

// Topics Weather
//        physical/fitness/injuries
//        Off-Court issues
//        psychological
//        strategy

// {
//     challenge : "",

//     proTip : " ",

//     surface:  ["clay-court", "grass-court", "fast-hard-court", "slow-hard-court", "indoor-hard-court", "indoor-clay-court"],
//     challengeLevelMin: ,
//     challengeLevelMax: 12,
//     gamestyle: ["undecided", "serve-and-volleyer", "agressive-baseliner", "counter-puncher", "all-around"],

//     },







module.exports= cards;