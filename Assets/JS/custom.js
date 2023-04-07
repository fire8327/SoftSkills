/*jshint esnext: true */
const chart = new Chart(document.getElementById("doughnut-chart"), {
  type: 'doughnut',
  data: {
    labels: ["Да", "Нет"],
    datasets: [
      {
        label: "Знаете ли вы о SoftSkills? (в процентном соотношении)",
        data: [67,33],
        backgroundColor: ["#3e95cd", "#8e5ea2"],
      }
    ]
  }
});

const myChart = new Chart(document.getElementById('myChart').getContext('2d'), {
    type: 'bar',
    data: {
        labels: ['Навык публичных выступлений', 'Эффективная коммуникация', 'Самоорганизация', 'Командная работа', 'Саморазвитие', 'Аналитические способности'],
        datasets: [{
            label: "Главные SoftSkills",
            data: [1, 4, 2, 4, 1, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
});