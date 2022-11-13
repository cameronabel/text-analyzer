// Business Logic

function wordCounter(text) {
  if (isEmpty(text)) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)){
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (isEmpty(word)) {
    return 0;
  }
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (depunctualize(element).trim() === depunctualize(word).trim()) {
      wordCount++;
    }
  });
  return wordCount;
}

function filterText(text, curses) {
  const textArray = text.split(' ');
  let filteredArray = textArray.map(element => censorWord(element, curses));
  return filteredArray.join(' ');
}

function depunctualize(word) {
  const charArray = word.toLowerCase().split('');
  let noPunctWord = '';
  charArray.forEach(function(char) {
    const asciiCode = char.charCodeAt(0);
    if (asciiCode >= 97 && asciiCode <= 122) {
      noPunctWord += String.fromCharCode(asciiCode);
    } else {
      noPunctWord += ' ';
    }
  })
  return noPunctWord
}

function censorWord(word, curses) {
  const testWord = depunctualize(word);
  for (const curse of curses) {
    if (testWord.trim() === curse) {
      return word.toLowerCase().replace(curse, '****');
    }
  }
  return word;
}

function boldPassage(word, text) {
  if ((isEmpty(word)) || (isEmpty(text))) {
    return null;
  }
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    dePunctedWord = depunctualize(element).trim();
    if (word === dePunctedWord) {
      const bold = document.createElement("strong");
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    if (index !== (textArray.length - 1)) {
      p.append(" ");
    }
  });
  return p;
}

function isEmpty(testString) {
  return (testString.trim().length === 0);
}

function countAllWords(text) {
  const dict = {};
  textArray = text.toLowerCase().split(' ')
  textArray.forEach(function(element) {
    word = depunctualize(element).trim();
    if (!(dict[word])) {
      dict[word] = 1;
    } else {
      dict[word] += 1
    }
  });
  return dict;
}

function sortDict(dict) {
  items = Object.keys(dict).map(function(key) {
      return [key, dict[key]];
  });
  items.sort(function(first, second) {
      return second[1] - first[1];
  });
  sorted_dict={}
  $.each(items, function(k, v) {
      use_key = v[0]
      use_value = v[1]
      sorted_dict[use_key] = use_value
  })
  return(sorted_dict)
}

function sortedWordCount(text) {
  if (isEmpty(text)) {
    return null;
  }
  const ol = document.createElement('ol')
  const wordDict = sortDict(countAllWords(text))
  for (let word in wordDict) {
    const li = document.createElement('li')
    li.append(`${word}: ${wordDict[word]}`)
    ol.append(li)
  }
  return ol
}

// UI Logic

function handleFormSubmission(e) {
  e.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
  // new lines here!
  let boldedPassage = boldPassage(word, passage);
  document.querySelector("div#bolded-passage").innerText = null
  if (boldedPassage) {
    document.querySelector("div#bolded-passage").append(boldedPassage);
  }
  let sortedWords = sortedWordCount(passage);
  if (sortedWords) {
    document.querySelector("div#sorted-words").append(sortedWords);
  } else {
    document.querySelector("div#sorted-words").innerText = null;
  }
}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});