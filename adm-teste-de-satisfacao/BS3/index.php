<?php
require_once("../../conexao.php");
$sql = "SELECT * FROM respostas WHERE status_reposta > 0";
$res = $pdo->query($sql);
var_dump($res);

?>
<!doctype html>
<html lang="pt-br">
<head>
	<meta charset="utf-8" />
	<link rel="icon" type="image/png" href="assets/img/favicon.ico">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

	<title>Light Bootstrap Dashboard by Creative Tim</title>

	<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <meta name="viewport" content="width=device-width" />


    <!-- Bootstrap core CSS     -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet" />

    <!-- Animation library for notifications   -->
    <link href="assets/css/animate.min.css" rel="stylesheet"/>

    <!--  Light Bootstrap Table core CSS    -->
    <link href="assets/css/light-bootstrap-dashboard.css?v=1.4.0" rel="stylesheet"/>


    <!--  CSS for Demo Purpose, don't include it in your project     -->
    <link href="assets/css/demo.css" rel="stylesheet" />


    <!--     Fonts and icons     -->
    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
    <link href='http://fonts.googleapis.com/css?family=Roboto:400,700,300' rel='stylesheet' type='text/css'>
    <link href="assets/css/pe-icon-7-stroke.css" rel="stylesheet" />

</head>
<body>

<div class="wrapper">
    <div class="sidebar" data-color="black" >

    <!--

        Tip 1: you can change the color of the sidebar using: data-color="blue | azure | green | orange | red | purple"
        Tip 2: you can also add an image using data-image tag

    -->

    	<div class="sidebar-wrapper">

            <ul class="nav">
                <li class="active">
                    <a href="index.html">
                        <i class="pe-7s-graph"></i>
                        <p>Geral</p>
                    </a>
                </li>
                <li>
                    <a href="table.html">
                        <i class="pe-7s-users"></i>
                        <p>Clientes</p>
                    </a>
                </li>
                <li>
                    <a href="perguntas.html">
                        <i class="pe-7s-note2"></i>
                        <p>Perguntas</p>
                    </a>
                </li>
                <li>
                    <a href="lojas.html">
                        <i class="pe-7s-ticket"></i>
                        <p>Lojas</p>
                    </a>
                </li>
                <li>
                    <a href="funcionarios.html">
                        <i class="pe-7s-call"></i>
                        <p>Funcionarios</p>
                    </a>
                </li>
                <li>
                    <a href="adm.html">
                        <i class="pe-7s-network"></i>
                        <p>Administradores</p>
                    </a>
                </li>
                <li>
                    <a href="notifications.html">
                        <i class="pe-7s-bell"></i>
                        <p>Notificações</p>
                    </a>
                </li>
            </ul>
    	</div>
    </div>

    <div class="main-panel">
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4">
                        <div class="">
                            <div class="" id="chart">
                                    <!--     Google charts     -->

                                <script src="https://www.gstatic.com/charts/loader.js"></script>
                                <script>
                                    google.charts.load('current', {packages: ['corechart']});
                                    google.charts.setOnLoadCallback(drawChart);
                                    function drawChart() {
                                    const container = document.querySelector('#chart')
                                    const data = new google.visualization.arrayToDataTable([
                                        [ 'Opiniao', 'Quantidade' ],
                                        [ 'Bom', 10000 ],
                                        [ 'Indiferente', 9000 ],
                                        [ 'Ruim', 8000 ],
                                    ])
                                    const options = {
                                        title: 'Estatistica de respostas - Quantidade no mês',
                                        height: 400,
                                        width: 1000,
                                    }
                                    const chart = new google.visualization.PieChart(container)
                                    chart.draw(data,options)
                                }
                                </script>
                            </div>
                        </div>
                    </div>
                </div>
                        <div class="">
                            <div class="" id="chart1">
                                <!--     Google charts     -->
                            <script>
                                google.charts.load('current', {packages: ['corechart']});
                                google.charts.setOnLoadCallback(drawChart);
                                function drawChart() {
                                const container = document.querySelector('#chart1')
                                const data = new google.visualization.arrayToDataTable([
                                    [ 'Mês', 'Quantidade' ],
                                    [ '08/2022', 10000],
                                    [ '09/2022', 8000],
                                    [ '10/2022', 14000],
                                ])
                                const options = {
                                    title: 'Quantidade de respostas em cada Mês',
                                    height: 400,
                                    width: 1000,
                                }
                                const chart = new google.visualization.ColumnChart(container)
                                chart.draw(data,options)
                            }
                            </script>
                        </div>
                        </div>

                    
                    </ul>
                </nav>
            </div>
        </footer>

    </div>
</div>


</body>

    <!--   Core JS Files   -->
    <script src="assets/js/jquery.3.2.1.min.js" type="text/javascript"></script>
	<script src="assets/js/bootstrap.min.js" type="text/javascript"></script>

	<!--  Charts Plugin -->
	<script src="assets/js/chartist.min.js"></script>

    <!--  Notifications Plugin    -->
    <script src="assets/js/bootstrap-notify.js"></script>

    <!--  Google Maps Plugin    -->
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>

    <!-- Light Bootstrap Table Core javascript and methods for Demo purpose -->
	<script src="assets/js/light-bootstrap-dashboard.js?v=1.4.0"></script>

	<!-- Light Bootstrap Table DEMO methods, don't include it in your project! -->
	<script src="assets/js/demo.js"></script>

	<script type="text/javascript">
    	$(document).ready(function(){

        	demo.initChartist();

    	});
	</script>

</html>
