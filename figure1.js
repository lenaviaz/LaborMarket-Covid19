

const xlabels = []; 
const yrevs = [];
chartIt();

async function chartIt(){
// await getData();
const ctx = document.getElementById('chart').getContext('2d');
ctx.width = 300; //window size
ctx.height = 300;

const myChart = new Chart(ctx, 
    {
    
        type: 'bar',
        data: {
            datasets: [{
                type: 'line',
                yAxisID: 'Year',
                backgroundColor: 'transparent',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                tension: 0,
                fill: false
            }, {
                yAxisID: 'Revenue',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'transparent'
            }]
        },
        plugins: [ChartDataSource],
        options: {
            scales: {
                yAxes: [{
                    id: 'Year',
                    gridLines: {
                        drawOnChartArea: false
                    }
                }, {
                    id: 'Revenue',
                    position: 'right',
                    gridLines: {
                        drawOnChartArea: false
                    }
                }]
            },
            plugins: {
                datasource: {
                    url: 'Instavart6.csv'
                }
            
            } }
    
});
}


// async function getData(){
// const response = await fetch('InstacartRevenue.csv')
// const data = await response.text();

// const table = data.split('\n').splice(1);

// table.forEach(row => { 
//     const columns = row.split(',');
//     const year = columns[0];
//     const rev = columns[1];

//     xlabels.push(year)
//     yrevs.push(rev)
    
// });



// }

