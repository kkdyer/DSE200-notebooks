// Javascript Document
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// function to find out the number of squares a given king has access to. ii and j give the square the piece is residing on
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function king_access(ii,j,color,board)
{
	var counter=0;
	var k=ii+1;
	var l=j-1;
	if(k<8&& l>0)
	if(board[k][l]=="." )
	counter++;
	else
	piece_support_attack( k,l,ii, j, color, board);
	if(k<8)
	if(board[k][l+1]=="." )
	counter++;
	else
	piece_support_attack( k,l+1,ii, j, color, board);
	if(k<8 && l<6)
	if(board[k][l+2]=="." )
	counter++;
	else
	piece_support_attack( k,l+2,ii, j, color, board);
	if(l>0)
	if(board[k-1][l]=="." )
	counter++;
	else
	piece_support_attack( k-1,l,ii, j, color, board);
	if(l<6)
	if(board[k-1][l+2]=="." )
	counter++;
	else
	piece_support_attack( k-1,l+2,ii, j, color, board);

	if( k>2 && l>0)
	if(board[k-2][l]==".")
	counter++;
	else
	piece_support_attack( k-2,l,ii, j, color, board);

	if(k>2)
	if(board[k-2][l+1]==".")
	counter++;
	else
	piece_support_attack( k-2,l+1,ii, j, color, board);

	if( k>2 && l<6 )
	if(board[k-2][l+2]=="." )
	counter++;
	else
	piece_support_attack( k-2,l+2,ii, j, color, board);

	return counter;
};
