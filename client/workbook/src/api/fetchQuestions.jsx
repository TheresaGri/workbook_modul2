const fetchQuestions = async () => {
  const url = "http://localhost:4000/api/questions";
  const res = await fetch(url);
  const data =await  res.json();
  return data;
}

export default fetchQuestions;