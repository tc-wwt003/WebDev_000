
include_once 'header.php';
?>

<section class="Signup-form">
    <h2>Log In</h2>
    <div class="signup-form-form">
        <form action="signup.inc.php" method="post">
            <input type="text" name="name" placeholder="Full Name...">
            <input type="text" name="email" placeholder="EMail...">
            <input type="text" name="uid" placeholder="UserName...">
            <input type="password" name="pwd" placeholder="Password...">
            <input type="password" name="pwdrepeat" placeholder="Repeat Password...">
            <button type="submit" name="submit">Sign Up</button>
        </form>
    </div>
</selection>

<?php
    include_once 'footer.php';
?>