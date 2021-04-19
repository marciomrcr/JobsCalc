module.exports = {
    remainingDays(job) {
        // ajustes no jobs e calculo de tempo
        const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()

        const createdDate = new Date(job.created_at)
        const dueDay = createdDate.getDate() + Number(remainingDays) //dueDay = prazo final
        const dueDateInMs = createdDate.setDate(dueDay)
        // calculo de dias restantes
        const timeDiffInMs = dueDateInMs - Date.now()
        //transformar milisegundos em dias
        const daysInMs = 86400000
        const dayDiff = Math.ceil(timeDiffInMs / daysInMs) //arredondando o prazo pra cima ex. 1,5 dias = 2 dias

        return dayDiff  // restam x dias para o final do prazo
    },
    calculateBudget: (job, valueHour) => valueHour * job["total-hours"]
}