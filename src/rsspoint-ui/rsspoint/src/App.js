import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/js/src/collapse.js";
import "bootstrap/dist/js/bootstrap.min.js";
import './index.css'
import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import {Nav, Row} from "react-bootstrap";


class App extends Component {


    state = {
        "username": "mike",
        "feed": [{
            "channel__name": "dsl.sk",
            "channel__title": "DSL.sk",
            "channel__link": "http://www.dsl.sk/",
            "channel__description": "Digitálny Svet pod Lupou. Portál o počítačoch a Internete, o DSL technológii a iných digitálnych technológiách dneška a zajtrajška.",
            "item__title": "SpaceX zajtra vynesie ďalších 60 Starlink satelitov, video",
            "item__link": "http://www.dsl.sk/article.php?article=24660",
            "item__description": "SpaceX zajtra vynesie ďalších 60 Starlink satelitov, video",
            "item__date": "2021-01-18T20:31:00",
            "item__og_image": "http://img.youtube.com/vi/84Nct_Q9Lqw/maxresdefault.jpg"
        }, {
            "channel__name": "dsl.sk",
            "channel__title": "DSL.sk",
            "channel__link": "http://www.dsl.sk/",
            "channel__description": "Digitálny Svet pod Lupou. Portál o počítačoch a Internete, o DSL technológii a iných digitálnych technológiách dneška a zajtrajška.",
            "item__title": "Rýchle SSD s 3D XPoint pamäťou pre PC končia",
            "item__link": "http://www.dsl.sk/article.php?article=24659",
            "item__description": "Rýchle SSD s 3D XPoint pamäťou pre PC končia",
            "item__date": "2021-01-18T10:43:00",
            "item__og_image": "http://www.dsl.sk/images/design/DSL-fb-square-v2.png"
        }, {
            "channel__name": "dsl.sk",
            "channel__title": "DSL.sk",
            "channel__link": "http://www.dsl.sk/",
            "channel__description": "Digitálny Svet pod Lupou. Portál o počítačoch a Internete, o DSL technológii a iných digitálnych technológiách dneška a zajtrajška.",
            "item__title": "USA sprísnili kroky proti Huawei",
            "item__link": "http://www.dsl.sk/article.php?article=24658",
            "item__description": "USA sprísnili kroky proti Huawei",
            "item__date": "2021-01-18T08:07:00",
            "item__og_image": "http://www.dsl.sk/images/design/DSL-fb-square-v2.png"
        }, {
            "channel__name": "dsl.sk",
            "channel__title": "DSL.sk",
            "channel__link": "http://www.dsl.sk/",
            "channel__description": "Digitálny Svet pod Lupou. Portál o počítačoch a Internete, o DSL technológii a iných digitálnych technológiách dneška a zajtrajška.",
            "item__title": "Na Apple M1 nabootovaný Linux",
            "item__link": "http://www.dsl.sk/article.php?article=24657",
            "item__description": "Na Apple M1 nabootovaný Linux",
            "item__date": "2021-01-18T07:26:00",
            "item__og_image": "http://www.dsl.sk/images/design/DSL-fb-square-v2.png"
        }, {
            "channel__name": "dsl.sk",
            "channel__title": "DSL.sk",
            "channel__link": "http://www.dsl.sk/",
            "channel__description": "Digitálny Svet pod Lupou. Portál o počítačoch a Internete, o DSL technológii a iných digitálnych technológiách dneška a zajtrajška.",
            "item__title": "NASA sa nepodaril test novej výkonnej rakety SLS",
            "item__link": "http://www.dsl.sk/article.php?article=24656",
            "item__description": "NASA sa nepodaril test novej výkonnej rakety SLS",
            "item__date": "2021-01-17T16:02:00",
            "item__og_image": "http://img.youtube.com/vi/ELHOXi2t3lk/maxresdefault.jpg"
        }, {
            "channel__name": "dsl.sk",
            "channel__title": "DSL.sk",
            "channel__link": "http://www.dsl.sk/",
            "channel__description": "Digitálny Svet pod Lupou. Portál o počítačoch a Internete, o DSL technológii a iných digitálnych technológiách dneška a zajtrajška.",
            "item__title": "Podľa nového CEO Intelu nemôže mať lifestylová Apple lepšie CPU",
            "item__link": "http://www.dsl.sk/article.php?article=24655",
            "item__description": "Podľa nového CEO Intelu nemôže mať lifestylová Apple lepšie CPU",
            "item__date": "2021-01-16T16:13:00",
            "item__og_image": "http://www.dsl.sk/images/design/DSL-fb-square-v2.png"
        }, {
            "channel__name": "dsl.sk",
            "channel__title": "DSL.sk",
            "channel__link": "http://www.dsl.sk/",
            "channel__description": "Digitálny Svet pod Lupou. Portál o počítačoch a Internete, o DSL technológii a iných digitálnych technológiách dneška a zajtrajška.",
            "item__title": "Apple sa má pri nových MacBook Pro s ARM vrátiť k starším technológiám",
            "item__link": "http://www.dsl.sk/article.php?article=24654",
            "item__description": "Apple sa má pri nových MacBook Pro s ARM vrátiť k starším technológiám",
            "item__date": "2021-01-15T18:27:00",
            "item__og_image": "http://www.dsl.sk/images/design/DSL-fb-square-v2.png"
        }, {
            "channel__name": "dsl.sk",
            "channel__title": "DSL.sk",
            "channel__link": "http://www.dsl.sk/",
            "channel__description": "Digitálny Svet pod Lupou. Portál o počítačoch a Internete, o DSL technológii a iných digitálnych technológiách dneška a zajtrajška.",
            "item__title": "Wikipedia má 20 rokov",
            "item__link": "http://www.dsl.sk/article.php?article=24653",
            "item__description": "Wikipedia má 20 rokov",
            "item__date": "2021-01-15T12:21:00",
            "item__og_image": "http://www.dsl.sk/images/design/DSL-fb-square-v2.png"
        }, {
            "channel__name": "dsl.sk",
            "channel__title": "DSL.sk",
            "channel__link": "http://www.dsl.sk/",
            "channel__description": "Digitálny Svet pod Lupou. Portál o počítačoch a Internete, o DSL technológii a iných digitálnych technológiách dneška a zajtrajška.",
            "item__title": "Výrobca platní pre HDD pre zvýšený dopyt výrazne zvýši produkciu",
            "item__link": "http://www.dsl.sk/article.php?article=24652",
            "item__description": "Výrobca platní pre HDD pre zvýšený dopyt výrazne zvýši produkciu",
            "item__date": "2021-01-15T10:15:00",
            "item__og_image": "http://www.dsl.sk/images/design/DSL-fb-square-v2.png"
        }, {
            "channel__name": "dsl.sk",
            "channel__title": "DSL.sk",
            "channel__link": "http://www.dsl.sk/",
            "channel__description": "Digitálny Svet pod Lupou. Portál o počítačoch a Internete, o DSL technológii a iných digitálnych technológiách dneška a zajtrajška.",
            "item__title": "USA uvalili sankcie na ďalšieho veľkého čínskeho výrobcu smartfónov",
            "item__link": "http://www.dsl.sk/article.php?article=24651",
            "item__description": "USA uvalili sankcie na ďalšieho veľkého čínskeho výrobcu smartfónov",
            "item__date": "2021-01-15T08:12:00",
            "item__og_image": "http://www.dsl.sk/images/design/DSL-fb-square-v2.png"
        }, {
            "channel__name": "TA3 - top",
            "channel__title": "Top správy",
            "channel__link": "https://www.ta3.com",
            "channel__description": "Top správy",
            "item__title": "Začalo sa očkovanie v ZSS, ľudia majú na výber z troch možností",
            "item__link": "https://www.ta3.com/clanok/1201046/zacalo-sa-ockovanie-v-zss-ludia-maju-na-vyber-z-troch-moznosti.html",
            "item__description": "Po pilotnom bude nasledovať riadne očkovanie po celej SR.",
            "item__date": "2021-01-18T15:58:12",
            "item__og_image": "https://www.ta3.com/public/data/Article/1201046/title-image/0a140371-a767-fcff.jpg"
        }, {
            "channel__name": "TA3 - top",
            "channel__title": "Top správy",
            "channel__link": "https://www.ta3.com",
            "channel__description": "Top správy",
            "item__title": "Rakúsko predĺžilo kontroly na hraniciach, je nutná registrácia",
            "item__link": "https://www.ta3.com/clanok/1201064/rakusko-predlzilo-kontroly-na-hraniciach-je-nutna-registracia.html",
            "item__description": "Krajina predlžuje lockdown o dva týždne - do 7. februára.",
            "item__date": "2021-01-18T18:50:56",
            "item__og_image": "https://www.ta3.com/public/data/Article/1201064/title-image/0a140371-d776-7083.jpg"
        }, {
            "channel__name": "TA3 - top",
            "channel__title": "Top správy",
            "channel__link": "https://www.ta3.com",
            "channel__description": "Top správy",
            "item__title": "Objavili novú mutáciu koronavírusu, šíri sa v nemeckej nemocnici",
            "item__link": "https://www.ta3.com/clanok/1201066/objavili-novu-mutaciu-koronavirusu-siri-sa-v-nemeckej-nemocnici.html",
            "item__description": "Nový variant zistili ešte minulý týždeň u pacientov a personálu.",
            "item__date": "2021-01-18T20:05:30",
            "item__og_image": "https://www.ta3.com/public/data/Article/1201066/title-image/0a140371-e944-0ae4.jpg"
        }, {
            "channel__name": "TA3 - top",
            "channel__title": "Top správy",
            "channel__link": "https://www.ta3.com",
            "channel__description": "Top správy",
            "item__title": "V TA3 sa predstavil prvý kandidát na ŠP. Kto je Peter Kysel",
            "item__link": "https://www.ta3.com/clanok/1201041/v-ta3-sa-predstavil-prvy-kandidat-na-sp-kto-je-peter-kysel.html",
            "item__description": "Po GP čaká poslancov aj voľba špeciálneho prokurátora.",
            "item__date": "2021-01-18T14:04:38",
            "item__og_image": "https://www.ta3.com/public/data/Article/1201041/title-image/0a14036f-9389-7623.jpg"
        }, {
            "channel__name": "TA3 - top",
            "channel__title": "Top správy",
            "channel__link": "https://www.ta3.com",
            "channel__description": "Top správy",
            "item__title": "Kam môžete, ak sa nedáte otestovať? Pozrite si prehľad výnimiek",
            "item__link": "https://www.ta3.com/clanok/1201028/kam-mozete-ak-sa-nedate-otestovat-pozrite-si-prehlad-vynimiek.html",
            "item__description": "Zákaz vychádzania predĺžili do 7. februára.",
            "item__date": "2021-01-18T11:34:27",
            "item__og_image": "https://www.ta3.com/public/data/Article/1201028/title-image/0a140371-6ff8-bbba.jpg"
        }, {
            "channel__name": "TA3 - top",
            "channel__title": "Top správy",
            "channel__link": "https://www.ta3.com",
            "channel__description": "Top správy",
            "item__title": "Sulík obhajoval dohodu o testovaní. Bude posledné, sľúbili mu",
            "item__link": "https://www.ta3.com/clanok/1201020/chapeme-ze-nie-ste-stastni-sulik-obhajoval-dohodu-o-testovani.html",
            "item__description": "Šéf SaS chápe nešťastie ľudí.",
            "item__date": "2021-01-18T08:47:47",
            "item__og_image": "https://www.ta3.com/public/data/Article/1201020/title-image/0a140371-49af-7760.jpg"
        }, {
            "channel__name": "TA3 - top",
            "channel__title": "Top správy",
            "channel__link": "https://www.ta3.com",
            "channel__description": "Top správy",
            "item__title": "Máme už vyše 3500 obetí nákazy, počet hospitalizovaných vzrástol",
            "item__link": "https://www.ta3.com/clanok/1201018/mame-uz-vyse-3500-obeti-nakazy-pocet-hospitalizovanych-vzrastol.html",
            "item__description": "Informovalo o tom Národné centrum zdravotníckych informácií.",
            "item__date": "2021-01-18T09:03:43",
            "item__og_image": "https://www.ta3.com/public/data/Article/1201018/title-image/0a14036f-471e-9d77.jpg"
        }, {
            "channel__name": "TA3 - top",
            "channel__title": "Top správy",
            "channel__link": "https://www.ta3.com",
            "channel__description": "Top správy",
            "item__title": "Vakcína zrejme zaberá. Izrael skúmal šírenie nákazy po očkovaní",
            "item__link": "https://www.ta3.com/clanok/1201011/vakcina-zrejme-zabera-izrael-skumal-sirenie-nakazy-po-ockovani.html",
            "item__description": "Počet novonakazených sa výrazne znížil.",
            "item__date": "2021-01-18T07:28:58",
            "item__og_image": "https://www.ta3.com/public/data/Article/1201011/title-image/0a140370-36e6-a057.jpg"
        }, {
            "channel__name": "TA3 - top",
            "channel__title": "Top správy",
            "channel__link": "https://www.ta3.com",
            "channel__description": "Top správy",
            "item__title": "V Česku pribudlo najmenej nakazených v tomto roku, testovali málo",
            "item__link": "https://www.ta3.com/clanok/1201013/v-cesku-pribudlo-najmenej-nakazenych-v-tomto-roku-testovali-malo.html",
            "item__description": "Šírenie nákazy sa v ČR postupne spomaľuje.",
            "item__date": "2021-01-18T08:12:10",
            "item__og_image": "https://www.ta3.com/public/data/Article/1201013/title-image/0a140371-417e-179a.jpg"
        }, {
            "channel__name": "TA3 - top",
            "channel__title": "Top správy",
            "channel__link": "https://www.ta3.com",
            "channel__description": "Top správy",
            "item__title": "Väčšina detí zostáva doma, otvorené môžu byť len škôlky",
            "item__link": "https://www.ta3.com/clanok/1201007/vacsina-deti-zostava-doma-otvorene-mozu-byt-len-skolky.html",
            "item__description": "Do materských škôl môžu ísť deti niektorých rodičov.",
            "item__date": "2021-01-18T06:44:53",
            "item__og_image": "https://www.ta3.com/public/data/Article/1201007/title-image/0a14036f-2899-8157.jpg"
        }, {
            "channel__name": "TA3 - top",
            "channel__title": "Top správy",
            "channel__link": "https://www.ta3.com",
            "channel__description": "Top správy",
            "item__title": "Začína sa veľký skríning, test bude nutný pre cestu do práce",
            "item__link": "https://www.ta3.com/clanok/1200983/velke-testovanie-bude-ine-ako-v-novembri-zacne-sa-uz-v-pondelok.html",
            "item__description": "Sprísni sa viacero opatrení.",
            "item__date": "2021-01-17T18:26:05",
            "item__og_image": "https://www.ta3.com/public/data/Article/1200983/title-image/0a140370-8109-c43f.jpg"
        }, {
            "channel__name": "TA3 - top",
            "channel__title": "Top správy",
            "channel__link": "https://www.ta3.com",
            "channel__description": "Top správy",
            "item__title": "Navaľnyj sa vrátil do Ruska, po prílete ho zatkli policajti",
            "item__link": "https://www.ta3.com/clanok/1200985/navalnyj-sa-vratil-do-ruska-let-museli-odklonit-na-ine-letisko.html",
            "item__description": "Ruský opozičný politik obviňuje Kremeľ zo svojho otrávenia.",
            "item__date": "2021-01-17T18:03:03",
            "item__og_image": "https://www.ta3.com/public/data/Article/1200985/title-image/0a140371-55ae-8d28.jpg"
        }, {
            "channel__name": "TA3 - top",
            "channel__title": "Top správy",
            "channel__link": "https://www.ta3.com",
            "channel__description": "Top správy",
            "item__title": "Začínajú očkovať v DSS, k vakcíne sa dostanú aj chronicky chorí",
            "item__link": "https://www.ta3.com/clanok/1200994/zacinaju-ockovat-v-dss-k-vakcine-sa-dostanu-aj-chronicky-chori.html",
            "item__description": "Prioritou sú zamestnanci.",
            "item__date": "2021-01-17T17:58:21",
            "item__og_image": "https://www.ta3.com/public/data/Article/1200994/title-image/0a14036f-77e5-2e4c.jpg"
        }, {
            "channel__name": "TA3 - top",
            "channel__title": "Top správy",
            "channel__link": "https://www.ta3.com",
            "channel__description": "Top správy",
            "item__title": "Kollár avizoval opatrenia vlády, Pellegrini hovorí o telenovele",
            "item__link": "https://www.ta3.com/clanok/1200969/kollar-avizoval-opatrenia-vlady-pellegrini-hovori-o-telenovele.html",
            "item__description": "V relácii V politike diskutovali o plošnom testovaní i očkovaní.",
            "item__date": "2021-01-17T11:38:06",
            "item__og_image": "https://www.ta3.com/public/data/Article/1200969/title-image/c0a80401-1f6d-81fd.jpg"
        }, {
            "channel__name": "TA3 - top",
            "channel__title": "Top správy",
            "channel__link": "https://www.ta3.com",
            "channel__description": "Top správy",
            "item__title": "Radary kúpime od Izraelčanov, podľa ministra Naďa sme ušetrili",
            "item__link": "https://www.ta3.com/clanok/1200984/radary-kupime-od-izraelcanov-podla-ministra-nada-sme-usetrili.html",
            "item__description": "Vláda sa stotožnila s návrhom hodnotiacej komisie.",
            "item__date": "2021-01-17T15:39:34",
            "item__og_image": "https://www.ta3.com/public/data/Article/1200984/title-image/0a140371-5484-b0fc.jpg"
        }, {
            "channel__name": "TA3 - top",
            "channel__title": "Top správy",
            "channel__link": "https://www.ta3.com",
            "channel__description": "Top správy",
            "item__title": "Máme sa obávať nedostatku vakcín? Šefčovič priblížil plány EÚ",
            "item__link": "https://www.ta3.com/clanok/1200974/mame-sa-obavat-nedostatku-vakcin-sefcovic-priblizil-plany-eu.html",
            "item__description": "Aktuálne má EÚ zabezpečených 2,3 miliardy vakcín.",
            "item__date": "2021-01-17T12:43:25",
            "item__og_image": "https://www.ta3.com/public/data/Article/1200974/title-image/0a14036f-2f63-277f.jpg"
        }, {
            "channel__name": "TA3 - top",
            "channel__title": "Top správy",
            "channel__link": "https://www.ta3.com",
            "channel__description": "Top správy",
            "item__title": "Pribudli desiatky úmrtí a stovky nakazených, testovalo sa menej",
            "item__link": "https://www.ta3.com/clanok/1200962/pribudli-desiatky-umrti-a-stovky-nakazenych-testovalo-sa-menej.html",
            "item__description": "Informovalo o tom Národné centrum zdravotníckych informácií.",
            "item__date": "2021-01-17T09:04:39",
            "item__og_image": "https://www.ta3.com/public/data/Article/1200962/title-image/0a140371-fc3b-f77a.jpg"
        }, {
            "channel__name": "TA3 - top",
            "channel__title": "Top správy",
            "channel__link": "https://www.ta3.com",
            "channel__description": "Top správy",
            "item__title": "Testovanie pokračuje, mestá chcú odbremeniť nemocnice",
            "item__link": "https://www.ta3.com/clanok/1200960/testovanie-pokracuje-mesta-chcu-odbremenit-nemocnice.html",
            "item__description": "Vo viacerých mestách sa cez víkend plošne testuje.",
            "item__date": "2021-01-17T07:36:31",
            "item__og_image": "https://www.ta3.com/public/data/Article/1200960/title-image/0a140371-e7ed-a5d3.jpg"
        }, {
            "channel__name": "TA3 - top",
            "channel__title": "Top správy",
            "channel__link": "https://www.ta3.com",
            "channel__description": "Top správy",
            "item__title": "Brazília odmietla Sputnik, ruská vakcína čelí kritike zdravotníkov",
            "item__link": "https://www.ta3.com/clanok/1200958/brazilia-odmietla-sputnik-ruska-vakcina-celi-kritike-zdravotnikov.html",
            "item__description": "Viaceré štáty Latinskej Ameriky ju však schválili.",
            "item__date": "2021-01-17T09:05:38",
            "item__og_image": "https://www.ta3.com/public/data/Article/1200958/title-image/0a14036f-dbbd-d3b5.jpg"
        }, {
            "channel__name": "TA3 - top",
            "channel__title": "Top správy",
            "channel__link": "https://www.ta3.com",
            "channel__description": "Top správy",
            "item__title": "Krajčí oznámil dohodu o testovaní, Slovensko je v čiernej fáze",
            "item__link": "https://www.ta3.com/clanok/1200929/krajci-oznamil-dohodu-o-testovani-pomahat-budu-tisicky-vojakov.html",
            "item__description": "Detaily oznámi vláda až po nedeľňajšom rokovaní.",
            "item__date": "2021-01-16T18:48:15",
            "item__og_image": "https://www.ta3.com/public/data/Article/1200929/title-image/0a14036f-3295-baf3.jpg"
        }]
    };

