const express = require('express');

const CalculatorArithmetic = require('./controllers/calculator/ArithmeticController');
const CalculatorCosine = require('./controllers/calculator/CosineController');
const CalculatorFactorial = require('./controllers/calculator/FactorialController');
const CalculatorFibonacci = require('./controllers/calculator/FibonacciController');
const CalculatorMedian = require('./controllers/calculator/MedianController');
const CalculatorPowerN = require('./controllers/calculator/PowerNController');
const CalculatorSine = require('./controllers/calculator/SineController');
const CalculatorTangent = require('./controllers/calculator/TangentController');

const routes = express.Router();

const urlBase = '/api/calculadora/v1';

routes.get(urlBase + '/arithmatic', CalculatorArithmetic.calculate);
routes.get(urlBase + '/cosine', CalculatorCosine.calculate);
routes.get(urlBase + '/factorial', CalculatorFactorial.calculate);
routes.get(urlBase + '/fibonacci', CalculatorFibonacci.calculate);
routes.get(urlBase + '/median', CalculatorMedian.calculate);
routes.get(urlBase + '/power', CalculatorPowerN.calculate);
routes.get(urlBase + '/sine', CalculatorSine.calculate);
routes.get(urlBase + '/tangent', CalculatorTangent.calculate);

module.exports = routes;