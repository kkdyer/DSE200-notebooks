// Javascript Document
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// function to find out the number of squares a given pawn has access to. ii and j give the square the piece is residing on
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function pawn_access(ii,j,color,board)
{
	var counter=0;
	if(color=="w")
	{
		if(j+1==7)
		return 0;
		else
		{
			if(ii>0)
			if(board[ii-1][j+1]=="." )
			counter++;
			else
			piece_support_attack( ii-1,j+1,ii, j, color, board);
			if(board[ii][j+1]==".")
			counter++;
			if(ii<7)
			if(board[ii+1][j+1]=="." )
			counter++;
			else
			piece_support_attack( ii+1,j+1,ii, j, color, board);
			return counter;
		};
	}
	else
	{
		if(j-1==0)
		return 0;
		else
		{
			if(ii>0)
			if(board[ii-1][j-1]==".")
			counter++;
			else
			piece_support_attack( ii-1,j-1,ii, j, color, board);
			if(board[ii][j-1]==".")
			counter++;
			if(ii<7)
			if(board[ii+1][j-1]=="." )
			counter++;
			else
			piece_support_attack( ii+1,j-1,ii, j, color, board);
			return counter;
		};	
	};	
};
