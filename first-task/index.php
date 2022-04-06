<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="./css/style.css">
    <title>File Explorer</title>
</head>

<body>



    <section class="wrapper container-fluid">
        <header>
            file explorer
        </header>

        <section class="row main">
            <!-- Main -->

            <div class="col-md-3 lines ">
                <!-- Structure Tree -->
                <h3>Tree Structure</h3>



                <?php
                $pathLen = 0;

                function prePad($level)
                {
                    $ss = "";

                    for ($ii = 0; $ii < $level; $ii++) {
                        $ss = $ss . "|&nbsp;&nbsp;";
                    }

                    return $ss;
                }

                function myScanDir($dir, $level, $rootLen)
                {
                    global $pathLen;

                    if ($handle = opendir($dir)) {

                        $allFiles = array();

                        while (false !== ($entry = readdir($handle))) {
                            if ($entry != "." && $entry != "..") {
                                if (is_dir($dir . "/" . $entry)) {
                                    $allFiles[] = "D: " . $dir . "/" . $entry;
                                } else {
                                    $allFiles[] = "F: " . $dir . "/" . $entry;
                                }
                            }
                        }
                        closedir($handle);

                        natsort($allFiles);

                        foreach ($allFiles as $value) {
                            $displayName = substr($value, $rootLen + 4);
                            $fileName    = substr($value, 3);
                            $linkName    = str_replace(" ", "%20", substr($value, $pathLen + 3));
                            if (is_dir($fileName)) {
                                echo prePad($level) . $linkName . "<br>\n";
                                myScanDir($fileName, $level + 1, strlen($fileName));
                            } else {
                                echo prePad($level) . "<a href=\"" . $linkName . "\" style=\"text-decoration:none;\">" . $displayName . "</a><br>\n";
                            }
                        }
                    }
                }

                ?>

                <?php

                $root = '/opt/lampp/htdocs/first-task/files';

                $pathLen = strlen($root);

                myScanDir($root, 0, strlen($root));

                ?>


            </div> <!-- Structure Tree -->






            <div class="col-md-9 lines ">
                <!-- File View -->

                <div class="row container">
                    <div class="col-md-12">

                        <form method="post">


                            <button type="button" class="btn btn-primary" target="_self" data-bs-toggle="button" autocomplete="off"><i class="fa fa-home" aria-hidden="true"></i>
                                Home</button>


                            <button type="submit" name="create" class="btn btn-primary" data-bs-toggle="button" autocomplete="off" value="Create" /><i class="fa fa-folder" aria-hidden="true"></i>
                            Create</button>

                            <button type="submit" name="add" class="btn btn-primary" data-bs-toggle="button" autocomplete="off" value="Add-file" /><i class="fa fa-plus-circle" aria-hidden="true"></i>
                            Add file</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="button" autocomplete="off"><i class="fa fa-trash-o" aria-hidden="true"></i>
                                delete</button>

                            <button type="button" class="btn btn-primary" data-bs-toggle="button" autocomplete="off"><i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
                                back</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="button" autocomplete="off"><i class="fa fa-scissors" aria-hidden="true"></i>
                                cut</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="button" autocomplete="off"><i class="fa fa-clipboard" aria-hidden="true"></i>
                                copy</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="button" autocomplete="off"><i class="fa fa-clipboard" aria-hidden="true"></i>
                                paste</button>

                            <button type="button" class="btn btn-primary" data-bs-toggle="button" autocomplete="off"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                rename</button>

                        </form>

                    </div>

                    <hr>

                    <div>
                        <table>
                            <?php
                            if (isset($_POST['create'])) {
                                function createPath($path)
                                {
                                    if (is_dir($path))
                                        return true;
                                    $prev_path = substr($path, 0, strrpos($path, '/', -2) + 1);
                                    $return = createPath($prev_path);
                                    return ($return && is_writable($prev_path)) ? mkdir($path) : false;
                                }
                            }
                            if (isset($_POST['add'])) {
                                $result = mkdir("/path/to/directory", "0777");
                            }
                            ?>
                            <td>
                                <i class="fa fa-folder fa-5x" style="color:#fcba03" aria-hidden="true"></i>
                                <br>
                                <P>first</P>
                            </td>
                            <td>
                                <i class="fa fa-folder fa-5x" style="color:#fcba03" aria-hidden="true"></i>
                                <br>
                                <P>second</P>
                            </td>
                            <td>
                                <i class="fa fa-folder fa-5x" style="color:#fcba03" aria-hidden="true"></i>
                                <br>
                                <P>third</P>
                            </td>


                        </table>
                    </div>


                </div> <!-- File View -->




        </section> <!-- Main -->







    </section>











</body>

</html>