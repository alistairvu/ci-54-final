export const getData = async () => {
  const res = await fetch(
    "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple"
  )
  const { results } = await res.json()
  const processed = results.map((item) => {
    const { question, correct_answer, incorrect_answers } = item
    const answers = incorrect_answers
      .concat(correct_answer)
      .sort(() => Math.random() - 0.5)
    return {
      question,
      answers,
      correctAnswer: correct_answer,
    }
  })
  return processed
}
