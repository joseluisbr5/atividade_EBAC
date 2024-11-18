AOS.init();



const dataDoEvento = new Date("Dec 21, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaTempo = setInterval(function(){
    const agora = new Date();
    const timeStampAgora = agora.getTime();

    const distanciaAteEvento = timeStampDoEvento - timeStampAgora;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;


    const diasAteEvento = Math.floor(distanciaAteEvento / diaEmMs);
    const horasAteEvento = Math.floor((distanciaAteEvento % diaEmMs) / horaEmMs);
    const minutosAteEvento = Math.floor((distanciaAteEvento % horaEmMs) / minutoEmMs);
    const segsAteEvento = Math.floor((distanciaAteEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d, ${horasAteEvento}h, ${minutosAteEvento}m e ${segsAteEvento}s`;	

    if (distanciaAteEvento < 0){
        clearInterval(contaTempo);
        document.getElementById('contador').innerHTML = 'O evento já começou!';
    }
}, 1000);

