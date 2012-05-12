<?php   
    $url = $_GET['l'];

    if (!filter_var($url, FILTER_VALIDATE_URL)) {
        die('wrong url format');
    }

    //open connection
    $ch = curl_init();
    //
    //set the url, number of POST vars, POST data
    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt( $ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows; U; Windows NT 5.1; rv:1.7.3) Gecko/20041001 Firefox/0.10.1" );
    curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, true );
    curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
    curl_setopt( $ch, CURLOPT_AUTOREFERER, true );

    //curl_setopt($ch,CURLOPT_GET,count($fields));
    //curl_setopt($ch,CURLOPT_POSTFIELDS,$fields_string);
    $data = curl_exec( $ch );
    $response = curl_getinfo( $ch );

    curl_close($ch);

    $str = $_GET['r'];
    preg_match_all("/.+".$str.".+/", $data, $matches);
    print_r($matches);

    for ($i=0; $i<count($matches[0]);$i++)
        echo htmlentities($matches[0][$i],ENT_QUOTES,"UTF-8");

    //htmlentities($data,ENT_QUOTES, "UTF-8");
?>
