const React = require('react')
const DefaultLayout = require("../layouts/default")

function editBread(props) {
    return (
        <DefaultLayout>
            <h2>Edit {props.bread.name}</h2>
            <a href='/breads'> Go back to index</a>
            <form
                method='POST'
                action={`/breads/${props.index}?_method=PUT`}
            >
                <label htmlFor='name'>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    defaultValue={props.bread.name}
                    required />
                <br />
                <label htmlFor='image'>Image url</label>
                <input 
                    type="text" 
                    name="image" 
                    id="image" 
                    defaultValue={props.bread.image}
                    required/>
                <br />                
                <select name="baker" defaultValue={props.bread.baker}>
                    {
                        props.bakers.map(baker => {
                            return <option value={baker._id} key={baker._id}>{baker.name}</option>
                        })
                    }
                </select>
                <br />
                <label htmlFor='hasGluten'>Has Gluten?</label>
                <input 
                    type="checkbox" 
                    name="hasGluten" 
                    id="hasGluten" 
                    defaultChecked={props.bread.hasGluten} />
                <br/>
                <input type="submit"/>
            </form>
        </DefaultLayout>
    )
}

module.exports = editBread