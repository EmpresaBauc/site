google.charts.load('current',{packages:["corechart"]});
google.charts.setOnLoadCallback(drawIntegralChart);
google.charts.setOnLoadCallback(drawFrenteLojaChart);
google.charts.setOnLoadCallback(drawOutrosChart);



function drawIntegralChart()
{
  //montando o array com os dados
  var data = google.visualization.arrayToDataTable([
    ['Modulos', '%', {role: "style"}],
    ['Contábil', 100, 'color: blue'],
    ['Cotação WEB', 10, 'color: blue'],
    ['Financeiro', 80, 'color: blue'],
    ['Fiscal', 70, 'color: blue'],
    ['Materiais', 40, 'color: blue'],
    ['Tnfe', 10, 'color: blue'],
    ['Wms', 90, 'color: blue'],
  ]);

  //opções para o gráfico de barras
  var options =
  {
    title: 'Integral',
    vAxis: {title:'Módulos', titleTextStyle:{color:'blue'}}//legenda vertical
  };




  //instanciando e desenhando o gráfico de barras
  var barras = new google.visualization.BarChart(document.getElementById('barras_Integral_div'));

  google.visualization.events.addListener(barras,"select",function(e){
    //pega o array de itens selecionados
    var $wrapper = document.querySelector('.wrapper'),

    // Novo HTML que será inserido
    HTMLNovo = 'Integral </br>';

    // Coloca a nova string(que é o HTML) no DOM
    $wrapper.innerHTML = HTMLNovo;
    });

  barras.draw(data, options);
}





function drawFrenteLojaChart()
{
//montando o array com os dados
      var data = google.visualization.arrayToDataTable([
        ['Modulos', '%', {role: "style"}],
        ['Frente Windows', 100, 'color: blue'],
        ['Frente Linux', 10, 'color: blue'],
        ['Scantech', 80, 'color: blue'],
        ['TEF', 70, 'color: blue'],

      ]);

      //opções para o gráfico de barras
      var options =
      {
        title: 'Frente de Loja',
        vAxis: {title:'Módulos', titleTextStyle:{color:'blue'}}//legenda vertical
      };

      //instanciando e desenhando o gráfico de barras
      var barrasfrenteloja = new google.visualization.BarChart(document.getElementById('barras_FrenteLoja_div'));

      google.visualization.events.addListener(barrasfrenteloja,"select",function(e){
        //pega o array de itens selecionados
        var $wrapper = document.querySelector('.wrapper'),

        // Novo HTML que será inserido
        HTMLNovo = 'Frente </br>';

        // Coloca a nova string(que é o HTML) no DOM
        $wrapper.innerHTML = HTMLNovo;
        });
      barrasfrenteloja.draw(data, options);
}


function drawOutrosChart()
{
//montando o array com os dados
    var data = google.visualization.arrayToDataTable([
      ['Modulos', '%', {role: "style"}],
      ['Gestor', 100, 'color: blue'],
      ['Novo Erp', 10, 'color: blue'],

    ]);

    //opções para o gráfico de barras
    var options =
    {
      title: 'Outros',
      vAxis: {title:'Módulos', titleTextStyle:{color:'blue'}}//legenda vertical
    };

    //instanciando e desenhando o gráfico de barras
    var outros = new google.visualization.BarChart(document.getElementById('outros_div'));
    outros.draw(data, options);
}
