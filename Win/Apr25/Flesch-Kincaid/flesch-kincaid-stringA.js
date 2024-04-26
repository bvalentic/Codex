function fleschKincaidScore(text) {
    const sentences = text.split(/[.?!]/).filter(s => s.length > 0);
    const words = text.split(/\s+/).filter(w => w.length > 0);
    const syllables = countSyllables(text);
  
    const score = 206.835 - 1.015 * (words.length / sentences.length) - 84.6 * (syllables / words.length);
  
    return score;
}
  
function countSyllables(text) {
	let syllableCount = 0;
	const words = text.split(/\s+/);

	words.forEach(word => {
		// A very basic syllable counter - May need enhancement
		syllableCount += word.match(/[aeiouy]+/gi)?.length || 1; 
	});
	console.log("syllables: " + syllableCount)
	return syllableCount;
}
  
// Example usage
const sampleText1 = "The Australian platypus is seemingly a hybrid of a mammal and reptilian creature.";
const sampleText2 = "The sun shone brightly on the field of flowers.";
const readabilityScore = fleschKincaidScore(sampleText1);
console.log("Flesch-Kincaid Reading Ease Score:", readabilityScore);
