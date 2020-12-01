const BillingCycle =  require('./billingCycle')
const _ = require('lodash')

                 //requere //posta //altera //deleta
BillingCycle.methods(['get','post','put','delete'])
BillingCycle.updateOptions({new: true, runValidators:true})//fazendo os validators rodar ao update.

BillingCycle.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

//middleware

function sendErrorsOrNext(req,res,next){
    const bundle = res.locals.bundle

    if(bundle.errors){
        var errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    } else {
        next()
    }
}

function parseErrors(nodeRestfulErrors){
    const errors = []
    _.forIn(nodeRestfulErrors,error => errors.push(error.message))
    return errors
}

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