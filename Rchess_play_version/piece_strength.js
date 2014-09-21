// Javascript Document
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// function to calculate the strength of each piece of a side based on the square, vertical and gradation principles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function piece_strength(p,color,board)
{	
	var s,t;
	if(color=='w')
	{
		for( s=0;s<8;s++)
		{
			for(t=0 ; t<8 ; t++)
			if( board[s][t] == "k1")
				break;
			if( board[s][t] == "k1")
				break;
		}
	}
	else
	for(s=0;s<8;s++)
	{
		for(t=0; t<8 ; t++)
		if( board[s][t] == "K1")
			break;
		if( board[s][t] == "K1")
			break;
	}
	king_sqr = new Array(2);
	king_sqr [0]= s;
	king_sqr[1] = t;
	for( ii = 0;ii<8;ii++)
	{
		for( j=0; j<8 ; j++)
		if( board[ii][j] == p)
			break;
		if( board[ii][j] == p)
			break;
	}
	if( ii!=8&& j!=8)
	{
		var y= piece( p, ii, j, color,board);
		piece_grad+=y;
		sqr = new Array(2);	
		sqr[0]=ii;
		sqr[1] =j;
		obj[piece_board(p)].sqr = sqr;
		var x= sqr_gradation(sqr,color,king_sqr);
		var z=(y+x);
		return z;
	}
	else
	return 0;
};