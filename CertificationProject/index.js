const playersInfo = [
    {
        "id": 0,
        "playerName": "Hardik Pandya",
        "from": "GT",
        "price": "12.50 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "profileIcon": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/2740.png',
        "teamFullName": "Gujarat Titans"
    },
    {
        "id": 1,
        "playerName": "Mohammad Shami",
        "from": "GT",
        "price": "10.00 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "profileIcon": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/94.png',
        "teamFullName": "Gujarat Titans"
    },
    {
        "id": 2,
        "playerName": "Virat Kohli",
        "from": "RCB",
        "price": "13.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "profileIcon": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/164.png',
        "teamFullName": "Royal Challengers Bangalore"
    },
    {
        "id": 3,
        "playerName": "Glenn Maxwell",
        "from": "RCB",
        "price": "10.25",
        "isPlaying": true,
        "description": "All-rounder",
        "profileIcon": "https://assets.iplt20.com/ipl/IPLHeadshot2022/282.png",
        "teamFullName": "Royal Challengers Bangalore"
    },
    {
        "id": 4,
        "playerName": "Rohit Sharma",
        "from": "MI",
        "price": "14.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "profileIcon": "https://assets.iplt20.com/ipl/IPLHeadshot2022/107.png",
        "teamFullName": "Mumbai Indians"
    },
    {
        "id": 5,
        "playerName": "Ishan Kishan",
        "from": "MI",
        "price": "17.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "profileIcon": "https://assets.iplt20.com/ipl/IPLHeadshot2022/2975.png",
        "teamFullName": "Mumbai Indians"
    },
    {
        "id": 6,
        "playerName": "MS Dhoni",
        "from": "CSK",
        "price": "14.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "profileIcon": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1.png",
        "teamFullName": "Chennai Super Kings"
    },
    {
        "id": 7,
        "playerName": "Dwayne Bravo",
        "from": "CSK",
        "price": "07.50 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "profileIcon": "https://assets.iplt20.com/ipl/IPLHeadshot2022/25.png",
        "teamFullName": "Chennai Super Kings"
    },
    {
        "id": 8,
        "playerName": "Shreyas Iyer",
        "from": "KKR",
        "price": "10.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "profileIcon": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1563.png",
        "teamFullName": "Kolkata Knight Riders"
    },
    {
        "id": 9,
        "playerName": "Rishabh Pant",
        "from": "DC",
        "price": "13.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "profileIcon": "https://assets.iplt20.com/ipl/IPLHeadshot2022/2972.png",
        "teamFullName": "Delhi Capitals"
    },
    {
        "id": 10,
        "playerName": "Dewald Brevis",
        "from": "MI",
        "price": "9.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "profileIcon": "https://assets.iplt20.com/ipl/IPLHeadshot2022/20593.png",
        "teamFullName": "Mumbai Indians"
    },
    {
        "id": 11,
        "playerName": "Daniel Sams",
        "from": "MI",
        "price": "8 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "profileIcon": "https://assets.iplt20.com/ipl/IPLHeadshot2022/4649.png",
        "teamFullName": "Mumbai Indians"
    },
    {
        "id": 12,
        "playerName": "Kieron Pollard",
        "from": "MI",
        "price": "9.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "profileIcon": "https://assets.iplt20.com/ipl/IPLHeadshot2022/210.png",
        "teamFullName": "Mumbai Indians"
    },
    {
        "id": 13,
        "playerName": "Kieron Pollard",
        "from": "MI",
        "price": "11.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "profileIcon": "https://assets.iplt20.com/ipl/IPLHeadshot2022/108.png",
        "teamFullName": "Mumbai Indians"
    },
    {
        "id": 13,
        "playerName": "Jasprit Bumrah",
        "from": "MI",
        "price": "13.80 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "profileIcon": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1124.png",
        "teamFullName": "Mumbai Indians"
    },
];

const teamsInfo = [
    {
        "id": 0,
        "teamName": "Mumbai Indians",
        "shortForm": "MI",
        "icon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png",
        "WonCount": 5,
        "color-top": "#006CB7",
        "coverUrl":"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Banner/MIbanner.jpg",
        "color-bottom": "#003B7A"
    },
    {
        "id": 1,
        "teamName": "Chennai Super King",
        "shortForm": "CSK",
        "icon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png",
        "WonCount": 4,
        "color-top": "#FCCA06",
        "coverUrl":"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/Banner/CSK.png",
        "color-bottom": "#F25C19"
    },
    {
        "id": 2,
        "teamName": "Royal challengers Bangalore",
        "shortForm": "RCB",
        "icon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png",
        "WonCount": 0,
        "color-top": "#6A6A6A",
        "coverUrl":"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Banner/RCBbanner.png",
        "color-bottom": "#1C1C1C"
    },
    {
        "id": 3,
        "teamName": "Kolkata Knight Riders",
        "shortForm": "KKR",
        "icon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png",
        "WonCount": 1,
        "color-top": "#3B215D",
        "coverUrl":"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Banner/KKRbanner.png",
        "color-bottom": "#552792"
    },
    {
        "id": 4,
        "teamName": "Delhi Capitals",
        "shortForm": "DC",
        "icon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Roundbig/DCroundbig.png",
        "WonCount": 0,
        "color-top": "#0078BC",
        "coverUrl":"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Banner/DCbanner.png",
        "color-bottom": "#17479E"
    },
    {
        "id": 5,
        "teamName": "Gujarat Titans",
        "shortForm": "GT",
        "icon": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png",
        "WonCount": 0,
        "color-top": "#1C1C1C",
        "coverUrl":"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Banner/GTBanner.png",
        "color-bottom": "#0B4973"
    },

];
$(function() {
    //Start CODE for slider in homepage
    let counter = 1;
    setInterval(function () {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 4) {
          counter = 1;
        }
      }, 3000);
    //End CODE for slider in homepage
    let teamsDetails = [];
    let playersDetails = [];
    let mainContainer = document.getElementById("TeamContainer");
    if(localStorage.getItem("teamsInfo") === null)
        teamsDetails = localStorage.setItem("teamsInfo", JSON.stringify(teamsInfo));
    
    if(localStorage.getItem("playersInfo") === null)
        playersDetails = localStorage.setItem("playersInfo", JSON.stringify(playersInfo));

    teamsDetails = JSON.parse(localStorage.getItem("teamsInfo"));
    
    if(teamsDetails.length > 0){
        let teamsHTML = '';
        let teamOptions = '<option value="" selected></option>';
        teamsDetails.forEach((team, index) => {
            teamsHTML += `<div class="card" style="background: linear-gradient(180deg, ${team['color-top']} 0%, ${team['color-bottom']} 100%);border: 2px solid ${team['color-top']};">
                <a href="/teamfolder/teams/teams.html?team=${team.shortForm}">
                    <div class="card-content">
                        <div class="team-logo"><img class="team-logo-img" src="${team.icon}" alt="${team.teamName}" /></div>
                    </div>
                    <div id="productDetails">
                        <h3 class="name-teams">${team.teamName} <i class="fa fa-trophy"style="margin-left:5px" aria-hidden="true"></i>${team.WonCount}</h3>
                        
                    </div>
                </a>
            </div>`;

            teamOptions += `<option value="${team.shortForm}">${team.teamName}</option>`;
        });
        mainContainer.insertAdjacentHTML("beforeend", teamsHTML); //Appending the Cards dynamically to div
        $("#customteamSearch").append(teamOptions);
    }    

    $("#customteamSearch").change(function(){
        $("#searchLink").attr("href",`/teamfolder/teams/teams.html?team=${this.value}&isSearch=true`)
    }); 

});