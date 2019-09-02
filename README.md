<img src="/frontend/src/assets/unipLogo.jpg">

<p align="center">
    <b style='font-size:40px;'>Calculadora Ciêntifica como Web Service</b>
</p>

<p align="center">
 <b style='font-size:40px;'>Trabalho de desenvolvimento de uma API de serviços por um único EndPoint</b>
</p>

<h2>Integrantes do Projeto</h2>

<p style="text-align: left;">
    Jonatas Arlindo Pedroso<br>
    Thomaz Honorato
</P>

<p style="text-align: justify;">Objetivo do Trabalho consiste em criar uma aplicação que tenha somente um Endpoint Principal aonde o client irá requisitar as informações, com Endpoints secundarios para que seja solicitado o tipo de calculo em especifico. Sendo os tipos de calculos solicitados "Calculo Aritmético, Calculo de Fibonacci, Calculo de Potência de N, Calculo de Fatorial, Calculo de Mediana". Apesar desses calculos que foram solicitados decidimos criar mais 3 calculos para poder aprender mais sobre web services e comunicação entre HttpRequest e HttpResponse. Criamos os calculos de "Seno, Coseno, Tangente".</p>

<h3>EndPoint Base Para a Aplicação</h3>

``` r
    http://localhost:3000/api/calculadora/v1
```

<p style="text-align: justify;">Com base a esta URL padrão de nosso endpoint utilizamos urls dedicadas a cada calculo. Exemplo na imagem a seguir.</p>

<img src="/frontend/src/assets/printsDocumentation/rotas.png">

