const tasks = [
  {
    position: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w",
    prompt: "Develop your pieces."
  },
  {
    position: "rnbqkbnr/pp3ppp/4p3/2pp4/3P4/2N1PN2/PPP2PPP/R1BQKB1R w",
    prompt: "Find the best central move."
  },
  {
    position: "r1bq1rk1/ppp2ppp/2n2n2/3pp3/3PP3/2P1BN2/PP3PPP/RN1QKB1R w",
    prompt: "Improve your worst piece."
  }
];

export function getNextTrainingTask() {
  const index = Math.floor(Math.random() * tasks.length);
  return tasks[index];
}

