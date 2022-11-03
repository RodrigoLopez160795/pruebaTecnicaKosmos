function calculoMotor(tipoNomina, fechaPrimerEmpleo, genero) {
  const hoy = new Date();
  const fechaCredito = transformarFecha(fechaPrimerEmpleo);
  calcularTotalMes(fechaCredito, hoy);
  const totalMes = calcularTotalMes(fechaCredito, hoy);
  const min = calcularMinimo(totalMes, genero, tipoNomina);
  const max = calcularMaximo(totalMes, genero, tipoNomina);
  const p1 = min + Math.sqrt(max - min);
  const p2 = min + 0.0175 * (max - min);
  return {
    montoMinimo: min,
    montoMaximo: max,
    recomendacionLinea: `max(${p1.toFixed(2)},${p2.toFixed(2)})`,
  };
}

function transformarFecha(date) {
  const nuevaFecha = date.split('/');
  [dia, mes, año] = nuevaFecha;
  return new Date(`${mes}/${dia}/${año}`);
}
function calcularTotalMes(fechaCredito, hoy) {
  let totalMes;
  const [añoHoy, mesHoy, diaHoy] = [
    hoy.getFullYear(),
    hoy.getMonth(),
    hoy.getDate(),
  ];
  const [añoCredito, mesCredito, diaCredito] = [
    fechaCredito.getFullYear(),
    fechaCredito.getMonth(),
    fechaCredito.getDate(),
  ];
  const añosTranscurridos = añoHoy - añoCredito;
  if (mesCredito === mesHoy) {
    if (diaCredito > diaHoy) {
      totalMes = añosTranscurridos * 12 + (mesHoy - mesCredito) - 1;
    } else {
      totalMes = añosTranscurridos * 12 + (mesHoy - mesCredito);
    }
  } else {
    totalMes = añosTranscurridos * 12 + (mesHoy - mesCredito);
  }

  return totalMes;
}

function calcularMinimo(totalMes, genero, tipoNomina) {
  switch (genero) {
    case 'm':
      if (totalMes <= 26) {
        if (tipoNomina === 'A') return 100;
        if (tipoNomina === 'B') return 1000;
        if (tipoNomina === 'C') return 400;
        if (tipoNomina === 'D') return 400;
      }
      if (totalMes === 27) {
        if (tipoNomina === 'A') return 400;
        if (tipoNomina === 'B') return 600;
        if (tipoNomina === 'C') return 200;
        if (tipoNomina === 'D') return 300;
      }
      if (totalMes === 28) {
        if (tipoNomina === 'A') return 900;
        if (tipoNomina === 'B') return 1000;
        if (tipoNomina === 'C') return 200;
        if (tipoNomina === 'D') return 500;
      }
      if (totalMes === 29) {
        if (tipoNomina === 'A') return 100;
        if (tipoNomina === 'B') return 1000;
        if (tipoNomina === 'C') return 1000;
        if (tipoNomina === 'D') return 900;
      }
      if (totalMes >= 30) {
        if (tipoNomina === 'A') return 600;
        if (tipoNomina === 'B') return 1000;
        if (tipoNomina === 'C') return 600;
        if (tipoNomina === 'D') return 1000;
      }
      break;
    case 'f':
      if (totalMes <= 24) {
        if (tipoNomina === 'A') return 800;
        if (tipoNomina === 'B') return 800;
        if (tipoNomina === 'C') return 200;
        if (tipoNomina === 'D') return 500;
      } else if (totalMes === 25) {
        if (tipoNomina === 'A') return 800;
        if (tipoNomina === 'B') return 700;
        if (tipoNomina === 'C') return 900;
        if (tipoNomina === 'D') return 1000;
      } else if (totalMes === 26) {
        if (tipoNomina === 'A') return 800;
        if (tipoNomina === 'B') return 100;
        if (tipoNomina === 'C') return 700;
        if (tipoNomina === 'D') return 600;
      } else if (totalMes === 27) {
        if (tipoNomina === 'A') return 600;
        if (tipoNomina === 'B') return 600;
        if (tipoNomina === 'C') return 800;
        if (tipoNomina === 'D') return 400;
      } else if (totalMes >= 28) {
        if (tipoNomina === 'A') return 200;
        if (tipoNomina === 'B') return 700;
        if (tipoNomina === 'C') return 100;
        if (tipoNomina === 'D') return 700;
      }
      break;
  }
}

function calcularMaximo(totalMes, genero, tipoNomina) {
  switch (genero) {
    case 'm':
      if (totalMes <= 26) {
        if (tipoNomina === 'A') return 4900;
        if (tipoNomina === 'B') return 4700;
        if (tipoNomina === 'C') return 5000;
        if (tipoNomina === 'D') return 4400;
      }
      if (totalMes === 27) {
        if (tipoNomina === 'A') return 4700;
        if (tipoNomina === 'B') return 4400;
        if (tipoNomina === 'C') return 4700;
        if (tipoNomina === 'D') return 4700;
      }
      if (totalMes === 28) {
        if (tipoNomina === 'A') return 4600;
        if (tipoNomina === 'B') return 5000;
        if (tipoNomina === 'C') return 5000;
        if (tipoNomina === 'D') return 4300;
      }
      if (totalMes === 29) {
        if (tipoNomina === 'A') return 4600;
        if (tipoNomina === 'B') return 4400;
        if (tipoNomina === 'C') return 4200;
        if (tipoNomina === 'D') return 4900;
      }
      if (totalMes >= 30) {
        if (tipoNomina === 'A') return 4500;
        if (tipoNomina === 'B') return 4900;
        if (tipoNomina === 'C') return 4600;
        if (tipoNomina === 'D') return 4300;
      }
      break;
    case 'f':
      if (totalMes <= 24) {
        if (tipoNomina === 'A') return 4000;
        if (tipoNomina === 'B') return 4700;
        if (tipoNomina === 'C') return 4600;
        if (tipoNomina === 'D') return 5000;
      } else if (totalMes === 25) {
        if (tipoNomina === 'A') return 4200;
        if (tipoNomina === 'B') return 4200;
        if (tipoNomina === 'C') return 4900;
        if (tipoNomina === 'D') return 4900;
      } else if (totalMes === 26) {
        if (tipoNomina === 'A') return 4100;
        if (tipoNomina === 'B') return 4500;
        if (tipoNomina === 'C') return 4600;
        if (tipoNomina === 'D') return 4700;
      } else if (totalMes === 27) {
        if (tipoNomina === 'A') return 4200;
        if (tipoNomina === 'B') return 4300;
        if (tipoNomina === 'C') return 4700;
        if (tipoNomina === 'D') return 5000;
      } else if (totalMes >= 28) {
        if (tipoNomina === 'A') return 4500;
        if (tipoNomina === 'B') return 4400;
        if (tipoNomina === 'C') return 4000;
        if (tipoNomina === 'D') return 4300;
      }
      break;
  }
}

console.log(calculoMotor('A', '12/06/2022', 'f'));
console.log(calculoMotor('B', '30/12/1993', 'f'));
console.log(calculoMotor('C', '19/09/2020', 'm'));
console.log(calculoMotor('D', '15/01/2019', 'm'));
