AOS.init();

const dataDoEvento = new Date("Jul 01, 2025 00:00:00")
const timeStampDoEvento = dataDoEvento.getTime()

const contaAshoras = setInterval(function(){
        const agora = new Date()
        const timeStampAtual = agora.getTime();

        const distanciaAteOEvento = timeStampDoEvento - timeStampAtual

        const diaEmMs = 1000 * 60 * 60 * 24
        const horaEmMs = 1000 * 60 * 60
        const minutoEmMs = 1000 * 60

        const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs)
        const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs)
        const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs)
        const segundoAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000)

        document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundoAteOEvento}s`

        if(distanciaAteOEvento < 0 ){
            clearInterval(contaAshoras)
            document.getElementById('contador').innerHTML = 'Evento expirou !!'
        }
}, 1000)