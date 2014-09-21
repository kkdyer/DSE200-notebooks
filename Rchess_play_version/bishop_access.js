// Javascript Document
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// function to find out the number of squares a given bishop has access to. If the path of the bishop is blocked by another
// piece then if the piece belongs to the same side then the bishop effctively reinforces the piece and hence gets an extra 
// 0.25 access over blocked square. ii and j give the square the piece is residing on
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function bishop_access( ii, j,color,board)
{
	var l=j+1;
	var count_value=1;
	counter = 0;
	for (k=ii+1;k<8; k++,l++)
	{
		if ( l<8 && board[k][l]== ".")
			counter += count_value;
	    else if(l<8 && ((board[k][l] == "Q1" && color == 'w')|| (board[k][l] == "q1" && color == 'b')))
		{
			count_value = 0.25;
			counter += count_value;
		}
		else if( l < 8)
	    {
			piece_support_attack( k,l,ii, j, color, board);
			break;
		}
		else
		break;
	}
	l=j-1; 
	count_value=1;
	for (k=ii+1;k<8; k++,l--)
	if (l>-1 && board[k][l]== ".")
		counter += count_value;
	else if(l>-1 && ((board[k][l] == "Q1" && color == 'w')|| (board[k][l] == "q1" && color == 'b')))
	{
		count_value = 0.25;
		counter+= count_value;
	}
	else if( l > -1)
	{	
		piece_support_attack(k,l,ii, j, color, board);
		break;
	}
	else
	break;
	l=j+1;
	count_value=1;
	for (k=ii-1;k>-1; k--,l++)
	if (l<8 && board[k][l]== ".")
		counter += count_value;
	else if(l<8 && (board[k][l] == "Q1" && color == 'w')|| (board[k][l] == "q1" && color == 'b'))
	{
		count_value = 0.25;
		counter+= count_value;
	}
	else if(l < 8)
	{
		piece_support_attack(k,l,ii, j, color, board);
		break;
	}
	else
	break;
	l=j-1;
	count_value=1;
	for (k=ii-1;k>-1; k--,l--)
	if (l>-1 && board[k][l]== ".")
		counter +=count_value;
	else if(l>-1 && (board[k][l] == "Q1" && color == 'w')|| (board[k][l] == "q1" && color == 'b'))
	{
		count_value = 0.25;
		counter+= count_value;
	}
	else if( l >-1)
	{
		piece_support_attack( k,l,ii, j, color, board);
		break;
	}
	else
	break;
	return counter;
}
