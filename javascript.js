window.addEventListener('load', (event) => { //ロードされると実行
    Display('no1');
});

//変数-----------------------------------
var saidaibanngou ;                                                            
var gennsomeihairetu = ['','水素','ヘリウム','リチウム','ベリリウム','ホウ素','炭素','窒素','酸素','フッ素','ネオン','ナトリウム','マグネシウム','アルミニウム','ケイ素','リン','硫黄','塩素','アルゴン','カリウム','カルシウム','スカンジウム','チタン','バナジウム','クロム','マンガン','鉄','コバルト','ニッケル','銅','亜鉛','ガリウム','ゲルマニウム','ヒ素','セレン','臭素','クリプトン','ルビジウム','ストロンチウム','イットリウム','ジルコニウム','ニオブ','モリブデン','テクネチウム','ルテニウム','ロジウム','パラジウム','銀','カドミウム','インジウム','スズ','アンチモン','テルル','ヨウ素','キセノン','セシウム','バリウム','ランタン','セリウム','プラセオジム','ネオジム','プロメチウム','サマリウム','ユウロピウム','ガドリニウム','テルビウム','ジスプロシウム','ホルミウム','エルビウム','ツリウム','イッテルビウム','ルテチウム','ハフニウム','タンタル','タングステン','レニウム','オスミウム','イリジウム','白金','金','水銀','タリウム','鉛','ビスマス','ポロニウム','アスタチン','ラドン','フランシウム','ラジウム','アクチニウム','トリウム','プロトアクチニウム','ウラン','ネプツニウム','プルトニウム','アメリシウム','キュリウム','バークリウム','カリホルニウム','アインスタイニウム','フェルミウム','メンデレビウム','ノーベリウム','ローレンシウム','ラザホージウム','ドブニウム','シーボーギウム','ボーリウム','ハッシウム','マイトネリウム','ダームスタチウム','レントゲニウム','コペルニシウム','ニホニウム','フレロビウム','モスコビウム','リバモリウム','テネシン','オガネソン'];
var mouyatta = [""];
var gennsbanngouhairetu = ['','H','He','Li','Be','B','C','N','O','F','Ne','Na','Mg','Al','Si','P','S','Cl','Ar','K','Ca','Sc','Ti','V','Cr','Mn','Fe','Co','Ni','Cu','Zn','Ga','Ge','As','Se','Br','Kr','Rb','Sr','Y','Zr','Nb','Mo','Tc','Ru','Rh','Pd','Ag','Cd','In','Sn','Sb','Te','I','Xe','Cs','Ba','La','Ce','Pr','Nd','Pm','Sm','Eu','Gd','Tb','Dy','Ho','Er','Tm','Yb','Lu','Hf','Ta','W','Re','Os','Ir','Pt','Au','Hg','Tl','Pb','Bi','Po','As','Rn','Fr','Ra','Ac','Th','Pa','U','Np','Pu','Am','Cm','Bk','Cf','Es','Fm','Md','No','Lr','Rf','Db','Sg','Bh','Hs','Mt','Ds','Rg','Cn','Nh','Fl','Mc','Lv','Ts','Og'];
var random;
var gennsomei2;
var seikaisitakazu =0;
var fuseikai=0;
var nokori = 118;
var jikan;
var jikanh = 0;
var jikanm = 0;
var jikans =0;
var hour ;
var minutes ;
var soconds ;
var hour2 ;
var minutes2 ;
var soconds2;
//--------------------------------------

function button1click() { //範囲なしボタンhtrml<input>onclickで使用
    const date = new Date();
    hour = date.getHours();
    minutes = date.getMinutes();
    soconds = date.getSeconds();
    saidaibanngou = 118;
    nokori = saidaibanngou;
    document.getElementById('nokori').innerHTML = "残り" + nokori + "問";
    if( saidaibanngou ) {
        console.log('1~' + saidaibanngou);
    }
    Display('no2');
    random = Math.floor( Math.random () * saidaibanngou) +1;
    gennsomei2 = gennsomeihairetu [random];
    console.log(gennsomei2);
    gamenn2.insertAdjacentHTML('afterbegin',"<h2 id='sakujo' title='この元素の位置は？'>" + gennsomei2 +"</h2>");
};

