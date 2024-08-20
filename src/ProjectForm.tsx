

export const ProjectForm = () => {
    return (
        <form action="">
            <label htmlFor="">Project Name</label>
            <input type="text" />
            <label htmlFor="">Description</label>
            <input type="text" />
            <label htmlFor="">Date</label>
            <input type="date" />
            <label htmlFor="">Project Type</label>
            <select name="" id="">
                <option value="">none</option>
                <option value="Business">Business</option>
                <option value="Pleasure">Pleasure</option>
            </select>
            <button>Create Project</button>
        </form>
    )
}