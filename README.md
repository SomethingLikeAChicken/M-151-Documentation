# Projekt-Dokumentation

Holzherr Janic

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
| 6.02.2023 | 0.0.1   | Gameprinzip + Logik implementiert. |
| 13.02.2023 | 0.0.2 | Datenbank (SQLite) eingebunden mit Prisma |
| 13.02.2023 | 0.0.3   | Login mit Nextauth versucht einzurichten (nicht funktioniert) |
| 20.02.2023 | 0.0.4   | Backend für das Spiel entwickelt und eingebunden |
| 26.02.2023 | 0.0.5   | Highscoreliste implementiert, ranglistensystem entwickelt | 
| 26.02.2023 | 0.0.6   | Login nocheinmal versucht zu implementieren (gleicher fehler wie beim letzten versuch) |
| 27.02.2023 | 1.0.0   | Bugs behoben |

# 0 Ihr Projekt

In meinem Projekt habe ich mit Next.js das Gameprinzip der Fernsehsendung "Glücksrad" implementiert. Dies dient als LB für das Modul 151

# 1 Analyse

* Tier 1 (Presentation): Wörterrate Spiel und Glücksrad anzeigen
* Tier 2 (Webserver): Eingaben validieren
* Tier 3 (Application Server): Glücksspiel ausgaben generieren
* Tier 4 (Dataserver): Ranglistensystem, Highscoreliste und Namen speichern

# 2 Technologie

* Tier 1 (Presentation): React, JS, HTML & CSS
* Tier 2 (Webserver): Next.js
* Tier 3 (Application Server): Next.js, Prisma
* Tier 4 (Dataserver): SQLite

# 3 Datenbank

✍️ Wie steuern Sie Ihre Datenbank an? Wie ist das Interface aufgebaut? 

API-Routen von Next.js ermöglichen es, Seiten zu verwalten. Mit React kann man darauf wie bei einer REST-API zugreifen. Der Next.js-Server sammelt die Daten auf der Website und gibt sie letztendlich an den Client weiter.

Wenn ein Client die Website aufruft, ruft das Frontend den Endpunkt "api/beispiel" auf. Die Funktion auf diesem Endpunkt verarbeitet die Anfrage und gibt die Daten an die Datenbank weiter. Anschlieend gibt die Datenbank die Daten an den Next.js-Server zurück, der eine Seite mit den Daten generiert. Schliesslich sendet der Server die generierte Seite an den Client, der sie anzeigen kann.

# 4.1 User Stories

| Nr | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| 1  | M | Funktional | Als Administrator möchte ich mich durch Eingabe meines Benutzernamens und Passworts authentifizieren können, um Zugriff auf die geschützten     Funktionen der Anwendung zu erhalten. | 
| 2  | M | Funktional | Als Administrator möchte ich in der Lage sein, Phrasen und Rätselwörter anzulegen, zu ändern und zu löschen, damit ich die Spielfragen verwalten kann. |
| 3  | M | Funktional | Als Administrator möchte ich Kategorien erstellen und jedem Wort oder jeder Frage eine Kategorie zuordnen können, damit die Fragen organisiert sind und leichter gefunden werden können. |
| 4  | M | Funktional | Als Administrator möchte ich die Möglichkeit haben, einzelne Einträge in der Highscore-Liste zu löschen, um die Liste zu verwalten. |
| 5  | M | Funktional | Als Kandidat möchte ich meinen Namen eingeben können, damit er auf der Highscore-Liste erscheint und ich mein Ergebnis mit anderen vergleichen kann. |
| 6  | M | Funktional | Als Kandidat möchte ich zu jeder Zeit meinen Kontostand sehen können, um zu wissen, wie viel Geld ich bisher gewonnen habe. |
| 7  | M | Funktional | Als Kandidat möchte ich zu jeder Zeit meine Lebenspunkte sehen können, damit ich weiß, wie viele falsche Antworten ich noch geben kann, bevor das Spiel endet. |
| 8  | M | Funktional | Als Kandidat möchte ich, wenn ich einen Buchstaben rate ein feedback bekommen ob dieser im wort beinhaltet ist oder nicht, um zu wissen ob ich es erraten habe. |
| 9  | M | Funktional | Die Highscore-Liste soll nach Rang sortiert werden, basierend auf der Höhe des Geldbetrags, damit der Kandidat seine Ergebnis im Vergleich zu anderen Spielern sehen kann. |
| 10  | M | Funktional | Als Kandidat möchte ich sicherstellen, dass kein Rätselwort oder keine Phrase mehr als einmal im Spiel vorkommt, damit das Spiel fair bleibt. |
| 11  | M | Funktional | Als Kandidat möchte ich jederzeit entscheiden können, ob ich weiterspielen oder aufhören und mein Ergebnis in die Highscore-Liste übernehmen möchte, um mich mit anderen Spielern messen zu können |
| 12 | M | Funktional |Als Kandidat möchte ich, das meine Spielrunden gezählt werden, um zu sehen wie viele Runden ich effektiv gebraucht habe um meine Geldsumme zu erspielen. |
| 13 | M | Rand |Als Kandidat möchte ich, dass das Spiel genügend Wörter hat, um ein spassiges Spielerlebnis zu haben. |


# 4.2 Testfälle

