// Javascript Document
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// function to return piece number for the objects array given the notation equivalent of the piece
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function piece_board(piece_1)
{
	switch( piece_1)
	{
		case "R1" :	return 0;   case "N1" : return 1;   case "B1" : return 2;  case "Q1" : return 3;  case "K1" : return 4;  
		case "B2" : return 5;   case "N2" : return 6;   case "R2" : return 7;  case "P1" : return 8;  case "P2" : return 9;  
		case "P3" : return 10;  case "P4" : return 11;  case "P5" : return 12;  case "P6" : return 13;  case "P7" : return 14;
		case "P8" : return 15;  case "p1" : return 16;  case "p2" : return 17;  case "p3" : return 18;  case "p4" : return 19;
		case "p5" : return 20;  case "p6" : return 21;  case "p7" : return 22;  case "p8" : return 23; case "r1" : return 24; 
		case "n1" : return 25;	case "b1" : return 26;  case "q1" : return 27;  case "k1" : return 28; case "b2" : return 29; 
		case "n2" : return 30;  case "r2" : return 31;  
	}
}