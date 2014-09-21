// JavaScript Document
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// In order too read a chess game the moves are written in a particular notation with each piece and each 
// square having a name. This file reads the notation and understands the move thereby as well as converts 
//a move to a notation which is then sent to gamelog
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

// Function find_position finds and returns the current position of the piece p on the board
function find_position( board , p)
{
	for( ii = 0;ii<8;ii++)
	{
		for( j=0; j<8 ; j++)
		if( board[ii][j] == p)
		break;
		if( board[ii][j] == p)
		break;
	}
	var pos =  new Array;
	pos[0] = ii;
	pos[1] = j;
	return pos;
}
  
// Function notation_format is used to understand and thereby convert notation to moves and moves to notation
function notation_format( board , movelog, turn)
{
	if ( turn == 0 )												// for white
	  {		
		if (movelog[0] <= 'h' && movelog[0] >= 'a'  ) 				// pawn pushed forward.
		{
			if(  movelog[1] <= '8'&&  movelog[1] >= '1')
			{
				fin_position[0] = convert (movelog[0]);
				fin_position[1] = convert (movelog[1]);
				white_position1[0] = fin_position[0];
				white_position1[1] = fin_position[1]; 
				hu(white_position1[0], 9-white_position1[1]);
				hu(white_position1[0], 7-white_position1[1]);
			}
			else if ( movelog[1] == 'x')							// pawn cuts across						
			{
				fin_position[0] = convert (movelog[2]);
				fin_position[1] = convert (movelog[3]);
				setTimeout("hu(convert(movelog[0]), 8-fin_position[1])",1000);
				setTimeout("hu(fin_position[0], 7-fin_position[1])",1100);
			}
		}
		else if( movelog[0] == 'o')
		{
		//castling
		}
		else
		{
			var u=0;
			if( movelog[1]== 'x')									// takes care of Bxf3
			u=1;
			if(movelog[u+1] <= 'h'  && movelog[u+1] >= 'a')			// normal moves like Nf3 or Bxf3 gets taken care of.
			{
				if( movelog[u+2] <= '8' &&  movelog[u+2] >= '1')
				{
					piece = movelog[0]+'1';
					init_position = find_position ( board, piece.toUpperCase());
					setTimeout("hu( init_position[0], 7-init_position[1])",1000);
					fin_position[0] = convert (movelog[u+1]);
					fin_position[1] = convert (movelog[u+2]);
					setTimeout("hu( fin_position[0], 7-fin_position[1])") 
					if(1)
					{ 
						piece = movelog[0]+'2';
						init_position = find_position ( board, piece.toUpperCase());
						setTimeout("hu( init_position[0], 7-init_position[1])",1000);
						setTimeout("hu( fin_position[0], 7-fin_position[1])",1000);
					}
				}
				else if((movelog[u+2] <= 'h'  && movelog[u+2] >= 'a'))	 // cases like Ndf3 etc.
				{
					if (movelog[u+2] == 'x')
					u+=1;
					piece = movelog[0]+'1';								 // for Ndxf4
					init_position = find_position ( board, piece.toUpperCase());
					if( init_position[0] == convert(movelog[u+1] ))
					setTimeout("hu( init_position[0], 7-init_position[1])",1000);
					else
					{
 					    piece = movelog[0] +'2';
						init_position = find_position ( board, piece.toUpperCase());
						setTimeout("hu( init_position[0], 7-init_position[1])",1000);
					}
						fin_position[0] = convert (movelog[u+1]);
						fin_position[1] = convert (movelog[u+2]);
						setTimeout("hu( fin_position[0], 7-fin_position[1])",1000);
				}
				 
			}
			else if ( movelog[1] <= '8'&&  movelog[1] >= '1')    //cases like N3d5 or also N3xd5 to be seen
			{
				if(movelog[2] == 'x' )
				u+=1;
				piece = movelog[0]+'1'; 						// takes care of N3xd5
				init_position = find_position ( board, piece.toUpperCase());
				if( init_position[1] == convert(movelog[1] ))
					setTimeout("hu( init_position[0], 7-init_position[1])",1000);
				else
				{
					piece = movelog[0] +'2';
					init_position = find_position ( board, piece.toUpperCase());
					setTimeout("hu( init_position[0], 7-init_position[1])",1000);
				}
				fin_position[0] = convert (movelog[u+1]);
				fin_position[1] = convert (movelog[u+2]);
				setTimeout("hu( fin_position[0], 7-fin_position[1])",1000);	
			}
		}  
	}
	else 														// for black
	{
		if (movelog[0] <= 'h' && movelog[0] >= 'a'  ) 			// pawn pushed forward.
		{
			if(  movelog[1] <= '8'&&  movelog[1] >= '1')
			{
				fin_position[0] = convert (movelog[0]);
				fin_position[1] = convert (movelog[1]);
				hu(fin_position[0], 5-fin_position[1]);
				hu(fin_position[0], 7-fin_position[1]);
			}
			else if ( movelog[1] == 'x')						// pawn cuts across
			{
				fin_position[0] = convert (movelog[2]);
				fin_position[1] = convert (movelog[3]);
				setTimeout("hu(convert(movelog[0]), 8-fin_position[1])",1000);
				setTimeout("hu(fin_position[0], 7-fin_position[1])",1000);
			}
		}	
		else if( movelog[0] == 'o')
		{
			  //castling
		}
		else													// pieces moves
		{
			var u=0;
			if( movelog[1]== 'x')								// takes care of Bxf3
			u=1;
			if(movelog[u+1] <= 'h'  && movelog[u+1] >= 'a')		// normal moves like Nf3 or Bxf3 gets taken care of.
			{
				if( movelog[u+2] <= '8' &&  movelog[u+2] >= '1')
				{
					piece = movelog[0]+'1';
					init_position = find_position ( board, piece.toLowerCase());
					setTimeout("hu( init_position[0], 7-init_position[1])",1000);
					fin_position[0] = convert (movelog[u+1]);
					fin_position[1] = convert (movelog[u+2]);
					setTimeout("hu( fin_position[0], 7-fin_position[1])",1000);
					if(1);
					{ 
						piece = movelog[0]+'2';
						init_position = find_position ( board, piece.toLowerCase());
						setTimeout("hu( init_position[0], 7-init_position[1])",1000);
						setTimeout("hu( fin_position[0], 7-fin_position[1])",1000);
					}
				}
				else if((movelog[u+2] <= 'h'  && movelog[u+2] >= 'a'))    // cases like Ndf3 etc.
				{
					if (movelog[u+2] == 'x')
					u+=1;
					piece = movelog[0]+'1';								  // for Ndxf4
					init_position = find_position ( board, piece.toLowerCase());
					if( init_position[0] == convert(movelog[u+1] ))
					setTimeout("hu( init_position[0], 7-init_position[1])",1000);
					else
					{
						piece = movelog[0] +'2';
						init_position = find_position ( board, piece.toLowerCase());
						setTimeout("hu( init_position[0], 7-init_position[1])",1000);
					}						  
					fin_position[0] = convert (movelog[u+1]);
					fin_position[1] = convert (movelog[u+2]);
					setTimeout("hu( fin_position[0], 7-fin_position[1])",1000);
				}	 
			}
			else if ( movelog[1] <= '8'&&  movelog[1] >= '1') 	  		// cases like N3d5 or also N3xd5 to be seen
			{
				if(movelog[2] == 'x' )
				u+=1;	
				piece = movelog[0]+'1';									// takes care of N3xd5
				init_position = find_position ( board, piece.toLowerCase());
				if( init_position[1] == convert(movelog[1] ))
				setTimeout("hu( init_position[0], 7-init_position[1])",1000);
				else
				{
					piece = movelog[0] +'2';
					init_position = find_position ( board, piece.toLowerCase());
					setTimeout("hu( init_position[0], 7-init_position[1])",1000);
				}
				fin_position[0] = convert (movelog[u+1]);
				fin_position[1] = convert (movelog[u+2]);
				setTimeout("hu( fin_position[0], 7-fin_position[1])",1000);
			}
		}	
		turn = 0;
	}
}