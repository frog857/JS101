function cleanUp(text) {
  return text.replace(/[^a-z]+/gi, " ");
}
console.log(cleanUp("---what's my +*& line?"));    // " what s my line "