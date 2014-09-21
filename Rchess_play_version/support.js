// JavaScript Document
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// A string of support or threat to a given piece from other pieces is generated for each piece.
// This file sorts given string of either support or attack by value of pieces supporting
// i.e pawn before knight before bishop n so on.. 
// Pieces in ascending order of their values - pawn, knight, bishop, rook, queen, king
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

// assigns values to pieces arranged in order before start of the game. 
// obj variable contains board position values
function piece_value_assign( obj)		
{
	for ( ii = 0; ii < 32; ii++ )									// ii runnning from 1 upto 32 for each of the 32 pieces
	{
		if(ii<24 && ii >7)
		obj[ii].value = 1;											// pawn = 1
		else if ( ii == 0 || ii == 7|| ii == 24|| ii == 31)
		obj[ii].value = 5;											// rook = 5
		else if ( ii == 1 || ii == 6|| ii == 25|| ii == 30)
		obj[ii].value = 3;											// knight = 3		
		else if ( ii == 2 || ii == 5|| ii == 26|| ii == 29)
		obj[ii].value = 3;											// bishop = 3
		else if ( ii == 3 || ii == 27)
		obj[ii].value = 9;											// queen = 9
		else 
		obj[ii].value = 10;												
	}
}

// function to sort string of support or attack by value of involved pieces
function sort_minimum (string,obj) 							
{
	var mm;
	var temp_str = "";										// temperory string
	var return_srt = new Array(string.length/3);			// returned sorted array
	for( mm=0 ; mm < string.length; mm+=3)
	{
		temp_str = string[mm]+string[mm+1];
		index = piece_board(temp_str);
		return_srt [mm/3] = obj[index].value;
	}
	return_srt.sort();
	return return_srt;
}

// function to calculate value to be added for 1 piece
function support_attack_value(obj)
{
	for( ppp= 0 ; ppp < 32 ; ppp++)												// ppp represents every each of the 32 pieces
	{ 
		if( obj[ppp].attack.length == 0)										// if( move == 1 && pp < 16)	
		{
			obj[ppp].cal_value+=(obj[ppp].support.length)/3;					// as each piece takes 3 length in string
		}
		else if ( obj[ppp].support.length == 0 )
		{
			obj[ppp].cal_value -= ((obj[ppp].attack.length)/3+ obj[ppp].value) ;
		}
		else
		{
			obj[ppp].cal_value -= (obj[ppp].attack.length)/3;
			obj[ppp].cal_value+=(obj[ppp].support.length)/3;
		}
	}
}