
include_once 'header.php';
?>

<section class="Signup-form">
    <h2>Log In</h2>
    <div class="signup-form-form">
        <form action="login.inc.php" method="post">
            <input type="text" name="name" placeholder="UserName/EMail...">
            <input type="password" name="pwd" placeholder="Password...">
            <button type="submit" name="submit">Log In</button>
        </form>
    </div>
</selection>

<?php
    include_once 'footer.php';
?>