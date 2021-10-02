"use strict"

let calculator = {

  typeInput: prompt("Какой тип сайта Вам нужен?\nВведите цифру:\n1 - визитка (+1000р.)\n2 - корпоративный сайт (+3000р.)\n3 - интернет-магазин (+4000р.)\n4 - промо-сайт (+2000р.)"),
  designInput: prompt("Какой дизайн Вы хотите?\nВведите цифру:\n1 - уникальный (+3000р.)\n2 - шаблонный (+1000р.)\n3 - wow-дизайн (+4000р.)\n4 - минимализм (+2000р.)"),
  adaptiveInput: prompt("Какая адаптивность Вам необходима? \nВведите цифру:\n1 - фиксированный макет (+1000р.)\n2 - отзывчивый макет (+2000р.)\n3 - адаптивный макет (+3000р.)\n4 - отзывчиво-адаптивный макет (+4000р.)"),

  data: [
    [5,10,15,20],
    [1000,2000,3000,4000],
  ],

  calculate: function(){

    if (calculator.typeInput === "1"){
      var typeTiming = calculator.data[0][0];
      var typeCost = calculator.data[1][0];
    } else if (calculator.typeInput === "2"){
      var typeTiming = calculator.data[0][2];
      var typeCost = calculator.data[1][2];
    } else if (calculator.typeInput === "3"){
      var typeTiming = calculator.data[0][3];
      var typeCost = calculator.data[1][3];
    } else if (calculator.typeInput === "4"){
      var typeTiming = calculator.data[0][1];
      var typeCost = calculator.data[1][1];
    } else {
      var incorrectInput = 1;
    };

    if (calculator.designInput === "1"){
      var designTiming = calculator.data[0][2];
      var designCost = calculator.data[1][2];
    } else if (calculator.designInput === "2"){
      var designTiming = calculator.data[0][0];
      var designCost = calculator.data[1][0];
    } else if (calculator.designInput === "3"){
      var designTiming = calculator.data[0][3];
      var designCost = calculator.data[1][3];
    } else if (calculator.designInput === "4"){
      var designTiming = calculator.data[0][1];
      var designCost = calculator.data[1][1];
    } else {
      var incorrectInput = 1;
    };

    if (calculator.adaptiveInput === "1"){
      var adaptiveTiming = calculator.data[0][0];
      var adaptiveCost = calculator.data[1][0];
    } else if (calculator.adaptiveInput === "2"){
      var adaptiveTiming = calculator.data[0][1];
      var adaptiveCost = calculator.data[1][1];
    } else if (calculator.adaptiveInput === "3"){
      var adaptiveTiming = calculator.data[0][2];
      var adaptiveCost = calculator.data[1][2];
    } else if (calculator.adaptiveInput === "4"){
      var adaptiveTiming = calculator.data[0][3];
      var adaptiveCost = calculator.data[1][3];
    } else {
      var incorrectInput = 1;
    };

    let resultTiming = typeTiming + designTiming + adaptiveTiming;
    let resultCost = typeCost + designCost + adaptiveCost;

    return [resultTiming, resultCost, incorrectInput];
    },

  show: function(){
    if (calculator.calculate()[2] === 1){
      alert("Данные не указаны, либо указаны не верно");
    } else {
      alert("Сроки разработки сайта: " + calculator.calculate()[0] + " д." + "\nСтоимость разработки сайта: " + calculator.calculate()[1] + "р.");
    };
  },
};

calculator.show();