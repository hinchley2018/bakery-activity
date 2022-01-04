const React = require('react')
const DefaultLayout = require('./layouts/default')

function Error404(props) {
    return (
        <DefaultLayout>
            <div>
                <h1>404: Page Not Found</h1>
                <p>We can't find that page, please try again</p>
                <a href='/breads'>Link back to homepage</a>
            </div>
        </DefaultLayout>
    )

}

module.exports = Error404