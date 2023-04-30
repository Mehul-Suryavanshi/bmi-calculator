import { LightningElement } from 'lwc';

export default class BmiCalculatorApp extends LightningElement {
  inptHeight = 0;
  inptWeight = 0;
  bmiCalculated = 0;
  bmiResult = "";
  flagBMIRecalculate = false;
  
  onChangeHandler(ent){
    const {name, value} = ent.target;

    switch(name){
      case "height" :
        this.inptHeight = Number(value)/100;
        break;
      case "weight" : 
      this.inptWeight = Number(value);
    }


  }

  onSubmitHandler(evnt){
    evnt.preventDefault();
    this.flagBMIRecalculate = true;

    this.bmiCalculated = this.inptWeight/(this.inptHeight*this.inptHeight);
    this.bmiCalculated = Number(this.bmiCalculated.toFixed(2));

    if(this.bmiCalculated < 18.5){
      this.bmiResult = "Underweight";
    } else if(this.bmiCalculated >= 18.5 && this.bmiCalculated<25){
      this.bmiResult = "Healthy";
    } else if(this.bmiCalculated >= 25 && this.bmiCalculated<30){
      this.bmiResult = "Overweight";
    } else {
      this.bmiResult = "Obese";
    }

    console.log(this.bmiCalculated);
    console.log(this.bmiResult)
  }

  reCalculateBMI(evt){
    this.flagBMIRecalculate = false;
  }
}