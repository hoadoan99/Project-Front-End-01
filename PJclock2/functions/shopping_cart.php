<?php 
    require"../functions/require.php";
    $date = $_POST["txtTime"];
    $cus_name = $_POST["txtName"];
    $cus_phonenumber = $_POST["txtPhone"];
    $cus_email = $_POST["txtEmail"];
    $cus_add = $_POST["txtAddress"];
    $cus_note = $_POST["txtNotes"];
    $p_name = $_POST["txtName_p"];
    $p_qty = $_POST["txtQuantity_p"];
    $p_total = $_POST["txtTotal"];

    $sql="INSERT INTO tblorder (id_order, _date, cus_name,cus_phonenumber, cus_email, cus_add, cus_notes, name_p, qty_p, _total, _status) VALUES (null, '$date', '$cus_name', '$cus_phonenumber', '$cus_email', '$cus_add', '$cus_note', '$p_name', '$p_qty', '$p_total','')";
    
    $result = mysqli_query($conn, $sql) or die(mysqli_errno($conn));
            if($result)
            {
                header("Location:../index.php");  
            }
            else
            {
            ?>
                <script > 
                    alert("Error");
                </script>
                <?php
            }
            ?> 
 ?>

