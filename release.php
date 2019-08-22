#!/bin/bash
<?php
$dsn = 'mysql:dbname=eggheads;host=dev.artskills.ru;port=3306';
$user = 'eggheads';
$password = 'YwPbT9hN';

$workFile = __DIR__ . '/.clasp.json';
$origFile = __DIR__ . '/.clasp.json.bak';


try {
    $conn = new PDO($dsn, $user, $password);
    $conn->exec("SET names utf8");
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
    die();
}

$sql = 'SELECT company, project_id FROM wb_config WHERE 1 ORDER BY company';
foreach ($conn->query($sql, PDO::FETCH_ASSOC) as $row) {
    releaseProject($workFile, $row["company"], $row['project_id']);
}

function releaseProject($workFile, $companyName, $projectId) {
	if (empty($projectId)) {
		throw new Exception("Empty projectId for " . $companyName);		
	}

	$svFile = [
		"scriptId" => $projectId
	];
	file_put_contents($workFile, json_encode($svFile));
	$result = exec("clasp push -f");
	print $companyName . "\t" . $projectId . "\t" . $result . "\n";
}

unlink($workFile);
copy($origFile, $workFile);