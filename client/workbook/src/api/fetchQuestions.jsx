const fetchQuestions = async (sortByDifficulty,questionFilter, answer,category,checked) => {
  const url = `https://fine-common-lathe.glitch.me/api/questions?difficulty=${sortByDifficulty}&question=${questionFilter}&answer=${answer}&field=${category}&checked=${checked}`;
  const res = await fetch(url);
  const data =await  res.json();
  return data;
}

export default fetchQuestions;