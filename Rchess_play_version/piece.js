// Javascript Document
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// Function to study the support and threat each piece faces as well as analyze the various gradation values pertaining to 
// each piece
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

var ii,j,p;
function piece(p, ii, j,color, board)
{
	var r=1;
	var counter=0;
	if(p[0]=='R'||p[0]=='r')
	{
		var access=rook_access(ii,j,color,board);
		return 14/2+access;
	}
	else if(p[0]=='b'|| p[0] == 'B' )					// i=column j=row here
	{
		var l=j+1;
		counter = 0;
		for ( k=ii+1;k<8; k++,l++)
		if ( l<8 )
		counter ++;
		else
		break;
		l=j-1; 
		for ( k=ii+1;k<8; k++,l--)
		if ( l>-1)
		counter ++;
		else
		break;
		l=j+1;
		for (k=ii-1;k>-1; k--,l++)
		if (l<8)
		counter ++;
		else
		break;
		l=j-1;
		for ( k=ii-1;k>-1; k--,l--)
		if (l>-1)
		counter ++;
		else
		break;
		var access = bishop_access(ii,j,color,board);	 
		return counter/2+access;
	}
	else if( p[0]== 'Q'|| p[0]== 'q')
	{ 	
		l=j+1;
		counter = 14;
		for ( k=ii+1;k<8; k++,l++)
		if ( l<8)
		counter ++;
		else
		break;
		l=j-1; 
		for (k=ii+1;k<8; k++,l--)
		if (l>-1)
		counter ++;
		else
		break;
		l=j+1;
		for (k=ii-1;k>-1; k--,l++)
		if (l<8)
		counter ++;
		else
		break;
		l=j-1;
		for (k=ii-1;k>-1; k--,l--)
		if (l>-1)
		counter ++;
		else
		break;
		var access = queen_access(ii,j,color,board);	 
		return counter/2+access;
	}
	else if (p[0]== 'k' || p[0]== 'K')
	{
		var access=king_access(ii,j,color,board);
		if ( ii ==0 || ii== 7 )
		{
			if( j== 0  || j == 7)
		 	return 3/2+access;
		    else 
		 	return 5/2+access;
		}
		else if( j==0 || j==7)
		return 5/2+access;
		else 
		return 8/2+access;
	}
	else if ( p[0]== 'n'|| p[0]== 'N')
	{
		var access = knight_access(ii,j,color,board); 
		if ( ii ==0 || ii== 7 )
		{
			if( j== 0  || j == 7)
		 	return 2+access;
			else if(j==1||j==6)
			return 3+access;
		 	else
			return 4+access;
		}
		else if ( j ==0 || j== 7 )
		{
			if(ii==1||ii==6)
			return 3+access;
		 	else
			return 4+access;
		}
		else if(ii==1||ii==6)
		{
			if(j==1||j==6)
			return 4+access;
			else
			return 6+access;
		}
		else if(j==1||j==6)
		return 6+access;
		else
		return 8+access;
	}
	else if(p[0]=='P' || p[0]=='p') 
	{
		if(p[0]=='P')
		var access=pawn_access(ii,j,'w',board);
		else
		var access=pawn_access(ii,j,'b',board);
		if( ii== 0 || ii == 7)
		return 0+access;
		else if( j==0 || j==7)
		return 2+access;
		else 
		return 3+access;
	};
};
