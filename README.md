<img src="/frontend/src/assets/unipLogo.jpg">

<p align="center">
    <b style='font-size:40px;'>Calculadora Ciêntifica como Web Service</b>
</p>

<p align="center">
    <b style='font-size:40px;'>Trabalho de desenvolvimento de uma API de serviços por um único EndPoint</b>
</p>

<h2>Integrantes do Projeto</h2>

<p style='text-align: center; font-weight: bold;'>
    Jonatas Arlindo Pedroso<br>
    Thomaz Honorato
</P>

<h2>Informações do Projeto</h2>

<p style='text-align: justify;'>Objetivo do Trabalho consiste em criar uma aplicação que tenha somente um Endpoint Principal aonde o client irá requisitar as informações, com Endpoints secundarios para que seja solicitado o tipo de calculo em especifico. Sendo os tipos de calculos solicitados "Calculo Média Aritmética, Calculo de Fibonacci, Calculo de Potência de N, Calculo de Fatorial, Calculo de Mediana". Apesar desses calculos que foram solicitados decidimos criar mais 3 calculos para poder aprender mais sobre web services e comunicação entre HttpRequest e HttpResponse. Criamos os calculos de "Seno, Coseno, Tangente".</p>

<h4>EndPoint Base Para a Aplicação</h4>

``` r
    "http://localhost:3000/api/calculadora/v1"
```

<p style='text-align: justify;'>Com base a esta URL padrão de nosso endpoint utilizamos urls dedicadas a cada calculo. Exemplo na imagem a seguir.</p>

<img src="/frontend/src/assets/printsDocumentation/rotas.png">

<h3>Endpoint de Calculo Média Aritmética</h3>

<p style='text-align: justify;'>Com calculo de Média Aritmética recebemos um conjunto de valores que é passo pelo usuário por meio de querystring com a separação de ; entre os valores</p>

<h4>EndPoint Calculo Média Aritmética - Método GET</h4>

``` r
    "http://localhost:3000/api/calculadora/v1/arithmatic"
```

<p style='text-align: justify;'>Exemplo de envio de Requisição</p>

``` r
    "http://localhost:3000/api/calculadora/v1/arithmatic?numeric=1;3;5;8;10"
```

<img src="/frontend/src/assets/printsDocumentation/backend/CodeBusinessArithmatic.png">

<p style='text-align: justify;'>Retorno dos Endpoints será um JSON com o valor do calculo que é convertido diretamente em nosso controller.</p>

<img src="/frontend/src/assets/printsDocumentation/backend/CodeControllerArithmatic.png">

``` r
    "{ numberReturn: <numeroRetorno> }"
```