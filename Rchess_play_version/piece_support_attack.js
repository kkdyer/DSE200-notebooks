// Javascript Document
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// function to analyze the number of pieces supporting or threatening a given piece and the value of those pieces
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function piece_support_attack( k,l,ii, j, color, board)
{
	index=piece_board(board[k][l]);
	if( index < 16 )		
	{
		if (color == 'w')
			obj[index].support+=board[ii][j]+ " ";
		else 
			obj[index].attack+=board[ii][j]+ " ";
	}
	else 
	{
		if( color == 'w')
			obj[index].attack+=board[ii][j]+ " ";
		else
			obj[index].support+=board[ii][j]+ " ";
	}
}
