const Mood = () => {
  const mood = "good"

  const result = {
    good: <h1>Good</h1>,
    bad: <h1>Bad</h1>,
    ugly: <h1>Ugly</h1>,
  }

  return result[mood]
}