    // rssFeed = fetch('http://127.0.0.1:8000/feed/content?username=' + this.state.username, {
    //     method: 'GET',
    //     headers: {
    //         "Content-type": "application/json; charset=UTF-8",
    //         "Access-Control-Allow-Origin": "http://127.0.0.1:8000"
    //     }
    // }).then(resp => {
    //     console.log(resp);
    // });

    render() {
        return (
            <div>

                <Navbar className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
                    <Navbar.Brand className="col-sm-3 col-md-3 mr-0" href="/#home">
                        <Navbar.Brand>
                            {"RSS Point"}
                        </Navbar.Brand>

                        <Navbar.Brand>
                            <img
                                src="https://cdn.worldvectorlogo.com/logos/rss.svg"
                                width="35px"
                                height="35px"
                                className="an-icon"
                                alt="logo"
                            />
                        </Navbar.Brand>
                    </Navbar.Brand>

                    <input
                        className="form-control form-control-dark w-100"
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                    />

                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                            <a className="nav-link" href="/ #">{this.state.username}</a>
                        </li>
                    </ul>
                </Navbar>

                <div className="container-fluid">
                    <Row>
                        <Nav className="col-md-3 d-none d-md-block bg-light sidebar">
                            <div className="sidebar-sticky">

                                <ul className="nav flex-column">
                                    <a className="nav-link" data-toggle="collapse" href="#" aria-expanded="false"
                                       aria-controls="collapse-filter-content" data-target="#collapse-filter-content">
                                        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                 className="feather feather-filter">
                                                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                                            </svg>
                                            Feed Filter
                                        </h6>
                                    </a>
                                    <div className="feed-filter-content collapse show" id="collapse-filter-content">
                                        {
                                            ["dsl.sk", "ta3.sk", "kosicednes.sk"].map((entry, idx) => (
                                                <div key={"list-" + idx} className="form-check feed-filter-item ">
                                                    <input className="form-check-input" type="checkbox" value=""/>

                                                    <label className="form-check-label"
                                                           htmlFor="flexCheckDefault">
                                                        {entry}
                                                    </label>
                                                </div>

                                            ))
                                        }
                                    </div>


                                </ul>

                                <div className="apply-filter col-md-12">
                                    <button type="button" className="btn btn-info">Apply Filter</button>
                                </div>

                            </div>
                        </Nav>


                        <main role="main" className="col-md-9 ml-sm-auto col-lg-9 pt-3 px-4">
                            <div>




                                <div className="modal fade" id="add-feed-modal" tabindex="-1" role="dialog" aria-labelledby="add-feed-modal-title" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="add-feed-modal-title">Modal title</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                ...
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                                <div
                                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                                    <h1 className="h2">News</h1>
                                    <div className="btn-toolbar mb-2 mb-md-0">

                                        <div className="btn-group mr-2">
                                            <button data-toggle="modal" data-target="#add-feed-modal" className="add-feed-btn btn btn-sm btn-outline-secondary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     className="feather feather-plus-circle">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="12" y1="8" x2="12" y2="16"></line>
                                                    <line x1="8" y1="12" x2="16" y2="12"></line>
                                                </svg>
                                                Add feed
                                            </button>

                                            <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     className="feather feather-calendar">
                                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                                </svg>
                                                This week
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div id="rsspoint-content">
                                    <div className="row rsspoint-content">

                                        {
                                            this.state.feed.map((entry, idx) => (
                                                <div key={idx} className="col-md-12 col-lg-7 col-sm-12">
                                                    <div className="card mb-4">
                                                        <a href={entry.item__link}
                                                           target="_blank" rel="noreferrer">
                                                            <img
                                                                className="card-img-top" alt="Thumbnail [100%x225]"
                                                                src={entry.item__og_image}
                                                                data-holder-rendered="true"/>
                                                        </a>
                                                        <div className="card-body"><h6
                                                            className="rsspoint-item-title">{entry.item__title}</h6>
                                                            <hr/>
                                                            <p className="card-text">{entry.item__description}</p>
                                                            <div>
                                                                <div className="float-left"><span
                                                                    className="rsspoint-by-prefix">by</span><span
                                                                    className="rsspoint-by">
                                                                <a href={entry.channel__link} target="_blank"
                                                                   rel="noreferrer">{entry.channel__name}</a></span>
                                                                </div>
                                                                <div className="float-right"><small
                                                                    className="text-muted">{entry.item__date}</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </main>

                    </Row>

                </div>

            </div>
        );
    }
}

export default App;
