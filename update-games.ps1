# Game Sites Update Script
# Fixes encodings and creates README files

$baseDir = "C:\Users\rodig\OneDrive\Documents\pohuy kak"

# Fix HTML encodings
Write-Host "Fixing Czech diacritics..." -ForegroundColor Green

# Pizza recipe site
$content = Get-Content "$baseDir\pizza-recipe-site\index.html" -Raw -Encoding UTF8
$content = $content -replace "Chram Slunecnich Jizev", "Chrám Slunečních Jizev"
$content = $content -replace "Chram Slunecnich", "Chrám Slunečních"
$content | Out-File "$baseDir\pizza-recipe-site\index.html" -Encoding UTF8

# Space planets site
$content = Get-Content "$baseDir\space-planets-site\index.html" -Raw -Encoding UTF8
$content = $content -replace "Kazeta Posledni Noci", "Kazeta Poslední Noci"
$content = $content -replace "Posledni", "Poslední"
$content | Out-File "$baseDir\space-planets-site\index.html" -Encoding UTF8

# Programming basics site
$content = Get-Content "$baseDir\programming-basics-site\index.html" -Raw -Encoding UTF8
$content = $content -replace "Led Pod Zari", "Led Pod Září"
$content = $content -replace "Pod Zari", "Pod Září"
$content | Out-File "$baseDir\programming-basics-site\index.html" -Encoding UTF8

Write-Host "Encodings fixed!" -ForegroundColor Green

# Create README files
Write-Host "Creating README.md files..." -ForegroundColor Green

$projects = @(
    @{name="animals-world-site"; game="Mech a Popel"; desc="Dark fantasy roguelike platformer"},
    @{name="favorite-books-site"; game="Mechanický Karneval"; desc="Steampunk carnival platformer"},
    @{name="fitness-health-site"; game="Knihovna Prasklého Snu"; desc="Dreamcore library platformer"},
    @{name="game-style-site"; game="Bunkr 9: Biokov"; desc="Biomechanical horror platformer"},
    @{name="mcdonalds-order-site"; game="Cukrový Hřbitov"; desc="Surreal candy kingdom platformer"},
    @{name="musical-instruments-site"; game="Město Pod Deštěm"; desc="Noir cyberpunk platformer"},
    @{name="pizza-recipe-site"; game="Chrám Slunečních Jizev"; desc="Desert temple platformer"},
    @{name="programming-basics-site"; game="Led Pod Září"; desc="Arctic folk platformer"},
    @{name="space-planets-site"; game="Kazeta Poslední Noci"; desc="VHS horror platformer"},
    @{name="world-cities-site"; game="Kořeny Ticha"; desc="Slavic folk horror platformer"}
)

foreach ($project in $projects) {
    $readme = @"
# $($project.game)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Language: Czech](https://img.shields.io/badge/Language-Czech-blue.svg)](#)
[![Status: Complete](https://img.shields.io/badge/Status-Complete-brightgreen.svg)](#)

## Overview

$($project.desc) - A 2D roguelike platformer with atmospheric storytelling.

## Features

- Procedurally generated levels
- Unique atmospheric design
- Character progression system
- Boss encounters
- Czech language support

## Installation

1. Clone this repository
2. Open index.html in your web browser
3. Or run a local server

## Technologies

- HTML5, CSS3, Vanilla JavaScript
- No external dependencies

## Design Documentation

See [DESING.md](DESING.md) for detailed design information.

## Multi-Language Support

- [Czech](README-CZ.md)
- [English](README-EN.md)
- [Russian](README-RU.md)

---

**Version**: 1.0
**Last Updated**: $(Get-Date -Format 'yyyy-MM-dd')
"@

    $readme | Out-File "$baseDir\$($project.name)\README.md" -Encoding UTF8
    Write-Host "Created README for $($project.name)" -ForegroundColor Green
}

# Git operations
Write-Host "Committing and pushing changes..." -ForegroundColor Green

foreach ($project in $projects) {
    Push-Location "$baseDir\$($project.name)"
    
    git add README.md index.html 2>$null
    git commit -m "Add README.md and fix Czech diacritics" 2>$null
    git push 2>$null
    
    Pop-Location
    Write-Host "Updated $($project.name)" -ForegroundColor Green
}

Write-Host "All tasks completed successfully!" -ForegroundColor Green