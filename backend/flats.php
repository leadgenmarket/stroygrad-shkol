<?php
const FILE_NAME = "flats.info";
const OBJECT_ID = "62722a32f10bb60001051c1c";

if (isset($_REQUEST["update"])) {
  $flats = getServerFlats();
  file_put_contents(FILE_NAME, json_encode($flats));
  die("updated");
} 
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');
$flats = getLocalFlats(FILE_NAME);
if (isset($_REQUEST['ID'])){
  foreach($flats as $flat){
      if ($flat['ID'] === $_REQUEST['ID']){
          die(json_encode($flat));
      }
  }
}
die(json_encode($flats));

function  getServerFlats() {
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_URL, "https://plans.leadactiv.ru/api/plans-sites/".OBJECT_ID);
  $result = curl_exec($ch);
  curl_close($ch);
  $flats = json_decode($result);
  return $flats->plans;
}

function getLocalFlats($filename) {
  $flats = json_decode(file_get_contents($filename), true);
  return $flats;
}