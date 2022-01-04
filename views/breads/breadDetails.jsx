const React = require('react')
const DefaultLayout = require('../layouts/default')
//function BreadDetail ({bread, index}) {
function BreadDetail (props) {
    return (
        <DefaultLayout title={props.bread.name}>
            <h1>We are on the BREAD DETAIL page!</h1>
            <h2>{props.bread.name}</h2>
            <form
                action={`/breads/${props.index}?_method=DELETE`}
                method="POST"
            >
                <input type="submit" value="DELETE"/>
            </form>
            <a href={`/breads/${props.index}/edit`}>
                <button type="button">EDIT</button>
            </a>
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
