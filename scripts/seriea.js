/**
 * Created by mihailharitonov on 10.12.16.
 */
$(document).ready(function () {
    $.getJSON('https://raw.githubusercontent.com/sportsru/table-task/master/seriea.json', function (data) {
        var teams = data.teams,
            teamsLen = teams.length,
            tableColor = "",
            tableHead = "<table><tr><th></th><th>Команда</th> <th>М</th> <th class='win'>В</th><th class='draw' >Н</th> <th class='lose'>П</th><th class='goals'>Заб</th> <th class='conceded_goals'>Проп</th> <th> О </th> </tr> ";
        var flag = "<img src='flag.png' alt='Italy' id='flag'>";


        for (var i = 0; i < teamsLen; ++i) {

            var name = teams[i].name,
                flag_country = teams[i].flag_country,
                tag_url = teams[i].tag_url,
                matches = teams[i].matches,
                win = teams[i].win,
                draw = teams[i].draw,
                lose = teams[i].lose,
                score = teams[i].score,
                goals = teams[i].goals,
                conceded_goals = teams[i].conceded_goals,
                place = teams[i].place,
                color = teams[i].color;
            if (flag_country == 'Италия') {
                var myTeam = '<td class="myTeam"><a class="comand" href="' + tag_url + '">' + name + '</a></td>';


                var tableBody = myTeam
                    + '<td>' + matches + '</td>'
                    + '<td class="win">' + win + '</td>'
                    + '<td class="draw">' + draw + '</td>'
                    + '<td class="lose">' + lose + '</td>'
                    + '<td class="goals">' + goals + '</td>'
                    + '<td class="conceded_goals">' + conceded_goals + '</td>'
                    + '<td class="score">' + score + '</td>';
                switch (color) {
                    case '1':
                    {
                        tableColor += '<tr>' + '<td class="first">' + place + '</td>' + '</td>' + tableBody + '</tr>';
                    }
                        continue;
                    case '2':
                    {
                        tableColor += '<tr>' + '<td class="second">' + place + '</td>' + '</td>' + tableBody + '</tr>';
                    }
                        continue;
                    case '':
                    {
                        tableColor += '<tr>' + '<td class="third">' + place + '</td>' + '</td>' + tableBody + '</tr>';
                    }
                        continue;
                    case '4':
                    {
                        tableColor += '<tr>' + '<td class="fourth">' + place + '</td>' + '</td>' + tableBody + '</tr>';
                    }
                        break
                }

                $('#table').html(tableHead + tableColor + '</table>');
                $('.comand').before(flag);
            }
        }

    });

});
