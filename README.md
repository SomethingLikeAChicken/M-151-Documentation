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
| 8  | M | Funktional | Wenn der Kandidat eine Antwort gibt, möchte ich darüber informiert werden, ob sie richtig oder falsch ist, damit ich sein Wissen verbessern und sich für die nächsten Fragen vorbereiten kann. |
| 9  | M | Funktional | Die Highscore-Liste soll nach Rang sortiert werden, basierend auf der Höhe des Geldbetrags, damit der Kandidat seine Ergebnis im Vergleich zu anderen Spielern sehen kann. |
| 10  | M | Funktional | Als Kandidat möchte ich sicherstellen, dass kein Rätselwort oder keine Phrase mehr als einmal im Spiel vorkommt, damit das Spiel fair bleibt. |
| 11  | M | Funktional | Als Kandidat möchte ich jederzeit entscheiden können, ob ich weiterspielen oder aufhören und mein Ergebnis in die Highscore-Liste übernehmen möchte, um mich mit anderen Spielern messen zu können |
| 12 | M | Funktional |Als Kandidat möchte ich, das meine Spielrunden gezählt werden, um zu sehen wie viele Runden ich effektiv gebraucht habe um meine Geldsumme zu erspielen. |
| 12 | M | Als Kandidat möchte ich, dass das Spiel genügend Wörter hat, um ein spassiges Spielerlebnis zu haben. |


# 4.2 Testfälle

| TC-Nr | Vorbereitung | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| A.1  | Der Verkäufer befindet sich auf der Verkaufsseite.             | Unter Kommunikationskanäle "Tel. 076 600 60 60" eingeben. | Auf der Artikelanzeige wird nun die Telefonnummer angezeigt.                   |
| A.2  | Der Verkäufer befindet sich auf der Verkaufsseite.              | Unter Kommunikationskanäle "Facebook: https://www.facebook.com/zuck/" eingeben.         | Auf der Artikelanzeige wird nun der Link zu Mark Zuckerbergs Facebookprofil angezeigt.                   |
| B.1  | Der Verkäufer befindet sich auf der Verkaufsseite.              | Unter Foto ein Bild von einer Katze einfügen. | Auf der Artikelanzeige wird nun das Bild der Katze angezeigt.                   |
| B.2  | Der Verkäufer befindet sich auf der Verkaufsseite.              | Unter Beschreibung "Diese Katze steht nicht zum Verkauf. Es wird bloss getestet" eingeben. | Auf der Artikelanzeige wird nun die Produkbeschreibung angezeigt.                |
| C.1  | Der Käufer befindet sich auf der Artikelanzeige der Katze            | Unter Bieten einen Betrag eingeben, der tiefer als das aktuelle Angebot ist. | Es steht in rot "Ihr Angebot muss höher als das Aktuelle sein."        |
| C.2  | Der Käufer befindet sich auf der Artikelanzeige der Katze            | Unter Bieten einen Betrag eingeben, der höher als das aktuelle Angebot ist. | Der eingetragene Betrag steht nun als aktuellen Angebot unter dem Artikel.        |
| D.1  | Der Tester hat seinen Lieblingsbrowser offen und das Frontend, Backend und die Datenbank lokal gestartet. | Die URL im Browser für die Plattform eingeben. | Die Ladezeit beträgt kürzer als zwei Sekunden, sofern das Frontend schon bereitgestellt wurde.        |
| E.1  | Der Tester Hat die Website auf seinem Rechner offen. | Alle Knöpfe und Texte überprüfen, ob sie zugänglich sind.  | Alle Knöpfe führen die erwartete Aktionen aus, alle Texte aus dem HTML Quelltext werden im richtigen Layout angezeigt. |
| E.1  | Der Tester Hat die Website auf seinem Rechner offen und stellt bei den Entwicklertools ein, dass die Seitengrössen so, wie auf dem iPhone sind. | Alle Knöpfe und Texte überprüfen, ob sie zugänglich sind.  | Alle Knöpfe führen die erwartete Aktionen aus, alle Texte aus dem HTML Quelltext werden im richtigen Layout angezeigt. |

# 5 Prototyp

✍️ Erstellen Sie Prototypen für das GUI (Admin-Interface und Quiz-Seite).

# 6 Implementation

✍️ Halten Sie fest, wann Sie welche User Story bearbeitet haben

| User Story | Datum | Beschreibung |
| ---------- | ----- | ------------ |
| ...        |       |              |

# 7 Projektdokumentation

| US-№ | Erledigt? | Entsprechende Code-Dateien oder Erklärung |
| ---- | --------- | ----------------------------------------- |
| 1    | ja / nein |                                           |
| ...  |           |                                           |

# 8 Testprotokoll

✍️ Fügen Sie hier den Link zu dem Video ein, welches den Testdurchlauf dokumentiert.

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
