            ** Koncept tidsregistreringsapp hvor man kan få vist en liste over brugt tid, delt op pr. måned. 
            udskrive listen via firebase til csv eller Json.

            ** Brainstorm
            Knap der opretter nyt projekt
            i projektet skal der være et ur, med en startknap og en stopknap.
            for at opfylde kriteriene for opgaven så post tiden til firebase.
            hent derefter hver enkelt tid og put dem i en liste.
            for hver tid der bliver registreret i et projekt tilføres en linie og i bunden ses det samlede tidsforbrug.
            Hvis der oprettes endnu et projekt sker det samme. 
            man kommer ind på hvert enkelt projekt via url params.
            
            **Featurelist
            Menu med tre punkter.
            Home. her kan man oprette et nyt projekt.
            projekt. Her kan man komme indpå hver enkelt oprettede projekt.
            list. her kan man vælge at se den tidsliste man ønsker. og printe listen.

            Startknap, starter tid, bliver til Stopknap. Stopknap stopper tid, bliver til Startknap 

            ** MVP 
            start / stop ur , registrer tiden i en liste. nice to: oprette nye projekter. 

            ** Userflow
            Bruger kan starte og stoppe uret tiden registreres når uret stoppes og postes til firebase, når bruger er online.