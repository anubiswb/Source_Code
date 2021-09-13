



if(typeof($) != 'undefined'){
$.ajax({dataType: "json",url: "https://www.blogger.com/feeds/1068937706229710159/posts/default/3468113061472957148?alt=json",method: "GET",dataType: "jsonp",success: (data)=> {let IdBloge = data.entry.content.$t.replaceAll(' ','').replaceAll('</li></ul>','').replaceAll('<ulclass="domains"><li>','').split('</li><li>');
if (IdBloge.includes(window.location.host)) {
    let $load=t=>{if(t.includes(".js")){let e=document.createElement("script");e.src=t,e.type="text/javascript",document.getElementsByTagName("head").item(0).append(e)}else{let e=document.createElement("link");e.rel="stylesheet",e.href=t,e.media="all",document.getElementsByTagName("head").item(0).append(e)}};
    $load('https://anubiswb.github.io/Source_Code/Java_Script/API/ScorersDifference.css');
    let RImage =(url1,url2)=>{console.clear();   console.log('%cAnubis Web','color:#ef770f;font-size:30PX;font-weight: 700'),console.log('%cwww.anubis-web.com','font-size: 18px;');if(document.querySelector('img[src*="'+url1+'"]')){document.querySelector('img[src*="'+url1+'"]').setAttribute('src',url2);}}
    let ApiMach =(key1,key2,clas)=>{$.ajax({url: "https://api.thingspeak.com/apps/thinghttp/send_request?api_key="+key1,success: (e)=>{$.ajax({url: "https://api.thingspeak.com/apps/thinghttp/send_request?api_key="+key2,success: (g)=>{
    if(document.querySelector(clas)){  
     document.querySelector(clas).innerHTML ="<div class='but'><button class='difference'>ترتيب الفرق</button><button class='scorers'>ترتيب الهدافين</button></div><div class='difference'>"+e+"</div><div class='scorers'>"+g+"</div>";
        document.querySelector('button.difference').addEventListener('click',()=>{document.querySelector('div.scorers').style.display='none';document.querySelector('div.difference').style.display='block';});
        document.querySelector('button.scorers').addEventListener('click',()=>{document.querySelector('div.scorers').style.display='block';document.querySelector('div.difference').style.display='none';});
        RImage('https://www.as-goal.com:2053/wp-content/uploads/images/players/o_edouard.png','https://t.resfu.com/img_data/players/medium/284337.jpg'),RImage('https://www.as-goal.com:2053/wp-content/uploads/images/players/a_herrera_aguera.png','https://cdn-0.fifarosters.com/assets/players/fifa20/faces/191740.png'),RImage('https://www.as-goal.com:2053/wp-content/uploads/images/players/i_gueye.png','https://t.resfu.com/img_data/players/medium/52664.jpg'),RImage('https://www.as-goal.com:2053/wp-content/uploads/images/players/lucas_paqueta.png','https://ar.footballtunisien.com/wp-content/uploads/2021/06/bl16236076172839.png'),RImage('https://www.as-goal.com:2053/wp-content/uploads/images/players/ahmed_ali.png','https://semedia.filgoal.com/Photos/Person/Medium/6807.png'),RImage('https://www.as-goal.com:2053/wp-content/uploads/images/players/fahad_al_muwallad.png','https://www.mykhel.com/thumb/190x90x190/football/players/8/111768.1528355334.jpg'),RImage('https://www.as-goal.com:2053/wp-content/uploads/images/players/c_baumgartner.png','https://img.a.transfermarkt.technology/portrait/header/324278-1590670295.jpg'),RImage('https://www.as-goal.com:2053/wp-content/uploads/images/players/d_klaassen.png','https://www.clubworldranking.com/modules/images/persons/_158581.png'),RImage('https://www.as-goal.com:2053/wp-content/uploads/images/players/mohamed_fares.png','https://img.kooora.com/?i=la_viola%2f287700.jpg'),RImage('https://www.as-goal.com:2053/wp-content/uploads/images/players/l_ceppitelli.png','https://ar.footballtunisien.com/wp-content/uploads/2020/11/bl15619866651660.png'),RImage('https://www.as-goal.com:2053/wp-content/uploads/images/players/rafael_leao.png','https://img.a.transfermarkt.technology/portrait/header/357164-1564668178.jpg'),RImage('https://www.as-goal.com:2053/wp-content/uploads/images/players/a_sanabria_ayala.png','https://www.bdfutbol.com/i/j/98148.jpg'),RImage('https://www.as-goal.com:2053/wp-content/uploads/images/players/g_mendonca_wikheim.png','https://t.resfu.com/img_data/players/medium/213941.jpg'),RImage('https://www.as-goal.com:2053/wp-content/uploads/images/players/h_soudani.png','https://secure.cache.images.core.optasports.com/soccer/players/150x150/48956.png'),RImage('https://www.as-goal.com:2053/wp-content/uploads/images/players/igor_coronado.png','https://www.as-goal.com:2053/wp-content/uploads/images/players/placeholder.png'),RImage('https://www.as-goal.com:2053/wp-content/uploads/images/players/florian_wirtz.png','https://futhead.cursecdn.com/static/img/21/players/256630.png'),RImage('https://www.as-goal.com:2053/wp-content/uploads/images/players/l_nmecha.png','https://img.a.transfermarkt.technology/portrait/header/314288-1611837779.jpg'),RImage('https://www.as-goal.com:2053/wp-content/uploads/images/players/suat_serdar.png','https://img.a.transfermarkt.technology/portrait/header/261905-1531813607.jpg'),RImage('https://www.as-goal.com:2053/wp-content/uploads/images/players/o_alderete_fernandez.png','https://t.resfu.com/img_data/players/medium/246583.jpg?size=120x&ext=jpeg'),RImage('https://www.as-goal.com:2053/wp-content/uploads/images/players/goncalo_guedes.png','https://www.futcards.com.br/wp-content/uploads/2020/06/gon%C3%A7alo-guedes-valencia-300x300.jpg'),RImage('https://www.as-goal.com:2053/wp-content/uploads/images/players/i_williams_arthuer.png','https://www.intikalat.com/assets/images/joueurs/espagne/profil-inaki-williams-espagne-9.jpg'),RImage('https://www.as-goal.com:2053/wp-content/uploads/images/players/l_diaz_marulanda.png','https://img.vavel.com/luis-diaz-perfil-1595745803589.png'),RImage('https://www.as-goal.com:2053/wp-content/uploads/images/players/a_sanabria_ayala.png','https://www.bdfutbol.com/i/j/98148.jpg');
    }}});},error:(r)=> {console.log('Error');} });}
    if(document.querySelector('.TS.number1')){ApiMach('DV0LVXZCTQMFEFBX','CP5LLW83WOP05LMJ','.TS.number1');}
    if(document.querySelector('.TS.number2')){ApiMach('NL0Z3LLQWVOIBM60','08ALZGYJQ1BC34CR','.TS.number2');}
    if(document.querySelector('.TS.number3')){ApiMach('YPNG08JI6GNQZ6XA','U9FG3VVC257PFZ3N','.TS.number3');}
    if(document.querySelector('.TS.number4')){ApiMach('2SXRR1Z408A6MZYP','UW6JUXKU6TMNO2TG','.TS.number4');}
    if(document.querySelector('.TS.number5')){ApiMach('885I4WG0EMIZT5GG','8LRPN6ZBN50REIQ8','.TS.number5');}
    if(document.querySelector('.TS.number6')){ApiMach('ADSTMISEI3D9ACXZ','1KZW9I3JZMPLMMYF','.TS.number6');}
    if(document.querySelector('.TS.number7')){ApiMach('FNGUZFPT0MJEMWM5','X5NR1YL3UQ96ZXS1','.TS.number7');}
    if(document.querySelector('.TS.number8')){ApiMach('0EJK7D4F8TFWUKB0','B7Y9FVTZ26YXCWNC','.TS.number8');}
    if(document.querySelector('.TS.number9')){ApiMach('CKXV46C7CXT9KCZQ','59QYV57KXQVGQTXD','.TS.number9');}
    if(document.querySelector('.TS.number10')){ApiMach('0L65JDEM0GR8OYKS','4V65V99LIBIUS6HE','.TS.number10');}
    

    console.log('%cAnubis Web','color:#ef770f;font-size:30PX;font-weight: 700');
    console.log('%cwww.anubis-web.com','font-size: 18px;');

}else{


    document.querySelector('.TS').innerHTML='<div style="text-align:center;background: #efefef;padding: 10px 20px;border-radius: 10px;display:block;margin: 0 auto;"><p style="font-size:20px;font-weight: 700;">الاضافة يست مفعلة</p><a style="text-decoration: none;font-size: 16px;font-weight: 700;color: #ef770f;" href="//www.anubis-web.com/">انوبيس ويب</a></div>';
}



},error: (e)=>{console.clear(),console.error('No Safe');}});

}
