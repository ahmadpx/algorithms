// https://www.hackerrank.com/challenges/organizing-containers-of-balls/problem

/**
 * organize balls inside containers
 * perform some number of swap operations such that:
 * Each container contains only balls of the same type.
 * No two balls of the same type are located in different containers.
 * You must perform  queries where each query is in the form of a matrix, . For each query, print Possible on a new line if David can satisfy the conditions above for the given matrix. Otherwise, print Impossible.
 * @param {Array<Array<Number>>} containers
 * @return {String<'Possible'|'Impossible'>}
 */
function organizingContainers(containers) {
  let possibility = "Possible";
  const containersCount = containers.map((container) =>
    container.reduce((sum, ball) => sum + ball, 0)
  );

  for (let i = 0; i < containers.length; i++) {
    const container = containers[i];
    for (let j = 0; j < containers.length; j++) {
      if (i === j) continue;
      const comparedContainer = containers[j];
      for (let k = 0; k < container.length; k++) {
        if (k === i || container[k] === 0) continue;
        const takeAll = container[k] >= comparedContainer[i];
        const ballsToReplace = takeAll ? comparedContainer[i] : container[k];
        container[i] += ballsToReplace;
        comparedContainer[i] -= ballsToReplace;
        comparedContainer[k] += ballsToReplace;
        container[k] -= ballsToReplace;
        console.log('ballsToReplace', ballsToReplace);
        if (takeAll) break;
      }
    }
    // if (container[i] !== containerCount) {
    //   possibility = "Impossible";
    //   break;
    // }
  }
  
  // return containers;

  return containers.some(
    (container, idx) => container[idx] !== containersCount[idx]
  )
    ? "Impossible"
    : "Possible";

  // return containers;

  return possibility;
}

// console.log(
//   organizingContainers([
//     [1, 3, 1],
//     [2, 1, 2],
//     [3, 3, 3],
//   ])
// ); // Impossible
//
// console.log(
//   organizingContainers([
//     [0, 2, 1],
//     [1, 1, 1],
//     [2, 0, 0],
//   ])
// ); // Possible
//
// console.log(
//   organizingContainers([
//     [1, 1],
//     [1, 1],
//   ])
// ); // Possible
//
// console.log(
//   organizingContainers([
//     [0, 2],
//     [1, 1],
//   ])
// ); // Impossible

console.log(
  // Possible
  organizingContainers([
    [
      993263231,
      806455183,
      972467746,
      761846174,
      226680660,
      667393859,
      815298761,
      790313908,
      997845516,
    ],
    [
      873142072,
      579210472,
      996344520,
      999601755,
      904458846,
      663577990,
      980240637,
      713052540,
      963408591,
    ],
    [
      551159221,
      873763794,
      752756532,
      798803609,
      670921889,
      995259612,
      981339960,
      763904498,
      499472207,
    ],
    [
      975980611,
      999974039,
      729219884,
      834636710,
      973988213,
      969888254,
      846967495,
      687204298,
      511348404,
    ],
    [
      993232608,
      998103218,
      857820670,
      995587240,
      817798750,
      773950980,
      824882180,
      797565274,
      887424441,
    ],
    [
      847857578,
      768853671,
      916073200,
      982234748,
      986511977,
      733420232,
      997714976,
      819799716,
      891570083,
    ],
    [
      733197334,
      985682497,
      612123868,
      971798655,
      999905357,
      710092446,
      997494889,
      683312998,
      850074746,
    ],
    [
      799093993,
      543648222,
      944524289,
      814951921,
      981087922,
      997222915,
      506561779,
      997697933,
      652807674,
    ],
    [
      989362549,
      973516812,
      891706714,
      786904549,
      982329176,
      376575034,
      993535504,
      984745483,
      777613376,
    ],
  ])
);
