function firstWord(s) {
  // your code here
	let s = s.trim();
	int spaceIdx = s.indexOf(' ');
	if(spaceIdx==-1) return -1;
	return s.substring(0,spaceIdx);
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
