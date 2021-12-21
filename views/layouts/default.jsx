const React = require('react')

function Default(html) {

    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )

}

module.exports = Default