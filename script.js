import { wordList } from './wordList.js';

const letterValues = {
    A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1,
    J: 8, K: 5, L: 1, M: 3, N: 1, O: 1, P: 3, Q: 10, R: 1,
    S: 1, T: 1, U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10
};

// Filter words by prefix
function filterWordsByPrefix(prefix) {
    return wordList.filter(word => word.startsWith(prefix.toUpperCase()));
}

// Display filtered words and word count
function displayFilteredWords(prefix) {
    const resultDiv = document.getElementById('wordListOutput');
    const words = filterWordsByPrefix(prefix);
    const wordCount = words.length; // Calculate the word count

    resultDiv.innerHTML = words.length > 0
        ? `<strong>Word Count:</strong> ${wordCount}<br><br>${words.join(', ')}`
        : 'No words found.';
}

// Calculate and display Scrabble score
function calculateScore() {
    const input = document.getElementById("inputText").value.toUpperCase();
    const outputDiv = document.getElementById("output");
    const totalScoreEl = document.getElementById("totalScore");
    const scoreMessageEl = document.getElementById("output2");

    outputDiv.innerHTML = ""; // Clear previous results
    totalScoreEl.innerText = ""; // Clear total score
    scoreMessageEl.innerText = ""; // Clear message

    if (!wordList.includes(input)) {
        totalScoreEl.innerText = "That's not a valid word!";
        return;
    }

    let totalScore = 0;
    let delay = 0;

    for (let char of input) {
        if (letterValues[char]) {
            totalScore += letterValues[char];
            const letterBox = document.createElement("div");
            letterBox.classList.add("letter-box");
            
            // Create letter and value elements
            const letterEl = document.createElement("div");
            letterEl.classList.add("letter");
            letterEl.innerText = char;
            
            const valueEl = document.createElement("div");
            valueEl.classList.add("value");
            valueEl.innerText = letterValues[char];
            
            letterBox.appendChild(letterEl);
            letterBox.appendChild(valueEl);

            setTimeout(() => {
                outputDiv.appendChild(letterBox);
            }, delay);

            delay += 200;
        }
    }

    setTimeout(() => {
        totalScoreEl.innerText = `Total Scrabble Score: ${totalScore}`;
        scoreMessageEl.innerText = getScoreMessage(totalScore);
    }, delay);
}

// Generate message based on score
// function getScoreMessage(totalScore) {
//     if (totalScore <= 5) return "That's a terrible score.";
//     if (totalScore <= 9) return "Better than that 5-point crap, but you are not good at this.";
//     if (totalScore <= 11) return "Very weak, but you're trying. That's worth something they say.";
//     if (totalScore <= 13) return "Now you're playing some scrabble. Not.";
//     if (totalScore <= 15) return "Ok, real points. Much better.";
//     if (totalScore <= 17) return "Pretty good. You are not wasting your time.";
//     if (totalScore <= 19) return "Very nice. You must play a lot";
//     if (totalScore <= 21) return "Okay! Now you're talking! That's really nice!";
//     if (totalScore <= 23) return "Now you're pushing it, pally. Are you stashing tiles?";
//     if (totalScore <= 25) return "You've got big old balls coming around here with that shit. Don't think dropping Q's and Z's and J's goes unnoticed...";
//     if (totalScore <= 27) return "Maybe someone needs to teach you a little lesson, essay! Maybe we don't deal too well with cheaters around here. You were warned and now it's too late!";
//     if (totalScore <= 29) return "You're dead to me, fuckface. You're ruined around here.";
//     if (totalScore <= 30) return "You will be reported if you don't fuck off right this moment!";

//     return "Get fucked. This is you being ghosted. You are totally unloved.";
// }

