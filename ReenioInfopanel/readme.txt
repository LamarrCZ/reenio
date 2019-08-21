Spuštění
 - Task Runner - Start
 - Run na projektu ReenioInfopanel (Ctrl+F5)


Data
 - napojení na ostrou verzi www.reenio.cz
 - vytvoření subjektu pro testovací/pracovní účely
 - zažádat o nastavení balíčku a povolení API
 - získání API klíče v administrace reenio - Nastavení - API 


 Hlavní knihovna pro dotazy
 - ReenioApi/ReenioApiClient - třída, která vytváří dotaz na server a poskytuje data pro Controler 



 API dotazy
  
 Změna stavu rezervace
	BASE_URL + "admin/reservation/setstate/" + reservationId (long)
	input: state (int)

Nastavení odbavení vstupenky
	BASE_URL + "admin/ticket/setischecked"
	input: reservationId (long), ticketId (short), isChecked (bool)

Informace o konkrétních zdrojích
	BASE_URL + "admin/resource/" + type (string: place/service/employee)

Získání seznamu rezervací
	BASE_URL + "admin/reservation/list
	input: start (utcdate), end (utcdate) - iso8601

