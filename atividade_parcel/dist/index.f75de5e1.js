AOS.init();
const dataDoEvento = new Date("Dec 21, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();
const contaTempo = setInterval(function() {
    const agora = new Date();
    const timeStampAgora = agora.getTime();
    const distanciaAteEvento = timeStampDoEvento - timeStampAgora;
    const diaEmMs = 86400000;
    const horaEmMs = 3600000;
    const minutoEmMs = 60000;
    const diasAteEvento = Math.floor(distanciaAteEvento / diaEmMs);
    const horasAteEvento = Math.floor(distanciaAteEvento % diaEmMs / horaEmMs);
    const minutosAteEvento = Math.floor(distanciaAteEvento % horaEmMs / minutoEmMs);
    const segsAteEvento = Math.floor(distanciaAteEvento % minutoEmMs / 1000);
    document.getElementById("contador").innerHTML = `${diasAteEvento}d, ${horasAteEvento}h, ${minutosAteEvento}m e ${segsAteEvento}s`;
    if (distanciaAteEvento < 0) {
        clearInterval(contaTempo);
        document.getElementById("contador").innerHTML = "O evento j\xe1 come\xe7ou!";
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
