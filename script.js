// Función para mostrar/ocultar contenido extra
function toggle(id, btn) {
  const content = document.getElementById(id);
  if (content.style.display === "block") {
    content.style.display = "none";
    btn.querySelector(".label").textContent = "Leer más";
    btn.querySelector(".arrow").textContent = "▼";
  } else {
    content.style.display = "block";
    btn.querySelector(".label").textContent = "Leer menos";
    btn.querySelector(".arrow").textContent = "▲";
  }
}

// Función objetivo
function objectiveFunction(x) {
  return -x * x + 10 * x;
}

// Simulación Hill Climbing para el gráfico
let currentX = 0;
const stepSize = 0.5;
const maxIterations = 30;
let dataX = [];
let dataY = [];

for (let i = 0; i < maxIterations; i++) {
  let neighbor = currentX + (Math.random() * 2 - 1) * stepSize;
  let currentScore = objectiveFunction(currentX);
  let neighborScore = objectiveFunction(neighbor);

  if (neighborScore > currentScore) {
    currentX = neighbor;
  }

  dataX.push(i);
  dataY.push(objectiveFunction(currentX));
}

// Crear gráfico con Chart.js
const ctx = document.getElementById('hillChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: dataX,
    datasets: [{
      label: 'Valor de la función',
      data: dataY,
      borderColor: 'rgba(142, 68, 173, 1)',
      backgroundColor: 'rgba(142, 68, 173, 0.2)',
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Evolución de Hill Climbing'
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Iteración'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Valor función'
        }
      }
    }
  }
});
