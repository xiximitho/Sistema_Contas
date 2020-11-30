const BillingCycle =  require('./billingCycle')
                 //requere //posta //altera //deleta
BillingCycle.methods(['get','post','put','delete'])
BillingCycle.updateOptions({new: true, runValidators:true})//fazendo os validators rodar ao update.

module.exports = BillingCycle