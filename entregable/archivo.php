<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre  = $_POST["nombre"]  ?? "";
    $dni     = $_POST["dni"]     ?? "";
    $celular = $_POST["celular"] ?? "";
    $correo  = $_POST["correo"]  ?? "";
    $carrera = $_POST["carrera"] ?? "";
    $horario = $_POST["horario"] ?? "";

    echo "Datos recibidos: " . htmlspecialchars("$nombre | $dni | $celular | $correo | $carrera | $horario");
}
?>