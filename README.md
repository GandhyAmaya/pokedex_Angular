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

|              Relaciones de Daño (damage_relations)         |
| :-----------------------------: |
|    Tipo de daño    |      Descripción       |Puntos de daño|
| :----------------  | :-------------------:  |-----------:  |
|                    | Lista de tipos que son |              |
| double_damage_from | muy efectivos contra   |     -70      |
|                    | este tipo.             |              |
|                    | Lista de tipos contra  |              |
|   double_damage_to |los que este tipo es    |      +70     |
|                    |  muy eficaz.           |              |
|                    | Lista de tipos que no  |              |
|   half_damage_from | son muy efectivos      |      -30     |
|                    | contra este tipo.      |              |
|                    | Lista de tipos contra  |              |
|   half_damage_to   | los que este tipo no   |      +30     |
|                    | es muy eficaz.         |              |
|                    | Lista de tipos que no  |              |
|   no_damage_from   | tienen efecto sobre    |       0      |
|                    | este tipo.             |              |
|                    | LLista de tipos sobre  |              |
|   no_damage_to     | los que este tipo      |       0      |
|                    | no tiene efecto.       |              |

#ejemplo del ejercicio

|        TIPO GRASS/POISON        |               TIPO FIRE         |
|---------------------------------|---------------------------------|
| -70 PTS double_damage_from FIRE | +70 PTS double_damage_to GRASS  |
| +30 PTS half_damage_to FIRE     | -30 PTS half_damage_from GRASS  |
|---------------------------------|---------------------------------|
|          -40 Puntos             |           +40 Puntos            |

#imagen
![pokedex](/src/assets/image/Captura.PNG)