function getScoreMessage(totalScore) {
    if (totalScore === 5) return "That's the minimum score for a 5 point word according to Scrabble. It’s an embarrassment.";
    if (totalScore === 6) return "This is the score of like an 7 year old. 6 points is weak.";
    if (totalScore === 7) return "Choosing high value words should be left to others. You are not good at it. 7 points, hahaha!";
    if (totalScore === 8) return "Eight point Scrabble words are frequent and most adults can come up with bigger and better.";
    if (totalScore === 9) return "You're trying and that’s good. 9 points. That's worth something, or so they say.";
    if (totalScore === 10) return "10 points, 2 per letter. Much better.";
    if (totalScore === 11) return "Good. You could be in 7th grade Scrabble competitions using 11 point words.";
    if (totalScore === 12) return "Very nice. Twelve. You must play a lot";
    if (totalScore === 13) return "13’s getting goddamn solid! It’s evil and bad luck and you could die, but nice!";
    if (totalScore === 14) return "You're pushing it now, pally. 14 is tight stuff. Are you stashing tiles?";
    if (totalScore === 15) return "If you want to treat your fellow Scrabblers with disrespect, keep it up. They know how rare 15 point words are. Ima call you Squid";
    if (totalScore === 16) return "Do you know who I am? I am the guy who doesn’t like being bullshitted. Your 16 is too good.";
    if (totalScore === 17) return "When you’ve been around Scrabble long enough, you know how rare words valued at 17 points are. As dumbo Susan Collins might say: 'That raises concerns.'";
    if (totalScore === 18) return "No one will believe you pulled an 18 point word. They’ll be like Go take another Viagara, faker.";
    if (totalScore === 19) return "How about you come clean Mr. Mondor? You’ve got big problems with your 19s.";
    if (totalScore === 20) return "Your balls are big brah. You come here with your scores of 20 is gonna get you piped";
    if (totalScore === 21) return "You've got big old balls coming around here with that shit. Don't think dropping Q's and Z's and J's goes unnoticed.";
    if (totalScore === 22) return "Cheating is highly frowned upon in Scrabble. It’s supposed to be a friendly game. People are skeptical when they see a 22 point 5 letter word.";
    if (totalScore === 23) return "23, you fuck? Bullshit.";
    if (totalScore === 24) return "If you come off with a 24, most people know it’s bunch of crap. I agree with those people.";
    if (totalScore === 25) return "Maybe you need to be taught a lesson because 25 points is a big time word. There aren’t many of them.";
    if (totalScore === 26) return "No one likes or wants to be around people who are so insecure they need to lie about getting 26 point words.";
    if (totalScore === 27) return "If you are a 27 point scorer, most people know it’s bunch of bullshit. I agree with them.";
    if (totalScore === 28) return "You gonna get beaten down, essay! 28? You trying to keep us down, make us look uneducated!";
    if (totalScore === 29) return "You're dead to me, fuckface. 29 is next to impossible. You're ruined around here.";
    if (totalScore === 30) return "You will be reported for this score of 30 if you don't fuck off right this moment!";
    return "Consider the authorities called. You need to hide out, bitch!";
}



// Filter words by Scrabble score
function filterWordsByScore(score) {
    const wordsWithScore = wordList.filter(word => {
        let totalScore = 0;
        for (let char of word) {
            if (letterValues[char.toUpperCase()]) {
                totalScore += letterValues[char.toUpperCase()];
            }
        }
        return totalScore === score;
    });
    return wordsWithScore;
}

// Display words by score
function displayWordsByScore() {
    const scoreInput = parseInt(document.getElementById("scoreInput").value.trim(), 10);
    const resultDiv = document.getElementById("scoreOutput");

    if (isNaN(scoreInput) || scoreInput <= 0) {
        resultDiv.innerHTML = "Please enter a valid score.";
        return;
    }

    const words = filterWordsByScore(scoreInput);
    const wordCount = words.length;

    resultDiv.innerHTML = wordCount > 0
        ? `<strong>Score:</strong> ${scoreInput}<br><strong>Word Count:</strong> ${wordCount}<br><br>${words.join(', ')}`
        : `No words found with the score of ${scoreInput}.`;
}






function analyzeVowelUsage() {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const vowelStats = {};

    vowels.forEach(vowel => {
        vowelStats[vowel] = { count: 0, positions: [0, 0, 0, 0, 0] };
    });

    wordList.forEach(word => {
        [...word.toUpperCase()].forEach((char, index) => {
            if (vowels.includes(char)) {
                vowelStats[char].count++;
                if (index < 5) vowelStats[char].positions[index]++;
            }
        });
    });

    return vowelStats;
}

function displayVowelStats() {
    const vowelStats = analyzeVowelUsage();
    const resultDiv = document.getElementById("vowelUsageOutput");

    let output = '<strong>Vowel Usage Analysis:</strong><br>';
    for (const [vowel, stats] of Object.entries(vowelStats)) {
        output += `<strong>${vowel}:</strong> Total Count: ${stats.count}, Positions: ${stats.positions.join(', ')}<br>`;
    }

    resultDiv.innerHTML = output;
}




// Function: Analyze Letter Frequency by Position    Practice 1
// function analyzeLetterFrequency() {
//     const letterStats = {};

