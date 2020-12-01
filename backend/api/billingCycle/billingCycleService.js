const BillingCycle =  require('./billingCycle')
                 //requere //posta //altera //deleta
BillingCycle.methods(['get','post','put','delete'])
BillingCycle.updateOptions({new: true, runValidators:true})//fazendo os validators rodar ao update.

BillingCycle.route('count', function(req,res,next){
    BillingCycle.countDocuments(function(error,value){
        if(error){
            res.status(500).json({errors:[error]})
        } else
        {
            res.json({value})
        }
    })
})

module.exports = BillingCycle