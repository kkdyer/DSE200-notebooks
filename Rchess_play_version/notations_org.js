// JavaScript Document
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
  
  
  
  function notation_format( board , gamelog)
  {
	  var turn = 0;
	  var piece = "";
	  var init_position = new Array(2);
	  var fin_position= new Array(2);
	    var movelog = "";
		
	  for( var ki=0; ki<gamelog.length; ki+=movelog.length )
	  {
		  
		  //for white
		
		 
		  if ( turn == 0 )
		  {
	
			    for( ;gamelog[ki]!='.';ki++);
				ki++;
				for( var j = 0;gamelog[ki+j]!=' ';j++)
		  	    movelog += gamelog[ki+j];
				
			  //pawn pushed forward.
			if (movelog[0] <= 'h' && movelog[0] >= 'a'  ) 
			  	{
					
				if(  movelog[1] <= '8'&&  movelog[1] >= '1')
			  	 {
					 
				  fin_position[0] = convert (movelog[0]);
				  fin_position[1] = convert (movelog[1]);
				
						hu(fin_position[0], 9-fin_position[1]);
			
				   	if(!hu(fin_position[0], 7-fin_position[1]))
					{
						hu(fin_position[0], 8-fin_position[1]);
						hu(fin_position[0], 7-fin_position[1])
					}
					
			  
				 }
				// pawn cuts across
				else if ( movelog[1] == 'x')
				 {
					fin_position[0] = convert (movelog[2]);
				  	fin_position[1] = convert (movelog[3]);
				  	hu(convert(movelog[0]), 8-fin_position[1]);
				  	hu(fin_position[0], 7-fin_position[1]);
			  	 }
				}
				
			  else if( movelog[0] == 'o')
			  {
				  //castling
			  }
			  //pieces moves
				else
				{
					var u=0;
					// takes care of Bxf3
				if( movelog[1]== 'x')
				   u=1;
				  // normal moves like Nf3 or Bxf3 gets taken care of.
				  if(movelog[u+1] <= 'h'  && movelog[u+1] >= 'a')
				   {
					  if( movelog[u+2] <= '8' &&  movelog[u+2] >= '1')
					  {
						piece = movelog[0]+'1';
						init_position = find_position ( board, piece.toUpperCase());
						hu( init_position[0], 7-init_position[1]);
						fin_position[0] = convert (movelog[u+1]);
						fin_position[1] = convert (movelog[u+2]);
						  if(! hu( fin_position[0], 7-fin_position[1]))
						   { 
							piece = movelog[0]+'2';
							init_position = find_position ( board, piece.toUpperCase());
							hu( init_position[0], 7-init_position[1]);
							hu( fin_position[0], 7-fin_position[1])
						   }
					   }
					   // cases like Ndf3 etc.
					   else if((movelog[u+2] <= 'h'  && movelog[u+2] >= 'a'))
					   {
							  if (movelog[u+2] == 'x')
							  u+=1;
							    // for Ndxf4
							  piece = movelog[0]+'1';
							  init_position = find_position ( board, piece.toUpperCase());
							  if( init_position[0] == convert(movelog[u+1] ))
								hu( init_position[0], 7-init_position[1]);
							   else
								{
								   piece = movelog[0] +'2';
								   init_position = find_position ( board, piece.toUpperCase());
								   hu( init_position[0], 7-init_position[1]);
								 }
												  
								  fin_position[0] = convert (movelog[u+1]);
								  fin_position[1] = convert (movelog[u+2]);
								  hu( fin_position[0], 7-fin_position[1])
					   }
					 
				  }
				  //cases like N3d5 or also N3xd5 to be seen
				  else if ( movelog[1] <= '8'&&  movelog[1] >= '1') 
				  {
					  	if(movelog[2] == 'x' )
						u+=1;
						// takes care of N3xd5
							  piece = movelog[0]+'1';
							  init_position = find_position ( board, piece.toUpperCase());
							  if( init_position[1] == convert(movelog[1] ))
								hu( init_position[0], 7-init_position[1]);
							   else
								{
								   piece = movelog[0] +'2';
								   init_position = find_position ( board, piece.toUpperCase());
								   hu( init_position[0], 7-init_position[1]);
								 }
												  
								  fin_position[0] = convert (movelog[u+1]);
								  fin_position[1] = convert (movelog[u+2]);
								  hu( fin_position[0], 7-fin_position[1])
				  		
				  }
			  }
			  
			  turn = 1;
		  }
		  else 
		  {
			  for( var j = 0;gamelog[ki+j]!=' ';j++)
		  	    movelog += gamelog[ki+j];
			  //for black
			   //pawn pushed forward.
			  if (movelog[0] <= 'h' && movelog[0] >= 'a'  ) 
			  	{
				if(  movelog[1] <= '8'&&  movelog[1] >= '1')
			  	 {
				  fin_position[0] = convert (movelog[0]);
				  fin_position[1] = convert (movelog[1]);
				  hu(fin_position[0], 8-fin_position[1]);
				  hu(fin_position[0], 7-fin_position[1]);
			  	 }
				// pawn cuts across
				else if ( movelog[1] == 'x')
				 {
					fin_position[0] = convert (movelog[2]);
				  	fin_position[1] = convert (movelog[3]);
				  	hu(convert(movelog[0]), 8-fin_position[1]);
				  	hu(fin_position[0], 7-fin_position[1]);
			  	 }
				}
				
			  else if( movelog[0] == 'o')
			  {
				  //castling
			  }
			  //pieces moves
				else
				{
					var u=0;
					// takes care of Bxf3
				if( movelog[1]== 'x')
				   u=1;
				  // normal moves like Nf3 or Bxf3 gets taken care of.
				  if(movelog[u+1] <= 'h'  && movelog[u+1] >= 'a')
				   {
					  if( movelog[u+2] <= '8' &&  movelog[u+2] >= '1')
					  {
						piece = movelog[0]+'1';
						init_position = find_position ( board, piece.toLowerCase());
						hu( init_position[0], 7-init_position[1]);
						fin_position[0] = convert (movelog[u+1]);
						fin_position[1] = convert (movelog[u+2]);
						  if(! hu( fin_position[0], 7-fin_position[1]))
						   { 
							piece = movelog[0]+'2';
							init_position = find_position ( board, piece.toLowerCase());
							hu( init_position[0], 7-init_position[1]);
							hu( fin_position[0], 7-fin_position[1])
						   }
					   }
					   // cases like Ndf3 etc.
					   else if((movelog[u+2] <= 'h'  && movelog[u+2] >= 'a'))
					   {
							  if (movelog[u+2] == 'x')
							  u+=1;
							    // for Ndxf4
							  piece = movelog[0]+'1';
							  init_position = find_position ( board, piece.toLowerCase());
							  if( init_position[0] == convert(movelog[u+1] ))
								hu( init_position[0], 7-init_position[1]);
							   else
								{
								   piece = movelog[0] +'2';
								   init_position = find_position ( board, piece.toLowerCase());
								   hu( init_position[0], 7-init_position[1]);
								 }
												  
								  fin_position[0] = convert (movelog[u+1]);
								  fin_position[1] = convert (movelog[u+2]);
								  hu( fin_position[0], 7-fin_position[1])
					   }
					 
				  }
				  //cases like N3d5 or also N3xd5 to be seen
				  else if ( movelog[1] <= '8'&&  movelog[1] >= '1') 
				  {
					  	if(movelog[2] == 'x' )
						u+=1;
						// takes care of N3xd5
							  piece = movelog[0]+'1';
							  init_position = find_position ( board, piece.toLowerCase());
							  if( init_position[1] == convert(movelog[1] ))
								hu( init_position[0], 7-init_position[1]);
							   else
								{
								   piece = movelog[0] +'2';
								   init_position = find_position ( board, piece.toLowerCase());
								   hu( init_position[0], 7-init_position[1]);
								 }
												  
								  fin_position[0] = convert (movelog[u+1]);
								  fin_position[1] = convert (movelog[u+2]);
								  hu( fin_position[0], 7-fin_position[1])
				  		
				  }
			  }
	
			  turn = 0;
			
		  }
	  	ki++;
	  }
  }