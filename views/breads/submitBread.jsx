const React = require('react')
const DefaultLayout = require("../layouts/default")

function submitBread(props) {
    return (
        <DefaultLayout>
            <h2>Add a new bread</h2>
            <a href='/breads'> Go back to index</a>
            <form
                method='POST'
                action="/breads"
            >
                <label htmlFor='name'>Name</label>
                <input type="text" name="name" id="name" required />
                <br />
                <label htmlFor='baker'>Baker</label>
                <select name="baker">
                    {
                        props.bakers.map(baker => {
                            return <option value={baker._id} key={baker._id}>{baker.name}</option>
                        })
                    }
                </select>
                <br />
                <label htmlFor='image'>Image url</label>
                <input type="text" name="image" id="image" required/>
                <br />
                <label htmlFor='hasGluten'>Has Gluten?</label>
                <input type="checkbox" name="hasGluten" id="hasGluten" defaultChecked />
                <br/>
                <input type="submit"/>
            </form>
        </DefaultLayout>
    )
}

module.exports = submitBread