//     // Loop through each word in the word list
//     wordList.forEach((word) => {
//         [...word.toUpperCase()].forEach((letter, index) => {
//             // Initialize stats for the letter if not already added
//             if (!letterStats[letter]) {
//                 letterStats[letter] = { counts: [0, 0, 0, 0, 0], total: 0 };
//             }

//             // Increment the position-specific count and total count for the letter
//             letterStats[letter].counts[index] = (letterStats[letter].counts[index] || 0) + 1;
//             letterStats[letter].total++;
//         });
//     });

//     // Calculate percentages for each letter in each position
//     const totalWords = wordList.length;
//     Object.keys(letterStats).forEach((letter) => {
//         letterStats[letter].percentages = letterStats[letter].counts.map(
//             (count) => ((count / totalWords) * 100).toFixed(2) // Convert to percentage
//         );
//     });

//     return letterStats;
// }

// Function: Analyze Letter Frequency by Position    Practice 2
// function analyzeLetterFrequency() {
//     const letterStats = {};

//     // Loop through each word in the word list
//     wordList.forEach((word) => {
//         [...word.toUpperCase()].forEach((letter, index) => {
//             // Initialize stats for the letter if not already added
//             if (!letterStats[letter]) {
//                 letterStats[letter] = { counts: [0, 0, 0, 0, 0], total: 0 };
//             }

//             // Increment the position-specific count and total count for the letter
//             letterStats[letter].counts[index] = (letterStats[letter].counts[index] || 0) + 1;
//             letterStats[letter].total++;
//         });
//     });

//     // Calculate percentages for each letter in each position
//     const totalWords = wordList.length;
//     Object.keys(letterStats).forEach((letter) => {
//         letterStats[letter].percentages = letterStats[letter].counts.map(
//             (count) => ((count / totalWords) * 100).toFixed(2) // Convert to percentage
//         );
//     });

//     return letterStats;
// }




// Display Results  Practice 1
// function displayLetterFrequencyStats() {
//     const resultDiv = document.getElementById("letterFrequencyOutput");
//     const letterStats = analyzeLetterFrequency();

//     // Clear any existing content
//     resultDiv.innerHTML = "<strong>Letter Frequency Analysis:</strong><br><br>";

//     // Create clickable links for each letter
//     Object.keys(letterStats).forEach((letter) => {
//         const letterLink = document.createElement("a");
//         letterLink.href = "#";
//         letterLink.textContent = `${letter} (${letterStats[letter].total})`;
//         letterLink.style.marginRight = "10px";
//         letterLink.style.textDecoration = "underline";
//         letterLink.style.cursor = "pointer";

//         // Create a div to show/hide stats for this letter
//         const statsDiv = document.createElement("div");
//         statsDiv.id = `stats-${letter}`;
//         statsDiv.style.display = "none"; // Initially hidden

//         const { counts, percentages } = letterStats[letter];
//         let statsHtml = "";
//         counts.forEach((count, index) => {
//             statsHtml += `Position ${index + 1}: ${count} occurrences (${percentages[index]}%)<br>`;
//         });
//         statsDiv.innerHTML = statsHtml;

//         // Add click event to toggle stats visibility
//         letterLink.addEventListener("click", (event) => {
//             event.preventDefault();
//             statsDiv.style.display = statsDiv.style.display === "none" ? "block" : "none";
//         });

//         // Append the letter link and stats div to the output container
//         resultDiv.appendChild(letterLink);
//         resultDiv.appendChild(statsDiv);
//     });
// }

// Display Results  Practice 2
// function displayLetterFrequencyStats() {
//     const resultDiv = document.getElementById("letterFrequencyOutput");
//     const letterStats = analyzeLetterFrequency();

//     let output = "<strong>Letter Frequency Analysis:</strong><br><br>";

//     // Build output for each letter
//     Object.keys(letterStats).forEach((letter) => {
//         const { counts, percentages } = letterStats[letter];
//         output += `<strong>${letter}:</strong><br>`;
//         counts.forEach((count, index) => {
//             output += `Position ${index + 1}: ${count} occurrences (${percentages[index]}%)<br>`;
//         });
//         output += `<br>`;
//     });

//     resultDiv.innerHTML = output;
// }

