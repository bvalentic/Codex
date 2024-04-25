const fs = require('fs');

function fleschKincaid(filePath) {
    fs.readFile(filePath, 'utf-8', (err, text) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        else {
            // console.log(text)
            const words = text.split(/\s+/);
            const sentences = text.split(/[.?!]+/).filter(sentence => sentence.length > 0);
            const syllables = text.split(/\s+|\-/)
                .map(word => syllableCount(word))
                .reduce((total, count) => total + count, 0);
            // console.log(syllables)
            let fleschReadingEase = 206.835 - 1.015 * (words.length / sentences.length) - 84.6 * (syllables / words.length);

            let fleschKincaidGradeLevel = 0.39 * (words.length / sentences.length) + 11.8 * (syllables / words.length) - 15.59;

            console.log("Flesch Reading Ease Score:", fleschReadingEase);
            console.log("Flesch-Kincaid Grade Level:", fleschKincaidGradeLevel);
            return {
                readingEase: fleschReadingEase,
                gradeLevel: fleschKincaidGradeLevel
            };
        }
    });
}

function syllableCount(word) {
    word = word.toLowerCase();
    let count = 1;

    if (word.length <= 3) { return count; }
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    syllables = word.match(/[aeiouy]{1,2}/g).length;
    // console.log(syllables)
    return syllables;
}

// Example Usage
const filePath = "o-captain.txt"; 
fleschKincaid(filePath)
