# Projekt-Dokumentation

Holzherr Janic

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|       | 0.0.1   |                                                              |
|       | 0.0.2   |                                                              |
|       | 0.0.3   |                                                              |
|       | 0.0.4   |                                                              |
|       | 0.0.5   |                                                              |
|       | 0.0.6   |                                                              |
|       | 1.0.0   |                                                              |

# 0 Ihr Projekt

Casino Spiel

# 1 Analyse

* Tier 1 (Presentation): Glückspiel anzeigen
* Tier 2 (Webserver): Eingaben validieren
* Tier 3 (Application Server): Glückspiel berechnen
* Tier 4 (Dataserver): Benutezrdaten speichern

# 2 Technologie

* Tier 1 (Presentation): Next.js, Typescript, HTML, CSS
* Tier 2 (Webserver): Next.js, Postman (für Tests)
* Tier 3 (Application Server): Next.js, Typescript
* Tier 4 (Dataserver): SQLite

# 3 Datenbank

✍️ Wie steuern Sie Ihre Datenbank an? Wie ist das Interface aufgebaut? 

Da Next.js ein FullStack Framework ist, werde ich alles nach der Dokumentation und Richtline von Next.js.

# 4.1 User Stories

| Nr | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| A    | Muss                | Funktional     |  |
| B  | Muss                | Funktional     |  |
| C  | Muss                | Funktional     | |
| D  | Muss                | Qualität     |  |
| E  | Kann                | Rand     | |

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
