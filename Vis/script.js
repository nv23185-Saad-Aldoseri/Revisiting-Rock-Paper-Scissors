html
<! DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Rock Paper Scissors Game</title>
<style>
body {
font-family: Arial, sans-serif;
text-align: center;
margin-top: 50px;
button {
padding: 10px 20px;
font-size: 16px;
margin: 5px;
cursor: pointer;
</style>
</head>
<body>
<h1>Rock, Paper, Scissors Game</h1>
<div>
<button onclick="playGame('rock' )">Rock</button>
<button onclick="playGame('paper' )">Paper</button>
<button onclick="playGame('scissors')">Scissors</button>
</div>
<h2 id="result"></h2>
<script>
function playGame(playerChoice) {
const choices = ['rock', 'paper', 'scissors'];
const computerChoice = choices[Math.floor(Math.random() * 3)];
let result = '';