function button2click2() { //範囲ありボタンhtrml<input>onclickで使用
    saidaibanngou = prompt("何番まで出しますか？(1~118までの半角英数字で)");
    if(1 <= saidaibanngou <= 118){
    console.log('1~' + saidaibanngou);
    Display('no2');
    return saidaibanngou; //返り値
    }else{
        button2click2();
    }
};
function button2click() { //クリックされたらここにまず来る
    const date = new Date();
    hour = date.getHours();
    minutes = date.getMinutes();
    soconds = date.getSeconds();
    saidaibanngou = button2click2(); //実行してから最大番号を代入(返り値)
    nokori =saidaibanngou;
    document.getElementById('nokori').innerHTML = "残り" + nokori + "問";
    if(saidaibanngou == 'undefined') { //なかったら範囲なしだと判断
        saidaibanngou =118;
    }
    random = Math.floor( Math.random () * saidaibanngou) + 1;
    gennsomei2 = gennsomeihairetu [random];
    console.log(gennsomei2 );
    gamenn2.insertAdjacentHTML('afterbegin',"<h2 id='sakujo'>" + gennsomei2 +"</h2>");
};

console.log(random);
console.log(saidaibanngou);

function Display(no){ //画面切り替える
    console.log(no);
    if(no == "no1"){
        document.getElementById("gamenn1").style.display = "block";
        document.getElementById("gamenn2").style.display = "none";
        document.getElementById("gamenn3").style.display = "none";
    }else if(no == "no2"){
        document.getElementById("gamenn1").style.display = "none";
        document.getElementById("gamenn2").style.display = "block";
        document.getElementById("gamenn3").style.display = "none";
    }else if(no == "no3"){
        document.getElementById("gamenn1").style.display = "none";
        document.getElementById("gamenn2").style.display = "none";
        document.getElementById("gamenn3").style.display = "block";
    }
};

function clicknow(clicked){ //htmlからの実行不可。consoleからは可能。原因不明。←解決。clickedを宣言していたのが原因。2021/11/1
    console.log(clicked);
    if(clicked == random){
        if(nokori == 1){
            seikaisitakazu++;
            Display('no3');
            document.getElementById('matigaeta2').innerHTML = "間違えた数：" + fuseikai;
            document.getElementById('seikai2').innerHTML = "正解した数：" + seikaisitakazu;
            const date2 = new Date();
            hour2 = date2.getHours();
            minutes2 = date2.getMinutes();
            soconds2 = date2.getSeconds();
        }else{
            setTimeout(() => {
            random = Math.floor( Math.random () * saidaibanngou) +1;
            while(mouyatta.includes(random)){
                random = Math.floor( Math.random () * saidaibanngou) +1;
            }
            gennsomei2 = gennsomeihairetu [random];
            document.getElementById('sakujo').innerHTML =gennsomei2;
        }, 500);
        }
        nokori--;
        seikaisitakazu++;
        const audio1 = document.querySelector('#tadawav');
        audio1.play();
        mouyatta.push(random);
        document.getElementById('kotaename').innerHTML =gennsomei2;
        document.getElementById('kotaebanngou').innerHTML =random;
        document.getElementById('kotae').innerHTML =gennsbanngouhairetu[random];
        document.getElementById('nokori').innerHTML = "残り" + nokori + "問";
        console.log(nokori);
        document.getElementById('seikaisita').innerHTML = "正解した数：" + seikaisitakazu;
        if(hour == 0){
            hour = 12;
        }else if(hour2 == 0){
            hour2 = 12;
        }
        jikanh = (hour2 - hour)*3600;
        jikanm = (minutes2 - minutes)*60;
        jikans =soconds2 - soconds;
        jikan = jikanh + jikanm+ jikans;
        document.getElementById('jikan2').innerHTML = "かかった時間：" + jikan + "秒";
        /*setTimeout(() => {
            random = Math.floor( Math.random () * saidaibanngou) +1;
            gennsomei2 = gennsomeihairetu [random];
            console.log(gennsomei2);
            document.getElementById('sakujo').innerHTML =gennsomei2;
            while(mouyatta.includes(random)){
                random = Math.floor( Math.random () * saidaibanngou) +1;

            }
            gennsomei2 = gennsomeihairetu [random];
            document.getElementById('sakujo').innerHTML =gennsomei2;
        }, 500);*/
        console.log("正解");
    }else{
        fuseikai++;
        document.getElementById('matigaeta').innerHTML ="間違えた数：" + fuseikai;
        const audio2 = document.querySelector('#vanwav');
        audio2.play();
        console.log("不正解" + fuseikai);
    }
};
