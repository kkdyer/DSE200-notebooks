// Javascript Document
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// function to calculate square gradation(one of the 4 major parameters a strength of a side depends on) of each side
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function sqr_gradation(sqr,color,king_sqr)
{
	var m1=vertical_gradation(sqr,color);
	grad_vert+=m1;
	var n1=radial_gradation(sqr,king_sqr);
	grad_rad+=n1;
	return (m1+n1);
};
