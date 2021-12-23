const React = require('react')
const DefaultLayout = require('./layouts/default.jsx')

function BreadDetail (props) {
    return (
        <DefaultLayout title={props.bread.name}>
            <h1>We are on the BREAD DETAIL page!</h1>
            <h2>{props.bread.name}</h2>
            <p>{
                props.bread.hasGluten ?
                'This bread has gluten.' 
                : 'This is gluten freeeeeeee.'
            }</p>
            <img alt={props.bread.name + ' bread'} src={props.bread.image} />
        </DefaultLayout>
    )
}

module.exports = BreadDetail
