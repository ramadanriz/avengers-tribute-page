// memunculkan hamburger menu ketika tampilan mobile
var navLinks = document.getElementById("navLinks");
function showMenu(){
	navLinks.style.right = "0";
}
function hideMenu(){
	navLinks.style.right = "-200px";
}

// deklarasi function
function seleksiParent(a){
    const parent = document.querySelector(a);
    return parent;
}

const elemen = ['div','img','a'];
const atribut = ['class','src','href','target'];

function buatElemen(a,b,c,d){
    const child = document.createElement(a);
    child.setAttribute(b,c);
    d.appendChild(child);
    return child;
}

function buatElemenTeks(a,b,c){
    const teks = document.createElement(a);
    const isiTeks = document.createTextNode(b);
    teks.append(isiTeks);
    c.appendChild(teks);
    return teks;
}

// avengers history


for(i=0;i<history.length;i++){
	const parent = seleksiParent('#history');
	const row = buatElemen(elemen[0],atribut[0],'row',parent);
	const contentCol = buatElemen(elemen[0],atribut[0],'content-col',row);
	if(i%2==0){
		const gambar = buatElemen(elemen[1],atribut[1],'asset/history/'+i+'.jpg',contentCol);
		const description = buatElemen(elemen[0],atribut[0],'description',contentCol);
		const h3 = buatElemenTeks('h3',history[i][0],description);
		const p = buatElemenTeks('p',history[i][1],description);
	} else{
		const description = buatElemen(elemen[0],atribut[0],'description',contentCol);
		const h3 = buatElemenTeks('h3',history[i][0],description);
		const p = buatElemenTeks('p',history[i][1],description);
		const gambar = buatElemen(elemen[1],atribut[1],'asset/history/'+i+'.jpg',contentCol);
	}
	
	
}

// avengers member


for(i=0;i<namaChara.length;i++){
    const content= seleksiParent('.content');
    const layer = buatElemen(elemen[0],atribut[0],'layer',content);
    const isi = buatElemen(elemen[1],atribut[1],'asset/members/'+i+'.jpg',layer);
    const nama = buatElemen(elemen[0],atribut[0],'nama',layer);
    const h6 = buatElemenTeks('h6',namaChara[i][0],nama);
    const h4 = buatElemenTeks('h4',namaChara[i][1],nama);
    const p = buatElemenTeks('p',namaChara[i][2],layer);
}

// avengers movies




for(i=0;i<4;i++){
    const movies = seleksiParent('#movies')
    const head = buatElemen(elemen[0],atribut[0],'head',movies);
    const isiHead = buatElemen(elemen[1],atribut[1],'asset/logo/'+i+'.png',head);
    const overview = buatElemen(elemen[0],atribut[0],'overview',movies);
    const desk = buatElemen(elemen[0],atribut[0],'deskripsi',overview);
    const h1 = buatElemenTeks('h1',namaFilm[i][0],desk);
    const p = buatElemenTeks('p',namaFilm[i][1],desk);
    const info = buatElemen(elemen[0],atribut[0],'info',desk);
    for(j=0;j<5;j++){
        const director = buatElemen(elemen[0],atribut[0],'director',info);
        const h4 = buatElemenTeks('h4',detailFilm[j][0],director);
        const h5 = buatElemenTeks('h5',detailFilm[j][i+1],director);
    }
    const poster = buatElemen(elemen[1],atribut[1],'asset/movie/'+i+'.jpg',overview);
}
// akhir avengers movies


// footer
const footerKiri = seleksiParent('.footer-kiri');
for(i=0;i<2;i++){
    const about = buatElemen(elemen[0],atribut[0],'about',footerKiri);
    for(j=0;j<4;j++){
        if(i%2==0){
            const link = buatElemenTeks('a',teksAbout1[j],about);
            link.setAttribute(atribut[2],linkAbout1[j]);
            link.setAttribute(atribut[3],'_blank');
        } if(i%2==1){
            const link = buatElemenTeks('a',teksAbout2[j],about);
            link.setAttribute(atribut[2],linkAbout2[j]);
            link.setAttribute(atribut[0],'two');
            link.setAttribute(atribut[3],'_blank');
        }
    }
}


const product = seleksiParent('.product');
for(i=0;i<2;i++){
    const gambar = buatElemen(elemen[1],atribut[1],'asset/product/'+i+'.png',product);
    const ket = buatElemen(elemen[0],atribut[0],'ket',product);
    const h4 = buatElemenTeks('h4',merk[i],ket);
    const p = buatElemenTeks('p',tagline[i],ket);
}


const ul = seleksiParent('.sosmed ul');
for(i=0;i<sosmed.length;i++){
    const li = document.createElement('li');
    ul.appendChild(li);
    const link = buatElemen(elemen[2],atribut[2],sosmed[i],li);
    link.setAttribute(atribut[3],'_blank');
    const image = buatElemen(elemen[1],atribut[1],'asset/sosmed/'+i+'.png',link);
}
// akhir footer