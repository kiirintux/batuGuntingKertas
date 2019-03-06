//hasil
let hasilNpc = document.getElementById("hasilNPC");
let hasilUser = document.getElementById("hasilUser");


//nilai

let z = document.getElementById("npcSkor");
let x = document.getElementById("usrSkor");
let npcSkor = 0;
let usrSkor = 0;

//teks

let txt = document.querySelector("h1");

// txt.textContent = "You Win";
// txt.textContent = "Computer Win";
// txt.textContent = "Draw";

//Pilihan 

let pilihBtn = ["gunting","batu","kertas"];

//computer random

let a = Math.floor(Math.random() * 3);

//console.log(a);

function suit(pilih){
    let pilihanUser = pilih;

    if(pilihanUser === "gunting"){
        //komputer
        if(pilihBtn[a] === "gunting"){
            txt.textContent = "Draw";
            hasilUser.textContent = pilihanUser;
            hasilNpc.textContent = pilihBtn[a];
            a = Math.floor(Math.random() * 3);
            
        }else if(pilihBtn[a] === "batu"){
            txt.textContent = "Computer Win";
            hasilUser.textContent = pilihanUser;
            hasilNpc.textContent = pilihBtn[a];
            npcSkor++
            a = Math.floor(Math.random() * 3);
            z.textContent = npcSkor;
        }else{
            txt.textContent = "You Win";
            hasilUser.textContent = pilihanUser;
            hasilNpc.textContent = pilihBtn[a];
            usrSkor++;
            a = Math.floor(Math.random() * 3);
            x.textContent = usrSkor;
        }
    }else if(pilihanUser === "batu"){
        //komputer
        if(pilihBtn[a] === "gunting"){
            txt.textContent = "You Win";
            hasilUser.textContent = pilihanUser;
            hasilNpc.textContent = pilihBtn[a];
            usrSkor++;
            a = Math.floor(Math.random() * 3);
            x.textContent = usrSkor;
        }else if(pilihBtn[a] === "batu"){
            txt.textContent = "Draw";
            hasilUser.textContent = pilihanUser;
            hasilNpc.textContent = pilihBtn[a];
            a = Math.floor(Math.random() * 3);
        }else{
            txt.textContent = "Computer Win";
            hasilUser.textContent = pilihanUser;
            hasilNpc.textContent = pilihBtn[a];
            npcSkor++;
            a = Math.floor(Math.random() * 3);
            z.textContent = npcSkor;
        }
    }else{
        //komputer
        if(pilihBtn[a] === "gunting"){
            txt.textContent = "Computer Win";
            hasilUser.textContent = pilihanUser;
            hasilNpc.textContent = pilihBtn[a];
            npcSkor++;
            a = Math.floor(Math.random() * 3);
            z.textContent = npcSkor;
        }else if(pilihBtn[a] === "batu"){
            txt.textContent = "You Win";
            hasilUser.textContent = pilihanUser;
            hasilNpc.textContent = pilihBtn[a];
            usrSkor++;
            a = Math.floor(Math.random() * 3);
            x.textContent = usrSkor;
        }else{
            txt.textContent = "Draw";
            hasilUser.textContent = pilihanUser;
            hasilNpc.textContent = pilihBtn[a];
            a = Math.floor(Math.random() * 3);
        }
    }
}
