// Javascript Document
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// function to find out the number of squares a given knight has access to. If the path of the knight is blocked by another 
// piece then if the piece belongs to the same side then the bishop effctively reinforces the piece and hence gets an extra 
// 0.25 access over blocked square. ii and j give the square the piece is residing on
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function knight_access(ii,j,color,board)
{
	var counter=0;
	if(ii<6 && j<7)
	if(board[ii+2][j+1]=="." )
	counter++;
	else
	piece_support_attack( ii+2,j+1,ii, j, color, board);

	if(ii<6 && j>0)
	if(board[ii+2][j-1]=="." )
	counter++;
	else
	piece_support_attack( ii+2,j-1,ii, j, color, board);

	if( ii<7 && j<6)
	if(board[ii+1][j+2]==".")
	counter++;
	else
	piece_support_attack( ii+1,j+2,ii, j, color, board);

	if(ii<7 && j>1)
	if(board[ii+1][j-2]=="."  )
	counter++;
	else
	piece_support_attack( ii+1,j-2,ii, j, color, board);

	if(ii>0 && j<6)
	if(board[ii-1][j+2]=="." )
	counter++;
	else
	piece_support_attack( ii-1,j+2,ii, j, color, board);

	if(ii>0 && j>1)
	if(board[ii-1][j-2]==".")
	counter++;
	else
	piece_support_attack( ii-1,j-2,ii, j, color, board);

	if(ii>1 && j<7)
	if(board[ii-2][j+1]=="." )
	counter++;
	else
	piece_support_attack( ii-2,j+1,ii, j, color, board);

	if(ii>1 && j>0)
	if(board[ii-2][j-1]=="." )
	counter++;
	else
	piece_support_attack( ii-2,j-1,ii, j, color, board);

	return counter;
};
