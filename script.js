"use strict";

// Fonction pour générer un calendrier avec le bon nombre de jours
function generateCalendar(max_days_in_month) {
    const days_in_a_week = 7;
    let current_day = 1;
    let table = "<table>";

    // Générer les lignes du tableau
    for (let i = 0; i < 5; i++) {
        table += "<tr>";
        for (let c = 0; c < days_in_a_week; c++) {
            if (current_day <= max_days_in_month) {
                table += "<td>" + current_day++ + "</td>";
            } else {
                table += "<td></td>"; // Case vide si le jour n'est pas encore arrivé
            }
        }
        table += "</tr>";
    }

    table += "</table>";
    return table;
}

// Partie 0: Générer un <table> pour le mois de janvier
let max_days = 31;
let table0 = "<table><tr>";
for (let i = 1; i <= max_days; i++) {
    table0 += "<td>" + i + "</td>";
}
table0 += "</tr></table>";
document.getElementById('partie0').innerHTML = table0;


// Partie 1: Générer un <table> sur plusieurs lignes
let max_cols = 7, max_lines = 5;
let table1 = generateCalendar(max_days);
document.getElementById('partie1').innerHTML = table1;

// Partie 2: Générer le mois de janvier
let table2 = generateCalendar(max_days);
document.getElementById('partie2').innerHTML = table2;

// Partie 3: Isoler le code dans une fonction
function print_table_month(max_days_in_month) {
    const table3 = generateCalendar(max_days_in_month);
    document.getElementById('partie3').innerHTML = table3;
}

print_table_month(31); // janvier

// Partie 4: Générer les autres mois
let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let month_names = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

for (let i = 0; i < months.length; i++) {
    const table4 = generateCalendar(months[i]);
    document.getElementById('partie4').innerHTML += "<h3>" + month_names[i] + "</h3>" + table4 + "<hr>";
}

// Partie 5: Afficher le jour courant en rouge
function highlight_today(max_days_in_month) {
    const today = new Date().getDate(); // Jour actuel
    const days_in_a_week = 7;
    let current_day = 1;
    let table = "<table>";

    for (let i = 0; i < 5; i++) {
        table += "<tr>";
        for (let c = 0; c < days_in_a_week; c++) {
            if (current_day <= max_days_in_month) {
                let class_today = (current_day === today) ? "today" : "";
                table += "<td class='" + class_today + "'>" + current_day++ + "</td>";
            } else {
                table += "<td></td>";
            }
        }
        table += "</tr>";
    }
    table += "</table>";
    document.getElementById('partie5').innerHTML = table;
}

highlight_today(31); // janvier
