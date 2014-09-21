// Javascript Document
function gc(n)
{
	dc=document.cookie;
	p=n+"=";
	b=dc.indexOf(";"+p);
	if(b==-1)
	{
		b=dc.indexOf(p);
		if(b)
		return 0;
	}
	else b+=2;
	e=dc.indexOf(";",b);
	if(e==-1)
	e=dc.length;
	return unescape(dc.substring(b+p.length,e));
}
if((navigator.appName!="Netscape")||(parseInt(navigator.appVersion)>4))
{
	x=gc("css");
	if((!x)||(x!="off"))
	document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"../default.css\">");
}
pimg=new Array(); 		// array of images for each of the piece with filenames as given below 
i=new Array("b","bb1","bb2","bb3","bb4","bb5","bb6","bw1","bw2","bw3","bw4","bw5","bw6","l","r","sbb1","sbb2","sbb3","sbb4","sbb5","sbb6","sbw1","sbw2","sbw3","sbw4","sbw5","sbw6","swb1","swb2","swb3","swb4","swb5","swb6","sww1","sww2","sww3","sww4","sww5","sww6","t","u","w","wb1","wb2","wb3","wb4","wb5","wb6","ww1","ww2","ww3","ww4","ww5","ww6");
for(j=0;j<i.length;++j)
{
	pimg[j]=new Image();
	pimg[j].src="Chess/"+i[j]+".png";	// image files of typeformat png in chess folder
}