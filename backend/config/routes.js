const express = require('express')

module.exports = function(server){ //rota do server.js

    //ROTAS DA API
    const router = express.Router()
    server.use('/api', router) //url inicial da api /api

    //rotas API
    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(router, '/billingCycles')

    const billingSummaryService = require('../api/billingSummary/billingSummaryService');
    router.route('/billingSummary').get(billingSummaryService.getSummary)

}

