<?php

try{
  $dbUserName = 'root';
  $dbPassword = ''; // root | admin
  $dbConnection = 'mysql:host=localhost; dbname=travel_planner; charset=utf8mb4'; 
  // utf8 every character in the world
  // utf8mb4 every character and also emojis
  $options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, // try-catch
    // PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC 
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ 
    // PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_NUM // [[],[],[]]
  ];
  $db = new PDO(  $dbConnection, 
                  $dbUserName, 
                  $dbPassword , 
                  $options );
  
}catch(PDOException $ex){
  echo $ex;
  echo 'error';
  exit();
}

// Employee X password: KYrM7QUS47jCsxKL
