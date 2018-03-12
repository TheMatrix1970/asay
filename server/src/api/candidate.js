// Import
const changeCandidate = require('../db/candidate/changeCandidate');
const createCandidate = require('../db/candidate/createCandidate');
const lookupCandidate = require('../db/candidate/lookupCandidate');
const changeCandidateCommitment = require('../db/candidate/changeCandidateCommitment');
const createCandidateCommitment = require('../db/candidate/createCandidateCommitment');
const lookupCandidateCommitment = require('../db/candidate/lookupCandidateCommitment');
const getUser = require('../logic/getUser');

// Function
async function postCandidate(request, response) {
  try {
    const user = await getUser(request);
    if (user) {
      const userId = user.id;
      const candidate = request.body;
      const hasCandidacy = await lookupCandidate(userId);
      const testing = hasCandidacy ? true : false;
      if (hasCandidacy) {
        await changeCandidate(userId, candidate);
      } else {
        const candidate = await createCandidate(userId, candidate);
      }
      candidate.commitments.map(async commitment => {
        const isValid = Number.isInteger(commitment.category);
        const isComittet = await lookupCandidateCommitment(userId, commitment.priority);
        isValid &&
          (isComittet
            ? await changeCandidateCommitment(userId, commitment)
            : await createCandidateCommitment(userId, commitment));
      });
      response.sendStatus(200);
    } else {
      response.sendStatus(401);
    }
  } catch (err) {
    response.sendStatus(500);
    console.log(err);
  }
}

// Export
module.exports = postCandidate;
