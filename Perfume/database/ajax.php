<?php
$limit = 3; 
$dbh = new PDO('mysql:dbname=perfume;host=localhost', 'root', '');
$page = intval(@$_GET['page']);
$page = (empty($page)) ? 1 : $page;				
$start = ($page != 1) ? $page * $limit - $limit : 0;
$sth = $dbh->prepare("SELECT * FROM `catalog` LIMIT {$start}, {$limit}");
$sth->execute();	
$items = $sth->fetchAll(PDO::FETCH_ASSOC);				
 
foreach ($items as $row) { ?>
    <div class="products__item <?php echo $row['type']; ?>" data-price="<?php echo $row['price']; ?>">
        <img class="products__item--img" src="./src/img/<?php echo $row['image']; ?>.png" alt="">
        <div class="products__item--content">
            <div class="products__item--title">
                <?php echo $row['title']; ?>
            </div>
            <div class="products__item--description">
                <?php echo $row['description']; ?>
            </div>
            <div class="products__item--price">
                <?php echo $row['price']; ?> ₽
            </div>
        </div>
    </div>
	<?php
}
?>