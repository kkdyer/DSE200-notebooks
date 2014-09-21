// Javascript Document
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// function to find out the number of squares a given rook has access to. If the path of the rook is blocked by another 
// piece then if the piece belongs to the same side then the rook effctively reinforces the piece and hence gets an extra 
// 0.125 access over blocked square. ii and j give the square the piece is residing on
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
function rook_access(ii, j,color,board)
{
	var counter = 0;
	var k=ii+1;
	while(k < 8 && board[k][j] == ".")
	{
		counter++;
		k++;
	};
	while(k < 8 && ((board[k][j] == "Q1"||board[k][j] == "R1"||board[k][j] == "R2"&& color == 'w')||(board[k][j] == "q1"||board[k][j] == "r1"||board[k][j] == "r2"&& color == 'b')))
	{
		counter+=0.125;
		k++;
	};
	if(k < 8)
	piece_support_attack( k,j,ii, j, color, board);
	k=ii-1;
	while(k > -1 && board[k][j] == ".")
	{
		counter++;
		k--;
	};
	while(k >-1 && ((board[k][j] == "Q1"||board[k][j] == "R1"||board[k][j] == "R2"&& color == 'w')||(board[k][j] == "q1"||board[k][j] == "r1"||board[k][j] == "r2"&& color == 'b')))
	{
		counter+=0.125;
		k--;
	};
	if(k > -1)
	piece_support_attack( k,j,ii, j, color, board);
	k=j+1;
	while(k < 8 && board[ii][k] == ".")
	{
		counter++;
		k++;
	};
	while(k < 8 && ((board[ii][k] == "Q1"||board[ii][k] == "R1"||board[ii][k] == "R2"&& color == 'w')||(board[ii][k] == "q1"||board[ii][k] == "r1"||board[ii][k] == "r2"&& color == 'b')))
	{
		counter+=0.125;
		k++;
	};
	if( k < 8)
	piece_support_attack( ii,k,ii, j, color, board);
	k=j-1;
	while( k > -1 && board[ii][k] == ".")
	{
		counter++;
		k--;
	};
	while( k >-1 && ((board[ii][k] == "Q1"||board[ii][k] == "R1"||board[ii][k] == "R2"&& color == 'w')||(board[ii][k] == "q1"||board[ii][k] == "r1"||board[ii][k] == "r2"&& color == 'b')))
	{
		counter+=0.125;
		k--;
	};
	if( k > -1)
	piece_support_attack( ii,k,ii, j, color, board);
	return counter;
}