| TC-Nr | Vorbereitung | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  | Die Anwendung ist gestartet, der User ist nicht angemeldet| Der User klickt auf Anmelden| Der User wird weitergeleitet auf die Offizielle Anmeldeseite von Github und kann sich dort anmelden. |
| 1.2  | Die Anwendung ist gestartet, der User ist eingeloggt | Der User navigiert zu Admin Interface| Der Admin kann nun Rätselwörter anlegen |
| 1.3  | Die Anwendung ist gestartet, der User ist eingeloggt | Der User navigiert zu Admin Interface| Der Admin kann nun Rätselwörter löschen |
| 1.4  | Die Anwendung ist gestartet, der User ist eingeloggt | Der User navigiert zu Admin Interface| Der Admin kann nun Rätselwörter bearbeiten |
| 1.5  | Die Anwendung ist gestartet, der User ist eingeloggt | Der User navigiert zu Admin Interface | Der Admin kann nun Einträge aus der Highscore Liste löschen |
| 1.6  | Die Anwendung ist gestartet, der User ist eingeloggt | Der User navigiert zu Home | Der Kontostand ist immer ersichtlich, wie auch die Herzen |
| 1.7  |Die Anwendung ist gestartet, der User ist eingeloggt|Der User navigiert zu Home, dann gibt er sich einwenig geld durch Spin and Win, dann klickt er auf New Game und gibt einen falschen buchstaben ein|Es wird ihm ein Herz abgezogen und es wird durch einen Alert signalisiert.|
| 1.8  |Die Anwendung ist gestartet, der User ist eingeloggt| Der User navigiert zu Highscores|Dem User werden nun die Highscores mit den Daten angezeigt.|
| 1.9  |Die Anwendung ist gestartet, der User ist eingeloggt|Der User navigiert zu Home und klickt new Game und erräht das Wort|Der Spieler bekommt einen Geldbetrag und es wird ihm mit einem Alert signalisiert das er gewonnen hat.|
| 1.10 | Die Anwendung ist gestartet, der User ist eingeloggt | Der User navigiert zu Home, klickt new Game, errät das Wort und klickt erneut new Game| ein neues Wort wird generiert|
| 1.11 | Die Anwendung ist gestartet, der User ist eingeloggt | Der User navigiert zu Home, klickt new Game, errät das Wort und klickt pay out| Sein Name, Geldbetrag und die Anzahl Spiele gespielt wird in die Highscore liste eingetragen.|
| 1.12 |Die Anwendung ist gestartet, der User ist eingeloggt | Der user navigiert zu Home, klickt auf Spin and Win| Entweder bekommt er einen zufälligen Geldbetrag um sein kontostand zu verbessern, oder er verliert |
| 1.13 |Die Anwendung ist gestartet, der User ist eingeloggt| Der user navigiert zu Home, und gibt seinen Namen oben im Textinput ein.| sobald der User payout klickt sieht man den gerade eingegebenen Namen in der Highscore liste |

# 5 Prototyp

![mock game](https://github.com/SomethingLikeAChicken/M-151-Documentation/blob/main/src/img/mockgame.png)
![mock admin interface](https://github.com/SomethingLikeAChicken/M-151-Documentation/blob/main/src/img/mockadmininterface.png)

# 6 Implementation

✍️ Halten Sie fest, wann Sie welche User Story bearbeitet haben

| User Story | Datum | Beschreibung |
| ---------- | ----- | ------------ |
| 1        | 13.02.2023 | implemenitert (mit fehlern) |
| 2 | 13.02.2023 | teilweise implementiert (mit fehlern) |
| 3 | 13.02.2023 | nicht implementiert |
| 4 | 13.02.2023 | nicht implementiert |
| 5 | 6.02.2023 | implementiert |
| 6 | 6.02.2023| implementiert |
| 7 | 6.02.2023 | implementiert |
| 8 | 20.02.2023 | implementiert |
| 9 |  26.02.2023 | implementiert |
| 10 | 20.02.2023 | implementiert |
| 11 | 26.02.2023 | implementiert |
| 12 | 26.02.2023 | implementiert |
| 13 | 20.02.2023 | implementiert |
# 7 Projektdokumentation

| US-№ | Erledigt? | Entsprechende Code-Dateien oder Erklärung |
| ---- | --------- | ----------------------------------------- |
| 1    | nein | der versuch ist bei /src/pages/api/auth/[...nextauth.js] |
| 2  | teilweise | siehe src/pages/AdminInterfacePage.js und src/pages/api/AdminInterface.js|
| 3| nein | |
| 4 | nein |  |
| 5 | ja | siehe src/pages/index.js/z.157 | 
| 6 | ja | siehe src/pages/index.js/z.191 |
| 7 | ja | siehe src/pages/index.js/z.186 |
| 8 | ja | siehe src/pages/index.js/z.56 & z.63|
| 9 | ja | siehe src/pages/components/Highscore.js & src/pages/HighScorePage.js & src/pages/api/score.js|
| 10 |ja | siehe src/pages/index.js/z.102-130|
| 11 |ja | siehe src/pages/index.js/z.199 & src/pages/components/PayoutBtn.js & src/pages/index.js/z.116-131 & src/pages/api/score.js|
| 12 | ja | siehe src/pages/index.js/z.190|
| 13 | ja | siehe prisma/seed.js|

# 8 Testprotokoll

✍️ Fügen Sie hier den Link zu dem Video ein, welches den Testdurchlauf dokumentiert.
![test video](https://github.com/SomethingLikeAChicken/M-151-Documentation/blob/main/src/img/testvideo.mp4)

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

# 9 `README.md`

✍️ Beschreiben Sie ausführlich in einer README.md, wie Ihre Applikation gestartet und ausgeführt wird. Legen Sie eine geeignete Möglichkeit (Skript, Export, …) bei, Ihre Datenbank wiederherzustellen.

# 10 Allgemeines

- [ ] Ich habe die Rechtschreibung überprüft
- [ ] Ich habe überprüft, dass die Nummerierung von Testfällen und User Stories übereinstimmen
- [ ] Ich habe alle mit ✍️ markierten Teile ersetzt
