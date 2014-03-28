<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<head>
    <link rel="stylesheet" type="text/css" href="css/core.css">
    <title></title>
</head>
<body>
<h5><c:out value="JSTL in USE!"/></h5>

<div class="main-container">
    <%-- dynamic content --%>
    <div id="contact-detail"></div>

    <div class="contact-list">
        <div class="contact-brief" data-contact-id="1">James Butt</div>
        <div class="contact-brief" data-contact-id="2">Josephine Darakjyc</div>
    </div>
</div>

<script src="js/main.js"></script>
</body>
</html>
