//Project Goal: I want to make a dynamic JavaScript system to track the reading progress of competitors clearly with different arrays

// Step 1 - Let's create competitors
// Here I need to create at least 4 competitors using arrays instead of separate variables.

// To store for each competitor I need to create arrays named name, array of book titles, array of total pages per book, array of pages read per book.
const competitors = [
  {
    name: "Bahar",
    bookTitles: [
      "The Silent Echo of Forgotten Dreams",
      "Beyond the Horizon of Broken Stars",
      "Whispers Beneath the Midnight Sun",
    ],
    totalPagesOfBook: [120, 230, 132],
    pagesReadOfBook: [111, 80, 98],
  },
  {
    name: "Marwa",
    bookTitles: [
      "Shadows of the Hidden Valley",
      "The Clockmaker’s Secret",
      "A River of Lost Memories",
    ],
    totalPagesOfBook: [138, 220, 162],
    pagesReadOfBook: [100, 90, 78],
  },
  {
    name: "Farhad",
    bookTitles: [
      "The Girl Who Spoke to Storms",
      "Beneath the Crimson Sky",
      "The Map of Endless Paths",
    ],
    totalPagesOfBook: [220, 320, 282],
    pagesReadOfBook: [124, 60, 86],
  },
  {
    name: "Hawa",
    bookTitles: [
      "The Secret Garden of Time",
      "Echoes from the Forgotten Island",
      "The Lantern in the Dark Forest",
    ],
    totalPagesOfBook: [340, 300, 275],
    pagesReadOfBook: [144, 160, 186],
  },
];

// Let's print a neat introduction message for each competitor so it's clear
console.log("Reading Campionship");
competitors.forEach((competitor) => {
  console.log(
    `Welcome, ${competitor.name}! Let's check your reading improvement.`,
  );
});
console.log("\n");

// Step 2 — Implement the required functions

function calculateProgress(pagesRead, totalPages) {
  if (totalPages === 0) return 0;
  return (pagesRead / totalPages) * 100;
}

function calculateTotalPagesRead(pagesReadArray) {
  return pagesReadArray.reduce((sum, pages) => sum + pages, 0);
}

function calculateCompletionRate(pagesReadArray, totalPagesArray) {
  let totalProgress = 0;
  for (let i = 0; i < pagesReadArray.length; i++) {
    totalProgress += calculateProgress(pagesReadArray[i], totalPagesArray[i]);
  }
  return totalProgress / pagesReadArray.length;
}

function awardPoints(totalPages, completionRate) {
  return totalPages + completionRate * 2;
}

// Step 3 — Here we need to do competitor analysis

const competitorScores = [];

competitors.forEach((competitor) => {
  const totalPagesRead = calculateTotalPagesRead(competitor.pagesReadOfBook);
  const averageCompletionRate = calculateCompletionRate(
    competitor.pagesReadOfBook,
    competitor.totalPagesOfBook,
  );
  const score = awardPoints(totalPagesRead, averageCompletionRate);

  competitorScores.push({ name: competitor.name, score: score });

  console.log(
    `${competitor.name}, ${totalPagesRead} pages of reading, ${averageCompletionRate.toFixed(
      1,
    )}% average of completion, Final Score is: ${score.toFixed(1)}`,
  );
});

console.log("\n");

// Step 4 — Let's implement the leaderboard and winner

if (competitorScores.length > 0) {
  let Champion = competitorScores[0];
  for (let i = 1; i < competitorScores.length; i++) {
    if (competitorScores[i].score > Champion.score) {
      Champion = competitorScores[i];
    }
  }
  console.log(
    `🏆 Champion of the Reading Championship: ${Champion.name} with ${Champion.score.toFixed(
      1,
    )} points!`,
  );
} else {
  console.log("There is no competitors to declare champion.");
}
