function getStyle(styleCode) {
    let style = "";
    switch (styleCode) {
        case 1 : {
            style = "&lt;figure class=\"style-one\"&gt;\n" +
                "    &lt;img src=\"path/to/image\" /&gt;\n" +
                "    &lt;figcaption&gt;\n" +
                "        &lt;div&gt;\n" +
                "            &lt;h2&gt;Heading&lt;/h2&gt;\n" +
                "            &lt;h4&gt;Caption&lt;/h4&gt;\n" +
                "        &lt;/div&gt;\n" +
                "    &lt;/figcaption&gt;\n" +
                "    &lt;a href=\"#\"&gt;&lt;/a&gt;\n" +
                "&lt;/figure&gt;";
            break;
        }
        case 2: {
            style = "&lt;figure class=\"style-two\"&gt;\n" +
                "    &lt;img src=\"path/to/file\" /&gt;\n" +
                "    &lt;figcaption&gt;\n" +
                "        &lt;div&gt;\n" +
                "            &lt;h2&gt;Heading&lt;/h2&gt;\n" +
                "            &lt;h4&gt;Caption&lt;/h4&gt;\n" +
                "        &lt;/div&gt;\n" +
                "    &lt;/figcaption&gt;\n" +
                "    &lt;a href=\"#\"&gt;&lt;/a&gt;\n" +
                "&lt;/figure&gt;";
            break;
        }
        case 3: {
            style = "&lt;figure class=\"style-three\"&gt;\n" +
                "    &lt;img src=\"../../assets/img/3.jpg\"/&gt;\n" +
                "    &lt;figcaption&gt;\n" +
                "       &lt;div&gt;&lt;i class=\"fa fa-heart\"&gt;&lt;/i&gt;&lt;/div&gt;\n" +
                "    &lt;/figcaption&gt;\n" +
                "    &lt;a href=\"#\"&gt;&lt;/a&gt;\n" +
                "&lt;/figure&gt;";
            break;
        }
        case 4: {
            style = "&lt;figure class=\"style-four\"&gt;\n" +
                "    &lt;img src=\"/path/to/image\" /&gt;\n" +
                "    &lt;figcaption&gt;\n" +
                "        &lt;div&gt;&lt;i class=\"fas fa-plus\"&gt;&lt;/i&gt;&lt;/div&gt;\n" +
                "    &lt;/figcaption&gt;\n" +
                "    &lt;a href=\"#\"&gt;&lt;/a&gt;\n" +
                "&lt;/figure&gt;";
            break;
        }
        case 5: {
            style = "&lt;figure class=\"style-five\"&gt;\n" +
                "    &lt;img src=\"/path/to/image\"  /&gt;\n" +
                "    &lt;i class=\"icon-star\"&gt;&lt;/i&gt;\n" +
                "    &lt;a href=\"#\"&gt;&lt;/a&gt;\n" +
                "&lt;/figure&gt;";
            break;
        }
        case 6: {
            style = "&lt;figure class=\"style-six\"&gt;\n" +
                "    &lt;img src=\"/path/to/image\"  /&gt;\n" +
                "    &lt;div class=\"icons\"&gt;\n" +
                "        &lt;a href=\"#\"&gt;&lt;i class=\"fab fa-facebook\"&gt;&lt;/i&gt;&lt;/a&gt;\n" +
                "        &lt;a href=\"#\"&gt;&lt;i class=\"fab fa-twitter\"&gt;&lt;/i&gt;&lt;/a&gt;\n" +
                "        &lt;a href=\"#\"&gt;&lt;i class=\"fab fa-telegram\"&gt;&lt;/i&gt;&lt;/a&gt;\n" +
                "    &lt;/div&gt;\n" +
                "&lt;/figure&gt;";
            break;
        }
        case 7: {
            style = "";
            break;
        }
        case 8: {
            style = "";
            break;
        }
        case 9: {
            style = "";
            break;
        }
        case 10: {
            style = "";
            break;
        }
        case 11: {
            style = "";
            break;
        }
        case 12: {
            style = "";
            break;
        }
        case 13: {
            style = "";
            break;
        }
        case 14: {
            style = "";
            break;
        }
        case 15: {
            style = "";
            break;
        }
        case 16: {
            style = "";
            break;
        }
        case 17: {
            style = "";
            break;
        }
        case 18: {
            style = "";
            break;
        }
        case 19: {
            style = "";
            break;
        }
        case 20: {
            style = "";
            break;
        }
        case 21: {
            style = "";
            break;
        }
        default: {
            style = "you mad bruh?";
        }
    }
    return style;
}