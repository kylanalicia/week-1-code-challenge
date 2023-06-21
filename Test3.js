//Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 
function calculateNetSalary(salary) {
    // declare constants for various tax rates and limits
    const TaxLimit = 24000; // removed quotes to make it a number
    const TaxRate = 0.4;
    const NHIFRate = 0.03;
    const NSSFRate = 0.06; // fixed typo in variable name

    // check if the salary is less than 1500, if so return nothing
    if (salary < 1500){
        return;
    }
    else{
        //calculate gross salary if salary is above or equals to 1500
        var basicSalary = 1000; // example value
        var Benefits = 500; // example value
        var grossSalary = basicSalary + Benefits;

        // calculate Pay As You Earn (PAYE) deductions
        var taxableIncome = grossSalary - 1408; //assuming personal relief of 1408
        var payee = 0;
        
        if(taxableIncome <= 12298){ //first tax bracket
            payee = taxableIncome * 0.1;
        }
        else if(taxableIncome > 12298 && taxableIncome <=23885){ //second tax bracket
            payee = 1229.80 + ((taxableIncome - 12298) * 0.15);
        }
        else if(taxableIncome > 23885 && taxableIncome <=35472){ //third tax bracket
            payee = 3439.30 + ((taxableIncome - 23885) * 0.20);
        }
        else if(taxableIncome > 35472 && taxableIncome <=47059){ //fourth tax bracket
            payee = 6838.30 + ((taxableIncome - 35472) * 0.25);
        }
        else{ //highest tax bracket
            payee = 11932.80 + ((taxableIncome - 47059) * 0.3);
        }

        // calculate NHIF and NSSF deductions
        var NHIFdeductions = grossSalary * NHIFRate;
        var NSSFdeductions = grossSalary * NSSFRate;

        // calculate net salary
        var netSalary = grossSalary - payee - NHIFdeductions - NSSFdeductions;

        return netSalary;
    }
}

// call the function with an example salary of 20000
console.log(`Your net salary is Ksh. ${calculateNetSalary(20000)}`);










