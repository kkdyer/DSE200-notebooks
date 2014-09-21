// Javascript Document
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// function replace reads a notation and makes a move accordingly. It also measures the position of each side after the 
// move quantitatively by calculating values for various gradation values. IT then displays the final values numerically 
// and graphically
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function replace(k,n)
{
	i = Math.floor((n-2)%20)*10;
	counter = 1;
	x1=convert(k[i+5]);
	x2=convert(k[i+6]);
	y1=convert(k[i+8]);
	y2=convert(k[i+9]);
	if(x1!= 10 )
	{
		tem=board[x1][x2];
		if(tem[0] == 'P' || tem[0] == 'p')
		{
			if ( x1 != y1 &&  board[y1][y2] == ".")
			board[y1][x2]=".";
		}
		board[x1][x2]=".";
		board[y1][y2]=tem;
	}
	else
	{
		if((n%2) == 0) 	// castling
		{
			if(k[i+9] == 'o')
			{
				board[4][0] = "."; board[2][0] = "K1";
				board[3][0] =  "R1"; board[0][0] = ".";
			}
			else
			{
				board[4][0] = "."; board[6][0] = "K1";
				board[5][0] =  "R2"; board[7][0] = ".";
			}
		}
		else
		{
			if(k[i+9] == 'o')
			{
				board[4][7] = "."; board[2][7] = "k1";
				board[3][7] =  "r1"; board[0][7] = ".";
			}
			else
			{
				board[4][7] = "."; board[6][7] = "k1";
				board[5][7] =  "r2"; board[7][7] = ".";
			}
		}
	}
	for(  pp = 0 ;pp < 32; pp++)
	{
		obj[pp].support = "";
		obj[pp].attack  = "";
		obj[pp].cal_value = 0;
	}
	grad_rad=0;
	grad_vert=0;
	piece_grad=0;
	// white_strth and blk_strth correspond to the quantitative measure of how strong the sides are at that moment of the game
	var white_strth=0;
	for( ij = 0; ij< 16; ij++)
	white_strth +=piece_strength ( temp[ij] , 'w',board);
	var white_strth_temp = white_strth;
	document.getElementById("w_grad_rad").innerHTML=grad_rad;  // writing various gradation values at that moment of the game
	document.getElementById("w_grad_vert").innerHTML=grad_vert;
	document.getElementById("w_piece_grad").innerHTML=piece_grad;
	grad_rad=0;
	grad_vert=0;
	piece_grad=0;
	var blk_strth=0;
	for( ij = 48; ij< 64; ij++)
	blk_strth+= piece_strength ( temp[ij] , 'b',board);
	var black_strth_temp = blk_strth;
	document.getElementById("b_grad_rad").innerHTML=grad_rad;
	document.getElementById("b_grad_vert").innerHTML=grad_vert;
	document.getElementById("b_piece_grad").innerHTML=piece_grad;
	
	support_attack_value(obj);	 // incorporating impact of support of thhreat into the game before measuring overall strength
	for( ij= 0; ij< 16; ij++)
	white_strth += 1.5 * obj[ij].cal_value;
	var support=white_strth-white_strth_temp;
	document.getElementById("w_support").innerHTML=support;
	support=0;
	
	for( ij= 16; ij< 32; ij++)
	blk_strth +=  1.5 * obj[ij].cal_value;
	support=blk_strth - black_strth_temp;	
	document.getElementById("white").innerHTML=white_strth;	
	document.getElementById("black").innerHTML=blk_strth;
	document.getElementById("b_support").innerHTML=support;
	progressw = 0.4166*white_strth;
	progressb = 0.4166*blk_strth;
// (function($) {
		$("#progressbar1").progressbar({ value: progressw });	// representing the strength of two sides graphically
		$("#progressbar2").progressbar({ value: progressb });
};