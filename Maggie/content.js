//built be reverse engineering the Drumphinator by Last Week Tonight.

walk(document.body);
setTimeout(function () {
    walk(document.body);
}, 1000);

function walk(node)
{
    // Source: http://is.gd/mwZp7E

    var child, next;

    switch ( node.nodeType )
    {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment
            child = node.firstChild;
            while ( child )
            {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        case 3: // Text node
            handleText(node);
            break;
    }
}

function handleText(textNode)
{
    var v = textNode.nodeValue;
v=v.replace(/\bworld\b/g,  "woild");
v=v.replace(/\bthey\b/g,"dey");
v=v.replace(/\blook\b/g,"lookut");
v=v.replace(/\bthere\b/g,"dere");
v=v.replace(/\bis\b/g,"ain’");
v=v.replace(/\bpretty\b/g,"purty");
v=v.replace(/\bjust\b/g,"jes’");
v=v.replace(/\bmother\b/g,"mudder");
v=v.replace(/\banother\b/g,"anudder");
v=v.replace(/\bthat\b/g,"dat");
v=v.replace(/\bno\b/g,"naw");
v=v.replace(/\bthe\b/g,"deh");
v=v.replace(/\bdo\b/g,"deh");
v=v.replace(/\byou\b/g,"yeh");
v=v.replace(/\band\b/g,"an’");
v=v.replace(/\bto\b/g,"teh");
v=v.replace(/\bbeautiful\b/g,"beaut’");
v=v.replace(/\bbeauty\b/g,"beaut’");
v=v.replace(/\bgod\b/g,"gawd");
v=v.replace(/\byou’re\b/g,"yer");
v=v.replace(/\byour\b/g,"yer");
v=v.replace(/\bthing\b/g,"t’ing");
v=v.replace(/\blooking\b/g,"lookin’");
v=v.replace(/\bfor\b/g,"fer");
v=v.replace(/\bbother\b/g,"bodder");
v=v.replace(/\bdon’t\b/g,"don’");
v=v.replace(/\bfollow\b/g,"foller");
v=v.replace(/\bother\b/g,"odder");
v=v.replace(/\brest\b/g,"res’");
v=v.replace(/\binto\b/g,"inteh");
v=v.replace(/\btold\b/g,"tol’");
v=v.replace(/\bfight\b/g,"scrap");
v=v.replace(/\bdiscuss\b/g,"scrap");
v=v.replace(/\bargue\b/g,"scrap");
v=v.replace(/\bmen\b/g,"blokies");
v=v.replace(/\bboys\b/g,"blokies");
v=v.replace(/\bman\b/g,"blokie");
v=v.replace(/\bboy\b/g,"blokie");
v=v.replace(/\bindividual\b/g,"blokie");
v=v.replace(/\bpeople\b/g,"blokies");
v=v.replace(/\bperson\b/g,"blokie");
v=v.replace(/\bcan\b/g,"kin");
v=v.replace(/\bguys\b/g,"blokies");
v=v.replace(/\bon\b/g,"ahn");
v=v.replace(/\bhit\b/g,"lick");
v=v.replace(/\bslap\b/g,"lick");
v=v.replace(/\bFeminism\b/g,"lady stuff");
v=v.replace(/\bFeminist\b/g,"lady stuff");
v=v.replace(/\bbeat\b/g,"lick");
v=v.replace(/\bwin\b/g,"lick");
v=v.replace(/\bchallenge\b/g,"lick");
v=v.replace(/\bwith\b/g,"wid");
v=v.replace(/\bhand\b/g,"han’");
v=v.replace(/\bhim\b/g,"‘im");
v=v.replace(/\bher\b/g,"‘er");
v=v.replace(/\bhis\b/g,"‘is");
v=v.replace(/\bstop\b/g,"cheese");
v=v.replace(/\bhalt\b/g,"cheese");
v=v.replace(/\bpause\b/g,"cheese");
v=v.replace(/\bwait\b/g,"cheese");
v=v.replace(/\bfather\b/g,"fader");
v=v.replace(/\bget\b/g,"git");
v=v.replace(/\btalk\b/g,"jaw");
v=v.replace(/\btalking\b/g,"jawin’");
v=v.replace(/\bspeak\b/g,"jaw");
v=v.replace(/\bspeaking\b/g,"jawin’");
v=v.replace(/\bconversation\b/g,"jawin’");
v=v.replace(/\bcorrespond\b/g,"jawin’");
v=v.replace(/\bmeet\b/g,"jaw");
v=v.replace(/\bmeeting\b/g,"jawin’");
v=v.replace(/\bagain\b/g,"agin");
v=v.replace(/\bbeen\b/g,"bin");
v=v.replace(/\balways\b/g,"allus");
v=v.replace(/\bmother\b/g,"mudder");
v=v.replace(/\btired\b/g,"half dead");
v=v.replace(/\bsleepy\b/g,"half dead");
v=v.replace(/\bdrowsy\b/g,"half dead");
v=v.replace(/\bfinished\b/g,"half dead");
v=v.replace(/\bmouth\b/g,"mout’");
v=v.replace(/\bdo you\b/g,"d’yeh");
v=v.replace(/\blife\b/g,"loife");
v=v.replace(/\bknife\b/g," knoife");
v=v.replace(/\bwife\b/g,"hag");
v=v.replace(/\bhusband\b/g,"fella");
v=v.replace(/\bboyfriend\b/g,"fella");
v=v.replace(/\bcompanion\b/g,"fella");
v=v.replace(/\bpartner\b/g,"fella");
v=v.replace(/\bchild\b/g,"kid");
v=v.replace(/\bbaby\b/g,"kid");
v=v.replace(/\bchildren\b/g,"kids");
v=v.replace(/\bout\b/g,"outta");
v=v.replace(/\bsave\b/g,"damn");
v=v.replace(/\bwater\b/g,"beer");
v=v.replace(/\bdrink\b/g,"beer");
v=v.replace(/\bwine\b/g,"beer");
v=v.replace(/\balcohol\b/g,"beer");
v=v.replace(/\bhouse\b/g,"gruesome doorway");
v=v.replace(/\bwhole\b/g,"hull");
v=v.replace(/\btrouble\b/g,"raisin’ hell");
v=v.replace(/\bregular\b/g,"reg’lar");
v=v.replace(/\bthis\b/g,"thish");
v=v.replace(/\beither\b/g,"edder");
v=v.replace(/\bholy\b/g,"hully");
v=v.replace(/\bevery\b/g,"ev’ry");
v=v.replace(/\bmost\b/g,"mos’");
v=v.replace(/\bget\b/g,"gits");
v=v.replace(/\bthrow\b/g,"t’rowed");
v=v.replace(/\bface\b/g,"mug");
v=v.replace(/\bthing\b/g,"stuff");
v=v.replace(/\bsomething\b/g,"stuff");
v=v.replace(/\bwant\b/g,"wan");
v=v.replace(/\bwanted\b/g,"wanned");
v=v.replace(/\bput\b/g,"plunked");
v=v.replace(/\bwindow\b/g,"windee");
v=v.replace(/\blike\b/g,"stuck on");
v=v.replace(/\blove\b/g,"stuck on");
v=v.replace(/\benjoy\b/g,"stuck on");
v=v.replace(/\bappreciate\b/g,"stuck on");
v=v.replace(/\bwant\b/g,"stuck on");
v=v.replace(/\bthree\b/g,"tree");
v=v.replace(/\bnice\b/g,"outa sight");
v=v.replace(/\bgood\b/g,"outa sight");
v=v.replace(/\bgreat\b/g,"outa sight");
v=v.replace(/\bwonderful\b/g,"outa sight");
v=v.replace(/\bterrific\b/g,"outa sight");
v=v.replace(/\btop\b/g,"outa sight");
v=v.replace(/\bfabulous\b/g,"outa sight");
v=v.replace(/\bfantastic\b/g,"outa sight");
v=v.replace(/\bperfect\b/g,"outa sight");
v=v.replace(/\bexcellent\b/g,"outa sight");
v=v.replace(/\bhigh\b/g,"outa sight");
v=v.replace(/\braised\b/g,"outa sight");
v=v.replace(/\bfound\b/g,"foun’");
v=v.replace(/\bfind\b/g,"fin’");
v=v.replace(/\bfriend\b/g,"frien’");
v=v.replace(/\brun\b/g,"runned");
v=v.replace(/\bran\b/g,"runned");
v=v.replace(/\binto\b/g,"in the");
v=v.replace(/\bearth\b/g,"eart’");
v=v.replace(/\bangry\b/g,"wild");
v=v.replace(/\bmad\b/g,"wild");
v=v.replace(/\bor\b/g,"er");
v=v.replace(/\beverything\b/g,"ev’ryt’in’");
v=v.replace(/\bclothing\b/g,"duds");
v=v.replace(/\bclothes\b/g,"duds");
v=v.replace(/\bfashion\b/g,"duds");
v=v.replace(/\bshirt\b/g,"duds");
v=v.replace(/\bpants\b/g,"duds");
v=v.replace(/\bdress\b/g,"duds");
v=v.replace(/\boutfit\b/g,"duds");
v=v.replace(/\bpajamas\b/g,"duds");
v=v.replace(/\bregular\b/g,"reg’lar");
v=v.replace(/\bthose\b/g,"dose");
v=v.replace(/\bno\b/g,"naw");
v=v.replace(/\bidiot\b/g,"duffer");
v=v.replace(/\bfool\b/g,"duffer");
v=v.replace(/\bmistake\b/g,"duffer");
v=v.replace(/\bdumb\b/g,"duffer");
v=v.replace(/\bstupid\b/g,"duffer");
v=v.replace(/\bignorant\b/g,"duffer");
v=v.replace(/\bwrong\b/g,"duffer");
v=v.replace(/\bfive\b/g,"fife");
v=v.replace(/\bby\b/g,"py");
v=v.replace(/\bin\b/g,"een");
v=v.replace(/\bthink\b/g,"sink");
v=v.replace(/\bpay\b/g,"pie");
v=v.replace(/\bpaid\b/g,"pied");
v=v.replace(/\brepublican\b/g,"jay");
v=v.replace(/\bconservative\b/g,"jay");
v=v.replace(/\bright-wing\b/g,"jay");
v=v.replace(/\bthousand\b/g,"t’ousand");
v=v.replace(/\bmy\b/g,"me");
v=v.replace(/\bthree\b/g,"t’ree");
v=v.replace(/\bwith\b/g,"wid");
v=v.replace(/\bon\b/g,"ahn");
v=v.replace(/\bold\b/g,"ol’");
v=v.replace(/\bwoman\b/g,"lady");
v=v.replace(/\bgirl\b/g,"goil");
v=v.replace(/\bgood\b/g,"dandy");
v=v.replace(/\bnice\b/g,"dandy");
v=v.replace(/\bdamn\b/g,"dam");
v=v.replace(/\bthink\b/g,"tink");
v=v.replace(/\bthought\b/g,"taut");
v=v.replace(/\bnever\b/g,"nebber");
v=v.replace(/\bmistake\b/g,"do dirt");
v=v.replace(/\blast\b/g,"las’");
v=v.replace(/\boften\b/g,"ortfen");
v=v.replace(/\bfriend\b/g,"frien’");
v=v.replace(/\bnothing\b/g,"nothin’");
v=v.replace(/\bfamily\b/g,"fambly");
v=v.replace(/\btold\b/g,"tol’");
v=v.replace(/\bthe same\b/g,"dessame");
v=v.replace(/\bdifferent\b/g,"diff’ent");
v=v.replace(/\bcan\b/g,"kin");
v=v.replace(/\bfind\b/g,"fin’");
v=v.replace(/\bwith\b/g,"wid");
v=v.replace(/\bget\b/g,"mash");
v=v.replace(/\bgot\b/g,"mashed");
v=v.replace(/\bcatch\b/g,"ketch");
v=v.replace(/\byes\b/g,"yessir");
v=v.replace(/\bright\b/g,"straight");
v=v.replace(/\bcorrect\b/g,"straight");
v=v.replace(/\bgirl\b/g,"goil");
v=v.replace(/\bface\b/g,"mug");
v=v.replace(/\bexpression\b/g,"mug");
v=v.replace(/\bbody\b/g,"shape");
v=v.replace(/\bbother\b/g,"eatin’");
v=v.replace(/\bcrying\b/g,"a-cryin’");
v=v.replace(/\by’all\b/g,"yehs");
v=v.replace(/\bpunch\b/g,"t’ump");
v=v.replace(/\bthump\b/g,"t’ump");
v=v.replace(/\bboth\b/g,"bote");
v=v.replace(/\bunderstand\b/g,"unnerstan");
v=v.replace(/\bextremely\b/g,"bloomin’");
v=v.replace(/\bvery\b/g,"bloomin’");
v=v.replace(/\bbrought\b/g,"fetched");
v=v.replace(/\binfant\b/g,"babby");
v=v.replace(/\bsuch\b/g,"sech");
v=v.replace(/\bwant to\b/g,"wanna");
v=v.replace(/\bbusiness\b/g,"bus’ness");
v=v.replace(/\bdaughter\b/g,"dauter");
v=v.replace(/\bisn’t\b/g,"ain’t");
v=v.replace(/\bought to\b/g,"oughta");
v=v.replace(/\bgirlfriend\b/g,"lady-frien’");
v=v.replace(/\bminute\b/g,"minit");
v=v.replace(/\bmoment\b/g,"minit");
v=v.replace(/\bexcuse\b/g,"scuse");
v=v.replace(/\bsay\b/g,"shay");
v=v.replace(/\blittle\b/g,"lil’");
v=v.replace(/\bonly\b/g,"on’y");
v=v.replace(/\byet\b/g,"yit");
v=v.replace(/\btonight\b/g,"teh-night");
v=v.replace(/\bposition\b/g,"standin’");
v=v.replace(/\bapologise\b/g,"‘pol’gize");
v=v.replace(/\bapologize\b/g,"‘pol’gize");
v=v.replace(/\btreated\b/g,"trea’s");
v=v.replace(/\btreats\b/g,"trea’s");
v=v.replace(/\bfair\b/g,"shquare");
v=v.replace(/\bsquare\b/g,"shquare");
v=v.replace(/\bnight\b/g,"eve");
v=v.replace(/\bevening\b/g,"eve");
v=v.replace(/\banything\b/g,"an’t’ing");
v=v.replace(/\bthumb\b/g,"t’umb");
v=v.replace(/\bterrible\b/g,"ter’ble");
v=v.replace(/\bdisobedient\b/g,"disobed’ent");
v=v.replace(/\bobedient\b/g,"obed’ent");
v=v.replace(/\bthankless\b/g,"t’ankless");
v=v.replace(/\bwickedness\b/g,"badness");
v=v.replace(/\bnegativity\b/g,"badness");
v=v.replace(/\bfault\b/g,"badness");
v=v.replace(/\bforgive\b/g,"fergive");
v=v.replace(/\bdinner\b/g,"supper");
v=v.replace(/\bidea\b/g,"idear");
v=v.replace(/\boh my god\b/g,"hully gee");
v=v.replace(/\brespectable\b/g,"‘spectable");
v=v.replace(/\bcitizen\b/g,"cit’zen");
v=v.replace(/\bquick\b/g,"damnquick");
v=v.replace(/\bquickly\b/g,"damnquick");
v=v.replace(/\bfast\b/g,"damnquick");
v=v.replace(/\brelaxing\b/g,"loafin’");
v=v.replace(/\bhanging out\b/g,"loafin’");
v=v.replace(/\bwalking\b/g,"loafin’");
v=v.replace(/\bsarcastic\b/g,"fresh");
v=v.replace(/\brude\b/g,"fresh");
v=v.replace(/\bwonder\b/g,"wonner");
v=v.replace(/\bmom\b/g,"mam");
v=v.replace(/\bwomen\b/g,"ladies");
v=v.replace(/\bfamilies\b/g,"famblies");

v=v.replace(/\bing \b/g,"in’ ");
v=v.replace(/\bing.\b/g,"in’.");

v=v.replace(/\bth\b/g,"d");
v=v.replace(/\bWorld\b/g,  "Woild");
v=v.replace(/\bThey\b/g,  "Dey");
v=v.replace(/\bLook\b/g,  "Lookut");
v=v.replace(/\bThere\b/g,  "Dere");
v=v.replace(/\bIs\b/g,  "Ain’");
v=v.replace(/\bPretty\b/g,  "Purty");
v=v.replace(/\bJust\b/g,  "Jes’");
v=v.replace(/\bMother\b/g,  "Mudder");
v=v.replace(/\bAnother\b/g,  "Anudder");
v=v.replace(/\bThat\b/g,  "Dat");
v=v.replace(/\bNo\b/g,  "Naw");
v=v.replace(/\bThe\b/g,  "Deh");
v=v.replace(/\bDo\b/g,  "Deh");
v=v.replace(/\bYou\b/g,  "Yeh");
v=v.replace(/\bAnd\b/g,  "An’");
v=v.replace(/\bTo\b/g,  "Teh");
v=v.replace(/\bBeautiful\b/g,  "Beaut’");
v=v.replace(/\bBeauty\b/g,  "Beaut’");
v=v.replace(/\bGod\b/g,  "Gawd");
v=v.replace(/\bYou’re\b/g,  "Yer");
v=v.replace(/\bYour\b/g,  "Yer");
v=v.replace(/\bThing\b/g,  "T’ing");
v=v.replace(/\bLooking\b/g,  "Lookin’");
v=v.replace(/\bFor\b/g,  "Fer");
v=v.replace(/\bBother\b/g,  "Bodder");
v=v.replace(/\bDon’t\b/g,  "Don’");
v=v.replace(/\bFollow\b/g,  "Foller");
v=v.replace(/\bOther\b/g,  "Odder");
v=v.replace(/\bRest\b/g,  "Res’");
v=v.replace(/\bInto\b/g,  "Inteh");
v=v.replace(/\bTold\b/g,  "Tol’");
v=v.replace(/\bFight\b/g,  "Scrap");
v=v.replace(/\bDiscuss\b/g,  "Scrap");
v=v.replace(/\bArgue\b/g,  "Scrap");
v=v.replace(/\bMen\b/g,  "Blokies");
v=v.replace(/\bBoys\b/g,  "Blokies");
v=v.replace(/\bMan\b/g,  "Blokie");
v=v.replace(/\bBoy\b/g,  "Blokie");
v=v.replace(/\bIndividual\b/g,  "Blokie");
v=v.replace(/\bPeople\b/g,  "Blokies");
v=v.replace(/\bPerson\b/g,  "Blokie");
v=v.replace(/\bCan\b/g,  "Kin");
v=v.replace(/\bGuys\b/g,  "Blokies");
v=v.replace(/\bOn\b/g,  "Ahn");
v=v.replace(/\bHit\b/g,  "Lick");
v=v.replace(/\bSlap\b/g,  "Lick");
v=v.replace(/\bFeminism\b/g,  "Lady Stuff");
v=v.replace(/\bFeminist\b/g,  "Lady Stuff");
v=v.replace(/\bBeat\b/g,  "Lick");
v=v.replace(/\bWin\b/g,  "Lick");
v=v.replace(/\bChallenge\b/g,  "Lick");
v=v.replace(/\bWith\b/g,  "Wid");
v=v.replace(/\bHand\b/g,  "Han’");
v=v.replace(/\bHim\b/g,  "‘im");
v=v.replace(/\bHer\b/g,  "‘er");
v=v.replace(/\bHis\b/g,  "‘is");
v=v.replace(/\bStop\b/g,  "Cheese");
v=v.replace(/\bHalt\b/g,  "Cheese");
v=v.replace(/\bPause\b/g,  "Cheese");
v=v.replace(/\bWait\b/g,  "Cheese");
v=v.replace(/\bFather\b/g,  "Fader");
v=v.replace(/\bGet\b/g,  "Git");
v=v.replace(/\bTalk\b/g,  "Jaw");
v=v.replace(/\bTalking\b/g,  "Jawin’");
v=v.replace(/\bSpeak\b/g,  "Jaw");
v=v.replace(/\bSpeaking\b/g,  "Jawin’");
v=v.replace(/\bConversation\b/g,  "Jawin’");
v=v.replace(/\bCorrespond\b/g,  "Jawin’");
v=v.replace(/\bMeet\b/g,  "Jaw");
v=v.replace(/\bMeeting\b/g,  "Jawin’");
v=v.replace(/\bAgain\b/g,  "Agin");
v=v.replace(/\bBeen\b/g,  "Bin");
v=v.replace(/\bAlways\b/g,  "Allus");
v=v.replace(/\bMother\b/g,  "Mudder");
v=v.replace(/\bTired\b/g,  "Half Dead");
v=v.replace(/\bSleepy\b/g,  "Half Dead");
v=v.replace(/\bDrowsy\b/g,  "Half Dead");
v=v.replace(/\bFinished\b/g,  "Half Dead");
v=v.replace(/\bMouth\b/g,  "Mout’");
v=v.replace(/\bDo You\b/g,  "D’yeh");
v=v.replace(/\bLife\b/g,  "Loife");
v=v.replace(/\bKnife\b/g,  " Knoife");
v=v.replace(/\bWife\b/g,  "Hag");
v=v.replace(/\bHusband\b/g,  "Fella");
v=v.replace(/\bBoyfriend\b/g,  "Fella");
v=v.replace(/\bCompanion\b/g,  "Fella");
v=v.replace(/\bPartner\b/g,  "Fella");
v=v.replace(/\bChild\b/g,  "Kid");
v=v.replace(/\bBaby\b/g,  "Kid");
v=v.replace(/\bChildren\b/g,  "Kids");
v=v.replace(/\bOut\b/g,  "Outta");
v=v.replace(/\bSave\b/g,  "Damn");
v=v.replace(/\bWater\b/g,  "Beer");
v=v.replace(/\bDrink\b/g,  "Beer");
v=v.replace(/\bWine\b/g,  "Beer");
v=v.replace(/\bAlcohol\b/g,  "Beer");
v=v.replace(/\bHouse\b/g,  "Gruesome Doorway");
v=v.replace(/\bWhole\b/g,  "Hull");
v=v.replace(/\bTrouble\b/g,  "Raisin’ Hell");
v=v.replace(/\bRegular\b/g,  "Reg’lar");
v=v.replace(/\bThis\b/g,  "Thish");
v=v.replace(/\bEither\b/g,  "Edder");
v=v.replace(/\bHoly\b/g,  "Hully");
v=v.replace(/\bEvery\b/g,  "Ev’ry");
v=v.replace(/\bMost\b/g,  "Mos’");
v=v.replace(/\bGet\b/g,  "Gits");
v=v.replace(/\bThrow\b/g,  "T’rowed");
v=v.replace(/\bFace\b/g,  "Mug");
v=v.replace(/\bThing\b/g,  "Stuff");
v=v.replace(/\bSomething\b/g,  "Stuff");
v=v.replace(/\bWant\b/g,  "Wan");
v=v.replace(/\bWanted\b/g,  "Wanned");
v=v.replace(/\bPut\b/g,  "Plunked");
v=v.replace(/\bWindow\b/g,  "Windee");
v=v.replace(/\bLike\b/g,  "Stuck On");
v=v.replace(/\bLove\b/g,  "Stuck On");
v=v.replace(/\bEnjoy\b/g,  "Stuck On");
v=v.replace(/\bAppreciate\b/g,  "Stuck On");
v=v.replace(/\bWant\b/g,  "Stuck On");
v=v.replace(/\bThree\b/g,  "Tree");
v=v.replace(/\bNice\b/g,  "Outa Sight");
v=v.replace(/\bGood\b/g,  "Outa Sight");
v=v.replace(/\bGreat\b/g,  "Outa Sight");
v=v.replace(/\bWonderful\b/g,  "Outa Sight");
v=v.replace(/\bTerrific\b/g,  "Outa Sight");
v=v.replace(/\bTop\b/g,  "Outa Sight");
v=v.replace(/\bFabulous\b/g,  "Outa Sight");
v=v.replace(/\bFantastic\b/g,  "Outa Sight");
v=v.replace(/\bPerfect\b/g,  "Outa Sight");
v=v.replace(/\bExcellent\b/g,  "Outa Sight");
v=v.replace(/\bHigh\b/g,  "Outa Sight");
v=v.replace(/\bRaised\b/g,  "Outa Sight");
v=v.replace(/\bFound\b/g,  "Foun’");
v=v.replace(/\bFind\b/g,  "Fin’");
v=v.replace(/\bFriend\b/g,  "Frien’");
v=v.replace(/\bRun\b/g,  "Runned");
v=v.replace(/\bRan\b/g,  "Runned");
v=v.replace(/\bInto\b/g,  "In The");
v=v.replace(/\bEarth\b/g,  "Eart’");
v=v.replace(/\bAngry\b/g,  "Wild");
v=v.replace(/\bMad\b/g,  "Wild");
v=v.replace(/\bOr\b/g,  "Er");
v=v.replace(/\bEverything\b/g,  "Ev’ryt’in’");
v=v.replace(/\bClothing\b/g,  "Duds");
v=v.replace(/\bClothes\b/g,  "Duds");
v=v.replace(/\bFashion\b/g,  "Duds");
v=v.replace(/\bShirt\b/g,  "Duds");
v=v.replace(/\bPants\b/g,  "Duds");
v=v.replace(/\bDress\b/g,  "Duds");
v=v.replace(/\bOutfit\b/g,  "Duds");
v=v.replace(/\bPajamas\b/g,  "Duds");
v=v.replace(/\bRegular\b/g,  "Reg’lar");
v=v.replace(/\bThose\b/g,  "Dose");
v=v.replace(/\bNo\b/g,  "Naw");
v=v.replace(/\bIdiot\b/g,  "Duffer");
v=v.replace(/\bFool\b/g,  "Duffer");
v=v.replace(/\bMistake\b/g,  "Duffer");
v=v.replace(/\bDumb\b/g,  "Duffer");
v=v.replace(/\bStupid\b/g,  "Duffer");
v=v.replace(/\bIgnorant\b/g,  "Duffer");
v=v.replace(/\bWrong\b/g,  "Duffer");
v=v.replace(/\bFive\b/g,  "Fife");
v=v.replace(/\bBy\b/g,  "Py");
v=v.replace(/\bIn\b/g,  "Een");
v=v.replace(/\bThink\b/g,  "Sink");
v=v.replace(/\bPay\b/g,  "Pie");
v=v.replace(/\bPaid\b/g,  "Pied");
v=v.replace(/\bRepublican\b/g,  "Jay");
v=v.replace(/\bConservative\b/g,  "Jay");
v=v.replace(/\bRight-wing\b/g,  "Jay");
v=v.replace(/\bThousand\b/g,  "T’ousand");
v=v.replace(/\bMy\b/g,  "Me");
v=v.replace(/\bThree\b/g,  "T’ree");
v=v.replace(/\bWith\b/g,  "Wid");
v=v.replace(/\bOn\b/g,  "Ahn");
v=v.replace(/\bOld\b/g,  "Ol’");
v=v.replace(/\bWoman\b/g,  "Lady");
v=v.replace(/\bGirl\b/g,  "Goil");
v=v.replace(/\bGood\b/g,  "Dandy");
v=v.replace(/\bNice\b/g,  "Dandy");
v=v.replace(/\bDamn\b/g,  "Dam");
v=v.replace(/\bThink\b/g,  "Tink");
v=v.replace(/\bThought\b/g,  "Taut");
v=v.replace(/\bNever\b/g,  "Nebber");
v=v.replace(/\bMistake\b/g,  "Do Dirt");
v=v.replace(/\bLast\b/g,  "Las’");
v=v.replace(/\bOften\b/g,  "Ortfen");
v=v.replace(/\bFriend\b/g,  "Frien’");
v=v.replace(/\bNothing\b/g,  "Nothin’");
v=v.replace(/\bFamily\b/g,  "Fambly");
v=v.replace(/\bTold\b/g,  "Tol’");
v=v.replace(/\bThe Same\b/g,  "Dessame");
v=v.replace(/\bDifferent\b/g,  "Diff’ent");
v=v.replace(/\bCan\b/g,  "Kin");
v=v.replace(/\bFind\b/g,  "Fin’");
v=v.replace(/\bWith\b/g,  "Wid");
v=v.replace(/\bGet\b/g,  "Mash");
v=v.replace(/\bGot\b/g,  "Mashed");
v=v.replace(/\bCatch\b/g,  "Ketch");
v=v.replace(/\bYes\b/g,  "Yessir");
v=v.replace(/\bRight\b/g,  "Straight");
v=v.replace(/\bCorrect\b/g,  "Straight");
v=v.replace(/\bGirl\b/g,  "Goil");
v=v.replace(/\bFace\b/g,  "Mug");
v=v.replace(/\bExpression\b/g,  "Mug");
v=v.replace(/\bBody\b/g,  "Shape");
v=v.replace(/\bBother\b/g,  "Eatin’");
v=v.replace(/\bCrying\b/g,  "A-cryin’");
v=v.replace(/\bY’all\b/g,  "Yehs");
v=v.replace(/\bPunch\b/g,  "T’ump");
v=v.replace(/\bThump\b/g,  "T’ump");
v=v.replace(/\bBoth\b/g,  "Bote");
v=v.replace(/\bUnderstand\b/g,  "Unnerstan");
v=v.replace(/\bExtremely\b/g,  "Bloomin’");
v=v.replace(/\bVery\b/g,  "Bloomin’");
v=v.replace(/\bBrought\b/g,  "Fetched");
v=v.replace(/\bInfant\b/g,  "Babby");
v=v.replace(/\bSuch\b/g,  "Sech");
v=v.replace(/\bWant To\b/g,  "Wanna");
v=v.replace(/\bBusiness\b/g,  "Bus’ness");
v=v.replace(/\bDaughter\b/g,  "Dauter");
v=v.replace(/\bIsn’t\b/g,  "Ain’t");
v=v.replace(/\bOught To\b/g,  "Oughta");
v=v.replace(/\bGirlfriend\b/g,  "Lady-frien’");
v=v.replace(/\bMinute\b/g,  "Minit");
v=v.replace(/\bMoment\b/g,  "Minit");
v=v.replace(/\bExcuse\b/g,  "Scuse");
v=v.replace(/\bSay\b/g,  "Shay");
v=v.replace(/\bLittle\b/g,  "Lil’");
v=v.replace(/\bOnly\b/g,  "On’y");
v=v.replace(/\bYet\b/g,  "Yit");
v=v.replace(/\bTonight\b/g,  "Teh-night");
v=v.replace(/\bPosition\b/g,  "Standin’");
v=v.replace(/\bApologise\b/g,  "‘pol’gize");
v=v.replace(/\bApologize\b/g,  "‘pol’gize");
v=v.replace(/\bTreated\b/g,  "Trea’s");
v=v.replace(/\bTreats\b/g,  "Trea’s");
v=v.replace(/\bFair\b/g,  "Shquare");
v=v.replace(/\bSquare\b/g,  "Shquare");
v=v.replace(/\bNight\b/g,  "Eve");
v=v.replace(/\bEvening\b/g,  "Eve");
v=v.replace(/\bAnything\b/g,  "An’t’ing");
v=v.replace(/\bThumb\b/g,  "T’umb");
v=v.replace(/\bTerrible\b/g,  "Ter’ble");
v=v.replace(/\bDisobedient\b/g,  "Disobed’ent");
v=v.replace(/\bObedient\b/g,  "Obed’ent");
v=v.replace(/\bThankless\b/g,  "T’ankless");
v=v.replace(/\bWickedness\b/g,  "Badness");
v=v.replace(/\bNegativity\b/g,  "Badness");
v=v.replace(/\bFault\b/g,  "Badness");
v=v.replace(/\bForgive\b/g,  "Fergive");
v=v.replace(/\bDinner\b/g,  "Supper");
v=v.replace(/\bIdea\b/g,  "Idear");
v=v.replace(/\bOh My God\b/g,  "Hully Gee");
v=v.replace(/\bRespectable\b/g,  "‘spectable");
v=v.replace(/\bCitizen\b/g,  "Cit’zen");
v=v.replace(/\bQuick\b/g,  "Damnquick");
v=v.replace(/\bQuickly\b/g,  "Damnquick");
v=v.replace(/\bFast\b/g,  "Damnquick");
v=v.replace(/\bRelaxing\b/g,  "Loafin’");
v=v.replace(/\bHanging Out\b/g,  "Loafin’");
v=v.replace(/\bWalking\b/g,  "Loafin’");
v=v.replace(/\bSarcastic\b/g,  "Fresh");
v=v.replace(/\bRude\b/g,  "Fresh");
v=v.replace(/\bWonder\b/g,  "Wonner");
v=v.replace(/\bmom\b/g,"Mam");
v=v.replace(/\bwomen\b/g,"Ladies");
v=v.replace(/\bFamilies\b/g,"Famblies");




    textNode.nodeValue = v;
}
