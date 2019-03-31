function tampil(output,output2){
    var sectionOutput = document.getElementById("output");
    var mainDiv = document.createElement('div')
    var title = document.createElement('div')
    var h4 = document.createElement('h4')
    var h3 = document.createElement('h3')
    var p = document.createElement('p')
    var hr = document.createElement('br')

    h4.setAttribute("class","alert-heading");
    var h4Result = document.createTextNode(output2)
    var h4Text = document.createTextNode(output);
    h4.appendChild(h4Result)
    h4.appendChild(h4Text);
    h4.appendChild(hr)
    var p1Text = document.createTextNode("Achieve a healthy weight by balancing your caloric input (diet) and output (physical activity).")
    p.appendChild(p1Text)
    p.setAttribute("class","mb-0");
    var pText = document.createTextNode(" A BMI value of 23 and above indicates that your weight is outside of the healthy weight range for your height. Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.");
    p.appendChild(pText)


    title.setAttribute("class","alert alert-success")
    title.setAttribute("role","alert")
    title.appendChild(h4);
    title.appendChild(p)
    mainDiv.setAttribute("class","container");
    mainDiv.appendChild(title)

    sectionOutput.appendChild(mainDiv)


}


var button = document.getElementsByClassName("btn btn-primary");
button[0].addEventListener('click',function(){
    var output =''
    var output2 =''
    var male = document.getElementById("inlineRadio1");
    var height = document.getElementById("height").value/100;
    var weight = document.getElementById("weight").value;
    var dataOutput = Math.round(weight / (height*height)*100)/100

    if(male.checked == true){
        dataOutput = dataOutput - 2.0
    }
    
    if(dataOutput > 40){
        output2 = "Your BMI is "+ dataOutput
        output = "Very severely obese";
    }
    else if(dataOutput > 35 && dataOutput <= 40){
        output2 = "Your BMI is "+ dataOutput
        output = "Severely obese";
    }
    else if(dataOutput > 30 && dataOutput <= 35){
        output2 = "Your BMI is "+ dataOutput
        output = "Moderately obese";
    }
    else if(dataOutput > 25 && dataOutput <= 30){
        output2 = "Your BMI is "+ dataOutput
        output = "Overweight";
    }
    else if(dataOutput > 18.5 && dataOutput <= 25){
        output2 = "Your BMI is "+ dataOutput
        output = "Normal (healthy weight)";
    }
    else if(dataOutput > 16 && dataOutput <= 18.5){
        output2 = "Your BMI is "+ dataOutput
        output = "Underweight";
    }
    else if(dataOutput >= 15 && dataOutput <= 16){
        output2 = "Your BMI is "+ dataOutput
        output = "Severely underweight";
    }
    else if(dataOutput < 15){
        output2 = "Your BMI is "+ dataOutput
        output = "Very severely underweight";
    }

    tampil(output,output2);
})
