const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({

    name: {type: String, required: true},
    value: { type: Number, min:0, required: true}

})//informacoes de como sera armazenado o 'Credito' no mongodb

const debtSchema = new mongoose.Schema({
    name: {type: String, required: true},
    value: { type: Number, min:0, required: true},
    status: {type: String, required: false, uppercase: true,
        enum: ['PAGO', 'PENDENTE', 'AGENDADO']}
})//informacoes de como sera armazenado o 'Debito' no mongodb

const billingCycleSchema = new mongoose.Schema({
    name: {type: String, required: true},
    month: {type: Number, min:1,max:12, required:true},
    day: {type: Number, min:1980,max:2200, required:true},
    credits: [creditSchema], //Array de Schema de creditos, para poder ter vários pagamentos
    debts: [debtSchema]
})//informacoes de como sera armazenado cada Ciclo de pagamento no mongodb

module.exports = restful.model('BillingCycle', billingCycleSchema)