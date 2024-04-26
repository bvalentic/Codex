function fleschKincaid(text) {
    const words = text.split(/\s+/);
    const sentences = text.split(/[.?!]+/)
        .filter(sentence => sentence.length > 0);
    const syllables = text.split(/\s+|\-/)
        .map(word => syllableCount(word))
        .reduce((total, count) => total + count, 0);
  
    const fleschReadingEase = 206.835 - 1.015 * (words.length / sentences.length) - 84.6 * (syllables / words.length);
  
    const fleschKincaidGradeLevel = 0.39 * (words.length / sentences.length) + 11.8 * (syllables / words.length) - 15.59;
  
    return {
        readingEase: fleschReadingEase,
        gradeLevel: fleschKincaidGradeLevel
    };
}

// Helper function to count syllables in a word
function syllableCount(word) {
    word = word.toLowerCase();
    let count = 1;

    if (word.length <= 3) { return count; }
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    syllables = word.match(/[aeiouy]{1,2}/g).length;
    return syllables;
}
  
// Example Usage
const sampleText1 = "The Australian platypus is seemingly a hybrid of a mammal and reptilian creature.";
const sampleText2 = "The sun shone brightly on the field of flowers.";
const results = fleschKincaid(sampleText1);

console.log("Flesch Reading Ease Score:", results.readingEase);
console.log("Flesch-Kincaid Grade Level:", results.gradeLevel);