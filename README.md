# Juego Piedra, Papel o Tijeras

Este es un simple juego interactivo de "Piedra, Papel o Tijeras" en el que puedes competir contra la computadora. El juego tiene un marcador que registra las victorias, derrotas y empates a medida que juegas.

## Características

- El jugador elige entre las opciones de Piedra, Papel o Tijeras usando botones de selección.
- La computadora también elige aleatoriamente entre las tres opciones.
- El juego muestra el resultado de cada ronda: si el jugador gana, pierde o empata.
- Se actualiza el marcador con el número de victorias, empates y derrotas.
- El juego incluye sonidos para cada resultado (victoria, derrota, empate).
- Imágenes de celebraciones o fracasos son mostradas según el resultado.

## Funciones

### `game()`
- Recoge la elección del jugador.
- Genera una elección aleatoria para la computadora.
- Compara las elecciones y determina si el jugador gana, pierde o empata.
- Muestra el resultado, un mensaje de texto, una imagen relacionada y un audio adecuado.
- Actualiza el marcador de victorias, empates y derrotas.

### `reiniciar()`
- Reinicia el marcador (victorias, empates y derrotas) y limpia los resultados mostrados.

## Marcador

- **Victorias**: Muestra cuántas veces el jugador ha ganado.
- **Empates**: Muestra el número de empates.
- **Derrotas**: Muestra el número de derrotas.

## Implementación

El código JavaScript manipula los elementos HTML del formulario, el marcador y los resultados del juego a través de la interacción con los usuarios. Los resultados se muestran con elementos como imágenes y audios.

## Dependencias

- El juego requiere una estructura básica de HTML y CSS para ser funcional.
- Sonidos (`.mp3`) y las imágenes deben estar adecuadamente almacenados y enlazados en el proyecto.

## Mejoras posibles

- Agregar una interfaz de usuario más avanzada con animaciones.
- Implementar una opción para que el jugador elija el número de rondas a jugar.
- Agregar estadísticas más detalladas sobre las partidas.

## Uso

1. Cargar el archivo HTML y asegurarse de que todos los archivos asociados como imágenes y sonidos estén correctamente enlazados.
2. El jugador selecciona su opción (Piedra, Papel o Tijeras).
3. Al hacer clic en "Jugar", el juego se ejecuta, mostrando el resultado y actualizando el marcador.
4. El jugador puede reiniciar el marcador haciendo clic en "Reiniciar".