function analyzeLetterFrequency() {
    const letterStats = {};
    const positionTotals = [0, 0, 0, 0, 0]; // Tracks the number of words with each position available

    // Loop through each word in the word list
    wordList.forEach((word) => {
        [...word.toUpperCase()].forEach((letter, index) => {
            // Increment position availability
            if (index < 5) positionTotals[index]++;

            // Initialize stats for the letter if not already added
            if (!letterStats[letter]) {
                letterStats[letter] = { counts: [0, 0, 0, 0, 0], total: 0 };
            }

            // Increment the position-specific count and total count for the letter
            letterStats[letter].counts[index] = (letterStats[letter].counts[index] || 0) + 1;
            letterStats[letter].total++;
        });
    });

    // Calculate percentages and add position totals
    Object.keys(letterStats).forEach((letter) => {
        letterStats[letter].percentages = letterStats[letter].counts.map((count, index) => {
            const possibleOccurrences = positionTotals[index]; // Total words long enough for this position
            return {
                count,
                percentage: ((count / possibleOccurrences) * 100).toFixed(2),
                possibleOccurrences
            };
        });
    });

    return letterStats;
}

function displayLetterFrequencyStats() {
    const resultDiv = document.getElementById("letterFrequencyOutput");
    const letterStats = analyzeLetterFrequency();

    // Clear any existing content
    resultDiv.innerHTML = "<strong>Letter Frequency Analysis:</strong><br><br>";

    // Create clickable links for each letter
    Object.keys(letterStats).forEach((letter) => {
        const letterLink = document.createElement("a");
        letterLink.href = "#";
        letterLink.textContent = `${letter} (${letterStats[letter].total})`;
        letterLink.style.marginRight = "10px";
        letterLink.style.textDecoration = "underline";
        letterLink.style.cursor = "pointer";

        // Create a div to show/hide stats for this letter
        const statsDiv = document.createElement("div");
        statsDiv.id = `stats-${letter}`;
        statsDiv.style.display = "none"; // Initially hidden

        const { percentages } = letterStats[letter];
        let statsHtml = "";
        percentages.forEach(({ count, percentage, possibleOccurrences }, index) => {
            statsHtml += `Position ${index + 1}: ${count} occurrences (${percentage}%) out of ${possibleOccurrences} possible occurrences<br>`;
        });
        statsDiv.innerHTML = statsHtml;

        // Add click event to toggle stats visibility
        letterLink.addEventListener("click", (event) => {
            event.preventDefault();
            statsDiv.style.display = statsDiv.style.display === "none" ? "block" : "none";
        });

        // Append the letter link and stats div to the output container
        resultDiv.appendChild(letterLink);
        resultDiv.appendChild(statsDiv);
    });
}














// Attach filtering and scoring functionality on page load
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("filterButton").addEventListener("click", () => {
        const prefix = document.getElementById("filterInput").value.trim();
        displayFilteredWords(prefix);
    });

    document.getElementById("scoreButton").addEventListener("click", calculateScore);
    document.getElementById("filterByScore").addEventListener("click", displayWordsByScore);
    document.getElementById("analyzeLetterFrequency").addEventListener("click", displayLetterFrequencyStats);
    document.getElementById("analyzeVowelUsage").addEventListener("click", displayVowelStats);
});

// Filter words by letter and position
function filterWordsByLetterAndPosition(letter, position) {
    const positionIndex = position - 1; // Convert position to zero-based index
    return wordList.filter(word => word[positionIndex] === letter.toUpperCase());
}

// Display filtered words and their count based on letter and position
function displayWordsByLetterAndPosition() {
    const letter = document.getElementById("letterInput").value.trim().toUpperCase();
    const position = parseInt(document.getElementById("positionInput").value.trim(), 10);
    const resultDiv = document.getElementById("letterPositionOutput");

    // Validate inputs
    if (!letter || letter.length !== 1 || !/[A-Z]/.test(letter)) {
        resultDiv.innerHTML = "Please enter a valid single letter (A-Z).";
        return;
    }
    if (isNaN(position) || position <= 0) {
        resultDiv.innerHTML = "Please enter a valid position (greater than 0).";
        return;
    }

    // Filter and display words
    const words = filterWordsByLetterAndPosition(letter, position);
    const wordCount = words.length;

    resultDiv.innerHTML = wordCount > 0
        ? `<strong>Letter:</strong> ${letter}<br><strong>Position:</strong> ${position}<br><strong>Word Count:</strong> ${wordCount}<br><br>${words.join(', ')}`
        : `No words found with "${letter}" in position ${position}.`;
}

// Attach event listener for the button
document.getElementById("filterByLetterAndPosition").addEventListener("click", displayWordsByLetterAndPosition);


console.log(wordList);