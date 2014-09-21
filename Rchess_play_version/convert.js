// Javascript Document
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// function convert to assign alphanumeric values to rows and columns of boards to read move notations in analysis games
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function convert(x1) 
{
	switch(x1)
	{
		case '1': x1=0; break; case 'a': x1=0; break; case '2': x1=1; break; case 'b': x1=1; break;
		case '3': x1=2; break; case 'c': x1=2; break; case '4': x1=3; break; case 'd': x1=3; break;
		case '5': x1=4; break; case 'e': x1=4; break; case '6': x1=5; break; case 'f': x1=5; break;
		case '7': x1=6; break; case 'g': x1=6; break; case '8': x1=7; break; case 'h': x1=7; break;
		default: x1=10;
	};
	return x1;
};