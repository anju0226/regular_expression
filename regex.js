function is_domain(str)  
{  
 regexp = /^(www)[\.]([a-z0-9]+)([\.][a-z0-9]+)*[\.][(com)|(org)]$/i;  
   //this should start with www then . then [a-z0-9] should come once, twice, etc 
   // ([\.][a-z0-9]+)* meaning it can come or not but if appears then . should be followed by [a-z0-9] 
   
    if (regexp.test(str))  
          {  
            alert("your email address is " + str);  
          }  
        else  
          {  
            alert("sorry not valid");  
          }  
}


function is_number(num)
{
   regexp = /^(98)[0-9]{8}$/;
   
   
   if((regexp.test(num))&& (num.length) == 10)
	   //both condition should be true
   {
      alert("Your number is " + num);
   }
   else
   {
	   alert("Sorry invalid number");
   }
}

function is_alphadas(str)
{
	regexp = /[(a-z)|_|-]/i;
	// the string is matched with this regex regardless of case since i 

	if(str.match(regexp))
	{
		alert("OK");
	}
	
	else
		alert("Not OK");
}

function is_date(d)
{
	dateFormat = /^([1-9]|1[0-2])\\|\-([1-9]|2[0-9]|3[0-1])\\\-(199[0-9]|200[1-9]|20[10-15])$/; 
     //here I am accepting the date between year 1990 to 2015

	 if(dateFormat.test(d))
	 {
		 alert("ok");
	 }
	 else
		 alert("Not OK");
}

function is_time(t)
{
   timeFormat = /^(2[0-4]|1[0-9]|[1-9]):([0-5]|[0-9]):([0-5][0-9])$/;
   //the time format is 24 hour format
   
   if(timeFormat.test(t))
   {
	   alert("OK");
   }
   
   else
	   alert("Not OK");
}

function is_hex(h)
{
	hexFormat = /^#[0-9a-f]{6}/;
	//hex value ranges from 000000 to ffffff
	
	if(hexFormat.test(h))
	{
		alert("OK");
	}
	
	else
		alert("Not OK");
}