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

routes.post(urlBase + '/arithmatic', CalculatorArithmetic.store);
routes.post(urlBase + '/cosine', CalculatorCosine.store);
routes.post(urlBase + '/factorial', CalculatorFactorial.store);
routes.post(urlBase + '/fibonacci', CalculatorFibonacci.store);
routes.post(urlBase + '/median', CalculatorMedian.store);
routes.post(urlBase + '/power', CalculatorPowerN.store);
routes.post(urlBase + '/sine', CalculatorSine.store);
routes.post(urlBase + '/tangent', CalculatorTangent.store);

module.exports = routes;