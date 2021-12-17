#Pokedex

#descripción
esta es una aplicacion que consume una Api-Rest y tiene como objetivo enfrentar
a dos pokemones y mostrar el ganador.

#Requisitos

-Tener instalado un editor de codigo por preferencia Visual Studio

-abrir la Terminal para iniciar un servidor local

#pasos de ejecucion

-primer paso: clonar el repositorio con git clone en la terminal (CMD)

-segundo paso: instalar las dependencias con npm install en la terminal (CMD)

-tercer paso: iniciar el servidor local con ng serve en la terminal (CMD)

-cuarto paso: abrir el navegador con la url http://localhost:4200/ y en la pagina 
principal digitar los nombres de los pokemones que desea enfrentar.


#Reglas de la puntuacion para cada pokemon


|    Tipo de daño    |      Descripción       |Puntos de daño|
| :----------------  | :-------------------:  |-----------:  |
| double_damage_from | Lista de tipos que sonmuy efectivos contra este tipo.     |  70   |
|   double_damage_to | Lista de tipos contra los que este tipo es muy eficaz.    | +70   |
|   half_damage_from | Lista de tipos que no son muy efectivos contra este tipo. | -30   |
|   half_damage_to   | Lista de tipos contra los que este tipo no es muy eficaz. | +30   |
|   no_damage_from   | Lista de tipos que no tienen efecto sobre este tipo.      |   0   |
|   no_damage_to     | LLista de tipos sobre los que este tipo no tiene efecto.  |   0   |


#ejemplo del ejercicio

|        TIPO GRASS/POISON        |               TIPO FIRE         |
|---------------------------------|---------------------------------|
| -70 PTS double_damage_from FIRE | +70 PTS double_damage_to GRASS  |
| +30 PTS half_damage_to FIRE     | -30 PTS half_damage_from GRASS  |
|          -40 Puntos             |           +40 Puntos            |

#imagen
![pokedex](/src/assets/image/Captura.PNG)




