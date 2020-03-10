const ages1 = [11, 15, 12, 25, 14];
const ages2 = [25, 22, 23, 36];
const ages3 = [33, 35, 39];
const allAges = ages1.concat(ages2).concat(ages3);
//console.log(allAges);

const allAges2 = ages1.concat(ages2).concat(ages3).concat(555);
//console.log(allAges2);

const allAges3 = [...ages1, ...ages2, ...ages3, 555];
//console.log(allAges3);

/**NOTE: Threedots used for spiriting out elements from an array  */

const businessman = 500;
const minister = 800;
const shochib = 750;
const takaPoisha = [500, 800, 750];
const maximum = Math.max(businessman, minister, shochib); /**for normal constants */
//console.log(maximum);
const maximum2 = Math.max(...takaPoisha); /** for finding maximum from an array */
//console.log(maximum2);

const minimum = Math.min(...takaPoisha);
//console.log(minimum);

const power= Math.pow(3, 2);
console.log(power);
