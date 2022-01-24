var NumberCount = 0;
var IsFraction = false;
var IsZero = false;
var choice=0;
var x;
var y;
var IsSolution=false;
var minus=false;

function zero()
{
	if(NumberCount===0)
	{
		document.getElementById("display").innerHTML ="0";
		IsZero=true;
		IsSolution=false;
	}
	else
	{
		document.getElementById("display").innerHTML +="0";
		NumberCount++;
	}
}

function one()
{
	if(NumberCount===0)
	{
		document.getElementById("display").innerHTML ="1";
		NumberCount++;
		IsZero=false;
		IsSolution=false;
	}
	else
	{
		document.getElementById("display").innerHTML +="1";
		NumberCount++;
	}
}

function two()
{
	if(NumberCount===0)
	{
		document.getElementById("display").innerHTML ="2";
		NumberCount++;
		IsZero=false;
		IsSolution=false;
	}
	else
	{
		document.getElementById("display").innerHTML +="2";
		NumberCount++;
	}
}

function three()
{
	if(NumberCount===0)
	{
		document.getElementById("display").innerHTML ="3";
		NumberCount++;
		IsZero=false;
		IsSolution=false;
	}
	else
	{
		document.getElementById("display").innerHTML +="3";
		NumberCount++;
	}
}

function four()
{
	if(NumberCount===0)
	{
		document.getElementById("display").innerHTML ="4";
		NumberCount++;
		IsZero=false;
		IsSolution=false;
	}
	else
	{
		document.getElementById("display").innerHTML +="4";
		NumberCount++;
	}
}

function five()
{
	if(NumberCount===0)
	{
		document.getElementById("display").innerHTML ="5";
		NumberCount++;
		IsZero=false;
		IsSolution=false;
	}
	else
	{
		document.getElementById("display").innerHTML +="5";
		NumberCount++;
	}
}

function six()
{
	if(NumberCount===0)
	{
		document.getElementById("display").innerHTML ="6";
		NumberCount++;
		IsZero=false;
		IsSolution=false;
	}
	else
	{
		document.getElementById("display").innerHTML +="6";
		NumberCount++;
	}
}

function seven()
{
	if(NumberCount===0)
	{
		document.getElementById("display").innerHTML ="7";
		NumberCount++;
		IsZero=false;
		IsSolution=false;
	}
	else
	{
		document.getElementById("display").innerHTML +="7";
		NumberCount++;
	}
}

function eight()
{
	if(NumberCount===0)
	{
		document.getElementById("display").innerHTML ="8";
		NumberCount++;
		IsZero=false;
		IsSolution=false;
	}
	else
	{
		document.getElementById("display").innerHTML +="8";
		NumberCount++;
	}
}

function nine()
{
	if(NumberCount===0)
	{
		document.getElementById("display").innerHTML ="9";
		NumberCount++;
		IsZero=false;
		IsSolution=false;
	}
	else
	{
		document.getElementById("display").innerHTML +="9";
		NumberCount++;
	}
}

function dot()
{
	if(NumberCount===0)
	{
		document.getElementById("display").innerHTML ="0.";
		NumberCount++;
		IsFraction=true;
		IsZero=false;
		IsSolution=false;
	}
	else if(IsFraction===false)
	{
		document.getElementById("display").innerHTML +=".";
		IsFraction=true;
		NumberCount++;
	}
}

function backspace()
{
	if(NumberCount>0 && IsSolution!==true)
	{
		var str = document.getElementById("display").innerHTML;
		var newstr = str.slice(0, -1);
		document.getElementById("display").innerHTML = newstr;
		NumberCount--;
		if(str.slice(-1)===".") IsFraction=false;
	}
}

function ac()
{
	NumberCount=0;
	IsFraction=false;
	IsZero=false;
	IsSolution=false;
	choice=0;
	document.getElementById("display").innerHTML="";
}

function add()
{
	if(choice===0 && IsSolution!==true)
	{
		if(NumberCount>0)
		{
		NumberCount=0;
		IsFraction=false;
		x=parseFloat(document.getElementById("display").innerHTML);
		choice=1;
		}
		else if(IsZero===true)
		{
			x=0;
			IsZero=false;
			choice=1;
		}
		else document.getElementById("display").innerHTML="Error";
	}
	else if (IsSolution===true)
	{
		x=parseFloat(document.getElementById("display").innerHTML);
		choice=1;
	}
	else if(choice!==0) choice = 1;
}

function substract()
{
	if(choice===0 && IsSolution!==true)
	{
		if(NumberCount>0)
		{
		NumberCount=0;
		IsFraction=false;
		x=parseFloat(document.getElementById("display").innerHTML);
		choice=2;
		}
		
		else if(IsZero===true)
		{
			x=0;
			IsZero=false;
			choice=2;
		}
		else if(IsZero===false && NumberCount===0)
		{
			document.getElementById("display").innerHTML="-";
			NumberCount++;
		}
		else document.getElementById("display").innerHTML="Error";
		
	}
	else if(choice!==0)
	{
		NumberCount=1;
		IsFraction=false;
		x=parseFloat(document.getElementById("display").innerHTML);
		document.getElementById("display").innerHTML="-";
	}
	else if (IsSolution===true)
	{
		x=parseFloat(document.getElementById("display").innerHTML);
		choice=2;
	}
}

function multiply()
{
	if(choice===0 && IsSolution!==true)
	{
		if(NumberCount>0)
		{
		NumberCount=0;
		IsFraction=false;
		x=parseFloat(document.getElementById("display").innerHTML);
		choice=3;
		}
		else if(IsZero===true)
		{
			x=0;
			IsZero=false;
			choice=3;
		}
		else document.getElementById("display").innerHTML="Error";
	}
	else if (IsSolution===true)
	{
		x=parseFloat(document.getElementById("display").innerHTML);
		choice=3;
	}
	else if(choice!==0) choice = 3;
}

function divide()
{
	if(choice===0 && IsSolution!==true)
	{
		if(NumberCount>0)
		{
		NumberCount=0;
		IsFraction=false;
		x=parseFloat(document.getElementById("display").innerHTML);
		choice=4;
		}
		
		else if(IsZero===true)
		{
			x=0;
			IsZero=false;
			choice=4;
		}
		else document.getElementById("display").innerHTML="Error";
	}
	else if (IsSolution===true)
	{
		x=parseFloat(document.getElementById("display").innerHTML);
		choice=4;
	}
	else if(choice!==0) choice = 4;
}

function equals()
{
	if(choice!==0)
	{
		if(NumberCount>0)
		{
		NumberCount=0;
		IsFraction=false;
		y=parseFloat(document.getElementById("display").innerHTML);
		}
		
		else if(IsZero===true)
		{
			y=0;
			IsZero=false;
		}
		else document.getElementById("display").innerHTML="Error";
		
		if(choice===4 && y===0)
		{
			document.getElementById("display").innerHTML="Dividing by 0";
		}
		else
		{
			var solution;
			switch(choice)
			{
				case 1:
				{
					solution=  x+y;
					break;
				}
				case 2:
				{
					solution=  x-y;
					break;
				}
				case 3:
				{
					solution=  x*y;
					break;
				}
				case 4:
				{
					solution=  x/y;
					break;
				}
			}
			document.getElementById("display").innerHTML = solution;
			choice=0;
			IsSolution=true;
		}
	
	}
}