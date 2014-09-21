// Javascript Document
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// function to calculate radial gradation(one of the 4 major parameters a strength of a side depends on) of each side
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function radial_gradation(sqr,king_sqr)
{
	var x1=sqr[0];
	var x2=sqr[1];
	var y1=king_sqr[0];
	var y2=king_sqr[1];
	var z1=8-Math.abs(x1-y1);
	var z2=8-Math.abs(x2-y2);
	var grad=Math.min(z1,z2);
	return grad;
};
