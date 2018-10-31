
function renderSurveys(finalSurvey) {
    var finalHtml=finalSurvey.map(function(survey){
        
    


    
    return  `<div class="m-3">
                <div >
                    <h2 class="mb-1 mt-5"></h2>
                    <hr class="mt-1">
                </div>
                ${renderField(survey.fields)}
                <div>
                    
                </div>
                

                <div>
                    <button type="button" class="btn btn-primary mt-4"> Submit Survey</button>
                </div>
            </div>`
});
  return `<div>
      ${finalHtml.join('')}
  </div>`
}



function renderField(fields){console.log(fields)
   
   var fieldHTML= fields.map(function(field,radio){
       if(field.type==="radio"){
           return `<div>
                <h4 class="mb-3 mt-3">${field.label} </h4>
                 ${field.options.map(function(option){
                     return   `<div class="form-check">
                        <input class="form-check-input poistion-static" type="radio"  name="radio${radio}"/> ${option}
                    </div>`
        }).join('')}
                    
                    
            </div>`
            
            
       } else if(field.type==="text"){
            return `<div class="form-group">
                         <label for="exampleFormControlTextArea1">${field.label}</label>
                        <textarea class="form-control" id="exampleFormControlTextArea1" rows="3"></textarea>
                    </div>`



       }
       

  
    
            

    });

    return fieldHTML.join('');
    
}
function surveys() {
    var content = document.getElementById('content');

    var surveysAbstraction = [
        {
            title: "Movie Goer Survey",
            fields: [
                {
                    label: "Have you gone to the movies in the last month?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "On a scale of 1 to 5, Did you enjoy your last theater experience?",
                    type: "radio",
                    options: [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                },
            ],
            submitButtonText: "Submit Survey"
        },
        {
            title: "DigitalCrafts Survey",
            fields: [
                {
                    label: "Are you currently enrolled in a DigitalCrafts class?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "In 3000 words or more, explain what's so great about Adam?",
                    type: "text"
                }
            ],
            submitButtonText: "I'm Done"
        }
    ]

    content.innerHTML = renderSurveys(surveysAbstraction);

}





/*function renderSurveys(finalSurvey) {
    var finalHtml=finalSurvey.map(function(currentFinalSurvey){
        return renderSurvey(currentFinalSurvey);
       
       


    });
    return `<div>
            ${finalHtml.join('')}
            </div>`
}
function renderSurvey(survey){
    var surveyHtml=survey.fields.map(function(currentSurvey){
        return renderField(currentSurvey);


    });
    return  ` <div >
                <h1></h1>
                <hr>
            </div>
            <div>
                <h2>${surveyHtml.join('')} </h2>
            <div> </div>
            </div>

            <div>
                <button type="button" class-"btn btn-primary"> Submit Survey</button>
            </div>`

}



function renderField(field){ console.log(`${field.options}`);
    var fieldHtml = field.options.map(function(currentField){
        
        return renderOption(currentField);
        
    });
    
    return `<div>
                <h2> </h2>
                    <div>${fieldHtml.join('')} </div>
            </div>
            <div>
                <h2> What did you like about the experience?</h2>
                    <div class="form-group">
                         <label for="exampleFormControlTextArea1">example</label>
                        <textarea class="form-control" id="exampleFormControlTextArea1" rows="3"></textarea>
                    </div>
            </div>`
}   



function renderOption(option){
    return `
    
        <div class="form-check">
                
                    
            <input class="form-check-input poistion-static" type="radio" > ${option[0]}
        </div>
        <div class="form-check">
            <input class="form-check-input poistion-static" type="radio" > no
   

        </div>`
}*/