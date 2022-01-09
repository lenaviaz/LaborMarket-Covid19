
const xlabels = []; 
const yrevs = [];
chartIt2();

async function chartIt2(){
await getData();
const ctx2 = document.getElementById('chart2').getContext('2d');

const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: xlabels,
        datasets: [{
            label: 'Number of Instacart Shoppers',
            data: yrevs,
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    
});
}


async function getData(){
const response = await fetch('InstacartShoppers.csv')
const data = await response.text();

const table = data.split('\n').splice(1);

table.forEach(row => { 
    const columns = row.split(',');
    const year = columns[0];
    const rev = columns[1];

    xlabels.push(year)
    yrevs.push(rev)
    
});

}

// const rows = data.split('\n').splice(1);
// const table = data.split(/\n/).splice(1);

// const r1 = data.split(/\n/).splice(2);

// rows.forEach(row => {
//     const columns = row.split(',');
//     const year = columns[0];
//     const rev = columns[1]
//     xlabels.push(year, rev);
    
// //     console.log(year, temp);

// });
// }
