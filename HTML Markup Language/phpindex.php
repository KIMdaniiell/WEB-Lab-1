<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Web-Lab-1</title>
        <link rel="stylesheet" href="../CSS%20Style%20Sheets/body_styles.css">
        <link rel="stylesheet" href="../CSS%20Style%20Sheets/header_styles.css">
        <link rel="stylesheet" href="../CSS%20Style%20Sheets/picture_styles.css">
        <link rel="stylesheet" href="../CSS%20Style%20Sheets/form_styles.css" >
        <link rel="stylesheet" href="../CSS%20Style%20Sheets/resultTable_styles.css" >
        <script src="../JavaScript%20Script/validate_script.js"> </script>
        <style>
            .bordered {
                border: 2px solid #2d333b;
                border-radius: 5%;
            }
        </style>
    </head>
    <body>

        <header class="header">
            <table>
                <tr>
                    <td><h3>Ким Даниил Кванхенович</h3></td>
                    <td></td>
                    <td><h3>[P3231]</h3></td>
                    <td></td>
                    <td><h3>31010</h3></td>
                </tr>
            </table>
        </header>

        <table id="content">
            <tr id="table_section">
                <td id="left_part">
                    <img id="Graph" class="bordered" src="../Resources/Graph.png" alt="Picture not found">
                </td>
                <td id="right=part">
                    <h2>Форма</h2>
                    <form class="bordered" onsubmit="return validate()" action="../PHP%20PreProcessor%20Script/computing_script.php" method="post">
                        <table id="form_table">
                            <tbody>
                            <tr>
                                <td>
                                    <label>X <select id="X_selection" name="X" required>
                                            <option value="">Выбрать</option>
                                            <option value="-4">-4</option>
                                            <option value="-3">-3</option>
                                            <option value="-2">-2</option>
                                            <option value="-1">-1</option>
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select></label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Y <input id="Y_input" type="text" name="Y" placeholder="Input" required></label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>R <select id="R_selection" name="R" required>
                                            <option value="">Выбрать</option>
                                            <option value="1">1</option>
                                            <option value="1.5">1.5</option>
                                            <option value="2">2</option>
                                            <option value="2.5">2.5</option>
                                            <option value="3">3</option>
                                        </select></label>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="submit" name="Submit"><br></td>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                    <h2>Таблица результатов</h2>
                    <table id="result_table" class="bordered">
                        <tr>
                            <th> X </th>
                            <th> Y </th>
                            <th> R </th>
                            <th>Результат</th>
                            <th>Время</th>
                            <th>Выполнение</th>
                        </tr>
                    </table>
                    <?php
                        include ("../PHP PreProcessor Script/computing_script.php");
                        //addARow();
                        $dom = new DOMDocument();
                        $dom->load("index.php");

                    ?>
                </td>
            </tr>
        </table>
    </body>
</html>