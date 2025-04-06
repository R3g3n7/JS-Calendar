This project is a simple calendar generator that creates a table layout for each month of the year. It displays the days of the month in a table with 7 columns (representing the days of the week) and multiple rows, depending on the number of days in the month.

Features
Generates a table with the correct number of days for each month.

Automatically adjusts the number of rows required to accommodate all the days of the month.

Highlights the current day in red (using JavaScript).

Supports all months with varying days (31, 28, 30 days).

Automatically starts the month from day 1 and fills the table accordingly.

Usage
HTML Structure: This project uses basic HTML to display the calendar, including div elements where the calendars are injected.

Example: <div id="partie0"></div>, <div id="partie1"></div>, and others.

JavaScript: The main logic is in JavaScript:

The generateCalendar() function creates a calendar for a given number of days in the month.

The highlight_today() function highlights the current day in red.

The print_table_month() function is used to display a calendar for each month.

CSS: The style for the calendar is defined within the <style> tags. The calendar layout includes:

7 columns for the days of the week.

Days are displayed in a table with a modern, minimal design.

Hover effects on the days, and special highlighting for the current day.
