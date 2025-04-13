verdades = [
    "<p><b>1</b></p></br>La verdadera democracia es aquella donde el gobierno hace lo que el pueblo quiere y defiende un solo interés: el del pueblo.",
    "<p><b>2</b></p></br>El peronismo es esencialmente popular. Todo círculo político es antipopular y, por lo tanto, no peronista.",
    "<p><b>3</b></p></br>El peronista trabaja para el Movimiento. El que en su nombre sirve a un círculo o a un caudillo, lo es solo de nombre.",
    "<p><b>4</b></p></br>No existe para el peronismo más que una sola clase de hombres: los que trabajan.",
    "<p><b>5</b></p></br>En la nueva Argentina, el trabajo es un derecho que crea la dignidad del hombre, y es un deber, porque es justo que cada uno produzca por lo menos lo que consume.",
    "<p><b>6</b></p></br>Para un peronista no puede haber nada mejor que otro peronista.",
    "<p><b>7</b></p></br>Ningún peronista debe sentirse más de lo que es, ni menos de lo que debe ser. Cuando un peronista comienza a sentirse más de lo que es, empieza a convertirse en oligarca.",
    "<p><b>8</b></p></br>En la acción política, la escala de valores de todo peronista es la siguiente: primero la Patria, después el Movimiento y luego los hombres.",
    "<p><b>9</b></p></br>La política no es para nosotros un fin sino solo el medio para el bien de la Patria, que es la felicidad de sus hijos y la grandeza nacional.",
    "<p><b>10</b></p></br>Los dos brazos del peronismo son la justicia social y la ayuda social. Con ellos damos al pueblo un abrazo de justicia y de amor.",
    "<p><b>11</b></p></br>El peronismo anhela la unidad nacional y no la lucha. Desea héroes, pero no mártires.",
    "<p><b>12</b></p></br>En la nueva Argentina los únicos privilegiados son los niños.",
    "<p><b>13</b></p></br>Un gobierno sin doctrina es un cuerpo sin alma. Por eso el peronismo tiene una doctrina política, económica y social: el Justicialismo.",
    "<p><b>14</b></p></br>El Justicialismo es una nueva filosofía de la vida, simple, práctica, popular, profundamente cristiana y profundamente humanista.",
    "<p><b>15</b></p></br>Como doctrina política, el Justicialismo realiza el equilibrio del derecho del individuo con el de la comunidad.",
    "<p><b>16</b></p></br>Como doctrina económica, el Justicialismo realiza la economía social, poniendo el capital al servicio de la economía y ésta al servicio del bienestar social.",
    "<p><b>17</b></p></br>Como doctrina social, el Justicialismo realiza la justicia social, que da a cada persona su derecho en función social.",
    "<p><b>18</b></p></br>Queremos una Argentina socialmente justa, económicamente libre y políticamente soberana.",
    "<p><b>19</b></p></br>Constituimos un gobierno centralizado, un Estado organizado y un pueblo libre.",
    "<p><b>20</b></p></br>En esta tierra lo mejor que tenemos es el pueblo."
]

function mostrarResultado() {
    var random = Math.floor(Math.random() * 20)
    const resultado = (verdades[random]);
    document.getElementById("respuesta").innerHTML = resultado;
}