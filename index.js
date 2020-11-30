const app = {
    data(){
        return {
            currentId: 0,
            progress: 0,
            results: null,
            current: null,     
            tinyurl: null,   
            groups: [
                {name: "value", desc: "I have worth.", score: 0},
                {name: "security", desc: "I am safe.", score: 0},
                {name: "performance", desc: "I am competent.", score: 0},
                {name: "control", desc: "I am powerful.", score: 0},
                {name: "love", desc: "I am loved.", score: 0},
                {name: "autonomy", desc: "I am autonomous.", score: 0},
                {name: "justice", desc: "I am treated justly and fairly.", score: 0},
                {name: "belonging", desc: "I belong.", score: 0},
                {name: "others", desc: "People are good.", score: 0},
                {name: "standards", desc: "My standards are reasonable and flexible.", score: 0},
            ],
            questions: [
                {q: "I am worthy of love and respect.", worth: 2, group: "value", value: null},
                {q: "I feel OK about myself.", worth: 2, group: "value", value: null},
                {q: "I have legitimate needs I deserve to fill.", worth: 2, group: "value", value: null},
                {q: "I count for something in the world.", worth: 2, group: "value", value: null},
                {q: "People I like and respect often like and respect me.", worth: 2, group: "value", value: null},
                {q: "I often feel flawed or defective. ", worth: -1, group: "value", value: null},
                {q: "Nobody I desire would desire me if they really got to know me.", worth: -1, group: "value", value: null},
                {q: "I’m dull and boring and can’t make interesting conversation.", worth: -1, group: "value", value: null},
                {q: "I’m unattractive.", worth: -1, group: "value", value: null},
                {q: "I don’t deserve much attention or respect. ", worth: -1, group: "value", value: null},                
                {q: "My world is a pretty safe place.", worth: 2, group: "security", value: null},
                {q: "I can protect myself from most dangers.", worth: 2, group: "security", value: null},
                {q: "I am willing to take risks.", worth: 2, group: "security", value: null},
                {q: "I can take care of myself and my loved ones. ", worth: 2, group: "security", value: null},
                {q: "I don’t worry much about health or money.", worth: 2, group: "security", value: null},
                {q: "Life is dangerous – a medical, natural, or financial disaster could strike any time.", worth: -1, group: "security", value: null},
                {q: "I worry about getting sick or hurt.", worth: -1, group: "security", value: null},
                {q: "If I’m not careful with my money, I might end up with nothing.", worth: -1, group: "security", value: null},
                {q: "I choose my old, familiar ways of doing things over risking the unexpected.", worth: -1, group: "security", value: null},
                {q: "I feel uneasy when I go very far from home alone.", worth: -1, group: "security", value: null},                
                {q: "I perform many task well.", worth: 2, group: "performance", value: null},
                {q: "Doing some things comes easy for me.", worth: 2, group: "performance", value: null},
                {q: "I am a competent person, as capable as most people.", worth: 2, group: "performance", value: null},
                {q: "I can learn new skills if I try.", worth: 2, group: "performance", value: null},
                {q: "Most of my decisions are sound.", worth: 2, group: "performance", value: null},
                {q: "I’m basically incompetent.", worth: -1, group: "performance", value: null},
                {q: "When I trust my own judgment, I make wrong decisions.", worth: -1, group: "performance", value: null},
                {q: "I tend to avoid new challenges.", worth: -1, group: "performance", value: null},
                {q: "I don’t perform well under stress.", worth: -1, group: "performance", value: null},
                {q: "I mess up everything I attempt. ", worth: -1, group: "performance", value: null},                
                {q: "I am in control of my life.", worth: 2, group: "control", value: null},
                {q: "I have the power I need to solve most of my problems.", worth: 2, group: "control", value: null},
                {q: "My impulses don’t control me.", worth: 2, group: "control", value: null},
                {q: "I can usually control my feelings.", worth: 2, group: "control", value: null},
                {q: "I can take charge when I need to.", worth: 2, group: "control", value: null},
                {q: "I have very little control over my life.", worth: -1, group: "control", value: null},
                {q: "Events just bowl me over sometimes.", worth: -1, group: "control", value: null},
                {q: "I fear I’ll give in to overwhelming crying, anger, or sexual impulses.", worth: -1, group: "control", value: null},
                {q: "I’m powerless to change many of the situations I’m in.", worth: -1, group: "control", value: null},
                {q: "I’m often a victim or circumstances.", worth: -1, group: "control", value: null},                
                {q: "I feel loved and cared for.", worth: 2, group: "love", value: null},
                {q: "I have at lease one satisfying intimate relationship.", worth: 2, group: "love", value: null},
                {q: "I feel nurtured in my family.", worth: 2, group: "love", value: null},
                {q: "I can get the care and attention I need.", worth: 2, group: "love", value: null},
                {q: "I can depend on my friends for advice and emotional support.", worth: 2, group: "love", value: null},
                {q: "I’ve never felt really cared for by my family.", worth: -1, group: "love", value: null},
                {q: "My relationships are shallow – if I disappeared tomorrow, no one would notice.", worth: -1, group: "love", value: null},
                {q: "I’m afraid of being abandoned – that a loved one will die or reject me.", worth: -1, group: "love", value: null},
                {q: "There’s no one I can count on for support and advice.", worth: -1, group: "love", value: null},
                {q: "I have no one who hugs me, shares secrets with me, or really cares what happens to me.", worth: -1, group: "love", value: null},                
                {q: "I can rely upon myself.", worth: 2, group: "autonomy", value: null},
                {q: "It’s OK to disagree with others.", worth: 2, group: "autonomy", value: null},
                {q: "I don’t need the approval of others for everything I do.", worth: 2, group: "autonomy", value: null},
                {q: "I like to spend time by myself.", worth: 2, group: "autonomy", value: null},
                {q: "I think for myself, I can stand up for my own ideas.", worth: 2, group: "autonomy", value: null},
                {q: "Others can care for me better than I can care for myself.", worth: -1, group: "autonomy", value: null},
                {q: "I find myself going along with others’ plans.", worth: -1, group: "autonomy", value: null},
                {q: "I don’t function well on my own.", worth: -1, group: "autonomy", value: null},
                {q: "I try hard to please others and I put their needs in front of my own.", worth: -1, group: "autonomy", value: null},
                {q: "I have trouble making my own wants and needs known.", worth: -1, group: "autonomy", value: null},                
                {q: "The world is neither fair nor unfair.", worth: 2, group: "justice", value: null},
                {q: "I accept it when I don’t get what I want.", worth: 2, group: "justice", value: null},
                {q: "Things tend to work out in the end.", worth: 2, group: "justice", value: null},
                {q: "Most of the time, I feel that I am treated fairly.", worth: 2, group: "justice", value: null},
                {q: "I’m treated fairly, most of the time.", worth: 2, group: "justice", value: null},
                {q: "I get upset when I don’t get what I want – I hate to take no for an answer.", worth: -1, group: "justice", value: null},
                {q: "There are certain things I simply must have to be happy.", worth: -1, group: "justice", value: null},
                {q: "I feel I shouldn’t have to accept some of the limitations placed on other people.", worth: -1, group: "justice", value: null},
                {q: "I tend to expect the worst.", worth: -1, group: "justice", value: null},
                {q: "Although my life is objectively OK, I have a lot of trouble accepting some parts that aren’t the way I’d like them to be.", worth: -1, group: "justice", value: null},                
                {q: "I feel a strong sense of belonging in family and community.", worth: 2, group: "belonging", value: null},
                {q: "I fit in well with my circle of friends.", worth: 2, group: "belonging", value: null},
                {q: "People usually accept me as I am.", worth: 2, group: "belonging", value: null},
                {q: "My hopes and dreams are much like everyone else’s.", worth: 2, group: "belonging", value: null},
                {q: "I could change jobs or join a club and soon fit in.", worth: 2, group: "belonging", value: null},
                {q: "I frequently feel left out of groups. ", worth: -1, group: "belonging", value: null},
                {q: "I feel like an outsider.", worth: -1, group: "belonging", value: null},
                {q: "People don’t usually include me in what they are doing.", worth: -1, group: "belonging", value: null},
                {q: "Sometimes I feel like an alien, very different from everyone else.", worth: -1, group: "belonging", value: null},
                {q: "I don’t feel I belong where I am.", worth: -1, group: "belonging", value: null},                
                {q: "Most people can be trusted.", worth: 2, group: "others", value: null},
                {q: "I rarely need to protect or guard myself with other people.", worth: 2, group: "others", value: null},
                {q: "I seldom feel taken advantage of.", worth: 2, group: "others", value: null},
                {q: "I give people the benefit of the doubt.", worth: 2, group: "others", value: null},
                {q: "I’d rather be too gullible than too suspicious.", worth: 2, group: "others", value: null},
                {q: "Many people would like to hurt me or take advantage of me.", worth: -1, group: "others", value: null},
                {q: "Most people think only of themselves.", worth: -1, group: "others", value: null},
                {q: "Most people can’t be trusted.", worth: -1, group: "others", value: null},
                {q: "I must be on my guard against others’ lies and hostile remarks.", worth: -1, group: "others", value: null},
                {q: "Most people will break their promises and lie.", worth: -1, group: "others", value: null},                
                {q: "I set reasonable standards for myself.", worth: 2, group: "standards", value: null},
                {q: "I can forgive myself for failure.", worth: 2, group: "standards", value: null},
                {q: "I set achievable goals for myself.", worth: 2, group: "standards", value: null},
                {q: "I’m not perfect and that’s OK.", worth: 2, group: "standards", value: null},
                {q: "It’s OK to make mistakes.", worth: 2, group: "standards", value: null},
                {q: "Very little of what I do satisfies me – I usually think I could do better.", worth: -1, group: "standards", value: null},
                {q: "I’m a perfectionist; I must be the best at whatever I do.", worth: -1, group: "standards", value: null},
                {q: "Failure is very upsetting to me.", worth: -1, group: "standards", value: null},
                {q: "I push myself so hard that I harm my relationships, my health, or my happiness.", worth: -1, group: "standards", value: null},
                {q: "I have very clear, black-and-white rules for myself", worth: -1, group: "standards", value: null}
            ]                          
        }
    },
    created(){        
        this.current = this.questions[this.currentId];
        var query = window.location.search.split('=');
        if(query.length > 1){
            this.results = JSON.parse(Base64.decode(query[1]));
        }        
    }, 
    watch:{
        results(){
            if(this.questions[0].value == null){
                this.questions = this.results;
            }            
            this.GetScores();
        }
    },
    methods: {
        RadioSelected(){
            if(this.currentId < this.questions.length-1){
                this.currentId++;
                this.current = this.questions[this.currentId];
            }else{
                this.current = null;
                this.results = Base64.encode(JSON.stringify(this.questions));
                this.tinyurl = this.GetUrl();
            }
        }, 
        GetScores(){
            this.questions.forEach(question => {
                group = this.groups.find(function(val){
                    if(val.name === question.group && question.value == 'true'){
                        val.score += question.worth;
                    }
                });                
            });            
        }, 
        GetUrl(){
            var baseUrl = "http://127.0.0.1:8000";
            var theUrl = `http://tinyurl.com/api-create.php?url=${baseUrl}/?results=${this.results}`;
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
            xmlHttp.send( null );
            return xmlHttp.responseText;
        },
        GetColor(score){
            var color = "#d09900";

            if(score <= 3){
                color = "red";
            }else if(score >= 8){
                color = "#57b700";
            }

            return `color: ${color}`;
        }
    }
}
Vue.createApp(app).mount("#content");