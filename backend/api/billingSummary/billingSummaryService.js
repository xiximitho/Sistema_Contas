const _ = require ('lodash')

const BillingCycle = require('../billingCycle/billingCycle') 

//Middleware 

function getSummary(req,res){
    BillingCycle.aggregate([
        {
            $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}} //somar creditos,
        },{   
            $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
        },{
            $project: {_id:0, credit:1, debt:1}
        }]).exec(function(error,result){
            if(error){
                res.status(500).json({errors: [error]})
            } 
            else 
            {   
                res.json(_.defaults(result[0], {credit:0, debt:0})) //se result for nulo, retorna credito e debito zerado.
            }
        })
}

module.exports = { getSummary }