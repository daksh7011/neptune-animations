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
        default: {
            style = "you mad bruh?";
        }
    }
    return style;
}