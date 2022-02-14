

function getGrade(score) {
    let grade;
    // Write your code here
    if(score<=20)
    {
        if(score<=10)
        {
            if(score<=5 && score>=0)
            {
                grade='F';
            }
            else
            {
                grade='E';
            }
        }
        else
        {
            if(score<=15)
            {
                grade='D';
            }
            else
            {
                grade='C';
            }
        }
    }
    else
    {
        if(score<=25)
        {
            grade='B';
        }
        else
        {
            grade='A';
        }
    }
    
    return grade;
}

