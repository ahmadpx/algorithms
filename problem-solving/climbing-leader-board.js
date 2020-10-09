console.log(
  climbingLeaderboard(
    Array(100)
      .fill(null)
      .map((_, i) => 100 - i),
    [20]
  )
);

function climbingLeaderboard(scores, alice) {
  // make a unique scores array
  // loop over every alice score
  // if the score is matched return the indexOf
  // else divide and conquer
  // in every case check is it
  // before and after the previous element
  // after and before the next element

  const uniqueScores = [...new Set(scores)];
  const aliceScores = [];

  for (let score of alice) {
    aliceScores.push(iterativeCalculateScore(score, uniqueScores));
  }

  return aliceScores;
}

function iterativeCalculateScore(
  currentScore,
  scores,
  start = 0,
  end = scores.length,
  midIndex = Math.floor(scores.length / 2)
) {
  if (currentScore > scores[0]) return 1;
  if (currentScore < scores[scores.length - 1]) return scores.length + 1;

  while (true) {
    const mid = scores[midIndex];
    const midNext = scores[midIndex - 1];
    const midPrev = scores[midIndex + 1];

    if (currentScore === mid) return midIndex + 1;

    if (currentScore > mid) {
      if (currentScore < midNext) return midIndex + 1;
      end = midIndex;
    } else {
      if (currentScore > midPrev) return midIndex + 2;
      start = midIndex;
    }
    midIndex = Math.abs(Math.floor((start + end) / 2));
  }
}
