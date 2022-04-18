$(function(){
    let url_string = location.href;
    let url = new URL(url_string);
    let team = url.searchParams.get("team");
    let isSearch = url.searchParams.get("isSearch");
    let mainContainer = document.getElementById("TeamContainer");
    if(team){
        // need to add validation for team check
        playersDetails = JSON.parse(localStorage.getItem("playersInfo"));
        teamsDetails = JSON.parse(localStorage.getItem("teamsInfo"));
        if(playersDetails.length > 0){
            let playerHTML = '';
            let teamsHTML = '';
            let totalPlyer = 0;
            let topOrderBatsman = [];
            let topOrderBowler = [];
            // let teamData = teamsDetails.filter((eachTeam) => {
            //     return eachTeam.shortForm == team;
            // })[0];
            let teamOptions = '<option value="" selected></option>';
            let teamData = teamsDetails.filter((eachTeam) => {
                teamOptions += `<option value="${eachTeam.shortForm}">${eachTeam.teamName}</option>`
                return eachTeam.shortForm == team;
            })[0];
            $("#customteamSearch").append(teamOptions);
            $("#customteamSearch").change(function(){
                $("#searchLink").attr("href",`/teamfolder/teams/teams.html?team=${this.value}&isSearch=true`)
            }); 
            playersDetails.forEach((player) => {
                if(player.from === team){
                    playerHTML += `<div class="card" style="background: linear-gradient(180deg, ${teamData['color-top']} 0%, ${teamData['color-bottom']} 100%);border: 2px solid ${teamData['color-top']};">
                        <a href="../players/players.html?id=${player.id}">
                            <div class="card-content">
                                <div class="team-logo"><img class="team-logo-img" src="${player.profileIcon}" alt="${player.playerName}"></div>
                            
                            </div>
                        
                            <div id="productDetails">
                                <h2 class="name-teams">${player.playerName}</h2>
                                <div class="player-price"> 
                                    <span>${player.teamFullName}</span>
                                    <span >${player.price}</span> 
                                </div>
                                <div class="player-price"> 
                                    <span >${player.description}</span>
                                    <span >${player.isPlaying?'Playing':'On-bench'}</span>
                                </div>
                            </div>
                        </a>
                    </div>`;
                    totalPlyer++;
                    if(player.description === 'Batsman'){
                        topOrderBatsman.push(player.playerName);
                    }else if(player.description === 'Bowler'){
                        topOrderBowler.push(player.playerName);
                    }
                }
            });

            if(teamData.shortForm == team){
                teamsHTML += `<tr>
                <td colspan="2" style="text-align:center;border: none;background-image: url(${teamData.coverUrl});background-repeat: no-repeat;background-size: cover;"><img class="logo" src="${teamData.icon}" alt="${teamData.teamName}"/></td>
            </tr>
                    <tr>
                <th>Team Name</th>
                <td>${teamData.teamName}</td>
                </tr>
                <tr>
                    <th>Team Player Count</th>
                    <td>${totalPlyer}</td>
                </tr>
                <tr>
                    <th>Top Batsman</th>
                    <td>${topOrderBatsman.join(', ')}</td>
                </tr>
                <tr>
                    <th>Top Bowler</th>
                    <td>${topOrderBowler.join(', ')}</td>
                </tr>
                <tr>
                    <th>Championship Won Count</th>
                    <td>${teamData.WonCount}</td>
                </tr>`;
            }
            if(isSearch){
                mainContainer.insertAdjacentHTML("beforeend", playerHTML);
                $("#team-details table tbody").append(`<tr><td class="squad-name-head" style="text-align:center;border: none;padding: 0rem">${teamData.teamName}</td></tr>`);
            }else{
                $("#team-details table tbody").append(teamsHTML);
                mainContainer.insertAdjacentHTML("beforeend", playerHTML);
            }         
            
        }
    }
});