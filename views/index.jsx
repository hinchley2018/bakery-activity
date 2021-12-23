const React = require('react')
const DefaultLayout = require('./layouts/default')

function LandingPage(props) {
    return (
        <DefaultLayout title="BreadTopia">
            <div>
                <h2>Welcome to BreadTopia!</h2>
                Checkout our wide assortment of <a href="/breads">bread</a>
            </div>
        </DefaultLayout>
    )
}

module.exports = LandingPage;