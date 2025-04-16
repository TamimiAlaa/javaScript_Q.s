// Write a function called checkSeason, 
// it takes a month parameter and returns 
// the season:Autumn, Winter, Spring or Summer.

question = document.getElementById("question");
ans = document.getElementById("answer");
ans.textContent = 'Answer';

function checkSeason(season){
    
    if(season == 'december' || season == 'january' || season == 'february' )
      ans.textContent = 'Season: winter';

    else if(season == 'april' || season == 'march' || season == 'may')
        ans.textContent = 'Season: spring';

    else if(season == 'july' || season == 'august' || season == 'september')
        ans.textContent = 'Season: summer';

    else if(season == 'october' || season == 'november' || season == 'june')
        ans.textContent = 'Season: autumn';
    else
    ans.textContent = 'Error';

    
}



question.addEventListener('click',function(){
    let season = prompt("Enter a season in full name");
    season = season.toLowerCase();
    checkSeason(season);
});



