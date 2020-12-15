<?php

require_once 'connectsql.php';
$id = $_POST["txtID"];
$name = $_POST["txtName"];
$type_id = $_POST["txtType_Id"];
$quantity = $_POST["txtQuantity"];
$image1=$_FILES["txtImg1"]["name"];
$image2=$_FILES["txtImg2"]["name"];
$image3=$_FILES["txtImg3"]["name"];
$image4=$_FILES["txtImg4"]["name"];
$price = $_POST["txtPrice"];
$description = htmlentities($_POST["txtDes"]);
$promotion_price=$_POST["txtPromo"];
$status=htmlentities($_POST["txtStatus"]);
$category=$_POST["txtCategory"];
$sql="UPDATE tblproduct SET name='$name',type_id='$type_id',quantity='$quantity',price='$price',description='$description',promotion_price='$promotion_price',status='$status',category='$category'";
if ($image1 != "")
{
	$sql = $sql.", image1='$image1'";
}
if ($image2 != "")
{
	$sql = $sql.", image2='$image2'";
}
if ($image3 != "")
{
	$sql = $sql.", image3='$image3'";
}
if ($image4 != "")
{
	$sql = $sql.", image4='$image4'";
}
$sql = $sql." WHERE id  ='$id'";
if (mysqli_query($conn,$sql))
{
    header("Location:listProduct.php");
}  
else
{
    echo"sai roi". mysqli_error($conn);
}
          
 ?>

 img1='$image1',img2='$image2',img3='$image3',img4='$image4',img5='$image5'