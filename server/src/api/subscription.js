// Import
const lookupSubscription = require('../db/subscription/lookupSubscription')
const changeSubscription = require('../db/subscription/changeSubscription')
const createSubscription = require('../db/subscription/createSubscription')
const getUser =  require('../logic/getUser')

// Function
async function postSubscription (request, response) {
  try {
    const user = await auth.getUser(request);
    if (user) {
      const userId = user.id;
      const subscription = request.body.subscription;
      const proposalId = request.params.id;
      const currentSubscription = await lookupSubscription(userId, proposalId);
      const hasSubscription = currentSubscription.length > 0 ? true : false;
      const subscription = hasSubscription ?
        changeSubscription(userId, proposalId, subscription)
        : createSubscription(userId, proposalId, subscription)
      response.sendStatus(200)
    } else {
      response.sendStatus(401)
    }
  }
  catch(err) {
    response.sendStatus(500)
  }
}

// Export
module.exports = postSubscription
