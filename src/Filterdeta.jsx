const Filterdeta = ({ category, Item, filterIteam }) => {

    return (

        <div>
            <div align="center">
                <button onClick={() => filterIteam("all")}>all</button>
                {
                    category.map((val) => {
                        return (
                            <button onClick={() => filterIteam(val.name)}>{val.name}</button>
                        )
                    })
                }
            </div>

            <div>
                <div className="card-container">
                    {
                        Item.map((val1) => {
                            return (
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={val1.img} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title:- {val1.name}</h5>
                                        <p className="card-text">price:- {val1.price}</p>
                                        <a href="#" className="btn btn-primary">Shop now</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}
export default Filterdeta;