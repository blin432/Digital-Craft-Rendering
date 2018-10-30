
function renderStudents(students) {
    var rollCall= students.map(function(currentStudent){
        var ifPresent= "";
        var backgroundColor="";
        
        if (currentStudent.isPresent==true){
            
            ifPresent+= "Present"
            backgroundColor+="green"
        } else{
            ifPresent += "Absent"
            backgroundColor+='red'
        };
        var studentStatus = ifPresent;
        var color= backgroundColor;

       

      return `
      
      <div class="container" style= 'text-align:center;margin-top:20px;'>
    
    <div style="height:100px; width:200px;border:1px solid black; margin:0 auto;background-color:${color};">
    <h2 style='text-align:center padding-bottom:0; margin-bottom:0;margin-top:15px;'> ${currentStudent.name}    </h2>
    <p style='text-align"center padding-top:0;'>  ${studentStatus}  </p>
    </div>
    
    </div>
    
      `
        
    
    });

    var newCircle= rollCall.join('');
    
    return `<div><h1 style="text-align:center;">Roll Call!</h1>
            ${newCircle}
            </div>
                `;
   
}




function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}