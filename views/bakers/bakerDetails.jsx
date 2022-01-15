const React = require('react')
const DefaultLayout = require('../layouts/default')

function BakerDetails (props) {
    return (
        <DefaultLayout>
            <h1>BakerDetails for {props.baker.name}</h1>
            <h3>{props.baker.bio}</h3>
            <p>Started: {props.baker.startDate.toString()}</p>
            <ul>
                {
                    props.baker.breads.map(bread => {
                        return <li key={bread._id}>
                            <a href={`/breads/${bread._id}`}>
                                {bread.name}
                            </a>
                        </li>
                    })
                }
            </ul>
        </DefaultLayout>
    )
}

module.exports = BakerDetails