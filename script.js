// variables globales :
var grille= new Array(7); // les indices vont de 0 à 6, seuls les indices 1 à 6 correspondent à la grille réelle
//  Afin de crféer un tableau sur 2 dimensions on a crée à la main un second tableau dans le premier
for (i=0;i<=6;i++) {
	grille[i]= new Array(8);
	}

function rejouer()
{
for (i=1;i<=6;i++) {
	for (j=1;j<=7;j++) {
		cellule=i+":"+j;
		document.getElementById(cellule).innerHTML = '<img src="blanc.png" width="60" height="60" />';
		grille[i][j]=0;
		}
	joueur=1;
	document.getElementById("affichage").innerHTML = 'NOUVELLE PARTIE - Couleur du prochain pion joué : JAUNE';	}
	document.getElementById("score").innerHTML = '&nbsp;';
}


function jouer(i)
{
    // extrait le 1er et 3ème caractère dans la chaine i qui est de la forme 2:5
	y=eval(i.charAt(0));
	x=eval(i.charAt(2));
	
	//Cette fonctionnalité va rechercher le nombre de pions qui ont déjà été joué dans cette colonne  
	n=0;
	for (j=1;j<=6;j++) 
		{
			if (grille[j][x]!=0) { n++ }
		}
    n=6-n;
	
	if (n==0)
	{
		document.getElementById("score").innerHTML = 'La colonne est pleine';
	}
	else
	{
		document.getElementById("score").innerHTML = '&nbsp;';
		cellule=n+":"+x;
		if (joueur==1)
		{ 
		 document.getElementById(cellule).innerHTML = '<img src="jaune.png" width="60" height="60" />'; 
		 grille[n][x]=1;
		 joueur=2;
		 document.getElementById("affichage").innerHTML = 'Au joueur pion ROUGE de jouer';	
		}
		else
		{ 
		 document.getElementById(cellule).innerHTML = '<img src="rouge.png" width="60" height="60" />';
		 grille[n][x]=1;
		 joueur=1;
		 document.getElementById("affichage").innerHTML = 'Au joueur pion JAUNE de jouer';	
		}
	}
}


document.write("<center><table border=\"3\" cellpadding=\"0\" cellspacing=\"0\" bordercolor=\"#003300\">");
for (i=1;i<=6;i++) {
 	document.write("<tr>");
	for (j=1;j<=7;j++) {
 		document.write("<td width=\"60\" height=\"60\" id=\""+i+":"+j+"\" onClick='jouer(\""+i+":"+j+"\")'><img src=\"blanc.png\" width=\"60\" height=\"60\" /></td>");
		} 
	document.write("</tr>");
	}
document.write("</table></center>");
rejouer()
