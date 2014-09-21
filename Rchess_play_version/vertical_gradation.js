// Javascript Document
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// function to calculate vertical gradation(one of the 4 major parameters a strength of a side depends on) of each side
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function vertical_gradation(sqr,color)
{
	if(color=="w")
	{
		return sqr[1]+1;
	}
	else if(color=="b")
	{
		var y1 = 8- sqr[1];
		return y1;	
	};
};
