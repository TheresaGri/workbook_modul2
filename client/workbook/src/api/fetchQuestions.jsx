const fetchQuestions = async (sortByDifficulty) => {
  const url = `http://localhost:4000/api/questions?difficulty=${sortByDifficulty}`;
  const res = await fetch(url);
  const data =await  res.json();
  return data;
}

export default fetchQuestions;