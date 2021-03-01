Sovellusta voi testata täällä: https://quiz-json.herokuapp.com

Tämä on projektikurssia varten toteutettu web-sovelluks nimeltä “Quiz-app”. Sovelluksen tarkoituksena on tarjota käyttäjälleen viihdettä erilaisten kyselyjen muodossa. Käyttäjä voi lisäksi kommentoida tekemiään kyselyitä ja lukea muiden saman kyselyn tehneiden kommentteja. Itse kyselytuloksia ei tallenneta.

Ensisijaisesti projekti on toteutettu JavaScriptin React-kirjastoa hyödyntäen. Reactiin päädyttiin, sillä se on nykyaikainen tapa toteuttaa verkkosovelluksia. Lisäksi ulkoasun muotoilussa hyödynnettiin HTML:ää, sekä CSS -tiedostojen kautta toteutettuja muotoilusääntöjä. Koska kyseessä on web-sovellus, oli luontevaa tehdä työstä vielä tuotantoversio Herokun tarjoamalle julkaisualustalle. 

Tässä työssä painopiste oli käyttöliittymän suunnittelussa ja toteutuksessa, joten palvelin päätettiin toteuttaa yksinkertaisella JSON-palvelimella. Palvelimelle on .json tiedostoon tallennettu kehitystyön aikana valmiiksi laaditut kyselyt, sekä käyttäjien syöttämät kommentit. Palvelimen kanssa kommunikoidaan axiosin välityksellä. Sovelluksen tässä versiossa ei ole mahdollista lisätä kyselyitä muutoin kuin tekemällä muutoksia suoraan palvelimen tiedostoon, eli tähän ominaisuuteen ei ole tarjolla käyttäjärajapintaa. Tämä laajennus ei kuitenkaan vaatisi kovin suurta lisätyötä projektin nykyisen version pohjalta.

Kaikkien kyselyiden tulosten laskenta perustuu yksinkertaiseen järjestysalgoritmiin. Vastausvaihtoehtoja on neljä ja käyttäjä valitsee vaihtoehdoista itselleen sopivat. Lopputulos perustuu siihen, mitä vaihtoehtoa (a-d) käyttäjä on valinnut eniten. 
